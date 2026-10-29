import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, AlertCircle, FileCheck, HelpCircle } from 'lucide-react';
import { COMPANY } from '../data/company';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import ClosingCta from '../components/ClosingCta';

export default function ServicesPage() {
  const inquiryItems = [
    "Pickup and delivery locations (city, state, and facility type)",
    "Specific commodity or type of goods to be transported",
    "Approximate shipment weight, piece count, or pallet footprint",
    "Target schedule (desired pickup window and delivery timing)",
    "Any special loading or dock access requirements",
  ];

  return (
    <>
      <SEO
        title="Transportation Services Overview"
        description="Explore the interstate freight transportation services provided by DNP Couriers LLC, including general freight carriage and registered cargo classifications."
      />

      {/* HERO SECTION */}
      <section className="relative bg-[#151719] text-[#FAFAF8] overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="absolute inset-0 z-0">
          <SafeImage
            imageKey="generalFreight"
            className="w-full h-full object-cover object-center opacity-25"
            alt="Wide freight transportation scene"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151719] via-[#151719]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
              Core Capabilities
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-tight">
              Transportation Services, Clearly Defined.
            </h1>
            <p className="text-lg sm:text-xl text-[#FAFAF8]/85 font-normal leading-relaxed">
              DNP Couriers LLC provides interstate motor carriage for authorized cargo classifications, focusing on professional execution and direct shipper alignment.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE 1: GENERAL FREIGHT */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 overflow-hidden rounded bg-[#151719]/5">
              <SafeImage
                imageKey="generalFreight"
                className="w-full h-[380px] sm:h-[460px] object-cover"
                alt="General freight cargo loading dock"
              />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737980] block">
                Primary Service
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#151719] tracking-tight">
                General Freight Transportation
              </h2>

              <div className="space-y-4 text-base text-[#737980] leading-relaxed">
                <p>
                  General freight encompasses a wide variety of commercial commodities that do not require specialized heavy-haul permits or hazardous materials certifications.
                </p>
                <p>
                  DNP Couriers LLC provides point-to-point interstate carriage for general freight. Specific routing, equipment configurations, and delivery timing are reviewed on an individual basis to confirm mutual operational fit.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/services/general-freight"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#151719] hover:bg-[#151719]/90 rounded transition-colors"
                >
                  <span>Explore General Freight Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE 2: HOUSEHOLD GOODS */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737980] block">
                Listed Category
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#151719] tracking-tight">
                Household Goods Transportation
              </h2>

              <div className="space-y-4 text-base text-[#737980] leading-relaxed">
                <p>
                  Household goods is a distinct cargo classification under federal motor carrier regulations.
                </p>
                <p>
                  DNP Couriers LLC maintains this category on its official registration. Because consumer household moves involve distinct federal tariff and dispute settlement mandates, commercial shippers should contact our office directly to confirm current service availability and scope.
                </p>
              </div>

              {/* Editorial / Verification Note */}
              <div className="p-4 rounded bg-[#FAFAF8] border border-[#151719]/10 text-xs text-[#737980] space-y-1">
                <div className="font-semibold text-[#151719] flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-[#D99A38]" />
                  <span>Service Review Notice</span>
                </div>
                <p>
                  Specific household-goods operations are subject to active operating authority verification and company scheduling confirmation before booking.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/services/household-goods"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#151719] hover:text-[#D99A38] transition-colors"
                >
                  <span>Read Household Goods Overview</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 overflow-hidden rounded bg-[#151719]/5">
              <SafeImage
                imageKey="householdGoods"
                className="w-full h-[380px] sm:h-[460px] object-cover"
                alt="Packaged goods and secure freight transport"
              />
            </div>

          </div>
        </div>
      </section>

      {/* HOW TO INQUIRE SECTION */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block mb-2">
              Inquiry Process
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#151719]">
              How to Request Transportation
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#737980]">
              To help us evaluate equipment availability and scheduling feasibility, please prepare the following basic shipment details when submitting your inquiry:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            <div className="md:col-span-7 space-y-4">
              {inquiryItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded bg-white border border-[#151719]/10">
                  <CheckCircle2 className="w-5 h-5 text-[#2b7a4b] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#151719]">{item}</span>
                </div>
              ))}

              <div className="mt-4 p-4 rounded bg-[#151719]/[0.02] border border-[#151719]/10 text-xs text-[#737980]">
                <strong>Important Note:</strong> Submitting an inquiry does not constitute a confirmed load booking. All freight agreements must be confirmed in writing by DNP Couriers LLC.
              </div>
            </div>

            <div className="md:col-span-5 p-8 rounded bg-white border border-[#151719]/10 space-y-6">
              <h3 className="text-xl font-bold text-[#151719]">Ready to Discuss a Load?</h3>
              <p className="text-sm text-[#737980] leading-relaxed">
                Submit your shipment details through our online quote form or speak directly with our team in Brentwood, Tennessee.
              </p>

              <div className="space-y-3 pt-2">
                <Link
                  to="/request-a-quote"
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-medium text-white bg-[#151719] hover:bg-[#151719]/90 rounded transition-colors"
                >
                  <span>Request Transportation Information</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-[#151719] border border-[#151719]/20 hover:border-[#151719]/50 rounded transition-colors"
                >
                  <span>Call {COMPANY.phone}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CLOSING CTA */}
      <ClosingCta
        headline="Have Freight to Move? Let's Talk."
        supportingCopy="Share your transportation requirements with DNP Couriers LLC to begin a conversation about your shipment."
      />
    </>
  );
}
