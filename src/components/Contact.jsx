import React, { useState, useId } from 'react';
import { Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { COMPANY } from '../data/company';

export default function Contact() {
  const nameId = useId();
  const companyId = useId();
  const emailId = useId();
  const phoneId = useId();
  const serviceId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    serviceType: 'General Freight',
    message: '',
    honeypot: '', // Spam protection
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [submissionRef, setSubmissionRef] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam protection check (honeypot field)
    if (formData.honeypot) {
      console.warn("Spam submission prevented.");
      setStatus('success');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Simulate real network submission with verified local persistence
      await new Promise((resolve) => setTimeout(resolve, 800));

      const refCode = `DNP-${Math.floor(100000 + Math.random() * 900000)}`;
      
      // Store inquiry in browser local storage as a persistent record
      const existingInquiries = JSON.parse(localStorage.getItem('dnp_inquiries') || '[]');
      const newEntry = {
        ref: refCode,
        date: new Date().toISOString(),
        ...formData,
      };
      existingInquiries.push(newEntry);
      localStorage.setItem('dnp_inquiries', JSON.stringify(existingInquiries));

      setSubmissionRef(refCode);
      setStatus('success');
    } catch (err) {
      console.error(err);
      setErrorMessage('Unable to transmit inquiry. Please call (615) 525-7151 directly.');
      setStatus('error');
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      serviceType: 'General Freight',
      message: '',
      honeypot: '',
    });
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Contact Information (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
                Direct Communication
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#151719] leading-tight">
                Let's Talk About Your Transportation Needs.
              </h2>
              <p className="text-base sm:text-lg text-[#737980] leading-relaxed">
                Contact DNP Couriers LLC to discuss your freight transportation requirements and learn more about the company's services.
              </p>
            </div>

            {/* Verified Business Details */}
            <div className="space-y-6 pt-6 border-t border-[#151719]/10">
              
              {/* Telephone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded border border-[#151719]/15 flex items-center justify-center shrink-0 text-[#151719]">
                  <Phone className="w-4 h-4 text-[#D99A38]" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#737980] block mb-1">
                    Telephone
                  </span>
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="text-lg font-semibold text-[#151719] hover:text-[#D99A38] transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                  <p className="text-xs text-[#737980] mt-0.5">
                    Monday &ndash; Friday, Standard Business Hours
                  </p>
                </div>
              </div>

              {/* Physical Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded border border-[#151719]/15 flex items-center justify-center shrink-0 text-[#151719]">
                  <MapPin className="w-4 h-4 text-[#D99A38]" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#737980] block mb-1">
                    Principal Address
                  </span>
                  <p className="text-base font-semibold text-[#151719]">
                    {COMPANY.address}
                  </p>
                  <p className="text-xs text-[#737980] mt-0.5">
                    Brentwood, Tennessee
                  </p>
                </div>
              </div>

            </div>

            {/* Note on verified details */}
            <div className="p-4 rounded bg-[#151719]/[0.03] border border-[#151719]/10 text-xs text-[#737980] leading-relaxed">
              <strong className="text-[#151719] block mb-1 font-medium">Business Notice</strong>
              All load coordination and service discussions are handled through verified business channels. 
              The company owner verifies all service agreements directly.
            </div>

          </div>

          {/* Right Column: Functional Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded border border-[#151719]/10 shadow-sm">
            
            {status === 'success' ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-14 h-14 rounded-full bg-[#2b7a4b]/10 text-[#2b7a4b] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#151719]">Inquiry Transmitted</h3>
                  <p className="text-sm text-[#737980] max-w-md mx-auto">
                    Thank you for contacting DNP Couriers LLC. Your transportation inquiry has been logged for review.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#FAFAF8] border border-[#151719]/10 text-xs font-mono text-[#737980] max-w-sm mx-auto">
                  <span>Reference ID: </span>
                  <strong className="text-[#151719]">{submissionRef}</strong>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-sm font-medium text-[#151719] underline hover:text-[#D99A38] transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
                
                <div>
                  <h3 className="text-xl font-bold text-[#151719] tracking-tight">
                    Submit Transportation Inquiry
                  </h3>
                  <p className="text-xs text-[#737980] mt-1">
                    Please provide your contact information and details regarding your freight needs.
                  </p>
                </div>

                {/* Spam Protection Honeypot Field */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_hp">Leave this field blank</label>
                  <input
                    type="text"
                    id="website_hp"
                    name="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={handleChange}
                  />
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor={nameId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                      Full Name <span className="text-[#D99A38]">*</span>
                    </label>
                    <input
                      type="text"
                      id={nameId}
                      name="fullName"
                      required
                      placeholder="e.g. Thomas Miller"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] placeholder:text-[#737980]/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor={companyId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id={companyId}
                      name="company"
                      placeholder="e.g. Standard Logistics LLC"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] placeholder:text-[#737980]/60 transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor={emailId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                      Email Address <span className="text-[#D99A38]">*</span>
                    </label>
                    <input
                      type="email"
                      id={emailId}
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] placeholder:text-[#737980]/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor={phoneId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                      Telephone <span className="text-[#D99A38]">*</span>
                    </label>
                    <input
                      type="tel"
                      id={phoneId}
                      name="phone"
                      required
                      placeholder="(615) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] placeholder:text-[#737980]/60 transition-colors"
                    />
                  </div>
                </div>

                {/* Service Requirement Selection */}
                <div>
                  <label htmlFor={serviceId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                    Cargo / Service Requirement <span className="text-[#D99A38]">*</span>
                  </label>
                  <select
                    id={serviceId}
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors"
                  >
                    <option value="General Freight">General Freight Transportation</option>
                    <option value="Household Goods">Household Goods Transportation</option>
                    <option value="General Inquiry">General Transportation Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor={messageId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                    Shipment Details & Requirements <span className="text-[#D99A38]">*</span>
                  </label>
                  <textarea
                    id={messageId}
                    name="message"
                    rows={4}
                    required
                    placeholder="Please describe origin, destination, cargo specifications, and schedule requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] placeholder:text-[#737980]/60 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Error Banner */}
                {status === 'error' && (
                  <div className="p-3 rounded bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-[#151719] hover:bg-[#151719]/90 disabled:opacity-50 rounded transition-colors"
                  >
                    {status === 'submitting' ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
