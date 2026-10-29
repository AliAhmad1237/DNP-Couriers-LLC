import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, AlertCircle } from 'lucide-react';
import { COMPANY } from '../data/company';
import SEO from '../components/SEO';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for DNP Couriers LLC. Learn how information submitted through our website forms is collected, used, and handled."
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
              Privacy Policy
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
            <strong className="text-[#151719] block font-medium">Notice Regarding Legal Review:</strong>
            <p>
              This document outlines general website privacy practices. Company management should review and formally approve all terms with designated legal counsel prior to formal commercial contracting.
            </p>
          </div>

          <div className="space-y-10 text-sm sm:text-base text-[#737980] leading-relaxed">
            
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#151719]">1. Information We Collect</h2>
              <p>
                DNP Couriers LLC collects personal and commercial information that you voluntarily provide when submitting an inquiry through our contact or quote forms. This information may include:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Contact details: your name, business name, email address, and telephone number.</li>
                <li>Shipment details: origin and destination cities, cargo descriptions, approximate weights, dimensions, and requested dates.</li>
                <li>Any additional messages or operational instructions you choose to provide.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#151719]">2. How Information Is Used</h2>
              <p>
                The information provided is used exclusively to:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Evaluate transportation feasibility and respond to quote requests.</li>
                <li>Communicate with you regarding your commercial transportation inquiries.</li>
                <li>Fulfill business coordination, recordkeeping, and operational requirements.</li>
              </ul>
              <p>
                We do not sell, rent, or trade your contact information to third-party marketing brokers.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#151719]">3. Data Handling and Retention</h2>
              <p>
                Inquiry data submitted through the website is transmitted to our designated operational staff and stored within secure business email and administrative records for the duration necessary to handle your inquiries and comply with applicable transportation recordkeeping guidelines.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#151719]">4. Third-Party Service Providers</h2>
              <p>
                We may engage hosting, form submission, and technical infrastructure providers to operate this website. These providers process data on our behalf in accordance with their respective privacy and security standards.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#151719]">5. User Rights and Inquiries</h2>
              <p>
                If you have questions regarding the information you have submitted, or if you wish to update or request the removal of your contact information from our active communication records, please contact us directly.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#151719]/10">
              <h2 className="text-xl font-bold text-[#151719]">6. Contact Information</h2>
              <p>
                For privacy-related questions, please reach out to DNP Couriers LLC:
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
