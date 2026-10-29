import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, AlertCircle, FileCheck, HelpCircle, Repeat, Truck, ShieldCheck } from 'lucide-react';
import { COMPANY } from '../data/company';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import ClosingCta from '../components/ClosingCta';

export default function ServicesPage() {
  const inquiryItems = [
    "Origin and destination city/state pairs or postal codes",
    "Estimated route frequency (daily, multi-week, or scheduled intervals)",
    "Specific commodity type and packaging (standard pallets, crates, cartons)",
    "Approximate gross cargo weight and pallet footprint",
    "Dock-to-dock vs. liftgate or special facility access needs",
  ];

  return (
    <>
      <SEO
        title="Transportation Services | Box Truck & Dedicated Lanes"
        description="Explore the interstate freight transportation services provided by DNP Couriers LLC, including dedicated-lane box-truck capacity and registered cargo classifications."
      />

      {/* HERO SECTION */}
      <section className="relative bg-[#151719] text-[#FAFAF8] overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="absolute inset-0 z-0">
          <SafeImage
            imageKey="boxTruckFreight"
            className="w-full h-full object-cover object-center opacity-25"
            alt="Straight box truck freight operations"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151719] via-[#151719]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
              Transportation Services
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-tight">
              Box-Truck Transportation. Focused on Dedicated Lanes.
            </h1>
            <p className="text-lg sm:text-xl text-[#FAFAF8]/85 font-normal leading-relaxed">
              DNP Couriers LLC provides interstate motor carriage for commercial shippers, freight brokers, and 3PLs seeking committed straight box-truck capacity on recurring routes.
            </p>
          </div>
        </div>
      </section>

      {/* STRATEGIC CAPABILITY 1: DEDICATED LANES */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 overflow-hidden rounded bg-[#151719]/5">
              <SafeImage
                imageKey="boxTruckDistribution"
                className="w-full h-[380px] sm:h-[460px] object-cover"
                alt="Straight box truck at modern distribution facility"
              />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D99A38] block">
                Primary Business Focus
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#151719] tracking-tight">
                Dedicated Lane Partnerships
              </h2>

              <div className="space-y-4 text-base text-[#737980] leading-relaxed">
                <p>
                  Securing dependable capacity is one of the most critical challenges for logistics managers. We partner with freight brokers, manufacturers, and distributors on contracted recurring routes.
                </p>
                <p>
                  Our dedicated service provides reliable driver dispatch, consistent transit schedules, and direct point-to-point communication without the volatility of spot board coverage.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/dedicated-lanes"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#151719] hover:bg-[#151719]/90 rounded transition-colors"
                >
                  <span>Explore Dedicated Lanes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/request-a-quote"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#151719] border border-[#151719]/20 hover:border-[#151719]/50 rounded transition-colors"
                >
                  <span>Submit Lane Specs</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE 2: GENERAL FREIGHT */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737980] block">
                Registered Classification 01
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#151719] tracking-tight">
                General Commercial Freight
              </h2>

              <div className="space-y-4 text-base text-[#737980] leading-relaxed">
                <p>
                  General freight encompasses a wide variety of commercial commodities that do not require specialized heavy-haul permits or hazardous materials certifications.
                </p>
                <p>
                  DNP Couriers LLC provides interstate carriage for palletized goods, manufactured assemblies, industrial parts, and commercial supplies. Every route is verified for equipment alignment and operational fit before dispatch.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/services/general-freight"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#151719] hover:bg-[#151719]/90 rounded transition-colors"
                >
                  <span>View General Freight Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 overflow-hidden rounded bg-[#151719]/5 order-1 lg:order-2">
              <SafeImage
                imageKey="generalFreight"
                className="w-full h-[380px] sm:h-[460px] object-cover"
                alt="Palletized general freight at loading facility"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE 3: HOUSEHOLD GOODS */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 overflow-hidden rounded bg-[#151719]/5">
              <SafeImage
                imageKey="householdGoods"
                className="w-full h-[380px] sm:h-[460px] object-cover"
                alt="Packaged freight inside commercial truck"
              />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737980] block">
                Registered Classification 02
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#151719] tracking-tight">
                Household Goods Information
              </h2>

              <div className="space-y-4 text-base text-[#737980] leading-relaxed">
                <p>
                  Household Goods is documented as an authorized cargo category on our federal motor carrier registry (USDOT 2321171).
                </p>
                <p>
                  Because household-goods transportation involves specific federal consumer protection regulations, DNP Couriers LLC evaluates any inquiries individually. We do not provide residential consumer moving without direct owner verification.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/services/household-goods"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#151719] bg-[#FAFAF8] border border-[#151719]/15 hover:border-[#151719]/40 rounded transition-colors"
                >
                  <span>Read Household Goods Disclosure</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FREIGHT INTAKE SPECIFICATIONS CHECKLIST */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
                Inquiry Guidelines
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#151719]">
                Information Required for Capacity Review
              </h2>
              <p className="text-base text-[#737980] leading-relaxed">
                To evaluate dedicated lane feasibility or one-time freight requirements accurately, our operations team needs specific parameters:
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {inquiryItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 rounded bg-white border border-[#151719]/10">
                  <div className="w-6 h-6 rounded-full bg-[#151719]/5 text-[#151719] flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-sm sm:text-base text-[#151719] font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <ClosingCta
        headline="Discuss Dedicated Box-Truck Capacity."
        supportingCopy="Whether you are a freight broker managing customer freight or a shipper needing consistent regional runs, we invite your lane specifications."
        primaryCtaText="Discuss Dedicated Lanes"
        primaryCtaLink="/dedicated-lanes"
        secondaryCtaText={`Call ${COMPANY.phone}`}
        secondaryCtaLink={`tel:${COMPANY.phoneRaw}`}
      />
    </>
  );
}
