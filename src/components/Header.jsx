import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/company';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#151719]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Wordmark */}
          <a href="#home" className="flex items-center gap-3 group">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#151719]">
              DNP COURIERS
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#737980] border-l border-[#151719]/20 pl-3 hidden sm:inline">
              LLC
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#737980] hover:text-[#151719] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action & Phone */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="text-sm font-medium text-[#151719] hover:text-[#D99A38] transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D99A38]" />
              <span>{COMPANY.phone}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#151719] hover:bg-[#151719]/90 rounded transition-colors"
            >
              Request Information
            </a>
          </div>

          {/* Mobile Menu & Direct Call Button */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="p-2 text-[#151719] hover:text-[#D99A38]"
              aria-label={`Call ${COMPANY.phone}`}
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#151719] hover:text-[#737980]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#151719]/10 bg-[#FAFAF8] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#151719] hover:text-[#D99A38] py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#151719]/10 space-y-3">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-[#151719] border border-[#151719]/20 rounded"
            >
              <Phone className="w-4 h-4 text-[#D99A38]" />
              <span>Call {COMPANY.phone}</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-white bg-[#151719] rounded"
            >
              <span>Request Information</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
