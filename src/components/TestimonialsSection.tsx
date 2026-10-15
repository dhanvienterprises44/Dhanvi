import React from 'react';
import { Quote, CheckCircle, Info } from 'lucide-react';
import { PLACEHOLDER_TESTIMONIALS } from '../data/companyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
            Client Experiences & References
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-neutral-950">
            Trusted by Bangalore Property Buyers & Landowners
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Read representative feedback reflecting our advisory standards, client communication, and local area expertise.
          </p>
        </div>

        {/* Mandatory Transparency Callout */}
        <div className="mb-8 p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-start gap-3 text-xs text-amber-950">
          <Info className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-semibold text-amber-900">Reference Transparency Notice: </span>
            Per privacy guidelines, the testimonials below serve as representative customer feedback placeholders. Verifiable client references, transaction histories, and homeowner contacts can be shared during one-on-one consultations upon mutual consent.
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLACEHOLDER_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200/90 flex flex-col justify-between space-y-4 hover:border-neutral-300 transition-colors"
            >
              <div>
                <Quote className="w-6 h-6 text-neutral-300 mb-3" />
                
                {/* Placeholder Notice */}
                <div className="text-[10px] font-semibold tracking-wider uppercase text-amber-800 mb-2">
                  {item.placeholderNotice}
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic">
                  "{item.feedbackText}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-neutral-200/70">
                <div className="text-xs font-bold text-neutral-900">
                  {item.clientLabel}
                </div>
                <div className="text-[11px] text-neutral-500 mt-0.5">
                  {item.roleOrLocation} · {item.propertyInterest}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
