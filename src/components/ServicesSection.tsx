import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Landmark, MapPinned, FileCheck } from 'lucide-react';
import { SERVICES_LIST, COMPANY_DETAILS } from '../data/companyData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services-section" className="py-16 sm:py-24 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            Real Estate Solutions in Bangalore
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-display text-neutral-950">
            Comprehensive Property Advisory & Transaction Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Dhanvi Enterprises provides structured, end-to-end guidance for homebuyers, landowners, and commercial investors. From initial property scouting to bank finance and registration support, we protect your interests at every step.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.number}
              className="bg-neutral-50/70 rounded-2xl p-6 sm:p-8 border border-neutral-200/90 hover:border-neutral-300 hover:bg-neutral-50 transition-all flex flex-col justify-between group shadow-2xs"
            >
              <div>
                {/* Natural Editorial Numbering */}
                <div className="text-2xl sm:text-3xl font-serif-display font-bold text-neutral-300 group-hover:text-amber-700 transition-colors">
                  {service.number}
                </div>

                <h3 className="mt-3 text-lg font-bold text-neutral-950">
                  {service.title}
                </h3>
                
                <div className="text-xs font-medium text-amber-800 mt-0.5">
                  {service.subtitle}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-5 pt-4 border-t border-neutral-200/60 space-y-2">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Action Link */}
              <div className="mt-6 pt-4 border-t border-neutral-200/60">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 hover:text-amber-800 transition-colors cursor-pointer group/btn"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow Strip */}
        <div className="mt-16 bg-neutral-900 text-white rounded-2xl p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-400 mb-1">
              Transparent Execution
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-display">
              How Dhanvi Enterprises Works With You
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="p-4 bg-neutral-800/60 rounded-xl border border-neutral-800">
              <div className="text-xs font-bold text-amber-400 mb-1">Step 01</div>
              <div className="text-sm font-bold text-white mb-1.5">Consultation & Criteria</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Understand your preferred Bangalore location, budget bracket, configuration, and timeline.
              </p>
            </div>

            <div className="p-4 bg-neutral-800/60 rounded-xl border border-neutral-800">
              <div className="text-xs font-bold text-amber-400 mb-1">Step 02</div>
              <div className="text-sm font-bold text-white mb-1.5">Shortlisting & Site Visits</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Curate verified options and coordinate accompanied, stress-free property inspections.
              </p>
            </div>

            <div className="p-4 bg-neutral-800/60 rounded-xl border border-neutral-800">
              <div className="text-xs font-bold text-amber-400 mb-1">Step 03</div>
              <div className="text-sm font-bold text-white mb-1.5">Legal & Bank Due Diligence</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Coordinate title verification, EC verification, and liaison with leading home loan lenders.
              </p>
            </div>

            <div className="p-4 bg-neutral-800/60 rounded-xl border border-neutral-800">
              <div className="text-xs font-bold text-amber-400 mb-1">Step 04</div>
              <div className="text-sm font-bold text-white mb-1.5">Closing & Registration</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Support throughout agreement execution and sub-registrar office registration formalities.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
