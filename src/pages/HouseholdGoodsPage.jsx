import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, AlertCircle, ShieldAlert, CheckCircle2, Phone, FileCheck } from 'lucide-react';
import { COMPANY } from '../data/company';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import ClosingCta from '../components/ClosingCta';

export default function HouseholdGoodsPage() {
  return (
    <>
      <SEO
        title="Household Goods Transportation (Review Status)"
        description="Information regarding household goods transportation category listed under DNP Couriers LLC federal motor carrier registration."
      />

      {/* HERO SECTION */}
      <section className="relative bg-[#151719] text-[#FAFAF8] overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="absolute inset-0 z-0">
          <SafeImage
            imageKey="householdGoods"
            className="w-full h-full object-cover object-center opacity-25"
            alt="Packaged goods ready for transport"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151719] via-[#151719]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D99A38] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Services Overview</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D99A38]/15 border border-[#D99A38]/30 text-[#D99A38] text-xs font-mono">
              <span>REGISTERED CARRIER CLASSIFICATION</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-tight">
              Household Goods Transportation.
            </h1>
            <p className="text-lg sm:text-xl text-[#FAFAF8]/85 font-normal leading-relaxed">
              Information regarding the household goods cargo category documented under DNP Couriers LLC's federal motor carrier profile.
            </p>
          </div>
        </div>
      </section>

      {/* MANDATORY VERIFICATION / DRAFT STATUS NOTICE */}
      <section className="py-12 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="p-6 sm:p-8 rounded bg-amber-500/[0.06] border border-[#D99A38]/30 space-y-3">
            <div className="flex items-center gap-2.5 text-[#151719] font-bold text-base">
              <AlertCircle className="w-5 h-5 text-[#D99A38] shrink-0" />
              <span>Carrier Service Parameters Notice</span>
            </div>
            <p className="text-sm text-[#737980] leading-relaxed max-w-3xl">
              While Household Goods is registered as an authorized cargo classification under USDOT 2321171, consumer household-goods moving involves specific federal tariff filings, arbitration disclosures, and operational requirements. <strong>DNP Couriers LLC does not advertise residential moving, packing, loading/unloading, or consumer storage services until explicitly confirmed by the business owner.</strong>
            </p>
            <p className="text-xs text-[#737980]">
              To discuss commercial or specific household-goods freight movements, please speak directly with the company owner at (615) 525-7151.
            </p>
          </div>
        </div>
      </section>

      {/* REGULATORY FRAMEWORK SECTION */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
                Regulatory Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#151719] leading-tight">
                Understanding Household Goods Carriage
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#737980] leading-relaxed">
              <p className="text-[#151719] font-medium text-lg sm:text-xl leading-relaxed">
                In federal transportation law, household goods classification covers personal property, furniture, and residential equipment transported between locations.
              </p>
              <p>
                Commercial freight carriers holding this classification must ensure each movement conforms with the FMCSA's specific rules regarding bills of lading, valuation coverage, and written estimates.
              </p>
              <p>
                DNP Couriers LLC approaches this category conservatively to maintain 100% regulatory integrity. Prospective commercial shippers seeking carriage for household-goods items should submit full load parameters for preliminary evaluation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* INQUIRY CHECKLIST FOR CONFIRMED MOVEMENTS */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block mb-2">
              Shipper Checklist
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#151719]">
              Information Required for Household Goods Inquiries
            </h2>
            <p className="mt-4 text-base text-[#737980]">
              If requesting transportation relating to household goods, please prepare the following details for review:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
            <div className="p-6 rounded bg-[#FAFAF8] border border-[#151719]/10 space-y-2">
              <span className="text-xs font-mono font-bold text-[#D99A38]">ITEM 01</span>
              <h3 className="text-base font-bold text-[#151719]">Shipper Entity</h3>
              <p className="text-xs sm:text-sm text-[#737980]">
                Commercial entity, corporate relocation partner, or private shipper details.
              </p>
            </div>

            <div className="p-6 rounded bg-[#FAFAF8] border border-[#151719]/10 space-y-2">
              <span className="text-xs font-mono font-bold text-[#D99A38]">ITEM 02</span>
              <h3 className="text-base font-bold text-[#151719]">Packaging &amp; Protection</h3>
              <p className="text-xs sm:text-sm text-[#737980]">
                Confirmation of whether items are crated, palletized, boxed, or require specialized transport blankets.
              </p>
            </div>

            <div className="p-6 rounded bg-[#FAFAF8] border border-[#151719]/10 space-y-2">
              <span className="text-xs font-mono font-bold text-[#D99A38]">ITEM 03</span>
              <h3 className="text-base font-bold text-[#151719]">Access Constraints</h3>
              <p className="text-xs sm:text-sm text-[#737980]">
                Origin and destination facility access (loading dock, residential street restrictions, ground-level).
              </p>
            </div>

            <div className="p-6 rounded bg-[#FAFAF8] border border-[#151719]/10 space-y-2">
              <span className="text-xs font-mono font-bold text-[#D99A38]">ITEM 04</span>
              <h3 className="text-base font-bold text-[#151719]">Schedule Timeline</h3>
              <p className="text-xs sm:text-sm text-[#737980]">
                Target pickup date and delivery window flexibility.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white bg-[#151719] hover:bg-[#151719]/90 rounded transition-colors"
            >
              <span>Contact Our Team for Verification</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-4 text-sm font-medium text-[#151719] border border-[#151719]/20 hover:border-[#151719]/50 rounded transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D99A38]" />
              <span>Call (615) 525-7151</span>
            </a>
          </div>

        </div>
      </section>

      {/* CLOSING CTA */}
      <ClosingCta
        headline="Have Questions Regarding Freight Categories?"
        supportingCopy="Speak with DNP Couriers LLC to discuss your transportation requirements and verify service options."
      />
    </>
  );
}
