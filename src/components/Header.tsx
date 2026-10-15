import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Mail, MapPin, Users } from 'lucide-react';
import { COMPANY_DETAILS, IMAGES } from '../data/companyData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenInquiry: () => void;
  onOpenLeadDesk: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenInquiry, onOpenLeadDesk }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'properties', label: 'Properties' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Bar Banner for Local Trust & Quick Contact */}
      <div className="bg-neutral-900 text-neutral-300 text-xs py-2 px-4 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs font-normal">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="truncate">{COMPANY_DETAILS.shortAddress}</span>
            </span>
            <span className="hidden md:inline-block text-neutral-600">|</span>
            <span className="hidden md:flex items-center gap-1 text-neutral-400">
              {COMPANY_DETAILS.officeHours}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`mailto:${COMPANY_DETAILS.email}`} 
              className="hidden sm:flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>
            <a 
              href={COMPANY_DETAILS.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Inquiry</span>
            </a>

            <button
              onClick={onOpenLeadDesk}
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors font-medium cursor-pointer"
              title="View captured buyer leads"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Lead Desk</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation - Strict Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark with official logo badge */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-hidden"
          >
            <img
              src={IMAGES.logo}
              alt="Dhanvi Enterprises Logo"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg object-cover shadow-sm border border-neutral-800 shrink-0 group-hover:scale-102 transition-transform"
              referrerPolicy="no-referrer"
            />
            <div className="shrink-0">
              <div className="text-lg sm:text-xl font-bold tracking-tight text-neutral-950 font-serif-display group-hover:text-amber-800 transition-colors whitespace-nowrap">
                {COMPANY_DETAILS.name}
              </div>
              <div className="text-[10.5px] font-medium tracking-wider text-amber-700 uppercase -mt-0.5">
                {COMPANY_DETAILS.tagline} · Bangalore
              </div>
            </div>
          </button>

          {/* Zone 2: 4–5 single-line clean text nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-600">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`py-1 relative transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === link.id
                    ? 'text-neutral-950 font-semibold'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-900 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 active:scale-95 transition-all rounded-lg whitespace-nowrap shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call {COMPANY_DETAILS.phone}</span>
            </a>

            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-900 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all rounded-lg whitespace-nowrap shadow-xs"
            >
              <span>Quick Inquiry</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-5 shadow-lg space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    activeTab === link.id
                      ? 'bg-neutral-100 text-neutral-950 font-semibold'
                      : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-neutral-900 rounded-lg"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {COMPANY_DETAILS.phoneDisplay}</span>
              </a>

              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
