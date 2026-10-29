import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/company';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const isHome = location.pathname === '/';

  // Handle scroll state for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Click outside to close services dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? 'text-[#D99A38]'
        : isHome && !isScrolled
        ? 'text-[#FAFAF8]/90 hover:text-white'
        : 'text-[#737980] hover:text-[#151719]'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? 'bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#151719]/10 shadow-sm py-4'
          : 'bg-transparent border-b border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Typographic Wordmark */}
          <Link to="/" className="flex items-baseline gap-2 group">
            <span
              className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                isHome && !isScrolled ? 'text-white' : 'text-[#151719]'
              }`}
            >
              DNP COURIERS
            </span>
            <span
              className={`text-[11px] font-semibold tracking-widest uppercase transition-colors ${
                isHome && !isScrolled ? 'text-[#D99A38]' : 'text-[#737980]'
              }`}
            >
              LLC
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            {/* Dedicated Lanes Feature Link */}
            <NavLink to="/dedicated-lanes" className={navClass}>
              <span className="flex items-center gap-1.5">
                <span>Dedicated Lanes</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D99A38]"></span>
              </span>
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`inline-flex items-center gap-1 text-sm font-medium transition-colors focus:outline-none ${
                  location.pathname.startsWith('/services')
                    ? 'text-[#D99A38]'
                    : isHome && !isScrolled
                    ? 'text-[#FAFAF8]/90 hover:text-white'
                    : 'text-[#737980] hover:text-[#151719]'
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-64 rounded bg-[#FAFAF8] border border-[#151719]/10 shadow-xl py-2 z-50 animate-in fade-in duration-150"
                >
                  <Link
                    to="/services"
                    className="block px-4 py-2.5 text-sm font-medium text-[#151719] hover:bg-[#151719]/[0.04] transition-colors"
                  >
                    Services Overview
                  </Link>
                  <div className="h-px bg-[#151719]/10 my-1"></div>
                  <Link
                    to="/services/general-freight"
                    className="block px-4 py-2.5 text-sm text-[#737980] hover:text-[#151719] hover:bg-[#151719]/[0.04] transition-colors"
                  >
                    General Freight (Box Truck)
                  </Link>
                  <Link
                    to="/services/household-goods"
                    className="block px-4 py-2.5 text-sm text-[#737980] hover:text-[#151719] hover:bg-[#151719]/[0.04] transition-colors"
                  >
                    Household Goods
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/industries" className={navClass}>
              Industries
            </NavLink>

            <NavLink to="/about" className={navClass}>
              About
            </NavLink>

            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </nav>

          {/* Desktop Direct Call & Request a Quote CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className={`text-sm font-medium transition-colors flex items-center gap-2 ${
                isHome && !isScrolled ? 'text-white/90 hover:text-white' : 'text-[#151719] hover:text-[#D99A38]'
              }`}
            >
              <Phone className="w-4 h-4 text-[#D99A38]" />
              <span>{COMPANY.phone}</span>
            </a>

            <Link
              to="/request-a-quote?type=dedicated"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#151719] hover:bg-[#151719]/90 border border-[#151719] rounded transition-colors"
            >
              Discuss Dedicated Lanes
            </Link>
          </div>

          {/* Mobile Phone & Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className={`p-2 transition-colors ${isHome && !isScrolled ? 'text-white' : 'text-[#151719]'}`}
              aria-label={`Call ${COMPANY.phone}`}
            >
              <Phone className="w-5 h-5 text-[#D99A38]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors ${isHome && !isScrolled ? 'text-white' : 'text-[#151719]'}`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Accessible Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#151719]/10 bg-[#FAFAF8] px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            <Link
              to="/"
              className="text-base font-medium text-[#151719] hover:text-[#D99A38] py-1"
            >
              Home
            </Link>
            <Link
              to="/dedicated-lanes"
              className="text-base font-semibold text-[#D99A38] py-1 flex items-center justify-between"
            >
              <span>Dedicated Lanes</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D99A38]/10 border border-[#D99A38]/30">Active Opportunity</span>
            </Link>
            <div className="space-y-1.5 pl-3 border-l border-[#151719]/15">
              <Link
                to="/services"
                className="block text-sm font-medium text-[#151719] hover:text-[#D99A38] py-1"
              >
                Services Overview
              </Link>
              <Link
                to="/services/general-freight"
                className="block text-sm text-[#737980] hover:text-[#151719] py-0.5"
              >
                General Freight (Box Truck)
              </Link>
              <Link
                to="/services/household-goods"
                className="block text-sm text-[#737980] hover:text-[#151719] py-0.5"
              >
                Household Goods
              </Link>
            </div>
            <Link
              to="/industries"
              className="text-base font-medium text-[#151719] hover:text-[#D99A38] py-1"
            >
              Industries &amp; Cargo
            </Link>
            <Link
              to="/about"
              className="text-base font-medium text-[#151719] hover:text-[#D99A38] py-1"
            >
              About DNP Couriers
            </Link>
            <Link
              to="/contact"
              className="text-base font-medium text-[#151719] hover:text-[#D99A38] py-1"
            >
              Contact
            </Link>
          </nav>

          <div className="pt-4 border-t border-[#151719]/10 space-y-3">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-[#151719] border border-[#151719]/20 rounded"
            >
              <Phone className="w-4 h-4 text-[#D99A38]" />
              <span>Call {COMPANY.phone}</span>
            </a>

            <Link
              to="/request-a-quote?type=dedicated"
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-white bg-[#151719] rounded"
            >
              <span>Discuss Dedicated Lanes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
