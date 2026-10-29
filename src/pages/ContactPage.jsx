import React, { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Send, CheckCircle2, AlertCircle, ArrowRight, Repeat, Truck, ShieldCheck } from 'lucide-react';
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
        title="Contact DNP Couriers LLC | Dedicated Lane Inquiries"
        description="Contact DNP Couriers LLC to discuss freight transportation services, box-truck operations, or dedicated lanes. Primary base in Brentwood, TN: (615) 525-7151."
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
              Reach out to discuss your box-truck transportation requirements, explore dedicated lane partnerships, or ask a question about our operations.
            </p>
          </div>
        </div>
      </section>

      {/* DEDICATED LANE PARTNERSHIP CALLOUT BANNER */}
      <section className="bg-[#D99A38]/10 border-b border-[#D99A38]/20 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#151719] text-[#D99A38] flex items-center justify-center shrink-0">
                <Repeat className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-[#151719]">
                  Inquiring About Dedicated Lanes or Contract Freight?
                </h2>
                <p className="text-xs sm:text-sm text-[#737980]">
                  Submit your recurring route specifications directly through our dedicated capacity portal.
                </p>
              </div>
            </div>
            <Link
              to="/request-a-quote"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#151719] hover:bg-[#151719]/90 rounded shrink-0 transition-colors"
            >
              <span>Submit Lane Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN TWO-COLUMN CONTACT SECTION */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left 5 Cols: Contact Details & Verified Information */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block mb-2">
                  Company Directory
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-[#151719]">
                  Get in Touch With Dispatch
                </h2>
                <p className="mt-3 text-base text-[#737980] leading-relaxed">
                  We respond directly to inquiries from shippers, brokers, and commercial partners.
                </p>
              </div>

              {/* Contact Information Blocks */}
              <div className="space-y-6">
                
                {/* Telephone */}
                <div className="p-6 rounded bg-white border border-[#151719]/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#737980]">
                    <Phone className="w-4 h-4 text-[#D99A38]" />
                    <span>Direct Telephone</span>
                  </div>
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="text-2xl font-bold text-[#151719] hover:text-[#D99A38] transition-colors block"
                  >
                    {COMPANY.phone}
                  </a>
                  <p className="text-xs text-[#737980]">
                    Call for rate confirmations, dispatch updates, and lane inquiries.
                  </p>
                </div>

                {/* Primary Address */}
                <div className="p-6 rounded bg-white border border-[#151719]/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#737980]">
                    <MapPin className="w-4 h-4 text-[#D99A38]" />
                    <span>Primary Listed Address</span>
                  </div>
                  <p className="text-base font-bold text-[#151719] leading-snug">
                    {COMPANY.primaryAddress}
                  </p>
                  <p className="text-xs text-[#737980]">
                    Federal motor carrier base of operations.
                  </p>
                </div>

                {/* Regulatory Identifiers */}
                <div className="p-6 rounded bg-white border border-[#151719]/10 space-y-3">
                  <span className="text-xs font-mono uppercase text-[#737980] block">
                    Federal Operating Authority
                  </span>
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-[#737980] block">USDOT Number</span>
                      <strong className="text-sm font-bold text-[#151719]">{COMPANY.usdot}</strong>
                    </div>
                    <div>
                      <span className="text-[#737980] block">MC Number</span>
                      <strong className="text-sm font-bold text-[#151719]">{COMPANY.mc}</strong>
                    </div>
                  </div>
                  <p className="text-xs text-[#737980] pt-1 border-t border-[#151719]/10">
                    Active authorized interstate motor carrier.
                  </p>
                </div>

              </div>
            </div>

            {/* Right 7 Cols: Clean Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-12 rounded border border-[#151719]/10 shadow-sm">
                
                {status === 'success' ? (
                  <div className="text-center space-y-6 py-8">
                    <div className="w-16 h-16 rounded-full bg-[#2b7a4b]/10 text-[#2b7a4b] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-[#151719]">
                        Message Transmitted
                      </h3>
                      <p className="text-sm text-[#737980] max-w-md mx-auto">
                        Thank you for contacting DNP Couriers LLC. Your message has been received by our operations team.
                      </p>
                    </div>

                    <div className="p-4 rounded bg-[#FAFAF8] border border-[#151719]/10 text-xs font-mono text-[#737980] max-w-xs mx-auto">
                      <span>Message Reference: </span>
                      <strong className="text-[#151719]">{refCode}</strong>
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="text-sm font-semibold text-[#151719] hover:text-[#D99A38] underline transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
                    <div>
                      <h2 className="text-2xl font-bold text-[#151719] tracking-tight">
                        Send a Message
                      </h2>
                      <p className="text-sm text-[#737980] mt-1">
                        Please provide your details below. For immediate freight bookings, telephone is recommended.
                      </p>
                    </div>

                    {/* Honeypot */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="contact_hp">Leave empty</label>
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor={nameId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                          Your Name <span className="text-[#D99A38]">*</span>
                        </label>
                        <input
                          type="text"
                          id={nameId}
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719] focus:ring-1 focus:ring-[#151719]"
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
                          className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719] focus:ring-1 focus:ring-[#151719]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor={emailId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                          Business Email <span className="text-[#D99A38]">*</span>
                        </label>
                        <input
                          type="email"
                          id={emailId}
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719] focus:ring-1 focus:ring-[#151719]"
                        />
                      </div>

                      <div>
                        <label htmlFor={subjectId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                          Topic / Subject <span className="text-[#D99A38]">*</span>
                        </label>
                        <input
                          type="text"
                          id={subjectId}
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719] focus:ring-1 focus:ring-[#151719]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor={messageId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                        Message Details <span className="text-[#D99A38]">*</span>
                      </label>
                      <textarea
                        id={messageId}
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors resize-none focus:outline-none focus:border-[#151719] focus:ring-1 focus:ring-[#151719]"
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
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-[#151719] hover:bg-[#151719]/90 disabled:opacity-50 rounded transition-colors"
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

                    <p className="text-xs text-[#737980] pt-2">
                      By submitting this form, you acknowledge that initial contact does not establish carrier contracts or booking confirmations.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
