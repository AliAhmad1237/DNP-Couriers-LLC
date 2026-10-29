import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, FileText, Phone } from 'lucide-react';
import { COMPANY } from '../data/company';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found (404)"
        description="The requested page could not be found. Navigate back to DNP Couriers LLC transportation services."
      />

      <section className="min-h-[80vh] flex items-center justify-center bg-[#FAFAF8] py-32 px-6 sm:px-8">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#D99A38] block">
            HTTP Error 404
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#151719]">
            Page Not Found
          </h1>

          <p className="text-base text-[#737980] leading-relaxed">
            The page you requested could not be located on the DNP Couriers LLC website. Please check the URL or use the navigation options below to return to our services.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#151719] hover:bg-[#151719]/90 rounded transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#151719] border border-[#151719]/20 hover:border-[#151719]/50 rounded transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>View Services</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-[#151719]/10 text-xs text-[#737980]">
            Need immediate assistance? Contact our office at{' '}
            <a href={`tel:${COMPANY.phoneRaw}`} className="text-[#151719] font-bold underline">
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
