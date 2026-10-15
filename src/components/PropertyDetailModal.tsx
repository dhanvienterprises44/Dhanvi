import React from 'react';
import { X, Phone, MessageCircle, MapPin, Building2, BedDouble, Bath, Maximize2, ShieldCheck, CheckCircle, FileText } from 'lucide-react';
import { PropertyListing } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';

interface PropertyDetailModalProps {
  property: PropertyListing | null;
  onClose: () => void;
  onOpenInquiry: (propertyName: string) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onOpenInquiry,
}) => {
  if (!property) return null;

  const whatsappInquiryUrl = `https://wa.me/919626368833?text=${encodeURIComponent(
    `Hello Dhanvi Enterprises, I am interested in inquiring about "${property.title}" (${property.typeLabel}) located at ${property.location}. Please share live availability, pricing, and site visit options.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 text-neutral-900"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-property-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-neutral-100 text-neutral-700 hover:text-neutral-950 shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-900">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/20" />
          
          {/* Unboxed Metadata on Scrim */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="text-xs text-amber-300 font-medium tracking-wide uppercase mb-1">
              {property.typeLabel}
            </div>
            <h2 id="modal-property-title" className="text-xl sm:text-2xl font-bold font-serif-display">
              {property.title}
            </h2>
            <div className="flex items-center gap-2 text-xs text-neutral-300 mt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{property.location}</span>
              <span aria-hidden="true">·</span>
              <span>{property.city}</span>
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">

          {/* Mandatory Placeholder Notice Bar */}
          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-950">
            <div className="font-semibold text-amber-900 mb-0.5">
              Portfolio Notice:
            </div>
            <div>
              {property.isPlaceholderNotice} — Pricing and specific inventory availability are customized upon direct client consultation at Dhanvi Enterprises.
            </div>
          </div>

          {/* Key Metric Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-neutral-100 text-center">
            <div className="p-3 bg-neutral-50 rounded-lg">
              <div className="text-xs text-neutral-500">Configuration</div>
              <div className="text-sm font-bold text-neutral-900 mt-0.5">
                {property.bedrooms || property.typeLabel}
              </div>
            </div>
            <div className="p-3 bg-neutral-50 rounded-lg">
              <div className="text-xs text-neutral-500">Super Built-up Area</div>
              <div className="text-sm font-bold text-neutral-900 mt-0.5">
                {property.areaSqFt}
              </div>
            </div>
            <div className="p-3 bg-neutral-50 rounded-lg">
              <div className="text-xs text-neutral-500">Possession</div>
              <div className="text-sm font-bold text-neutral-900 mt-0.5">
                {property.possessionStatus}
              </div>
            </div>
            <div className="p-3 bg-neutral-50 rounded-lg">
              <div className="text-xs text-neutral-500">Price Status</div>
              <div className="text-sm font-bold text-amber-700 mt-0.5">
                {property.priceDisplay}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-neutral-900 mb-2 uppercase tracking-wide">
              Property Overview
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Key Locality & Project Highlights */}
          <div>
            <h3 className="text-sm font-bold text-neutral-900 mb-2.5 uppercase tracking-wide">
              Key Highlights & Connectivity
            </h3>
            <ul className="space-y-2">
              {property.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Amenities & Provisions */}
          <div>
            <h3 className="text-sm font-bold text-neutral-900 mb-2.5 uppercase tracking-wide">
              Amenities & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-2 text-xs text-neutral-700">
              {property.features.map((feat, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 bg-neutral-100 rounded-md border border-neutral-200"
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>

          {/* Advisory & Legal Support Box */}
          <div className="bg-neutral-900 text-neutral-300 p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Assistance from Dhanvi Enterprises</span>
              </div>
              <p className="text-xs text-neutral-400">
                We coordinate document verification, bank loan eligibility with SBI/HDFC/ICICI, and accompanied site visits.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry(property.title);
              }}
              className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-semibold text-xs rounded-lg transition-all whitespace-nowrap active:scale-95 cursor-pointer shadow-sm"
            >
              Request Site Visit
            </button>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-5 py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold rounded-lg transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Agent {COMPANY_DETAILS.phoneDisplay}</span>
            </a>

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
