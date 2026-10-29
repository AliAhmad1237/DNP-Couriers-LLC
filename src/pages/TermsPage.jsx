import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { COMPANY } from '../data/company';
import SEO from '../components/SEO';

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Use"
        description="Terms of use for the DNP Couriers LLC website. General website use, informational disclosures, and inquiry submission policies."
      />

      <section className="bg-[#151719] text-[#FAFAF8] pt-36 pb-16 sm:pt-44 sm:pb-20 border-b border-[#151719]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D99A38] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#FAFAF8] leading-tight">
              Terms of Use
            </h1>
            <p className="text-sm text-[#737980]">
              Last updated: October 2026 &bull; DNP Couriers LLC
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          {/* Review Notice */}
          <div className="mb-10 p-5 rounded bg-amber-500/[0.06] border border-[#D99A38]/30 text-xs text-[#737980] space-y-1">
            <strong className="text-[#151719] block font-medium">Notice Regarding Operational Terms:</strong>
            <p>
              These Terms of Use govern access to this public website. Actual commercial freight carriage, rate agreements, bills of lading, and carrier liability terms are governed solely by separate written transportation contracts executed directly between DNP Couriers LLC and the shipper.
            </p>
          </div>

          <div className="space-y-10 text-sm sm:text-base text-[#737980] leading-relaxed">
            
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#151719]">1. Website Use and Informational Nature</h2>
              <p>
                The content on this website is provided for general informational purposes to describe the transportation services offered by DNP Couriers LLC. Access to and use of this website is conditioned on your agreement with these terms.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#151719]">2. Inquiries Do Not Form a Contract</h2>
              <p>
                Submitting a quote request or contact message through this website does not constitute a binding transportation agreement, load tender, or confirmed carrier booking. All freight commitments, transit schedules, and commercial rates require mutual written agreement and execution of applicable documentation.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#151719]">3. Intellectual Property</h2>
              <p>
                All text, graphics, wordmarks, layout compositions, and original visual elements on this website are the property of DNP Couriers LLC or used under authorized license, and are protected by applicable intellectual property and copyright laws.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#151719]">4. Accuracy of Information</h2>
              <p>
                While DNP Couriers LLC endeavors to maintain accurate information regarding its registered motor carrier classifications and contact details, website information is subject to change. Specific equipment capabilities, scheduling, and service terms must be confirmed directly with our office.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#151719]">5. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, DNP Couriers LLC shall not be liable for any indirect, incidental, or consequential damages resulting from the use of or inability to access this website or reliance on website information.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#151719]/10">
              <h2 className="text-xl font-bold text-[#151719]">6. Inquiries Regarding Terms</h2>
              <p>
                For questions regarding these website terms, please contact:
              </p>
              <div className="text-xs font-mono text-[#151719] space-y-1 pt-1">
                <div>DNP Couriers LLC</div>
                <div>1200 Chickasaw Drive, Brentwood, TN 37027, United States</div>
                <div>Telephone: {COMPANY.phone}</div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
