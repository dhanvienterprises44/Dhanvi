import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface FloatingContactBarProps {
  onOpenSchedule: () => void;
}

export const FloatingContactBar: React.FC<FloatingContactBarProps> = ({ onOpenSchedule }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-3 py-2 shadow-lg h-14 flex items-center justify-between gap-2">
      
      {/* Call Button */}
      <a
        href={`tel:${COMPANY_DETAILS.phone}`}
        className="flex-1 flex items-center justify-center gap-1.5 h-10 px-2 bg-neutral-900 text-white rounded-lg text-xs font-semibold active:scale-95 transition-all shadow-2xs whitespace-nowrap"
      >
        <Phone className="w-3.5 h-3.5 text-amber-400" />
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={COMPANY_DETAILS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 h-10 px-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold active:scale-95 transition-all shadow-2xs whitespace-nowrap"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      {/* Schedule Visit Button */}
      <button
        onClick={onOpenSchedule}
        className="flex-1 flex items-center justify-center gap-1.5 h-10 px-2 bg-amber-400 text-neutral-950 rounded-lg text-xs font-semibold active:scale-95 transition-all shadow-2xs whitespace-nowrap cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Visit</span>
      </button>

    </div>
  );
};
