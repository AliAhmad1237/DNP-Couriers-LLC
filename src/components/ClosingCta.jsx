import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/company';
import SafeImage from './SafeImage';

export default function ClosingCta({
  headline = "Have Freight to Move? Let's Talk.",
  supportingCopy = "Share your transportation requirements with DNP Couriers LLC to begin a conversation about your shipment.",
  primaryCtaText = "Request a Quote",
  primaryCtaLink = "/request-a-quote",
  secondaryCtaText,
  secondaryCtaLink,
}) {
  const isExternalSecondary = secondaryCtaLink && secondaryCtaLink.startsWith('tel:');
  const secLink = secondaryCtaLink || `tel:${COMPANY.phoneRaw}`;
  const secText = secondaryCtaText || `Call ${COMPANY.phone}`;

  return (
    <section className="relative bg-[#151719] text-[#FAFAF8] overflow-hidden py-24 sm:py-32">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          imageKey="closingCta"
          className="w-full h-full object-cover object-center opacity-25"
          alt="Commercial straight box truck on highway in late-afternoon light"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151719] via-[#151719]/80 to-[#151719]/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-8">
          
          <div className="inline-flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-[#D99A38]"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#FAFAF8]/80">
              Start a Conversation
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            {headline}
          </h2>

          <p className="text-lg sm:text-xl text-[#FAFAF8]/85 font-normal leading-relaxed max-w-2xl">
            {supportingCopy}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              to={primaryCtaLink}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-[#151719] bg-[#FAFAF8] hover:bg-white rounded transition-colors"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {isExternalSecondary || !secondaryCtaLink ? (
              <a
                href={secLink}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-[#FAFAF8] bg-transparent hover:bg-white/[0.08] border border-[#FAFAF8]/30 hover:border-[#FAFAF8]/60 rounded transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D99A38]" />
                <span>{secText}</span>
              </a>
            ) : (
              <Link
                to={secondaryCtaLink}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-[#FAFAF8] bg-transparent hover:bg-white/[0.08] border border-[#FAFAF8]/30 hover:border-[#FAFAF8]/60 rounded transition-colors"
              >
                <span>{secText}</span>
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
