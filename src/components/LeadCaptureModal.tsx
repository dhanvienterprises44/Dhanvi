import React, { useState } from 'react';
import { X, Send, Phone, MessageCircle, CheckCircle2, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { COMPANY_DETAILS, BANGALORE_LOCALITIES } from '../data/companyData';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchCriteria?: {
    type?: string;
    locality?: string;
    budget?: string;
  };
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  searchCriteria = {},
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState(
    searchCriteria.type && searchCriteria.type !== 'all'
      ? searchCriteria.type === 'residential' ? 'Residential Apartments' : searchCriteria.type === 'villa' ? 'Independent Luxury Villa' : searchCriteria.type === 'commercial' ? 'Commercial Space' : 'Plots & Land'
      : 'Residential Apartments'
  );
  const [preferredLocality, setPreferredLocality] = useState(
    searchCriteria.locality && searchCriteria.locality !== 'all'
      ? searchCriteria.locality
      : 'Parappana Agrahara Main Road'
  );
  const [budgetRange, setBudgetRange] = useState(searchCriteria.budget || '₹50 Lakhs – ₹1 Crore');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [refCode, setRefCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || fullName.trim().length < 2) {
      setError('Please provide your name.');
      return;
    }
    const cleanPhone = phone.replace(/[\s-]/g, '');
    if (!cleanPhone || !/^(\+91)?[6-9]\d{9}$/.test(cleanPhone)) {
      setError('Please provide a valid 10-digit Indian mobile number.');
      return;
    }

    const leadRef = `DE-LEAD-${Date.now().toString().slice(-5)}`;
    setRefCode(leadRef);

    // Save lead to local storage
    try {
      const existing = JSON.parse(localStorage.getItem('dhanvi_inquiries') || '[]');
      existing.unshift({
        id: leadRef,
        date: new Date().toISOString(),
        fullName,
        phone: cleanPhone,
        email: email || 'Direct Phone Lead',
        propertyType,
        preferredLocality,
        budgetRange,
        message: `High-intent search lead from website for ${propertyType} in ${preferredLocality} with budget ${budgetRange}`,
        status: 'New'
      });
      localStorage.setItem('dhanvi_inquiries', JSON.stringify(existing.slice(0, 30)));
    } catch {
      // Local storage fallback
    }

    setError('');
    setIsSuccess(true);
  };

  const whatsappLeadUrl = `https://wa.me/919626368833?text=${encodeURIComponent(
    `*Property Search Lead for Dhanvi Enterprises*\n*Ref:* ${refCode || 'DE-WEB-LEAD'}\n*Name:* ${fullName}\n*Phone:* ${phone}\n*Looking For:* ${propertyType}\n*Locality:* ${preferredLocality}\n*Budget:* ${budgetRange}\n\nPlease share verified Bangalore property options and schedule site visit.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 text-neutral-900 animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="text-xl font-bold font-serif-display text-neutral-950">
              Requirement Received!
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-neutral-900">{fullName}</strong>. Your search reference is <strong className="text-neutral-900">{refCode}</strong>. Our Bangalore real estate consultant from Dhanvi Enterprises will connect with you on <strong className="text-neutral-900">{phone}</strong> with tailored options.
            </p>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={whatsappLeadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Connect ({COMPANY_DETAILS.phone})</span>
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Agent Directly</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-medium rounded-lg transition-colors cursor-pointer"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Get Matched Properties in Bangalore</span>
              </div>
              <h3 className="text-xl font-bold font-serif-display text-neutral-950">
                Unlock Available Flats, Villas & Plots
              </h3>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                Connect directly with Dhanvi Enterprises for verified titles, builder inventory, and price sheets in South Bangalore.
              </p>
            </div>

            {error && (
              <div className="p-2.5 bg-red-50 text-red-700 rounded-lg text-xs flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Suresh Gowda"
                className="w-full px-3.5 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                WhatsApp / Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit mobile number"
                className="w-full px-3.5 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-hidden"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Property Category
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-hidden"
                >
                  <option value="Residential Apartments">Residential Apartments (2/3 BHK)</option>
                  <option value="Independent Luxury Villa">Independent Luxury Villa</option>
                  <option value="Plots & Land">Plots & Land Layout</option>
                  <option value="Commercial Space">Commercial / Office</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Budget
                </label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-hidden"
                >
                  <option value="Under ₹50 Lakhs">Under ₹50 Lakhs</option>
                  <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore</option>
                  <option value="₹1 Crore – ₹2 Crores">₹1 Crore – ₹2 Crores</option>
                  <option value="₹2 Crores – ₹5 Crores">₹2 Crores – ₹5 Crores</option>
                  <option value="Flexible">Flexible / Commercial</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Locality Focus
              </label>
              <select
                value={preferredLocality}
                onChange={(e) => setPreferredLocality(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-hidden"
              >
                {BANGALORE_LOCALITIES.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg transition-all active:scale-98 cursor-pointer shadow-sm flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>Send Me Matching Properties</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct connect with Dhanvi Enterprises · Zero broker spam</span>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};
