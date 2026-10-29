import React, { useState, useRef, useEffect, useId } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function ThemedSelect({
  id,
  name,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  required = false,
  disabled = false,
  className = '',
}) {
  const generatedId = useId();
  const selectId = id || generatedId;

  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef(null);
  const listboxRef = useRef(null);

  // Normalize options: allow either strings or objects with { value, label }
  const normalizedOptions = options.map((opt) => {
    if (typeof opt === 'string') {
      return { value: opt, label: opt };
    }
    return { value: opt.value, label: opt.label ?? opt.value };
  });

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Handle outside click & Escape
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

  const handleSelect = (val) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: val,
        },
      });
    }
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (disabled) return;

    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsOpen(true);
        const idx = normalizedOptions.findIndex((opt) => opt.value === value);
        setHighlightedIndex(idx >= 0 ? idx : 0);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev < normalizedOptions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : normalizedOptions.length - 1));
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < normalizedOptions.length) {
        handleSelect(normalizedOptions[highlightedIndex].value);
      }
    } else if (e.key === 'Tab') {
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Hidden input to ensure HTML form state serialization */}
      <input
        type="hidden"
        name={name}
        value={value ?? ''}
        required={required}
      />

      {/* Styled Interactive Trigger */}
      <button
        type="button"
        id={selectId}
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full bg-[#FAFAF8] border border-[#151719]/20 hover:border-[#151719]/40 focus:border-[#151719] focus:ring-1 focus:ring-[#151719] rounded px-4 py-3 text-sm text-[#151719] flex items-center justify-between transition-colors text-left cursor-pointer outline-none ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        } ${className}`}
      >
        <span className={selectedOption ? 'text-[#151719] font-medium' : 'text-[#737980]'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#D99A38] shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Floating Menu Popover */}
      {isOpen && (
        <ul
          ref={listboxRef}
          role="listbox"
          aria-labelledby={selectId}
          className="absolute z-50 mt-1.5 w-full bg-white border border-[#151719]/15 rounded shadow-xl py-1 max-h-64 overflow-y-auto focus:outline-none animate-in fade-in zoom-in-95 duration-100"
        >
          {normalizedOptions.map((opt, idx) => {
            const isSelected = opt.value === value;
            const isHighlighted = idx === highlightedIndex;

            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(opt.value)}
                onMouseEnter={() => setHighlightedIndex(idx)}
                className={`px-4 py-2.5 text-sm flex items-center justify-between cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-[#D99A38]/10 text-[#151719] font-semibold'
                    : isHighlighted
                    ? 'bg-[#FAFAF8] text-[#151719]'
                    : 'text-[#151719]/90'
                }`}
              >
                <span className="truncate pr-2">{opt.label}</span>
                {isSelected && (
                  <Check className="w-4 h-4 text-[#D99A38] shrink-0 ml-2" />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
