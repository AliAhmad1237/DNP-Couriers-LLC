import React from 'react';
import { MapPin, Phone, FileText } from 'lucide-react';
import { COMPANY } from '../data/company';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
              About DNP Couriers LLC
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#151719] leading-tight">
              A Transportation Partner for Your Business
            </h2>
          </div>

          {/* Right Column (7 Cols): Concise Profile */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#737980] leading-relaxed">
            <p className="text-[#151719] font-medium text-lg sm:text-xl leading-relaxed">
              DNP Couriers LLC is an interstate motor carrier based in Brentwood, Tennessee, focused on commercial freight transportation.
            </p>
            <p>
              As a federally registered transportation carrier operating under USDOT 2321171 and MC 960224, the company provides freight carriage across its authorized classifications. Our operations prioritize straightforward communication, professional standards, and direct coordination with shippers.
            </p>
            <p>
              Businesses working with DNP Couriers LLC communicate directly with our team to align on load specifications, schedule parameters, and operational needs.
            </p>

            {/* Verified Business Details */}
            <div className="pt-6 border-t border-[#151719]/10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[#151719]">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#737980] block">
                  Operating Base
                </span>
                <p className="font-medium">{COMPANY.address}</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#737980] block">
                  Direct Inquiries
                </span>
                <p className="font-medium">{COMPANY.phone}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
