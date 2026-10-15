import React from 'react';
import { Phone, MessageCircle, ArrowRight, Search, MapPin, Building, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS, IMAGES } from '../data/companyData';

interface HeroProps {
  onExploreProperties: () => void;
  onOpenInquiry: (initialType?: string) => void;
  onOpenLeadCapture?: (criteria: { type?: string; locality?: string }) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedLocality: string;
  setSelectedLocality: (locality: string) => void;
  onSearch: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProperties,
  onOpenInquiry,
  onOpenLeadCapture,
  selectedType,
  setSelectedType,
  selectedLocality,
  setSelectedLocality,
  onSearch,
}) => {
  return (
    <section className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Background Hero Image with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Modern residential and commercial real estate in Bangalore"
          className="w-full h-full object-cover object-center opacity-35"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/80 to-neutral-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28">
        
        {/* Brand Logo & Locality Kicker */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={IMAGES.logo}
            alt="Dhanvi Enterprises Real Estate Consultant"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-2xl border border-amber-500/50 shrink-0"
            referrerPolicy="no-referrer"
          />
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
              <MapPin className="w-3.5 h-3.5" />
              <span>Parappana Agrahara · Bengaluru</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-300 mt-0.5">
              {COMPANY_DETAILS.tagline} · South Bangalore Corridors
            </div>
          </div>
        </div>

        {/* Hero Headline & Proposition */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-white font-serif-display leading-[1.15] text-balance">
            Real Estate Advisory & Verified Properties in Bangalore
          </h1>

          <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
            Welcome to <strong className="text-white font-semibold">Dhanvi Enterprises</strong>. 
            We provide dependable guidance for buying, selling, and investing in residential apartments, independent villas, commercial spaces, and layout plots across Bangalore.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreProperties}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all rounded-lg shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Explore Property Listings</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-neutral-800/90 hover:bg-neutral-800 border border-neutral-700/80 active:scale-95 transition-all rounded-lg whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call {COMPANY_DETAILS.phoneDisplay}</span>
            </a>

            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900/90 border border-emerald-800/60 active:scale-95 transition-all rounded-lg whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Key Value Deliverables */}
          <div className="mt-10 pt-6 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Title & Encumbrance Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Accompanied Site Visits</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Home Loan Facilitation</span>
            </div>
          </div>
        </div>

        {/* Interactive Property Search & Filter Box */}
        <div className="mt-12 bg-white text-neutral-900 rounded-xl p-4 sm:p-6 shadow-2xl border border-neutral-200/80 max-w-4xl">
          <div className="flex items-center justify-between gap-4 pb-4 border-b border-neutral-100 mb-4">
            <div className="text-xs font-semibold text-neutral-900 uppercase tracking-wider flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-amber-600" />
              <span>Quick Property Finder</span>
            </div>
            <span className="text-xs text-neutral-500">
              Bangalore Urban & Suburbs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                Property Category
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-hidden transition-all text-neutral-900"
              >
                <option value="all">All Categories</option>
                <option value="residential">Residential Apartments</option>
                <option value="villa">Independent Villas</option>
                <option value="commercial">Commercial Spaces</option>
                <option value="plot">Plots & Layout Land</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                Bangalore Locality
              </label>
              <select
                value={selectedLocality}
                onChange={(e) => setSelectedLocality(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-hidden transition-all text-neutral-900"
              >
                <option value="all">All Localities</option>
                <option value="Parappana Agrahara">Parappana Agrahara / Kudlu</option>
                <option value="Electronic City">Electronic City Phase 1 & 2</option>
                <option value="Sarjapur">Sarjapur Road Corridor</option>
                <option value="HSR">HSR Layout & Vicinity</option>
                <option value="Other">Other Bangalore Locations</option>
              </select>
            </div>

            <div className="flex items-end gap-2">
              <button
                onClick={onSearch}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-neutral-900 hover:bg-neutral-800 active:scale-98 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all shadow-sm cursor-pointer whitespace-nowrap"
              >
                <Search className="w-4 h-4 text-amber-400" />
                <span>Search Listings</span>
              </button>

              <button
                onClick={() => onOpenLeadCapture ? onOpenLeadCapture({ type: selectedType, locality: selectedLocality }) : onOpenInquiry()}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-amber-400 hover:bg-amber-300 active:scale-98 text-neutral-950 text-xs sm:text-sm font-semibold rounded-lg transition-all shadow-sm cursor-pointer whitespace-nowrap"
                title="Get matching builder inventory on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-neutral-950" />
                <span>Get Lead Matches</span>
              </button>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500">
            <span className="flex items-center gap-1.5 text-neutral-600">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct connection to Dhanvi Enterprises. Verified Bangalore titles only.</span>
            </span>
            <button
              onClick={() => onOpenLeadCapture ? onOpenLeadCapture({ type: selectedType, locality: selectedLocality }) : onOpenInquiry()}
              className="text-amber-800 hover:text-amber-950 font-semibold underline underline-offset-2 cursor-pointer"
            >
              Get Verified Properties Sent to Your WhatsApp &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
