import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Send, CheckCircle2, Copy, Check, Clock, AlertCircle } from 'lucide-react';
import { COMPANY_DETAILS, BANGALORE_LOCALITIES } from '../data/companyData';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  initialPropertyOrService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPropertyOrService = '' }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    propertyType: initialPropertyOrService ? `Inquiry regarding: ${initialPropertyOrService}` : 'Residential Apartment',
    preferredLocality: 'Parappana Agrahara Main Road',
    budgetRange: '₹50 Lakhs – ₹1 Crore',
    message: initialPropertyOrService 
      ? `Hello, I would like more information and site visit options regarding ${initialPropertyOrService}.`
      : '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [copiedAddress, setCopiedAddress] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (at least 2 characters).';
    }

    // Indian phone number validation (10 digits, optionally starting with +91 or 0)
    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    if (!phoneClean || !phoneRegex.test(phoneClean)) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = 'Please provide a brief message describing your property requirement.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const refId = `DE-${Date.now().toString().slice(-6)}`;
    setSubmissionId(refId);
    setIsSubmitted(true);

    // Save lead inquiry to local storage for persistence
    try {
      const existingInquiries = JSON.parse(localStorage.getItem('dhanvi_inquiries') || '[]');
      existingInquiries.unshift({
        id: refId,
        date: new Date().toISOString(),
        ...formData,
      });
      localStorage.setItem('dhanvi_inquiries', JSON.stringify(existingInquiries.slice(0, 20)));
    } catch {
      // Local storage fallback
    }
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY_DETAILS.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const buildWhatsAppMessage = () => {
    const text = `*New Property Inquiry via Website*
*Ref ID:* ${submissionId || 'Website Lead'}
*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Preference:* ${formData.propertyType}
*Locality:* ${formData.preferredLocality}
*Budget:* ${formData.budgetRange}
*Message:* ${formData.message}`;
    return `https://wa.me/919626368833?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact-section" className="py-16 sm:py-24 bg-neutral-100/70 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
            Connect With Dhanvi Enterprises
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-display text-neutral-950">
            Get in Touch for Expert Bangalore Real Estate Consultation
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Visit our Parappana Agrahara office, speak directly with our property advisors, or submit your specific property criteria below.
          </p>
        </div>

        {/* 3 Prominent Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          
          {/* Card 1: Call Now */}
          <a
            href={`tel:${COMPANY_DETAILS.phone}`}
            className="p-6 bg-white rounded-2xl border border-neutral-200/90 shadow-xs hover:border-neutral-300 hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-amber-50 rounded-xl text-amber-800 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                Direct Line
              </span>
            </div>
            <div>
              <div className="text-xs font-semibold text-neutral-500 uppercase">Call Our Team</div>
              <div className="text-lg font-bold text-neutral-950 mt-0.5">
                {COMPANY_DETAILS.phoneDisplay}
              </div>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                Direct phone assistance for immediate inventory checks and scheduling site visits.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-100 text-xs font-semibold text-neutral-900 group-hover:text-amber-800 flex items-center gap-1">
              <span>Dial Now</span>
              <span>&rarr;</span>
            </div>
          </a>

          {/* Card 2: WhatsApp Chat */}
          <a
            href={COMPANY_DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-2xl border border-neutral-200/90 shadow-xs hover:border-neutral-300 hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-700 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                Instant Chat
              </span>
            </div>
            <div>
              <div className="text-xs font-semibold text-neutral-500 uppercase">WhatsApp Inquiry</div>
              <div className="text-lg font-bold text-neutral-950 mt-0.5">
                +91 96263 68833
              </div>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                Send a quick WhatsApp text for brochures, location pins, and quick queries.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-100 text-xs font-semibold text-emerald-700 group-hover:text-emerald-800 flex items-center gap-1">
              <span>Open WhatsApp Chat</span>
              <span>&rarr;</span>
            </div>
          </a>

          {/* Card 3: Email Us */}
          <a
            href={`mailto:${COMPANY_DETAILS.email}`}
            className="p-6 bg-white rounded-2xl border border-neutral-200/90 shadow-xs hover:border-neutral-300 hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-700 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                Formal Correspondence
              </span>
            </div>
            <div>
              <div className="text-xs font-semibold text-neutral-500 uppercase">Email Us</div>
              <div className="text-sm font-bold text-neutral-950 mt-0.5 break-all">
                {COMPANY_DETAILS.email}
              </div>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                Send proposals, layout documents, and detailed property requirements.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-100 text-xs font-semibold text-neutral-900 group-hover:text-blue-800 flex items-center gap-1">
              <span>Send Email</span>
              <span>&rarr;</span>
            </div>
          </a>

        </div>

        {/* 2-Column Split: Contact Form & Interactive Map / Address */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Validated Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 shadow-xs">
            <div className="mb-6">
              <h3 className="text-xl font-bold font-serif-display text-neutral-950">
                Property Inquiry & Consultation Request
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Fill out the form below. We will review your preferences and connect with verified options.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl space-y-4 animate-in fade-in duration-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-emerald-950">
                      Inquiry Received Successfully!
                    </h4>
                    <p className="text-xs text-emerald-800 mt-1">
                      Thank you, <strong className="font-semibold">{formData.fullName}</strong>. Your reference ID is <strong className="font-semibold">{submissionId}</strong>. Our real estate specialist will contact you on <strong className="font-semibold">{formData.phone}</strong> promptly.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-emerald-200/60 flex flex-wrap gap-3">
                  <a
                    href={buildWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send this Inquiry to WhatsApp Now</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        propertyType: 'Residential Apartment',
                        preferredLocality: 'Parappana Agrahara Main Road',
                        budgetRange: '₹50 Lakhs – ₹1 Crore',
                        message: '',
                      });
                    }}
                    className="px-4 py-2.5 bg-white border border-emerald-300 text-emerald-900 text-xs font-semibold rounded-lg hover:bg-emerald-100/50 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-neutral-900">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm bg-neutral-50 border rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-hidden transition-all ${
                        errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-neutral-300'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Phone Number (WhatsApp Active) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm bg-neutral-50 border rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-hidden transition-all ${
                        errors.phone ? 'border-red-400 bg-red-50/30' : 'border-neutral-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm bg-neutral-50 border rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-hidden transition-all ${
                      errors.email ? 'border-red-400 bg-red-50/30' : 'border-neutral-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Property Preference & Locality */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Property Preference
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-hidden transition-all"
                    >
                      <option value="Residential Apartment">Residential Apartment (2/3/4 BHK)</option>
                      <option value="Independent Luxury Villa">Independent Luxury Villa</option>
                      <option value="Residential Layout Plot">Residential Layout Plot</option>
                      <option value="Commercial Space / Office">Commercial Space / Office</option>
                      <option value="Selling My Property in Bangalore">Selling My Property</option>
                      <option value="Legal & Loan Due Diligence">Legal & Loan Guidance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Budget Bracket
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-hidden transition-all"
                    >
                      <option value="Under ₹50 Lakhs">Under ₹50 Lakhs</option>
                      <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore</option>
                      <option value="₹1 Crore – ₹2 Crores">₹1 Crore – ₹2 Crores</option>
                      <option value="₹2 Crores – ₹5 Crores">₹2 Crores – ₹5 Crores</option>
                      <option value="Above ₹5 Crores">Above ₹5 Crores</option>
                      <option value="Flexible / Commercial Evaluation">Flexible / Commercial Evaluation</option>
                    </select>
                  </div>
                </div>

                {/* Locality Preference */}
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Target Locality in Bangalore
                  </label>
                  <select
                    value={formData.preferredLocality}
                    onChange={(e) => setFormData({ ...formData, preferredLocality: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-hidden transition-all"
                  >
                    {BANGALORE_LOCALITIES.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                    <option value="Other Area in Bangalore">Other Area in Bangalore</option>
                  </select>
                </div>

                {/* Inquiry Message */}
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Inquiry Message / Specific Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify details like floor preference, plot dimension (30x40/30x50), ready-to-move timeline, or site visit date..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm bg-neutral-50 border rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-hidden transition-all ${
                      errors.message ? 'border-red-400 bg-red-50/30' : 'border-neutral-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 active:scale-98 text-white text-sm font-semibold rounded-lg transition-all shadow-sm cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Submit Property Inquiry</span>
                </button>

                <p className="text-[11px] text-neutral-500 text-center">
                  Your information is held in strict confidence. No spam or unsolicited marketing.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Google Maps Location & Exact Office Address */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Details Card */}
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 shadow-xs space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-700 shrink-0" />
                  <h4 className="text-base font-bold font-serif-display text-neutral-950">
                    Dhanvi Enterprises Office
                  </h4>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-700 hover:text-neutral-950 px-2 py-1 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs text-neutral-700 space-y-2 bg-neutral-50 p-4 rounded-xl border border-neutral-200/70">
                <p className="font-medium text-neutral-900 leading-relaxed">
                  {COMPANY_DETAILS.address}
                </p>
                <div className="text-[11px] text-neutral-500 pt-2 border-t border-neutral-200/60">
                  <strong>Landmarks:</strong> Near Food Max Hypermarket & Sai Baba (Southern Winds), Parappana Agrahara Main Road.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-neutral-600">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-900 block">Timings</span>
                    <span>9:00 AM – 8:00 PM (Daily)</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-900 block">Phone</span>
                    <span>{COMPANY_DETAILS.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Plot+No.+104+1st+Cross+Sai+Baba+Southern+Winds+Near+Food+Max+Hypermarket+Parappana+Agrahara+Main+Road+Bengaluru+560100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-semibold rounded-lg transition-colors"
                >
                  <span>Open in Google Maps App</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps Location Iframe */}
            <div className="bg-white rounded-2xl border border-neutral-200/90 overflow-hidden shadow-xs">
              <div className="p-3 bg-neutral-900 text-white text-xs font-medium flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Parappana Agrahara Main Road, Bengaluru – 560100</span>
                </span>
                <span className="text-[11px] text-neutral-400">Google Maps Location</span>
              </div>
              <div className="relative aspect-16/10 w-full bg-neutral-200">
                <iframe
                  title="Dhanvi Enterprises Bangalore Office Location"
                  src="https://maps.google.com/maps?q=Parappana+Agrahara+Main+Road+Bengaluru+560100&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
