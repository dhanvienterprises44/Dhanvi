import React from 'react';
import { MapPin, Phone, Mail, Building, CheckCircle2, ShieldCheck, Compass, Users } from 'lucide-react';
import { COMPANY_DETAILS, IMAGES } from '../data/companyData';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about-section" className="py-16 sm:py-24 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Split: Story + Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <img
                  src={IMAGES.logo}
                  alt="Dhanvi Enterprises Logo"
                  className="w-14 h-14 rounded-xl object-cover shadow-md border border-neutral-800 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                    About Dhanvi Enterprises
                  </div>
                  <div className="text-xs text-neutral-500">
                    {COMPANY_DETAILS.tagline} · Bangalore, Karnataka
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-display text-neutral-950 leading-tight">
                Your Trusted Real Estate Partner in Bangalore
              </h2>
              
              <div className="mt-5 space-y-4 text-sm text-neutral-700 leading-relaxed">
                <p>
                  Established in Bengaluru, <strong className="font-semibold text-neutral-900">Dhanvi Enterprises</strong> operates with a single foundational commitment: providing genuine, transparent, and personalized property consultancy to homebuyers, landowners, and commercial investors.
                </p>
                <p>
                  Our office is conveniently located at <strong className="text-neutral-900">Plot No. 104, 1st Cross, Sai Baba (Southern Winds), Parappana Agrahara Main Road</strong>, placing us at the very center of South Bangalore’s rapid growth corridor—connecting Electronic City, HSR Layout, Kudlu Gate, and the Hosur Road artery.
                </p>
                <p>
                  We understand that buying or selling real estate in Bangalore involves substantial financial and emotional decisions. That is why we provide thorough title document reviews, direct seller interactions, market-tested price evaluations, and bank home loan coordination—ensuring our clients transact with total peace of mind.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
              <div className="p-4 bg-white rounded-xl border border-neutral-200/90 shadow-2xs">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-1">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>Transparent Dealing</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Honest guidance with clear disclosures on land titles, local approvals, and genuine market pricing.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-neutral-200/90 shadow-2xs">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-1">
                  <Compass className="w-4 h-4 text-amber-700" />
                  <span>Hyper-Local Bangalore Focus</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Specialized insights across Parappana Agrahara, Kudlu Gate, Electronic City, and South Bengaluru.
                </p>
              </div>
            </div>

            {/* Regulatory Compliance & Placeholder Notice */}
            <div className="p-4 bg-neutral-100 rounded-xl border border-neutral-200 text-xs text-neutral-600 space-y-1">
              <div className="font-semibold text-neutral-900">
                Official Compliance & Documentation Note:
              </div>
              <p>
                {COMPANY_DETAILS.registrationPlaceholder}. Dhanvi Enterprises conducts property facilitation strictly with verifiable title records and legally vetted documentation.
              </p>
            </div>
          </div>

          {/* Right Column: Office & Location Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 shadow-sm">
            <div className="space-y-6">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-neutral-900">
                <img
                  src={IMAGES.villa}
                  alt="Bangalore residential communities serviced by Dhanvi Enterprises"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-medium text-amber-400">Headquartered in Bengaluru</div>
                  <div className="text-sm font-bold font-serif-display">Sai Baba (Southern Winds) Enclave</div>
                </div>
              </div>

              <div className="space-y-3 text-xs text-neutral-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 block font-semibold mb-0.5">Office Address:</strong>
                    <span>{COMPANY_DETAILS.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 block font-semibold mb-0.5">Telephone:</strong>
                    <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-neutral-900 hover:text-amber-800 font-medium">
                      {COMPANY_DETAILS.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 block font-semibold mb-0.5">Email Correspondence:</strong>
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-neutral-900 hover:text-amber-800 break-all font-medium">
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex gap-3">
              <button
                onClick={onContactClick}
                className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 active:scale-95 text-white text-xs font-semibold rounded-lg transition-all text-center cursor-pointer"
              >
                Schedule an Office Meeting
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
