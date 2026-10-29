import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { COMPANY } from '../data/company';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import ClosingCta from '../components/ClosingCta';

export default function IndustriesPage() {
  return (
    <>
      <SEO
        title="Industries & Cargo Categories"
        description="Cargo classifications and freight transportation services provided by DNP Couriers LLC. Learn what shipment details are required for general freight."
      />

      {/* HERO SECTION */}
      <section className="relative bg-[#151719] text-[#FAFAF8] overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="absolute inset-0 z-0">
          <SafeImage
            imageKey="industries"
            className="w-full h-full object-cover object-center opacity-25"
            alt="Commercial cargo transportation on American supply routes"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151719] via-[#151719]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
              Cargo &amp; Freight Classifications
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-tight">
              Understanding the Freight We Move.
            </h1>
            <p className="text-lg sm:text-xl text-[#FAFAF8]/85 font-normal leading-relaxed">
              DNP Couriers LLC transports cargo within its officially registered operating classifications. Review our documented categories and what details are necessary for quote evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* EDITORIAL INTRODUCTION */}
      <section className="py-20 sm:py-28 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#151719] tracking-tight">
              A Responsible Approach to Cargo Acceptance
            </h2>
            <p className="text-base sm:text-lg text-[#737980] leading-relaxed">
              In freight transportation, matching the right equipment to the specific cargo is fundamental to safety and compliance. We do not claim blanket capabilities across all industrial niches; instead, we operate strictly within our confirmed motor carrier classifications and confirm load viability directly with shippers.
            </p>
          </div>
        </div>
      </section>

      {/* CARGO CATEGORY 1: GENERAL FREIGHT */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737980] block">
                Official Classification 01
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#151719] tracking-tight">
                General Commercial Freight
              </h2>

              <div className="space-y-4 text-base text-[#737980] leading-relaxed">
                <p>
                  General Freight is the primary listed classification for DNP Couriers LLC under federal registration USDOT 2321171.
                </p>
                <p>
                  This covers ordinary commercial commodities, packaged manufactured items, retail goods, building materials, and palletized products that do not require specialized hazmat handling or oversized road permits.
                </p>
              </div>

              {/* Necessary Details Box */}
              <div className="p-5 rounded bg-[#FAFAF8] border border-[#151719]/10 space-y-2">
                <span className="text-xs font-mono font-bold text-[#151719] uppercase tracking-wider block">
                  Required Shipment Specifications:
                </span>
                <ul className="text-xs sm:text-sm text-[#737980] space-y-1.5 list-disc list-inside">
                  <li>Total estimated weight (lbs) and piece count</li>
                  <li>Pallet dimensions (e.g. 48" x 40" standard)</li>
                  <li>Loading dock vs. ground-level pickup/delivery</li>
                  <li>Target timeline and facility operating hours</li>
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  to="/request-a-quote"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#151719] hover:bg-[#151719]/90 rounded transition-colors"
                >
                  <span>Inquire Regarding General Freight</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 overflow-hidden rounded bg-[#151719]/5">
              <SafeImage
                imageKey="generalFreight"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                alt="Palletized general freight loading"
              />
            </div>

          </div>
        </div>
      </section>

      {/* CARGO CATEGORY 2: HOUSEHOLD GOODS */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 overflow-hidden rounded bg-[#151719]/5 order-2 lg:order-1">
              <SafeImage
                imageKey="householdGoods"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                alt="Enclosed transport for household goods"
              />
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737980] block">
                Official Classification 02
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#151719] tracking-tight">
                Household Goods Transportation
              </h2>

              <div className="space-y-4 text-base text-[#737980] leading-relaxed">
                <p>
                  Household Goods is documented as an authorized cargo category on our federal carrier profile.
                </p>
                <p>
                  Because federal regulations establish distinct tariff and disclosure obligations for consumer household property, prospective shippers must verify specific service scope directly with our Brentwood office.
                </p>
              </div>

              {/* Service Verification Advisory */}
              <div className="p-5 rounded bg-white border border-[#151719]/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#151719]">
                  <AlertCircle className="w-4 h-4 text-[#D99A38]" />
                  <span>Confirmation Required Prior to Booking</span>
                </div>
                <p className="text-xs text-[#737980] leading-relaxed">
                  We encourage customers to confirm cargo acceptance, service parameters, and vehicle requirements directly with our team before making transportation commitments.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/services/household-goods"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#151719] hover:text-[#D99A38] transition-colors"
                >
                  <span>Review Household Goods Authority Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <ClosingCta
        headline="Ready to Discuss Your Shipment?"
        supportingCopy="Contact DNP Couriers LLC to discuss your specific cargo parameters with our team."
      />
    </>
  );
}
