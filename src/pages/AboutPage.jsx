import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck, MapPin, CheckCircle, FileText, Truck, Repeat } from 'lucide-react';
import { COMPANY } from '../data/company';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import ClosingCta from '../components/ClosingCta';

export default function AboutPage() {
  const principles = [
    {
      number: "01",
      title: "Focused Straight Box-Truck Operations",
      description:
        "We specialize in medium-duty and heavy-duty commercial straight box trucks. This focus provides agile access to metropolitan facilities, industrial parks, and tight distribution docks without the spatial constraints of 53-foot tractor-trailers.",
    },
    {
      number: "02",
      title: "Dedicated Lane Partnership Mindset",
      description:
        "Rather than chasing one-off spot loads, our operational goal is building recurring, contracted lane relationships with shippers, freight brokers, and 3PLs that value consistent capacity and dependable schedules.",
    },
    {
      number: "03",
      title: "Direct Human Coordination",
      description:
        "Shippers need straightforward answers, not automated evasion. We emphasize direct telephone communication, accurate schedule parameters, and proactive load management from origin dispatch to destination delivery.",
    },
  ];

  return (
    <>
      <SEO
        title="About DNP Couriers LLC | Box Truck Operations"
        description="Learn about DNP Couriers LLC, an authorized interstate motor carrier based in Brentwood, Tennessee specializing in straight box-truck transportation and dedicated-lane partnerships."
      />

      {/* HERO SECTION */}
      <section className="relative bg-[#151719] text-[#FAFAF8] overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="absolute inset-0 z-0">
          <SafeImage
            imageKey="boxTruckLogistics"
            className="w-full h-full object-cover object-center opacity-25"
            alt="Commercial straight box truck outside modern logistics facility"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151719] via-[#151719]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
              About DNP Couriers LLC
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-tight">
              Straight Box-Truck Capacity. Built for Long-Term Partnerships.
            </h1>
            <p className="text-lg sm:text-xl text-[#FAFAF8]/85 font-normal leading-relaxed">
              DNP Couriers LLC is an interstate motor carrier based in Brentwood, Tennessee, providing dedicated box-truck transportation services for commercial shippers and freight brokers.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
                Company Profile &amp; Focus
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#151719] leading-tight">
                An Operational Partner Grounded in Reliability.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#737980] leading-relaxed">
              <p className="text-[#151719] font-medium text-lg sm:text-xl leading-relaxed">
                Operating under USDOT 2321171 and MC 960224, DNP Couriers LLC is an active interstate motor carrier established to serve commercial supply chains.
              </p>
              <p>
                Headquartered at 1200 Chickasaw Drive in Brentwood, Tennessee, our business model centers on operating commercial straight box trucks. We bridge the gap between large-scale dry van freight and parcel couriers, delivering dock-height freight carriage with superior operational agility.
              </p>
              <p>
                In an industry often complicated by layers of re-brokering, our team works directly with logistics partners. We review route feasibility, verify freight specifications, and establish transparent commitments before accepting an assignment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OPERATING APPROACH */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-16 sm:mb-20">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block mb-2">
              Our Operating Standards
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#151719]">
              How We Approach Every Lane
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#737980]">
              These core principles guide our box-truck operations, partner relationships, and route commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {principles.map((p) => (
              <div key={p.number} className="p-8 rounded bg-[#FAFAF8] border border-[#151719]/10 space-y-4">
                <span className="text-xs font-mono font-bold text-[#D99A38] tracking-widest block">
                  {p.number}
                </span>
                <h3 className="text-xl font-bold text-[#151719] tracking-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-[#737980] leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* VERIFIED COMPANY INFORMATION BLOCK */}
      <section className="py-20 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#737980] block">
              Official Registration Details
            </span>
            <h3 className="text-2xl font-bold text-[#151719] tracking-tight mt-1">
              Verified Business Credentials
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded bg-white border border-[#151719]/10 space-y-1">
              <span className="text-xs text-[#737980] uppercase font-mono block">Business Legal Name</span>
              <p className="text-base font-bold text-[#151719]">{COMPANY.name}</p>
              <p className="text-xs text-[#737980]">Interstate Motor Carrier</p>
            </div>

            <div className="p-6 rounded bg-white border border-[#151719]/10 space-y-1">
              <span className="text-xs text-[#737980] uppercase font-mono block">Primary Operating Base</span>
              <p className="text-base font-bold text-[#151719]">Brentwood, TN 37027</p>
              <p className="text-xs text-[#737980]">1200 Chickasaw Drive</p>
            </div>

            <div className="p-6 rounded bg-white border border-[#151719]/10 space-y-1">
              <span className="text-xs text-[#737980] uppercase font-mono block">USDOT Identifier</span>
              <p className="text-base font-bold text-[#151719]">{COMPANY.usdot}</p>
              <p className="text-xs text-[#737980]">Federal Motor Carrier Safety Admin</p>
            </div>

            <div className="p-6 rounded bg-white border border-[#151719]/10 space-y-1">
              <span className="text-xs text-[#737980] uppercase font-mono block">MC Operating Docket</span>
              <p className="text-base font-bold text-[#151719]">{COMPANY.mc}</p>
              <p className="text-xs text-[#737980]">Interstate Operating Authority</p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded bg-[#151719]/[0.02] border border-[#151719]/10 text-xs text-[#737980] leading-relaxed">
            <strong className="text-[#151719]">Verification Note:</strong> Secondary historical listings in Nashville and specific equipment accessories (such as liftgates or pallet jacks) are confirmed on an individual route basis prior to rate agreement execution.
          </div>

        </div>
      </section>

      {/* CLOSING CTA */}
      <ClosingCta
        headline="Looking to Secure Dedicated Capacity?"
        supportingCopy="Connect with DNP Couriers LLC to discuss your recurring lane parameters, schedule requirements, and equipment specifications."
        primaryCtaText="Discuss Dedicated Lanes"
        primaryCtaLink="/dedicated-lanes"
        secondaryCtaText={`Call ${COMPANY.phone}`}
        secondaryCtaLink={`tel:${COMPANY.phoneRaw}`}
      />
    </>
  );
}
