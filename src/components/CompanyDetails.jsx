import React from 'react';
import { COMPANY } from '../data/company';

export default function CompanyDetails() {
  const details = [
    { label: "Entity Name", value: COMPANY.name },
    { label: "Location", value: `${COMPANY.addressLocality}, ${COMPANY.addressRegion}` },
    { label: "USDOT Number", value: COMPANY.usdot },
    { label: "MC Docket", value: COMPANY.mc },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAFAF8] border-b border-[#151719]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Context */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-[#737980]">
            Verified Regulatory & Operating Information
          </span>
        </div>

        {/* Minimal Understated Row with Thin Dividers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#151719]/10 border-t border-b border-[#151719]/10 py-8">
          {details.map((item, idx) => (
            <div key={idx} className={`pt-4 md:pt-0 ${idx > 0 ? 'md:px-8' : 'md:pr-8'}`}>
              <span className="text-xs font-medium text-[#737980] block mb-1">
                {item.label}
              </span>
              <p className="text-base sm:text-lg font-semibold text-[#151719] tracking-tight">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 text-xs text-[#737980] font-mono">
          Federal Motor Carrier Safety Administration (FMCSA) &bull; Active Interstate Carrier
        </div>

      </div>
    </section>
  );
}
