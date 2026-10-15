import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS, BANGALORE_LOCALITIES, IMAGES } from '../data/companyData';

interface FooterProps {
  onNavClick: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/80">
          
          {/* Brand & About Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src={IMAGES.logo}
                alt="Dhanvi Enterprises Real Estate Consultant"
                className="w-12 h-12 rounded-xl object-cover shadow-md border border-neutral-800 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="text-xl font-bold font-serif-display text-white">
                  {COMPANY_DETAILS.name}
                </div>
                <div className="text-[11px] font-medium tracking-wider text-amber-400 uppercase mt-0.5">
                  {COMPANY_DETAILS.tagline} · Bangalore
                </div>
              </div>
            </div>

            <p className="text-neutral-400 leading-relaxed text-xs">
              Trusted property consulting in Bangalore. We assist buyers, investors, and landowners with verified residential apartments, luxury villas, layout plots, and commercial properties.
            </p>

            <div className="pt-2 text-[11px] text-neutral-500">
              {COMPANY_DETAILS.registrationPlaceholder}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('properties')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Property Listings
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Our Firm
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Localities Served */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Bengaluru Corridors
            </div>
            <ul className="grid grid-cols-1 gap-1.5 text-neutral-400 text-xs">
              {BANGALORE_LOCALITIES.slice(0, 6).map((loc, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-amber-500 rounded-full shrink-0" />
                  <span>{loc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Office Details
            </div>
            
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY_DETAILS.address}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white transition-colors break-all">
                  {COMPANY_DETAILS.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={COMPANY_DETAILS.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: +91 96263 68833
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved. Bangalore, Karnataka, India.
          </div>

          <div className="flex items-center gap-4">
            <span>RERA & Registration details provided upon request</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
