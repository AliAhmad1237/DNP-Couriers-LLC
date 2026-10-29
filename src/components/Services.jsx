import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/company';

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-20 sm:mb-28">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block mb-3">
            Cargo & Transportation Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#151719] leading-tight">
            Listed Transportation Capabilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#737980] leading-relaxed">
            DNP Couriers LLC provides interstate transportation across its authorized cargo classifications, 
            coordinating directly with commercial shippers to satisfy specific operational requirements.
          </p>
        </div>

        {/* Two Clean Editorial Sections */}
        <div className="space-y-24 sm:space-y-32">
          
          {/* Service 1: General Freight */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Image (7 Cols) */}
            <div className="lg:col-span-7 overflow-hidden rounded bg-[#151719]/5">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
                alt="Commercial freight loading dock and palletized general freight transport"
                className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-[1.01] transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Editorial Copy (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#737980]">
                <span>Category 01</span>
                <span>&bull;</span>
                <span>Interstate Freight</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#151719] tracking-tight">
                General Freight
              </h3>

              <div className="space-y-4 text-base text-[#737980] leading-relaxed">
                <p>
                  Professional freight transportation for general commercial goods.
                </p>
                <p>
                  DNP Couriers LLC works directly with businesses and shippers to handle general freight movements. 
                  Specific freight classifications, equipment configurations, and service arrangements are established 
                  directly with our team upon review of your load specifications.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#151719] hover:text-[#D99A38] transition-colors group"
                >
                  <span>Discuss General Freight Requirements</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Thin Editorial Divider */}
          <div className="w-full h-px bg-[#151719]/10"></div>

          {/* Service 2: Household Goods */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Editorial Copy (5 Cols) */}
            <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#737980]">
                <span>Category 02</span>
                <span>&bull;</span>
                <span>Authorized Category</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#151719] tracking-tight">
                Household Goods
              </h3>

              <div className="space-y-4 text-base text-[#737980] leading-relaxed">
                <p>
                  Transportation services relating to household goods, subject to the company's confirmed service 
                  offerings and applicable operating authority.
                </p>
                <p>
                  All shipments within this classification are coordinated in strict alignment with federal transportation 
                  standards and confirmed service parameters.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#151719] hover:text-[#D99A38] transition-colors group"
                >
                  <span>Inquire Regarding Household Goods</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Image (7 Cols) */}
            <div className="lg:col-span-7 overflow-hidden rounded bg-[#151719]/5 order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=80"
                alt="Enclosed transportation equipment for household goods and secure commercial transit"
                className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-[1.01] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
