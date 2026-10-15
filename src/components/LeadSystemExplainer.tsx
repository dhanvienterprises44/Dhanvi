import React from 'react';
import { Search, MapPin, MessageCircle, Phone, ArrowRight, ShieldCheck, Zap, Users, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface LeadSystemExplainerProps {
  onOpenLeadDesk: () => void;
  onOpenTestLead: () => void;
}

export const LeadSystemExplainer: React.FC<LeadSystemExplainerProps> = ({ onOpenLeadDesk, onOpenTestLead }) => {
  return (
    <section className="py-16 sm:py-20 bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Automated Real Estate Lead System</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-display text-white">
            How Property Searchers Become Live Buyer Leads for Dhanvi Enterprises
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
            Yes! When potential buyers in Bangalore search online for houses, flats, or plots, our integrated system captures their search intent and delivers verified buyer leads directly to your phone and WhatsApp in real time.
          </p>
        </div>

        {/* 4-Step Lead Generation Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Step 1 */}
          <div className="bg-neutral-800/70 rounded-2xl p-6 border border-neutral-700/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Buyer Searches Google
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                A homebuyer in Bangalore types: <em className="text-amber-200">"Buy 3 BHK flat near Parappana Agrahara"</em> or <em className="text-amber-200">"Plots near Kudlu Gate / Electronic City"</em> on Google.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-700/60 text-[11px] text-amber-400 font-medium flex items-center gap-1">
              <Search className="w-3.5 h-3.5" />
              <span>Targeted Bangalore Local SEO</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-neutral-800/70 rounded-2xl p-6 border border-neutral-700/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-400/10 border border-blue-400/30 text-blue-400 flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Lands on Dhanvi Website
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                The buyer discovers Dhanvi Enterprises, selects their preferred configuration (Apartment, Villa, Plot), target locality, and budget.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-700/60 text-[11px] text-blue-400 font-medium flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Smart Property Search</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-neutral-800/70 rounded-2xl p-6 border border-neutral-700/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Instant Lead Notification
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                The instant the customer submits their phone number, the lead is pushed directly to Dhanvi Enterprises’ WhatsApp (<strong className="text-emerald-300">9626368833</strong>) and Email.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-700/60 text-[11px] text-emerald-400 font-medium flex items-center gap-1">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Zero-Delay WhatsApp Alert</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-neutral-800/70 rounded-2xl p-6 border border-neutral-700/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-400/10 border border-purple-400/30 text-purple-400 flex items-center justify-center font-bold text-sm mb-4">
                04
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Lead Desk & Call Conversion
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                You immediately call or WhatsApp the buyer with active inventory, schedule an on-ground site visit, and manage the lead until deal closure.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-700/60 text-[11px] text-purple-400 font-medium flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              <span>1-Tap Dial & Follow-Up</span>
            </div>
          </div>

        </div>

        {/* Lead Desk Action Bar */}
        <div className="bg-neutral-950 rounded-2xl p-6 sm:p-8 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white font-serif-display flex items-center justify-center md:justify-start gap-2">
              <Users className="w-5 h-5 text-amber-400" />
              <span>Dhanvi Enterprises Private Lead Desk</span>
            </h4>
            <p className="text-xs text-neutral-400">
              Check all real-time buyer inquiries, filter by Bangalore locality, track site visit status, or export to CSV.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenTestLead}
              className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 active:scale-95 text-xs font-semibold text-neutral-200 rounded-lg border border-neutral-700 transition-all cursor-pointer"
            >
              Simulate Buyer Search Lead
            </button>

            <button
              onClick={onOpenLeadDesk}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 active:scale-95 text-xs font-semibold text-neutral-950 rounded-lg transition-all shadow-sm cursor-pointer"
            >
              Open Lead Desk Dashboard &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
