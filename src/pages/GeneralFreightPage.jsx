import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, HelpCircle, FileText, Truck, Repeat } from 'lucide-react';
import { COMPANY } from '../data/company';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import ClosingCta from '../components/ClosingCta';

export default function GeneralFreightPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const checklistItems = [
    { title: "Point of Origin", detail: "Exact city, state, zip code, and whether the facility provides standard dock-height loading, forklift, or requires ground-level access." },
    { title: "Destination Facility", detail: "Receiving facility address, operational receiving hours, appointment delivery constraints, and contact personnel." },
    { title: "Commodity Description", detail: "Exact commercial goods being moved, packaging format (standard 48x40 pallets, crates, boxed skids), and stacking restrictions." },
    { title: "Weight and Footprint", detail: "Total gross weight (pounds) and pallet count or linear feet to confirm box-truck payload distribution." },
    { title: "Schedule & Frequency", detail: "Whether this is a recurring dedicated lane, periodic scheduled movement, or a single spot shipment." },
  ];

  const faqs = [
    {
      q: "What types of commercial cargo fall under general freight?",
      a: "General freight includes standard non-bulk, non-hazardous commercial goods such as packaged dry goods, manufactured components, retail products, building supplies, industrial materials, and palletized commodities. It excludes oversized cargo requiring oversize permits and hazardous materials.",
    },
    {
      q: "Why use a straight box truck for general freight?",
      a: "Commercial straight box trucks provide dock-height freight carriage with superior agility. They can navigate urban facilities, congested industrial parks, and tight commercial loading areas where 53-foot tractor-trailers cannot safely maneuver, while still handling standard palletized freight.",
    },
    {
      q: "Can DNP Couriers handle recurring dedicated general freight lanes?",
      a: "Yes. Our primary operational focus is establishing dedicated-lane partnerships with shippers, freight brokers, and 3PLs on scheduled weekly or daily recurring routes.",
    },
    {
      q: "What details should I have ready when requesting a quote?",
      a: "Having your origin and destination zip codes, estimated cargo weight, pallet count, and target schedule allows our operations team to evaluate capacity promptly.",
    },
    {
      q: "How do I contact DNP Couriers LLC regarding a general freight shipment?",
      a: "You can submit your specifications through our online inquiry form or call our Brentwood office directly by phone at (615) 525-7151.",
    },
  ];

  return (
    <>
      <SEO
        title="General Freight Box Truck Transportation"
        description="Professional interstate general freight transportation services by DNP Couriers LLC. Straight box-truck carriage for commercial goods based in Brentwood, Tennessee."
      />

      {/* HERO SECTION */}
      <section className="relative bg-[#151719] text-[#FAFAF8] overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="absolute inset-0 z-0">
          <SafeImage
            imageKey="generalFreight"
            className="w-full h-full object-cover object-center opacity-25"
            alt="Straight box truck transporting general freight"
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

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-tight">
              General Freight. Box-Truck Agility.
            </h1>
            <p className="text-lg sm:text-xl text-[#FAFAF8]/85 font-normal leading-relaxed">
              Interstate freight carriage for commercial enterprises requiring professional coordination, dock compatibility, and dependable motor carriage.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: UNDERSTANDING GENERAL FREIGHT */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
                Service Definition
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#151719] leading-tight">
                Dependable Carriage for Commercial Goods
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#737980] leading-relaxed">
              <p className="text-[#151719] font-medium text-lg sm:text-xl leading-relaxed">
                General freight constitutes the core of commercial transportation, encompassing palletized, boxed, and crate-secured commodities.
              </p>
              <p>
                DNP Couriers LLC operates under active federal operating authority (USDOT 2321171, MC 960224) to transport commercial freight across state lines. Rather than adopting an automated, impersonal brokerage model, we prioritize direct communication between shipper and carrier.
              </p>
              <p>
                Every load is assessed based on practical feasibility: the nature of the commodity, handling requirements, route geometry, and scheduling windows. We confirm whether we have the appropriate capacity before committing to an assignment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: CHECKLIST FOR SHIPPERS */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-16 sm:mb-20">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block mb-2">
              Shipper Intake Checklist
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#151719]">
              Information Needed for Freight Inquiries
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#737980]">
              To provide an accurate rate confirmation and confirm equipment availability, please prepare these shipment details:
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {checklistItems.map((item, idx) => (
              <div key={idx} className="p-6 rounded bg-[#FAFAF8] border border-[#151719]/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-[#D99A38] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#151719]">{item.title}</h3>
                  <p className="text-sm text-[#737980] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/request-a-quote"
              className="inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold text-white bg-[#151719] hover:bg-[#151719]/90 rounded transition-colors"
            >
              <span>Submit General Freight Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/dedicated-lanes"
              className="inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold text-[#151719] border border-[#151719]/20 hover:border-[#151719]/50 rounded transition-colors"
            >
              <span>Explore Dedicated Recurring Lanes</span>
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 3: FAQS */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#151719]">
              General Freight Questions Answered
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[#151719]/10 rounded bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-[#151719] hover:text-[#D99A38] transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#D99A38] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#737980] shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#737980] leading-relaxed border-t border-[#151719]/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CLOSING CTA */}
      <ClosingCta
        headline="Ready to Move General Freight?"
        supportingCopy="Submit your shipment parameters or discuss a recurring dedicated route directly with our operations team."
        primaryCtaText="Request a Quote"
        primaryCtaLink="/request-a-quote"
        secondaryCtaText={`Call ${COMPANY.phone}`}
        secondaryCtaLink={`tel:${COMPANY.phoneRaw}`}
      />
    </>
  );
}
