import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/company';

export default function Hero() {
  return (
    <section id="home" className="relative bg-[#151719] text-[#FAFAF8] overflow-hidden">
      {/* Background Cinematic Trucking Image with Subtle Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2400&q=85"
          alt="Modern commercial freight truck on open American interstate highway"
          className="w-full h-full object-cover object-center opacity-35"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151719] via-[#151719]/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-32 sm:pt-36 sm:pb-40 lg:pt-44 lg:pb-48">
        <div className="max-w-3xl space-y-8">
          
          {/* Subtitle / Verification Tag */}
          <div className="inline-flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-[#D99A38]"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#FAFAF8]/80">
              Interstate Freight Carrier &bull; Brentwood, Tennessee
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08]">
            Freight Transportation. <br />
            Made Professional.
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-[#FAFAF8]/85 font-normal leading-relaxed max-w-2xl">
            DNP Couriers LLC provides freight transportation services for businesses seeking a dependable transportation partner.
          </p>

          {/* Dual CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-[#151719] bg-[#FAFAF8] hover:bg-white rounded transition-colors"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-[#FAFAF8] bg-transparent hover:bg-white/[0.08] border border-[#FAFAF8]/30 hover:border-[#FAFAF8]/60 rounded transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D99A38]" />
              <span>Call {COMPANY.phone}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
