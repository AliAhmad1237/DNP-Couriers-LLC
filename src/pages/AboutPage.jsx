import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck, MapPin, CheckCircle, FileText } from 'lucide-react';
import { COMPANY } from '../data/company';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import ClosingCta from '../components/ClosingCta';

export default function AboutPage() {
  const principles = [
    {
      number: "01",
      title: "Understanding Shipment Requirements",
      description:
        "Every freight movement starts with thorough intake. We prioritize taking the time to review cargo dimensions, packaging, pickup constraints, and delivery expectations before finalizing dispatch arrangements.",
    },
    {
      number: "02",
      title: "Maintaining Clear Communication",
      description:
        "Shippers need straightforward updates, not automated evasion. We emphasize direct contact, clear scheduling parameters, and proactive communication throughout each stage of transport.",
    },
    {
      number: "03",
      title: "Coordinating Details Professionally",
      description:
        "From paperwork accuracy to compliance with federal motor carrier standards, we manage each load with operational discipline and respect for our clients' timelines.",
    },
  ];

  return (
    <>
      <SEO
        title="About DNP Couriers"
        description="Learn about DNP Couriers LLC, an authorized interstate motor carrier based in Brentwood, Tennessee providing commercial freight transportation services."
      />

      {/* HERO SECTION */}
      <section className="relative bg-[#151719] text-[#FAFAF8] overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="absolute inset-0 z-0">
          <SafeImage
            imageKey="about"
            className="w-full h-full object-cover object-center opacity-25"
            alt="Atmospheric commercial transportation scene"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151719] via-[#151719]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
              About DNP Couriers LLC
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-tight">
              The Company Behind the Transportation.
            </h1>
            <p className="text-lg sm:text-xl text-[#FAFAF8]/85 font-normal leading-relaxed">
              DNP Couriers LLC is an interstate motor carrier based in Brentwood, Tennessee, dedicated to moving commercial freight with consistency, clarity, and care.
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
                Company Profile
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#151719] leading-tight">
                An Operational Partner Grounded in Service.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#737980] leading-relaxed">
              <p className="text-[#151719] font-medium text-lg sm:text-xl leading-relaxed">
                Operating under USDOT 2321171 and MC 960224, DNP Couriers LLC serves as an interstate carrier for commercial goods.
              </p>
              <p>
                Based at 1200 Chickasaw Drive in Brentwood, Tennessee, the business operates with a simple charter: to provide straightforward, dependable freight carriage for commercial shippers who need a partner they can speak with directly.
              </p>
              <p>
                In an industry frequently clouded by complex layers of re-brokering and impersonal call centers, our approach centers on human coordination. We review your freight specifications, verify requirements, and agree on clear expectations before accepting a load.
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
              How We Approach Every Shipment
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#737980]">
              These service principles guide our daily logistics operations and client interactions.
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
              Verified Business Information
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
              <p className="text-xs text-[#737980]">Federal Motor Carrier Registry</p>
            </div>

            <div className="p-6 rounded bg-white border border-[#151719]/10 space-y-1">
              <span className="text-xs text-[#737980] uppercase font-mono block">MC Operating Docket</span>
              <p className="text-base font-bold text-[#151719]">{COMPANY.mc}</p>
              <p className="text-xs text-[#737980]">Interstate Operating Authority</p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded bg-[#151719]/[0.02] border border-[#151719]/10 text-xs text-[#737980] leading-relaxed">
            <strong className="text-[#151719]">Verification Note:</strong> Secondary operational listings in Nashville and service boundaries are subject to owner verification prior to formal carrier contracting.
          </div>

        </div>
      </section>

      {/* CLOSING CTA */}
      <ClosingCta
        headline="Let's Discuss Your Transportation Needs."
        supportingCopy="Connect with DNP Couriers LLC to review your freight schedule, cargo requirements, and equipment considerations."
      />
    </>
  );
}
