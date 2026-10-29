import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY } from '../data/company';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import ClosingCta from '../components/ClosingCta';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Interstate Freight Transportation"
        description="DNP Couriers LLC provides dependable interstate freight transportation for businesses moving goods across their supply chains. Headquartered in Brentwood, TN."
      />

      {/* SECTION 2: CINEMATIC HERO */}
      <section className="relative bg-[#151719] text-[#FAFAF8] overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Full-Width Image with Delicate Dark Wash */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            imageKey="hero"
            className="w-full h-full object-cover object-center opacity-30"
            priority={true}
            alt="Modern Class 8 semi-truck on an American interstate highway during golden hour"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151719] via-[#151719]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-36 w-full">
          <div className="max-w-3xl space-y-8">
            
            {/* Location Tag */}
            <div className="inline-flex items-center gap-3">
              <span className="w-6 h-[1.5px] bg-[#D99A38]"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#FAFAF8]/80">
                Interstate Motor Carrier &bull; Brentwood, Tennessee
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08]">
              Transportation Built Around Your Business.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#FAFAF8]/85 font-normal leading-relaxed max-w-2xl">
              DNP Couriers LLC provides interstate freight transportation for businesses moving goods across their supply chains.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                to="/request-a-quote"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-[#151719] bg-[#FAFAF8] hover:bg-white rounded transition-colors"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-[#FAFAF8] bg-transparent hover:bg-white/[0.08] border border-[#FAFAF8]/30 hover:border-[#FAFAF8]/60 rounded transition-colors"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: INTRODUCTION (Editorial Two-Column) */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left 6 Cols: Editorial Copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
                Company Introduction
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#151719] leading-tight">
                A Practical Approach to Moving Freight.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#737980] leading-relaxed">
                <p className="text-[#151719] font-medium text-lg leading-relaxed">
                  DNP Couriers LLC focuses on reliable, straightforward freight transportation for commercial shippers.
                </p>
                <p>
                  As an authorized interstate carrier operating from Brentwood, Tennessee, we work with businesses that value clear communication and careful attention to shipment details. Every load is coordinated directly with our team to ensure equipment and schedule parameters match your cargo's specific needs.
                </p>
                <p>
                  We believe professional transportation starts with understanding what you are moving and setting realistic operational expectations from the start.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#151719] hover:text-[#D99A38] transition-colors group"
                >
                  <span>Learn more about our company</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right 6 Cols: Supporting Photograph */}
            <div className="lg:col-span-6 overflow-hidden rounded bg-[#151719]/5">
              <SafeImage
                imageKey="about"
                className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-[1.01] transition-transform duration-500"
                alt="Commercial semi-truck and freight operations"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES OVERVIEW */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-16 sm:mb-24">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block mb-2">
              Transportation Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#151719]">
              Listed Cargo Capabilities
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#737980]">
              Explore the core transportation categories registered for DNP Couriers LLC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
            
            {/* Feature 1: General Freight */}
            <div className="space-y-6 group">
              <div className="overflow-hidden rounded bg-[#151719]/5">
                <SafeImage
                  imageKey="generalFreight"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  alt="General freight cargo loading"
                />
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#737980] block">
                  Category 01
                </span>
                <h3 className="text-2xl font-bold text-[#151719] group-hover:text-[#D99A38] transition-colors">
                  General Freight
                </h3>
                <p className="text-base text-[#737980] leading-relaxed">
                  Professional freight transportation for general commercial goods. We coordinate directly with shippers to confirm load dimensions, schedule parameters, and equipment availability.
                </p>
                <div className="pt-2">
                  <Link
                    to="/services/general-freight"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#151719] hover:text-[#D99A38] transition-colors"
                  >
                    <span>View General Freight Details</span>
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
                  alt="Protected and packaged household goods"
                />
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#737980] block">
                  Category 02
                </span>
                <h3 className="text-2xl font-bold text-[#151719] group-hover:text-[#D99A38] transition-colors">
                  Household Goods
                </h3>
                <p className="text-base text-[#737980] leading-relaxed">
                  Transportation services relating to household goods, subject to the company's confirmed service offerings and applicable operating authority.
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

      {/* SECTION 5: INDUSTRIES AND CARGO */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
                Cargo Classifications
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#151719] leading-tight">
                Transportation for Different Types of Freight.
              </h2>
              <p className="text-base sm:text-lg text-[#737980] leading-relaxed">
                DNP Couriers LLC moves freight across its registered cargo categories. Because transportation requirements vary widely between commodities, confirming cargo acceptance, service parameters, and equipment availability in advance ensures a successful movement.
              </p>
              <div className="pt-2">
                <Link
                  to="/industries"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#151719] hover:text-[#D99A38] transition-colors group"
                >
                  <span>Explore cargo classifications</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 overflow-hidden rounded bg-[#151719]/5">
              <SafeImage
                imageKey="industries"
                className="w-full h-[380px] sm:h-[440px] object-cover"
                alt="Commercial freight in transit across supply chains"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: COMPANY INTRODUCTION (Dark Charcoal Section) */}
      <section className="py-24 sm:py-32 bg-[#151719] text-[#FAFAF8] border-b border-[#151719]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 overflow-hidden rounded bg-white/5 order-2 lg:order-1">
              <SafeImage
                imageKey="fleetDetail"
                className="w-full h-[400px] sm:h-[480px] object-cover opacity-80"
                alt="Close editorial detail of modern commercial freight tractor"
              />
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
                Operational Philosophy
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Clear Communication. Professional Transportation.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#737980] leading-relaxed">
                <p className="text-[#FAFAF8] font-medium text-lg leading-relaxed">
                  Moving commercial freight requires discipline, honesty, and consistent attention to detail.
                </p>
                <p>
                  At DNP Couriers LLC, we believe that open communication between shipper and carrier is the cornerstone of dependable logistics. We focus on thoroughly understanding your cargo specifications, pickup requirements, and delivery windows before wheels ever turn.
                </p>
                <p>
                  Our goal is to serve as a reliable, straightforward transportation resource that commercial partners can contact with confidence.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#151719] bg-[#FAFAF8] hover:bg-white rounded transition-colors"
                >
                  <span>Get to Know DNP Couriers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: CONTACT CONVERSION SECTION */}
      <ClosingCta
        headline="Have Freight to Move? Let's Talk."
        supportingCopy="Share your transportation requirements with DNP Couriers LLC to begin a conversation about your shipment."
      />
    </>
  );
}
