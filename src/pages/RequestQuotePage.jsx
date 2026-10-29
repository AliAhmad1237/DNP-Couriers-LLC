import React, { useState, useId, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, Phone, ArrowLeft, ShieldCheck, Clock, Calendar, Repeat, Truck, Layers } from 'lucide-react';
import { COMPANY } from '../data/company';
import SEO from '../components/SEO';

export default function RequestQuotePage() {
  const inquiryTypeId = useId();
  const nameId = useId();
  const companyId = useId();
  const emailId = useId();
  const phoneId = useId();
  const contactMethodId = useId();
  
  // Dedicated lane IDs
  const routeTypeId = useId();
  const originCityId = useId();
  const destCityId = useId();
  const frequencyId = useId();
  const startDateId = useId();
  const operatingDaysId = useId();
  const commodityId = useId();
  const approxWeightId = useId();
  const palletCountId = useId();
  const handlingId = useId();
  const laneNotesId = useId();

  // General inquiry IDs
  const generalTopicId = useId();
  const generalMessageId = useId();
  
  const consentId = useId();

  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') === 'onetime' ? 'onetime' : searchParams.get('type') === 'general' ? 'general' : 'dedicated';
  const [inquiryType, setInquiryType] = useState(initialType);

  useEffect(() => {
    const typeFromParam = searchParams.get('type');
    if (typeFromParam && ['dedicated', 'onetime', 'general'].includes(typeFromParam)) {
      setInquiryType(typeFromParam);
    }
  }, [searchParams]);

  const [formData, setFormData] = useState({
    // Contact Info
    fullName: '',
    company: '',
    email: '',
    phone: '',
    preferredContactMethod: 'Phone',

    // Route / Lane Parameters
    routeType: 'Round-Trip', // 'Round-Trip' | 'One-Way'
    originLocation: '',
    destinationLocation: '',
    frequency: 'Daily (5+ loads/week)',
    startDate: '',
    operatingDays: 'Monday - Friday',
    cargoCategory: 'General Freight',
    commodity: '',
    approximateWeight: '',
    palletCount: '',
    specialRequirements: '',
    additionalNotes: '',

    // General message
    generalSubject: '',
    generalMessage: '',

    // Consent & anti-spam
    privacyConsent: false,
    honeypot: '',
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

      const prefix = inquiryType === 'dedicated' ? 'DNP-LANE' : inquiryType === 'onetime' ? 'DNP-FREIGHT' : 'DNP-INQ';
      const refCode = `${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;

      // Save to localStorage
      const existingQuotes = JSON.parse(localStorage.getItem('dnp_quote_inquiries') || '[]');
      existingQuotes.push({
        reference: refCode,
        inquiryType,
        submittedAt: new Date().toISOString(),
        ...formData,
      });
      localStorage.setItem('dnp_quote_inquiries', JSON.stringify(existingQuotes));

      setInquiryReference(refCode);
      setStatus('success');
    } catch (err) {
      console.error(err);
      setErrorMessage("Unable to transmit your request. Please contact our Brentwood office directly at (615) 525-7151.");
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
      routeType: 'Round-Trip',
      originLocation: '',
      destinationLocation: '',
      frequency: 'Daily (5+ loads/week)',
      startDate: '',
      operatingDays: 'Monday - Friday',
      cargoCategory: 'General Freight',
      commodity: '',
      approximateWeight: '',
      palletCount: '',
      specialRequirements: '',
      additionalNotes: '',
      generalSubject: '',
      generalMessage: '',
      privacyConsent: false,
      honeypot: '',
    });
    setStatus('idle');
  };

  return (
    <>
      <SEO
        title="Request Dedicated Lane or Freight Inquiry"
        description="Submit your dedicated lane parameters or freight transportation requirements for review by DNP Couriers LLC in Brentwood, TN."
      />

      {/* HERO SECTION */}
      <section className="bg-[#151719] text-[#FAFAF8] pt-36 pb-16 sm:pt-44 sm:pb-20 border-b border-[#151719]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D99A38] block">
              Direct Capacity Inquiry
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-tight">
              Submit Your Transportation Requirements.
            </h1>
            <p className="text-base sm:text-lg text-[#FAFAF8]/85 font-normal leading-relaxed max-w-2xl">
              We welcome dedicated-lane inquiries from freight brokers, commercial shippers, and 3PL partners seeking committed box-truck capacity on recurring routes.
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
                  Inquiry Successfully Received
                </h2>
                <p className="text-sm sm:text-base text-[#737980] max-w-lg mx-auto">
                  Thank you for submitting your freight parameters to DNP Couriers LLC. Our dispatch and operations team will review your specifications against our box-truck capacity.
                </p>
              </div>

              <div className="p-4 rounded bg-[#FAFAF8] border border-[#151719]/10 text-xs font-mono text-[#737980] max-w-sm mx-auto">
                <span>Inquiry Reference: </span>
                <strong className="text-[#151719]">{inquiryReference}</strong>
              </div>

              <div className="pt-2">
                <p className="text-xs text-[#737980]">
                  Need immediate conversation regarding recurring lanes? Call our Brentwood office directly at{' '}
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
              
              {/* STEP 1: INQUIRY TYPE SELECTOR */}
              <div className="mb-10 pb-8 border-b border-[#151719]/10">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D99A38] block mb-2">
                  Select Inquiry Type
                </span>
                <h2 className="text-xl font-bold text-[#151719] mb-4">
                  What kind of transportation are you seeking?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setInquiryType('dedicated')}
                    className={`p-4 rounded border text-left transition-all ${
                      inquiryType === 'dedicated'
                        ? 'border-[#D99A38] bg-[#D99A38]/5 ring-1 ring-[#D99A38]'
                        : 'border-[#151719]/15 bg-[#FAFAF8] hover:border-[#151719]/30'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Repeat className={`w-4 h-4 ${inquiryType === 'dedicated' ? 'text-[#D99A38]' : 'text-[#737980]'}`} />
                      <span className="text-sm font-bold text-[#151719]">Dedicated Lane</span>
                    </div>
                    <p className="text-xs text-[#737980] leading-snug">
                      Recurring route, multi-load weekly schedule, or contracted freight partner.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInquiryType('onetime')}
                    className={`p-4 rounded border text-left transition-all ${
                      inquiryType === 'onetime'
                        ? 'border-[#D99A38] bg-[#D99A38]/5 ring-1 ring-[#D99A38]'
                        : 'border-[#151719]/15 bg-[#FAFAF8] hover:border-[#151719]/30'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Truck className={`w-4 h-4 ${inquiryType === 'onetime' ? 'text-[#D99A38]' : 'text-[#737980]'}`} />
                      <span className="text-sm font-bold text-[#151719]">One-Time Freight</span>
                    </div>
                    <p className="text-xs text-[#737980] leading-snug">
                      Single point-to-point commercial movement, spot shipment, or scheduled load.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInquiryType('general')}
                    className={`p-4 rounded border text-left transition-all ${
                      inquiryType === 'general'
                        ? 'border-[#D99A38] bg-[#D99A38]/5 ring-1 ring-[#D99A38]'
                        : 'border-[#151719]/15 bg-[#FAFAF8] hover:border-[#151719]/30'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Layers className={`w-4 h-4 ${inquiryType === 'general' ? 'text-[#D99A38]' : 'text-[#737980]'}`} />
                      <span className="text-sm font-bold text-[#151719]">General Inquiry</span>
                    </div>
                    <p className="text-xs text-[#737980] leading-snug">
                      Carrier onboarding, compliance packet, or partnership exploration.
                    </p>
                  </button>
                </div>
              </div>

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
                      Contact &amp; Organization Details
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor={nameId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                        Contact Name <span className="text-[#D99A38]">*</span>
                      </label>
                      <input
                        type="text"
                        id={nameId}
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719] focus:ring-1 focus:ring-[#151719]"
                      />
                    </div>

                    <div>
                      <label htmlFor={companyId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                        Company / Brokerage Name <span className="text-[#D99A38]">*</span>
                      </label>
                      <input
                        type="text"
                        id={companyId}
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719] focus:ring-1 focus:ring-[#151719]"
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

                    <div>
                      <label htmlFor={contactMethodId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                        Preferred Contact
                      </label>
                      <select
                        id={contactMethodId}
                        name="preferredContactMethod"
                        value={formData.preferredContactMethod}
                        onChange={handleChange}
                        className="themed-select w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719]"
                      >
                        <option value="Phone">Telephone</option>
                        <option value="Email">Email</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* PART 2: DEDICATED LANE PARAMETERS (Rendered when 'dedicated' selected) */}
                {inquiryType === 'dedicated' && (
                  <div className="space-y-6 pt-4">
                    <div className="border-b border-[#151719]/10 pb-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#D99A38] block mb-1">
                        Part 02
                      </span>
                      <h2 className="text-xl font-bold text-[#151719]">
                        Dedicated Lane Specifications
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div>
                        <label htmlFor={routeTypeId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                          Route Configuration <span className="text-[#D99A38]">*</span>
                        </label>
                        <select
                          id={routeTypeId}
                          name="routeType"
                          value={formData.routeType}
                          onChange={handleChange}
                          className="themed-select w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719]"
                        >
                          <option value="Round-Trip">Round-Trip Dedicated Lane</option>
                          <option value="One-Way">One-Way Recurring Run</option>
                          <option value="Multi-Stop">Multi-Stop Regional Route</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor={originCityId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                          Origin City &amp; State <span className="text-[#D99A38]">*</span>
                        </label>
                        <input
                          type="text"
                          id={originCityId}
                          name="originLocation"
                          required
                          value={formData.originLocation}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719]"
                        />
                      </div>

                      <div>
                        <label htmlFor={destCityId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                          Destination City &amp; State <span className="text-[#D99A38]">*</span>
                        </label>
                        <input
                          type="text"
                          id={destCityId}
                          name="destinationLocation"
                          required
                          value={formData.destinationLocation}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div>
                        <label htmlFor={frequencyId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                          Estimated Load Frequency <span className="text-[#D99A38]">*</span>
                        </label>
                        <select
                          id={frequencyId}
                          name="frequency"
                          value={formData.frequency}
                          onChange={handleChange}
                          className="themed-select w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719]"
                        >
                          <option value="Daily (5+ loads/week)">Daily (5+ loads/week)</option>
                          <option value="3-4 loads/week">3–4 loads per week</option>
                          <option value="1-2 loads/week">1–2 loads per week</option>
                          <option value="Bi-weekly">Bi-weekly regular runs</option>
                          <option value="Monthly / Periodic">Monthly / Periodic scheduled runs</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor={operatingDaysId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                          Operating Days <span className="text-[#D99A38]">*</span>
                        </label>
                        <select
                          id={operatingDaysId}
                          name="operatingDays"
                          value={formData.operatingDays}
                          onChange={handleChange}
                          className="themed-select w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719]"
                        >
                          <option value="Monday - Friday">Monday – Friday</option>
                          <option value="7 Days a Week">7 Days a Week</option>
                          <option value="Weekends Only">Weekends Only</option>
                          <option value="Specific Designated Days">Specific Designated Days</option>
                          <option value="Flexible Schedule">Flexible / Negotiable</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor={startDateId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                          Target Start Date <span className="text-[#D99A38]">*</span>
                        </label>
                        <input
                          type="date"
                          id={startDateId}
                          name="startDate"
                          required
                          value={formData.startDate}
                          onChange={handleChange}
                          className="themed-date w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719] cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div>
                        <label htmlFor={commodityId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                          Commodity / Freight Type <span className="text-[#D99A38]">*</span>
                        </label>
                        <input
                          type="text"
                          id={commodityId}
                          name="commodity"
                          required
                          value={formData.commodity}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719]"
                        />
                      </div>

                      <div>
                        <label htmlFor={approxWeightId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                          Approx. Weight per Load (lbs) <span className="text-[#D99A38]">*</span>
                        </label>
                        <input
                          type="text"
                          id={approxWeightId}
                          name="approximateWeight"
                          required
                          value={formData.approximateWeight}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719]"
                        />
                      </div>

                      <div>
                        <label htmlFor={palletCountId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                          Pallet Count / Dimensions
                        </label>
                        <input
                          type="text"
                          id={palletCountId}
                          name="palletCount"
                          value={formData.palletCount}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor={handlingId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                        Handling Requirements (e.g., Dock-to-Dock, Liftgate, Driver Assist)
                      </label>
                      <input
                        type="text"
                        id={handlingId}
                        name="specialRequirements"
                        value={formData.specialRequirements}
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719]"
                      />
                    </div>

                    <div>
                      <label htmlFor={laneNotesId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                        Additional Lane Notes or Contract Requirements
                      </label>
                      <textarea
                        id={laneNotesId}
                        name="additionalNotes"
                        rows={3}
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors resize-none focus:outline-none focus:border-[#151719]"
                      ></textarea>
                    </div>
                  </div>
                )}

                {/* PART 2: ONE-TIME FREIGHT PARAMETERS (Rendered when 'onetime' selected) */}
                {inquiryType === 'onetime' && (
                  <div className="space-y-6 pt-4">
                    <div className="border-b border-[#151719]/10 pb-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#D99A38] block mb-1">
                        Part 02
                      </span>
                      <h2 className="text-xl font-bold text-[#151719]">
                        One-Time Shipment Details
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor={originCityId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                          Pickup City &amp; State <span className="text-[#D99A38]">*</span>
                        </label>
                        <input
                          type="text"
                          id={originCityId}
                          name="originLocation"
                          required
                          value={formData.originLocation}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719]"
                        />
                      </div>

                      <div>
                        <label htmlFor={destCityId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                          Delivery City &amp; State <span className="text-[#D99A38]">*</span>
                        </label>
                        <input
                          type="text"
                          id={destCityId}
                          name="destinationLocation"
                          required
                          value={formData.destinationLocation}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor={startDateId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                          Target Pickup Date <span className="text-[#D99A38]">*</span>
                        </label>
                        <input
                          type="date"
                          id={startDateId}
                          name="startDate"
                          required
                          value={formData.startDate}
                          onChange={handleChange}
                          className="themed-date w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719] cursor-pointer"
                        />
                      </div>

                      <div>
                        <label htmlFor={commodityId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                          Cargo Classification <span className="text-[#D99A38]">*</span>
                        </label>
                        <select
                          id={commodityId}
                          name="cargoCategory"
                          value={formData.cargoCategory}
                          onChange={handleChange}
                          className="themed-select w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719]"
                        >
                          <option value="General Freight">General Commercial Freight</option>
                          <option value="Household Goods">Household Goods (Subject to Review)</option>
                          <option value="Commercial Inquiry">Other Commercial Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor={approxWeightId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                          Approximate Weight (lbs) <span className="text-[#D99A38]">*</span>
                        </label>
                        <input
                          type="text"
                          id={approxWeightId}
                          name="approximateWeight"
                          required
                          value={formData.approximateWeight}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719]"
                        />
                      </div>

                      <div>
                        <label htmlFor={palletCountId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                          Piece Count or Dimensions
                        </label>
                        <input
                          type="text"
                          id={palletCountId}
                          name="palletCount"
                          value={formData.palletCount}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor={laneNotesId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                        Shipment Description &amp; Handling Notes
                      </label>
                      <textarea
                        id={laneNotesId}
                        name="additionalNotes"
                        rows={3}
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors resize-none focus:outline-none focus:border-[#151719]"
                      ></textarea>
                    </div>
                  </div>
                )}

                {/* PART 2: GENERAL BUSINESS INQUIRY (Rendered when 'general' selected) */}
                {inquiryType === 'general' && (
                  <div className="space-y-6 pt-4">
                    <div className="border-b border-[#151719]/10 pb-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#D99A38] block mb-1">
                        Part 02
                      </span>
                      <h2 className="text-xl font-bold text-[#151719]">
                        Inquiry Information
                      </h2>
                    </div>

                    <div>
                      <label htmlFor={generalTopicId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                        Subject or Topic <span className="text-[#D99A38]">*</span>
                      </label>
                      <input
                        type="text"
                        id={generalTopicId}
                        name="generalSubject"
                        required
                        value={formData.generalSubject}
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors focus:outline-none focus:border-[#151719]"
                      />
                    </div>

                    <div>
                      <label htmlFor={generalMessageId} className="block text-xs font-semibold text-[#151719] uppercase tracking-wider mb-2">
                        Message Details <span className="text-[#D99A38]">*</span>
                      </label>
                      <textarea
                        id={generalMessageId}
                        name="generalMessage"
                        required
                        rows={4}
                        value={formData.generalMessage}
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] border border-[#151719]/20 rounded px-4 py-3 text-sm text-[#151719] transition-colors resize-none focus:outline-none focus:border-[#151719]"
                      ></textarea>
                    </div>
                  </div>
                )}

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
                      I understand that submitting this inquiry does not constitute a confirmed freight booking or binding contract. I agree to the processing of this information in accordance with DNP Couriers LLC's{' '}
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
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-[#151719] hover:bg-[#151719]/90 disabled:opacity-50 rounded transition-colors"
                    >
                      {status === 'submitting' ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <span>
                            {inquiryType === 'dedicated'
                              ? 'Submit Dedicated Lane Inquiry'
                              : inquiryType === 'onetime'
                              ? 'Submit Freight Quote Request'
                              : 'Send Business Inquiry'}
                          </span>
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
