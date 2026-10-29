import React, { useState, useRef, useEffect, useId } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from 'lucide-react';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

/**
 * Format Date object to YYYY-MM-DD
 */
function formatDateToISO(date) {
  if (!date) return '';
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Parse YYYY-MM-DD string to local Date object
 */
function parseISOToDate(str) {
  if (!str) return null;
  const parts = str.split('-');
  if (parts.length !== 3) return null;
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  if (isNaN(year) || isNaN(month) || isNaN(day)) return null;
  return new Date(year, month, day);
}

/**
 * Format for human-friendly display in the input box
 */
function formatHumanDisplay(str) {
  const d = parseISOToDate(str);
  if (!d) return '';
  const monthName = MONTH_NAMES[d.getMonth()].slice(0, 3);
  return `${monthName} ${d.getDate()}, ${d.getFullYear()}`;
}

export default function ThemedDatePicker({
  id,
  name,
  value = '',
  onChange,
  required = false,
  minDate, // ISO string 'YYYY-MM-DD' or 'today'
  maxDate, // ISO string 'YYYY-MM-DD'
  placeholder = 'Select date',
  className = '',
  disabled = false,
}) {
  const generatedId = useId();
  const inputId = id || generatedId;

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Parse current value or default to today for view
  const selectedDate = parseISOToDate(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewDate, setViewDate] = useState(() => {
    return selectedDate ? new Date(selectedDate) : new Date(today);
  });

  // Calculate min & max boundaries
  const parsedMin = minDate === 'today' ? today : (minDate ? parseISOToDate(minDate) : null);
  const parsedMax = maxDate ? parseISOToDate(maxDate) : null;

  // When value prop updates externally, keep viewDate synchronized if closed
  useEffect(() => {
    if (value && !isOpen) {
      const d = parseISOToDate(value);
      if (d) setViewDate(new Date(d));
    }
  }, [value, isOpen]);

  // Close calendar on outside click or Escape
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const viewYear = viewDate.getFullYear();
  const viewMonth = viewDate.getMonth();

  const handlePrevMonth = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setViewDate(new Date(viewYear, viewMonth - 1, 1));
  };

  const handleNextMonth = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setViewDate(new Date(viewYear, viewMonth + 1, 1));
  };

  const handleSelectDate = (dateObj) => {
    const iso = formatDateToISO(dateObj);
    if (onChange) {
      onChange({
        target: {
          name,
          value: iso,
        },
      });
    }
    setIsOpen(false);
  };

  const handleClear = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onChange) {
      onChange({
        target: {
          name,
          value: '',
        },
      });
    }
    setIsOpen(false);
  };

  const handleToday = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleSelectDate(today);
    setViewDate(new Date(today));
  };

  // Build grid of days for viewMonth
  const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

  const calendarDays = [];

  // Previous month trailing days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    calendarDays.push({
      date: new Date(viewYear, viewMonth - 1, daysInPrevMonth - i),
      isCurrentMonth: false,
    });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({
      date: new Date(viewYear, viewMonth, i),
      isCurrentMonth: true,
    });
  }

  // Next month leading days (to fill 42 cells or complete week)
  const remainingCells = 42 - calendarDays.length;
  for (let i = 1; i <= remainingCells; i++) {
    calendarDays.push({
      date: new Date(viewYear, viewMonth + 1, i),
      isCurrentMonth: false,
    });
  }

  const isSameDay = (d1, d2) => {
    if (!d1 || !d2) return false;
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  const isDateDisabled = (d) => {
    if (parsedMin && d < parsedMin) return true;
    if (parsedMax && d > parsedMax) return true;
    return false;
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Hidden native input to ensure standard browser form submission and validation hooks */}
      <input
        type="hidden"
        name={name}
        value={value}
        required={required}
      />

      {/* Styled Interactive Trigger Input */}
      <button
        type="button"
        id={inputId}
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className={`w-full bg-[#FAFAF8] border border-[#151719]/20 hover:border-[#151719]/40 focus:border-[#151719] focus:ring-1 focus:ring-[#151719] rounded px-4 py-3 text-sm text-[#151719] flex items-center justify-between transition-colors text-left cursor-pointer outline-none ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        } ${className}`}
      >
        <span className={value ? 'text-[#151719] font-medium' : 'text-[#737980]'}>
          {value ? formatHumanDisplay(value) : placeholder}
        </span>
        <div className="flex items-center gap-1.5 text-[#D99A38]">
          <CalendarIcon className="w-4 h-4 shrink-0 transition-transform hover:scale-110" />
        </div>
      </button>

      {/* Floating Custom-Styled Calendar Popover */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Choose date"
          className="absolute z-50 mt-2 left-0 sm:left-auto right-auto sm:right-0 bg-white border border-[#151719]/15 rounded shadow-xl p-4 w-[320px] max-w-[calc(100vw-2rem)] select-none animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Header: Month / Year with Chevrons */}
          <div className="flex items-center justify-between pb-3 border-b border-[#151719]/10">
            <h3 className="text-sm font-bold text-[#151719] tracking-tight">
              {MONTH_NAMES[viewMonth]} <span className="font-mono text-[#D99A38]">{viewYear}</span>
            </h3>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                aria-label="Previous month"
                className="w-7 h-7 rounded flex items-center justify-center text-[#737980] hover:text-[#151719] hover:bg-[#151719]/5 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                aria-label="Next month"
                className="w-7 h-7 rounded flex items-center justify-center text-[#737980] hover:text-[#151719] hover:bg-[#151719]/5 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Weekday Labels */}
          <div className="grid grid-cols-7 gap-1 pt-3 pb-1 text-center">
            {WEEKDAYS.map((wd) => (
              <span key={wd} className="text-[11px] font-mono uppercase tracking-wider text-[#737980] font-semibold">
                {wd}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 py-1">
            {calendarDays.map(({ date, isCurrentMonth }, idx) => {
              const disabledDay = isDateDisabled(date);
              const selected = isSameDay(date, selectedDate);
              const isToday = isSameDay(date, today);

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={disabledDay}
                  onClick={() => handleSelectDate(date)}
                  className={`h-8 w-8 mx-auto rounded flex items-center justify-center text-xs transition-colors relative ${
                    disabledDay
                      ? 'text-[#737980]/30 cursor-not-allowed'
                      : selected
                      ? 'bg-[#D99A38] text-white font-bold shadow-sm'
                      : isCurrentMonth
                      ? 'text-[#151719] hover:bg-[#151719]/5'
                      : 'text-[#737980]/40 hover:bg-[#151719]/5'
                  } ${
                    isToday && !selected
                      ? 'font-bold ring-1 ring-[#D99A38]/50 text-[#D99A38]'
                      : ''
                  }`}
                >
                  <span>{date.getDate()}</span>
                  {isToday && !selected && (
                    <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#D99A38]"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Bottom Shortcuts: Today and Clear */}
          <div className="pt-3 mt-2 border-t border-[#151719]/10 flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={handleToday}
              className="font-semibold text-[#D99A38] hover:underline transition-colors py-1"
            >
              Today
            </button>

            {value && (
              <button
                type="button"
                onClick={handleClear}
                className="font-medium text-[#737980] hover:text-[#151719] transition-colors py-1 flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                <span>Clear</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
