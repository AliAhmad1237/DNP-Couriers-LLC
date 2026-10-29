import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, HelpCircle, FileText } from 'lucide-react';
import { COMPANY } from '../data/company';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import ClosingCta from '../components/ClosingCta';

export default function GeneralFreightPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const checklistItems = [
    { title: "Point of Origin", detail: "Exact city, state, zip code, and whether the facility has a loading dock, ground-level access, or forklift." },
    { title: "Destination Facility", detail: "Receiving address, operating hours, appointment requirements, and any special delivery instructions." },
    { title: "Commodity Description", detail: "What the cargo is, how it is packaged (e.g., standard pallets, crates, boxed units), and any stacking restrictions." },
    { title: "Weight and Dimensions", detail: "Total estimated weight (gross pounds) and physical dimensions (length, width, height per piece)." },
    { title: "Schedule Parameters", detail: "Ready date for pickup and expected delivery window or deadline." },
  ];

  const faqs = [
    {
      q: "What types of commercial cargo fall under general freight?",
      a: "General freight includes standard non-bulk, non-hazardous commercial goods such as packaged dry goods, manufactured components, retail products, building supplies, and palletized commodities. It excludes oversized machinery requiring special state routing permits or hazardous materials.",
    },
    {
      q: "What details should I have ready when requesting a freight quote?",
      a: "Having your origin and destination zip codes, estimated cargo weight, packaging type (such as 48x40 pallets), and preferred pickup date allows us to review equipment feasibility promptly.",
    },
    {
      q: "How does DNP Couriers LLC confirm freight bookings?",
      a: "Submitting an inquiry through our website initiates a review. Our team evaluates schedule availability and equipment alignment, after which confirmed terms and written documentation are agreed upon prior to dispatch.",
    },
    {
      q: "How do I contact DNP Couriers LLC regarding a general freight shipment?",
      a: "You can submit your load specifications through our Request a Quote form or contact our Brentwood office directly by phone at (615) 525-7151.",
    },
  ];

  return (
    <>
      <SEO
        title="General Freight Transportation"
        description="Professional interstate general freight transportation services by DNP Couriers LLC. Reliable carriage for commercial goods based in Brentwood, Tennessee."
      />

      {/* HERO SECTION */}
      <section className="relative bg-[#151719] text-[#FAFAF8] overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="absolute inset-0 z-0">
          <SafeImage
            imageKey="generalFreight"
            className="w-full h-full object-cover object-center opacity-25"
            alt="Commercial truck transporting general freight on a U.S. highway"
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
              General Freight Transportation.
            </h1>
            <p className="text-lg sm:text-xl text-[#FAFAF8]/85 font-normal leading-relaxed">
              Interstate freight transportation for commercial enterprises requiring professional coordination and dependable motor carriage.
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
                General freight constitutes the backbone of modern American commerce, encompassing palletized, boxed, and crate-secured shipments.
              </p>
              <p>
                DNP Couriers LLC operates under active federal operating authority (USDOT 2321171, MC 960224) to transport general freight across state lines. Rather than adopting an automated, impersonal brokerage model, we prioritize direct communication between shipper and carrier.
              </p>
              <p>
                Every load is assessed based on practical feasibility: the nature of the commodity, handling requirements, route geometry, and scheduling windows. We confirm whether we have the appropriate capacity before committing to an assignment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: EVALUATING & PLANNING SHIPMENT REQUIREMENTS */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block mb-2">
              Operational Planning
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#151719]">
              Coordinating Your Load with Precision
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#737980]">
              Successful freight transportation relies on establishing clear parameters before loading begins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            <div className="p-8 rounded bg-[#FAFAF8] border border-[#151719]/10 space-y-4">
              <h3 className="text-xl font-bold text-[#151719]">What Helps Evaluate a Shipment</h3>
              <p className="text-sm text-[#737980] leading-relaxed">
                When you contact our team, having accurate information about your cargo prevents misunderstandings. Knowing whether freight is fork-liftable, how it is secured, and whether the delivery facility has strict appointment windows helps us plan routing and equipment responsibly.
              </p>
            </div>

            <div className="p-8 rounded bg-[#FAFAF8] border border-[#151719]/10 space-y-4">
              <h3 className="text-xl font-bold text-[#151719]">Operational Alignment</h3>
              <p className="text-sm text-[#737980] leading-relaxed">
                We believe in straightforward agreements. If your cargo requires specific transit windows or specialized handling, we discuss those factors frankly during the intake process so both parties share identical expectations from pickup to delivery.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: SHIPMENT INQUIRY CHECKLIST */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block mb-2">
              Shipper Checklist
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#151719]">
              General Freight Inquiry Checklist
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#737980]">
              Review these five key items when preparing to request transportation services:
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {checklistItems.map((item, idx) => (
              <div key={idx} className="p-6 rounded bg-white border border-[#151719]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#D99A38]">0{idx + 1}</span>
                    <h3 className="text-base font-bold text-[#151719]">{item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#737980]">{item.detail}</p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-[#2b7a4b] shrink-0 hidden sm:block" />
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/request-a-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white bg-[#151719] hover:bg-[#151719]/90 rounded transition-colors"
            >
              <span>Submit General Freight Quote Request</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 4: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block mb-2">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#151719]">
              General Freight FAQs
            </h2>
            <p className="mt-4 text-base text-[#737980]">
              Answers to common inquiries regarding our freight handling process.
            </p>
          </div>

          <div className="max-w-3xl space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-[#151719]/10 rounded overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-semibold text-[#151719] hover:text-[#D99A38] transition-colors flex items-center justify-between gap-4 bg-[#FAFAF8]"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-[#737980]" /> : <ChevronDown className="w-4 h-4 shrink-0 text-[#737980]" />}
                  </button>
                  {isOpen && (
                    <div className="p-5 text-sm text-[#737980] leading-relaxed bg-white border-t border-[#151719]/10">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CLOSING CTA */}
      <ClosingCta
        headline="Ready to Move Your General Freight?"
        supportingCopy="Provide your pickup and delivery parameters to discuss service options directly with our Brentwood team."
      />
    </>
  );
}
