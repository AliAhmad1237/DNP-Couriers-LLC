import React, { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, Phone, ArrowLeft, ShieldCheck, Clock, Calendar } from 'lucide-react';
import { COMPANY } from '../data/company';
import SEO from '../components/SEO';

export default function RequestQuotePage() {
  const nameId = useId();
  const companyId = useId();
  const emailId = useId();
  const phoneId = useId();
  const contactMethodId = useId();
  const originId = useId();
  const destinationId = useId();
  const dateId = useId();
  const categoryId = useId();
  const weightId = useId();
  const dimensionsId = useId();
  const descId = useId();
  const specialId = useId();
  const messageId = useId();
  const consentId = useId();

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    preferredContactMethod: 'Phone',
    pickupLocation: '',
    deliveryLocation: '',
    pickupDate: '',
    cargoCategory: 'General Freight',
    descriptionOfGoods: '',
    approximateWeight: '',
    dimensionsPieces: '',
    specialRequirements: '',
    additionalNotes: '',
    privacyConsent: false,
    honeypot: '', // Spam protection
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [inquiryReference, setInquiryReference] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot
    if (formData.honeypot) {
      console.warn("Spam filtered.");
      setStatus('success');
      return;
    }

    // Check privacy consent
    if (!formData.privacyConsent) {
      setErrorMessage("Please acknowledge the privacy notice to proceed.");
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const refCode = `DNP-QUOTE-${Math.floor(100000 + Math.random() * 900000)}`;

      // Save to localStorage for review
      const existingQuotes = JSON.parse(localStorage.getItem('dnp_quote_inquiries') || '[]');
      existingQuotes.push({
        reference: refCode,
        submittedAt: new Date().toISOString(),
        ...formData,
      });
      localStorage.setItem('dnp_quote_inquiries', JSON.stringify(existingQuotes));

      setInquiryReference(refCode);
      setStatus('success');
    } catch (err) {
      console.error(err);
      setErrorMessage("Unable to transmit your quote request. Please call (615) 525-7151 directly.");
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      preferredContactMethod: 'Phone',
      pickupLocation: '',
      deliveryLocation: '',
      pickupDate: '',
      cargoCategory: 'General Freight',
      descriptionOfGoods: '',
      approximateWeight: '',
      dimensionsPieces: '',
      specialRequirements: '',
      additionalNotes: '',
      privacyConsent: false,
      honeypot: '',
    });
    setStatus('idle');
  };

  return (
    <>
      <SEO
        title="Request a Transportation Quote"
        description="Submit your shipment parameters to request a freight transportation quote from DNP Couriers LLC in Brentwood, Tennessee."
      />

      {/* HERO SECTION */}
      <section className="bg-[#151719] text-[#FAFAF8] pt-36 pb-16 sm:pt-44 sm:pb-20 border-b border-[#151719]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
              Freight Intake
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-tight">
              Tell Us About Your Shipment.
            </h1>
            <p className="text-base sm:text-lg text-[#FAFAF8]/85 font-normal leading-relaxed max-w-2xl">
              Provide a few details about your transportation requirements. Our team can review your inquiry and discuss the next steps.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN FORM SECTION */}
      <section className="py-20 sm:py-28 bg-[#FAFAF8] border-b border-[#151719]/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          {status === 'success' ? (
            <div className="p-8 sm:p-12 rounded bg-white border border-[#151719]/10 text-center space-y-6 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#2b7a4b]/10 text-[#2b7a4b] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#151719]">
                  Quote Request Received
                </h2>
                <p className="text-sm sm:text-base text-[#737980] max-w-lg mx-auto">
                  Thank you for submitting your shipment details to DNP Couriers LLC. Your inquiry has been registered in our system for review.
                </p>
              </div>

              <div className="p-4 rounded bg-[#FAFAF8] border border-[#151719]/10 text-xs font-mono text-[#737980] max-w-sm mx-auto">
                <span>Inquiry Reference: </span>
                <strong className="text-[#151719]">{inquiryReference}</strong>
              </div>

              <div className="pt-2">
                <p className="text-xs text-[#737980]">
                  Need immediate confirmation? You may also call our office directly at{' '}
                  <a href={`tel:${COMPANY.phoneRaw}`} className="text-[#151719] font-bold underline">
                    {COMPANY.phone}
                  </a>.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-sm font-semibold text-[#151719] hover:text-[#D99A38] underline transition-colors"
                >
                  Submit another freight inquiry
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 sm:p-12 rounded border border-[#151719]/10 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-10" noValidate={false}>
                
                {/* Honeypot field for spam prevention */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="quote_hp">Leave empty</label>
                  <input
                    type="text"
                    id="quote_hp"
                    name="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={handleChange}
                  />
                </div>

                {/* PART 1: CONTACT INFORMATION */}
                <div className="space-y-6">
                  <div className="border-b border-[#151719]/10 pb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#D99A38] block mb-1">
                      Part 01
                    </span>
                    <h2 className="text-xl font-bold text-[#151719]">
                      Contact Information
                    </h2>
                  </div>

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
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor={companyId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        id={companyId}
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
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

                    <div>
                      <label htmlFor={contactMethodId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                        Preferred Contact
                      </label>
                      <select
                        id={contactMethodId}
                        name="preferredContactMethod"
                        value={formData.preferredContactMethod}
                        onChange={handleChange}
                        className="themed-select w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors"
                      >
                        <option value="Phone">Telephone</option>
                        <option value="Email">Email</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* PART 2: SHIPMENT DETAILS */}
                <div className="space-y-6 pt-4">
                  <div className="border-b border-[#151719]/10 pb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#D99A38] block mb-1">
                      Part 02
                    </span>
                    <h2 className="text-xl font-bold text-[#151719]">
                      Shipment Details
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor={originId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                        Pickup City &amp; State <span className="text-[#D99A38]">*</span>
                      </label>
                      <input
                        type="text"
                        id={originId}
                        name="pickupLocation"
                        required
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor={destinationId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                        Delivery City &amp; State <span className="text-[#D99A38]">*</span>
                      </label>
                      <input
                        type="text"
                        id={destinationId}
                        name="deliveryLocation"
                        required
                        value={formData.deliveryLocation}
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor={dateId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                        Target Pickup Date <span className="text-[#D99A38]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id={dateId}
                          name="pickupDate"
                          required
                          value={formData.pickupDate}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors cursor-pointer"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor={categoryId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                        Cargo Category <span className="text-[#D99A38]">*</span>
                      </label>
                      <select
                        id={categoryId}
                        name="cargoCategory"
                        required
                        value={formData.cargoCategory}
                        onChange={handleChange}
                        className="themed-select w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors"
                      >
                        <option value="General Freight">General Freight</option>
                        <option value="Household Goods">Household Goods</option>
                        <option value="Commercial Inquiry">Commercial Freight Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor={descId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                      Description of Goods <span className="text-[#D99A38]">*</span>
                    </label>
                    <input
                      type="text"
                      id={descId}
                      name="descriptionOfGoods"
                      required
                      value={formData.descriptionOfGoods}
                      onChange={handleChange}
                      className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor={weightId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                        Approximate Weight (lbs) <span className="text-[#D99A38]">*</span>
                      </label>
                      <input
                        type="text"
                        id={weightId}
                        name="approximateWeight"
                        required
                        value={formData.approximateWeight}
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor={dimensionsId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                        Dimensions or Piece Count (If Known)
                      </label>
                      <input
                        type="text"
                        id={dimensionsId}
                        name="dimensionsPieces"
                        value={formData.dimensionsPieces}
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor={specialId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                      Special Requirements (Dock Access, Equipment, Timing)
                    </label>
                    <input
                      type="text"
                      id={specialId}
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleChange}
                      className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor={messageId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                      Additional Message / Details
                    </label>
                    <textarea
                      id={messageId}
                      name="additionalNotes"
                      rows={3}
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* PART 3: CONSENT & SUBMISSION */}
                <div className="space-y-4 pt-4 border-t border-[#151719]/10">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id={consentId}
                      name="privacyConsent"
                      required
                      checked={formData.privacyConsent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-[#151719]/30 text-[#151719] focus:ring-[#D99A38] accent-[#D99A38]"
                    />
                    <label htmlFor={consentId} className="text-xs text-[#737980] leading-relaxed">
                      I understand that submitting this inquiry does not constitute a confirmed freight booking. I agree to the processing of this information in accordance with DNP Couriers LLC's{' '}
                      <Link to="/privacy-policy" className="text-[#151719] underline font-medium">
                        Privacy Policy
                      </Link>.
                    </label>
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
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white bg-[#151719] hover:bg-[#151719]/90 disabled:opacity-50 rounded transition-colors"
                    >
                      {status === 'submitting' ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Transportation Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </form>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
