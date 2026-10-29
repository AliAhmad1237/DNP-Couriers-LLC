import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowUp, Repeat, Truck } from 'lucide-react';
import { COMPANY } from '../data/company';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#151719] text-[#FAFAF8] border-t border-[#151719]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 pb-14 border-b border-white/10">
          
          {/* Column 1: Wordmark & Company Profile (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-baseline gap-2">
              <span className="text-xl font-bold tracking-tight text-white">
                DNP COURIERS
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38]">
                LLC
              </span>
            </Link>

            <p className="text-sm text-[#737980] max-w-sm leading-relaxed">
              Interstate motor carrier specializing in commercial straight box-truck transportation and dedicated-lane partnerships for shippers, brokers, and 3PLs.
            </p>

            <div className="pt-2 space-y-1 text-xs text-[#FAFAF8]/75 font-mono">
              <div>USDOT: {COMPANY.usdot}</div>
              <div>MC Number: {COMPANY.mc}</div>
              <div className="text-[#737980]">Interstate Operating Authority</div>
            </div>
          </div>

          {/* Column 2: Navigation (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-white block">
              Company
            </span>
            <ul className="space-y-2.5 text-sm text-[#737980]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About DNP Couriers
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Cargo &amp; Freight
                </Link>
              </li>
              <li>
                <Link to="/request-a-quote" className="hover:text-[#D99A38] text-white transition-colors">
                  Submit Lane Inquiry
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-white block">
              Transportation
            </span>
            <ul className="space-y-2.5 text-sm text-[#737980]">
              <li>
                <Link to="/dedicated-lanes" className="hover:text-[#D99A38] text-[#FAFAF8] transition-colors font-medium">
                  Dedicated Lanes
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link to="/services/general-freight" className="hover:text-white transition-colors">
                  General Freight
                </Link>
              </li>
              <li>
                <Link to="/services/household-goods" className="hover:text-white transition-colors">
                  Household Goods
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-white block">
              Contact Information
            </span>
            <div className="space-y-3 text-sm text-[#737980]">
              <div>
                <span className="text-xs text-[#737980] block mb-0.5">Primary Listed Base</span>
                <p className="text-[#FAFAF8]/90 leading-snug">
                  {COMPANY.primaryAddress}
                </p>
              </div>

              <div>
                <span className="text-xs text-[#737980] block mb-0.5">Telephone Inquiries</span>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="text-[#D99A38] hover:underline font-medium text-base"
                >
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737980]">
          <div className="flex flex-wrap items-center gap-6">
            <span>&copy; {new Date().getFullYear()} DNP Couriers LLC. All rights reserved.</span>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#FAFAF8]/70 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
