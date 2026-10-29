import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building2, Truck, RefreshCw, FileText, Phone } from 'lucide-react';
import { COMPANY } from '../data/company';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import ClosingCta from '../components/ClosingCta';

export default function DedicatedLanesPage() {
  const partnerTypes = [
    {
      title: "Freight Brokers",
      description: "Brokers seeking reliable, carrier-direct box-truck capacity to support recurring contracted shipper accounts with consistent performance.",
    },
    {
      title: "Commercial Shippers",
      description: "Manufacturers, distributors, and suppliers requiring scheduled, dedicated box-truck runs between production facilities, warehouses, and customer docks.",
    },
    {
      title: "Third-Party Logistics (3PLs)",
      description: "Logistics coordinators exploring dedicated transportation partnerships to cover established regional corridors and distribution routes.",
    },
    {
      title: "Ongoing Business Freight",
      description: "Businesses seeking to discuss steady, recurring freight movements with a carrier that prioritizes direct communication and operational discipline.",
    },
  ];

  const laneInquiryDetails = [
    { label: "Route Geography", detail: "Origin city and state &bull; Destination city and state &bull; Facility loading conditions" },
    { label: "Lane Structure", detail: "One-way delivery or round-trip turnaround requirements" },
    { label: "Frequency & Volume", detail: "Estimated recurring loads per day, week, or month &bull; Target start date" },
    { label: "Cargo Specifications", detail: "Commodity type, pallet count, piece counts, and approximate shipment weights" },
    { label: "Schedule Windows", detail: "Required pickup hours, delivery appointment windows, and operating days (e.g. Mon–Fri)" },
    { label: "Handling Notes", detail: "Any dock height, ground-level access, or specific facility delivery constraints" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Share Your Lane",
      description: "Submit your route origin, destination, estimated frequency, and basic shipment details through our lane intake form.",
    },
    {
      step: "02",
      title: "Discuss Requirements",
      description: "We review route feasibility, equipment alignment, schedule expectations, and volume parameters directly with your logistics team.",
    },
    {
      step: "03",
      title: "Explore a Partnership",
      description: "If the lane is a mutually suitable operational fit, we align on commercial terms, schedule commitments, and carrier paperwork.",
    },
  ];

  return (
    <>
      <SEO
        title="Dedicated Box-Truck Lane Opportunities"
        description="DNP Couriers LLC is seeking dedicated-lane partnerships for its box-truck operations. Inquire about recurring routes with shippers, brokers, and 3PLs."
      />

      {/* HERO SECTION */}
      <section className="relative bg-[#151719] text-[#FAFAF8] overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="absolute inset-0 z-0">
          <SafeImage
            imageKey="boxTruckDistribution"
            className="w-full h-full object-cover object-center opacity-30"
            alt="Straight box truck at modern distribution facility"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151719] via-[#151719]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D99A38]/15 border border-[#D99A38]/30 text-[#D99A38] text-xs font-mono">
              <span>ACTIVE PARTNERSHIP OPPORTUNITY &bull; BOX TRUCK OPERATIONS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-tight">
              Dedicated Box-Truck Lane Opportunities.
            </h1>

            <p className="text-lg sm:text-xl text-[#FAFAF8]/85 font-normal leading-relaxed">
              DNP Couriers LLC is seeking partnerships with businesses that need recurring box-truck transportation. Tell us about your lanes, shipment requirements, and expected frequency so we can explore a potential fit.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/request-a-quote?type=dedicated"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-[#151719] bg-[#FAFAF8] hover:bg-white rounded transition-colors"
              >
                <span>Submit Your Lane Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-[#FAFAF8] border border-white/20 hover:border-white/50 rounded transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D99A38]" />
                <span>Call (615) 525-7151</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PARTNERSHIP OPPORTUNITIES */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block mb-2">
              Collaborative Transportation
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#151719]">
              Built Around Recurring Transportation Needs.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#737980] leading-relaxed">
              DNP Couriers LLC is actively developing ongoing relationships with supply chain stakeholders seeking dependable, recurring box-truck operations. We welcome inquiries from:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTypes.map((partner, idx) => (
              <div key={idx} className="p-8 rounded bg-white border border-[#151719]/10 space-y-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded bg-[#151719]/5 border border-[#151719]/10 flex items-center justify-center text-xs font-mono font-bold text-[#D99A38]">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-[#151719]">
                    {partner.title}
                  </h3>
                </div>
                <p className="text-sm text-[#737980] leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded bg-white border border-[#151719]/10 text-xs text-[#737980] leading-relaxed">
            <strong className="text-[#151719] block mb-1">Operational Transparency Notice:</strong>
            All potential dedicated routes are evaluated individually based on schedule alignment, vehicle availability, and commercial agreement. We do not claim pre-existing exclusive contracts or guaranteed capacity until formalized in writing.
          </div>

        </div>
      </section>

      {/* SECTION: WHAT TO INCLUDE IN A LANE INQUIRY */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
                Lane Specification Intake
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#151719] leading-tight">
                What to Provide for a Lane Evaluation
              </h2>
              <p className="text-base text-[#737980] leading-relaxed">
                To evaluate whether your recurring route fits our box-truck operations, providing detailed operational parameters allows us to review scheduling and equipment feasibility promptly.
              </p>

              <div className="pt-2">
                <Link
                  to="/request-a-quote?type=dedicated"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#151719] hover:bg-[#151719]/90 rounded transition-colors"
                >
                  <span>Open Dedicated Lane Form</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3.5">
              {laneInquiryDetails.map((item, idx) => (
                <div key={idx} className="p-5 rounded bg-[#FAFAF8] border border-[#151719]/10 space-y-1">
                  <div className="text-sm font-bold text-[#151719] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D99A38] shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  <div className="text-xs text-[#737980] pl-6 font-mono" dangerouslySetInnerHTML={{ __html: item.detail }}></div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: A STRAIGHTFORWARD PROCESS (3-STEP LAYOUT) */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block mb-2">
              Partnership Progression
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#151719]">
              A Straightforward Process
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#737980]">
              How we review, align, and establish dedicated-lane operations with our logistics partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="p-8 rounded bg-white border border-[#151719]/10 space-y-4 shadow-sm">
                <span className="text-xs font-mono font-bold text-[#D99A38] tracking-widest block">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-[#151719]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#737980] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-xs text-[#737980] text-center">
            Submitting a lane inquiry initiates an exploratory review and does not automatically reserve capacity or establish a contractual agreement.
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-[#151719] text-[#FAFAF8] overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <SafeImage
            imageKey="boxTruckFreight"
            className="w-full h-full object-cover object-center opacity-25"
            alt="Box truck freight operations"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#151719] via-[#151719]/80 to-[#151719]/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
              Start the Conversation
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Have a Recurring Lane in Mind?
            </h2>
            <p className="text-lg sm:text-xl text-[#FAFAF8]/85 font-normal leading-relaxed">
              Share the details with DNP Couriers LLC to begin a dedicated-lane conversation.
            </p>
            <div className="pt-2">
              <Link
                to="/request-a-quote?type=dedicated"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-[#151719] bg-[#FAFAF8] hover:bg-white rounded transition-colors"
              >
                <span>Start a Lane Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
