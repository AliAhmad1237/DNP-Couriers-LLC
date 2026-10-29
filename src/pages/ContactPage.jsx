import React, { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Send, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/company';
import SEO from '../components/SEO';

export default function ContactPage() {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const subjectId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [refCode, setRefCode] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.honeypot) {
      console.warn("Spam filtered.");
      setStatus('success');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const code = `DNP-MSG-${Math.floor(100000 + Math.random() * 900000)}`;
      const existing = JSON.parse(localStorage.getItem('dnp_contact_messages') || '[]');
      existing.push({
        reference: code,
        date: new Date().toISOString(),
        ...formData,
      });
      localStorage.setItem('dnp_contact_messages', JSON.stringify(existing));

      setRefCode(code);
      setStatus('success');
    } catch (err) {
      console.error(err);
      setErrorMessage("Unable to send your message. Please call our office directly at (615) 525-7151.");
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      honeypot: '',
    });
    setStatus('idle');
  };

  return (
    <>
      <SEO
        title="Contact DNP Couriers LLC"
        description="Contact DNP Couriers LLC to discuss freight transportation services or ask a question. Primary base in Brentwood, Tennessee: (615) 525-7151."
      />

      {/* HERO SECTION */}
      <section className="bg-[#151719] text-[#FAFAF8] pt-36 pb-20 sm:pt-44 sm:pb-28 border-b border-[#151719]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
              Direct Inquiries
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-tight">
              Contact DNP Couriers LLC.
            </h1>
            <p className="text-lg sm:text-xl text-[#FAFAF8]/85 font-normal leading-relaxed">
              Reach out to discuss your freight transportation needs or ask a question about the company's services.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            
            {/* Left 5 Cols: Verified Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
                  Communication Channels
                </span>
                <h2 className="text-3xl font-bold text-[#151719] tracking-tight">
                  Reach Our Team Directly
                </h2>
                <p className="text-base text-[#737980] leading-relaxed">
                  We look forward to speaking with you regarding your commercial transportation requirements.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-[#151719]/10">
                
                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded border border-[#151719]/15 flex items-center justify-center shrink-0 text-[#151719]">
                    <Phone className="w-4 h-4 text-[#D99A38]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#737980] block mb-0.5">
                      Telephone
                    </span>
                    <a
                      href={`tel:${COMPANY.phoneRaw}`}
                      className="text-lg font-semibold text-[#151719] hover:text-[#D99A38] transition-colors"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                {/* Primary Listed Base */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded border border-[#151719]/15 flex items-center justify-center shrink-0 text-[#151719]">
                    <MapPin className="w-4 h-4 text-[#D99A38]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#737980] block mb-0.5">
                      Primary Listed Address
                    </span>
                    <p className="text-base font-semibold text-[#151719]">
                      {COMPANY.primaryAddress}
                    </p>
                    <p className="text-xs text-[#737980] mt-0.5">
                      Brentwood, Tennessee
                    </p>
                  </div>
                </div>

              </div>

              {/* Verified Location Notice */}
              <div className="p-5 rounded bg-white border border-[#151719]/10 text-xs text-[#737980] space-y-2">
                <strong className="text-[#151719] font-medium block">
                  Operating Location Notice
                </strong>
                <p className="leading-relaxed">
                  DNP Couriers LLC's primary registered business location is 1200 Chickasaw Drive, Brentwood, TN 37027. We conduct business coordination directly via verified phone and written correspondence.
                </p>
              </div>

              {/* Quote CTA Link */}
              <div className="pt-2">
                <div className="p-6 rounded bg-[#151719] text-[#FAFAF8] space-y-3">
                  <h3 className="text-base font-bold">Have Detailed Shipment Specifications?</h3>
                  <p className="text-xs text-[#737980] leading-relaxed">
                    If you have dimensions, piece counts, and exact dates, submit our comprehensive quote intake form.
                  </p>
                  <Link
                    to="/request-a-quote"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D99A38] hover:text-white transition-colors"
                  >
                    <span>Go to Request a Quote Form</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

            {/* Right 7 Cols: Functional Contact Form without placeholder text */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded border border-[#151719]/10 shadow-sm">
              
              {status === 'success' ? (
                <div className="py-8 text-center space-y-6">
                  <div className="w-14 h-14 rounded-full bg-[#2b7a4b]/10 text-[#2b7a4b] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#151719]">Message Transmitted</h3>
                    <p className="text-sm text-[#737980] max-w-md mx-auto">
                      Thank you for contacting DNP Couriers LLC. Your message has been logged for review.
                    </p>
                  </div>

                  <div className="p-4 rounded bg-[#FAFAF8] border border-[#151719]/10 text-xs font-mono text-[#737980] max-w-sm mx-auto">
                    <span>Reference: </span>
                    <strong className="text-[#151719]">{refCode}</strong>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-sm font-semibold text-[#151719] underline hover:text-[#D99A38] transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <h3 className="text-xl font-bold text-[#151719] tracking-tight">
                      Send a Message
                    </h3>
                    <p className="text-xs text-[#737980] mt-1">
                      Fill out the fields below to reach our transportation office.
                    </p>
                  </div>

                  {/* Honeypot field for spam prevention */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="contact_hp">Leave this empty</label>
                    <input
                      type="text"
                      id="contact_hp"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor={nameId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                      Full Name <span className="text-[#D99A38]">*</span>
                    </label>
                    <input
                      type="text"
                      id={nameId}
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors"
                    />
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
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor={phoneId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                        Phone Number <span className="text-[#D99A38]">*</span>
                      </label>
                      <input
                        type="tel"
                        id={phoneId}
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor={subjectId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                      Subject <span className="text-[#D99A38]">*</span>
                    </label>
                    <input
                      type="text"
                      id={subjectId}
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor={messageId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                      Message <span className="text-[#D99A38]">*</span>
                    </label>
                    <textarea
                      id={messageId}
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors resize-none"
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-[#151719] hover:bg-[#151719]/90 disabled:opacity-50 rounded transition-colors"
                    >
                      {status === 'submitting' ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Transmit Message</span>
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
    </>
  );
}
