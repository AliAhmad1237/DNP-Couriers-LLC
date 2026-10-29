import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck, MapPin, Truck, Repeat, CheckCircle2, Building2 } from 'lucide-react';
import { COMPANY } from '../data/company';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import ClosingCta from '../components/ClosingCta';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Box Truck Capacity & Dedicated Lanes"
        description="DNP Couriers LLC provides dependable box-truck transportation and seeks dedicated-lane opportunities with shippers, freight brokers, and logistics partners. Brentwood, TN."
      />

      {/* SECTION 1: CINEMATIC BOX-TRUCK HERO */}
      <section className="relative bg-[#151719] text-[#FAFAF8] overflow-hidden min-h-[92vh] flex items-center">
        {/* Background Full-Width Image with Subtle Dark Wash */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            imageKey="boxTruckHero"
            className="w-full h-full object-cover object-center opacity-30"
            priority={true}
            alt="Commercial white straight box truck traveling on an American interstate highway"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151719] via-[#151719]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-36 w-full">
          <div className="max-w-3xl space-y-8">
            
            {/* Operational Focus Tag */}
            <div className="inline-flex items-center gap-3">
              <span className="w-6 h-[1.5px] bg-[#D99A38]"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#FAFAF8]/90">
                Interstate Motor Carrier &bull; Brentwood, Tennessee &bull; USDOT {COMPANY.usdot}
              </span>
            </div>

            {/* Required Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08]">
              Box Truck Capacity. Built for Dedicated Lanes.
            </h1>

            {/* Required Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#FAFAF8]/85 font-normal leading-relaxed max-w-2xl">
              DNP Couriers LLC is seeking dedicated transportation opportunities for its box-truck operations. We welcome conversations with shippers, freight brokers, and logistics partners looking for dependable capacity on recurring routes.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                to="/dedicated-lanes"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-[#151719] bg-[#FAFAF8] hover:bg-white rounded transition-colors"
              >
                <span>Discuss Dedicated Lanes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-[#FAFAF8] bg-transparent hover:bg-white/[0.08] border border-[#FAFAF8]/30 hover:border-[#FAFAF8]/60 rounded transition-colors"
              >
                <span>Contact Our Team</span>
              </Link>
            </div>

            {/* Quick Badges */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-[#FAFAF8]/70">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#D99A38]" />
                <span>Medium &amp; Heavy-Duty Straight Box Trucks</span>
              </div>
              <div className="flex items-center gap-2">
                <Repeat className="w-4 h-4 text-[#D99A38]" />
                <span>Recurring Route Capacity</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D99A38]" />
                <span>Active Federal Operating Authority</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: DEDICATED LANES CALLOUT SECTION */}
      <section className="py-20 sm:py-28 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left 6 Cols: Strategic Lane Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
                Lane Development Focus
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#151719] leading-tight">
                Looking for Dedicated Box-Truck Capacity?
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#737980] leading-relaxed">
                <p className="text-[#151719] font-medium text-lg leading-relaxed">
                  We are actively developing consistent lane relationships with commercial freight brokers, direct shippers, and 3PL partners.
                </p>
                <p>
                  Spot-market volatility challenges supply chain consistency. DNP Couriers LLC prioritizes recurring contracted routes where regular schedules, clear freight expectations, and dependable equipment availability create lasting commercial value for both parties.
                </p>
                <p>
                  Whether you manage daily shuttle runs, multi-stop regional distribution, or recurring weekly interstate movements, we invite direct conversation regarding your scheduled volume.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/dedicated-lanes"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#FAFAF8] bg-[#151719] hover:bg-[#151719]/90 rounded transition-colors group"
                >
                  <span>Explore Dedicated Lanes</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/request-a-quote"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#151719] bg-white border border-[#151719]/15 hover:border-[#151719]/40 rounded transition-colors"
                >
                  <span>Submit Lane Inquiry</span>
                </Link>
              </div>
            </div>

            {/* Right 6 Cols: Box Truck at Distribution Center */}
            <div className="lg:col-span-6 overflow-hidden rounded bg-[#151719]/5">
              <SafeImage
                imageKey="boxTruckDistribution"
                className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-[1.01] transition-transform duration-500"
                alt="Commercial straight box truck positioned at modern distribution center loading dock"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: OPERATIONAL ADVANTAGES FOR PARTNERS */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block mb-2">
              Partnership Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#151719]">
              Built for Consistent Commercial Operations
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#737980]">
              How DNP Couriers LLC aligns with freight brokers and commercial shippers seeking committed box-truck transportation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Card 1 */}
            <div className="border border-[#151719]/10 p-8 rounded bg-[#FAFAF8] space-y-4 hover:border-[#151719]/25 transition-colors">
              <div className="w-10 h-10 rounded bg-[#151719] text-[#D99A38] flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-xl font-bold text-[#151719]">Freight Broker Collaboration</h3>
              <p className="text-sm text-[#737980] leading-relaxed">
                We work collaboratively with freight brokerages looking for reliable motor carriers on contracted customer lanes. Prompt rate confirmation turnaround and direct communication.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-[#151719]/10 p-8 rounded bg-[#FAFAF8] space-y-4 hover:border-[#151719]/25 transition-colors">
              <div className="w-10 h-10 rounded bg-[#151719] text-[#D99A38] flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-xl font-bold text-[#151719]">Direct Shipper Contracts</h3>
              <p className="text-sm text-[#737980] leading-relaxed">
                Manufacturers, distributors, and commercial suppliers looking for dedicated box-truck transportation between facilities, warehouse hubs, or retail delivery points.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-[#151719]/10 p-8 rounded bg-[#FAFAF8] space-y-4 hover:border-[#151719]/25 transition-colors">
              <div className="w-10 h-10 rounded bg-[#151719] text-[#D99A38] flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-xl font-bold text-[#151719]">3PL Logistics Programs</h3>
              <p className="text-sm text-[#737980] leading-relaxed">
                Third-party logistics providers requiring dedicated straight-truck capacity to fulfill specialized scheduled runs and regional distribution commitments.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: BOX-TRUCK OPERATIONS & FREIGHT CATEGORIES */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-16 sm:mb-24">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block mb-2">
              Registered Cargo Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#151719]">
              Commercial Cargo Services
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#737980]">
              Straight box-truck operations optimized for palletized commercial freight and specialized movements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
            
            {/* Feature 1: General Freight */}
            <div className="space-y-6 group">
              <div className="overflow-hidden rounded bg-[#151719]/5">
                <SafeImage
                  imageKey="generalFreight"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  alt="Commercial palletized general freight loading"
                />
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#737980] block">
                  Registered Category 01
                </span>
                <h3 className="text-2xl font-bold text-[#151719] group-hover:text-[#D99A38] transition-colors">
                  General Freight
                </h3>
                <p className="text-base text-[#737980] leading-relaxed">
                  Dependable box-truck transportation for palletized commercial goods, industrial components, packaged supplies, and retail replenishment. We coordinate directly with shippers to confirm load specs and dock scheduling.
                </p>
                <div className="pt-2">
                  <Link
                    to="/services/general-freight"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#151719] hover:text-[#D99A38] transition-colors"
                  >
                    <span>Explore General Freight</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature 2: Household Goods */}
            <div className="space-y-6 group">
              <div className="overflow-hidden rounded bg-[#151719]/5">
                <SafeImage
                  imageKey="householdGoods"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  alt="Protected and packaged household goods cargo"
                />
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#737980] block">
                  Registered Category 02
                </span>
                <h3 className="text-2xl font-bold text-[#151719] group-hover:text-[#D99A38] transition-colors">
                  Household Goods
                </h3>
                <p className="text-base text-[#737980] leading-relaxed">
                  Transportation services relating to household goods, subject to verified operational authority, confirmed equipment parameters, and pre-booking review.
                </p>
                <div className="pt-2">
                  <Link
                    to="/services/household-goods"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#151719] hover:text-[#D99A38] transition-colors"
                  >
                    <span>View Household Goods Information</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: FOCUSED ON BOX-TRUCK TRANSPORTATION (Dark Section) */}
      <section className="py-24 sm:py-32 bg-[#151719] text-[#FAFAF8] border-b border-[#151719]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 overflow-hidden rounded bg-white/5 order-2 lg:order-1">
              <SafeImage
                imageKey="boxTruckFreight"
                className="w-full h-[400px] sm:h-[480px] object-cover opacity-85"
                alt="Commercial straight box truck beside safely arranged freight at distribution warehouse"
              />
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
                Equipment &amp; Agility
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Focused on Box-Truck Transportation.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#FAFAF8]/75 leading-relaxed">
                <p className="text-[#FAFAF8] font-medium text-lg leading-relaxed">
                  Straight box trucks provide vital commercial agility for medium-format freight movements.
                </p>
                <p>
                  Compared to Class 8 tractor-trailers, straight box trucks offer streamlined access to urban facilities, tight distribution centers, and commercial retail sites while maintaining dock-height compatibility and substantial payload capacity.
                </p>
                <p>
                  By focusing on box-truck capacity, DNP Couriers LLC provides reliable point-to-point transportation without the overhead and physical constraints of semi-trailer operations.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/dedicated-lanes"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#151719] bg-[#FAFAF8] hover:bg-white rounded transition-colors"
                >
                  <span>Discuss Recurring Lanes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#FAFAF8] border border-white/20 hover:border-white/50 rounded transition-colors"
                >
                  <span>About Our Company</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: PARTNERSHIP CTA */}
      <ClosingCta
        headline="Let's Build a Transportation Partnership."
        supportingCopy="Whether you have an established lane to fill or want to explore contract capacity, we welcome the opportunity to discuss your freight requirements."
        primaryCtaText="Submit a Lane Inquiry"
        primaryCtaLink="/request-a-quote"
        secondaryCtaText={`Call ${COMPANY.phone}`}
        secondaryCtaLink={`tel:${COMPANY.phoneRaw}`}
      />
    </>
  );
}
