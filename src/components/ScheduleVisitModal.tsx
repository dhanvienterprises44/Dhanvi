import React, { useState } from 'react';
import { X, Send, Calendar, Clock, MapPin, CheckCircle2, Phone, AlertCircle } from 'lucide-react';
import { COMPANY_DETAILS, BANGALORE_LOCALITIES } from '../data/companyData';

interface ScheduleVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPropertyOrService?: string;
}

export const ScheduleVisitModal: React.FC<ScheduleVisitModalProps> = ({
  isOpen,
  onClose,
  initialPropertyOrService = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM – 1:00 PM)');
  const [propertyInterest, setPropertyInterest] = useState(
    initialPropertyOrService || 'Parappana Agrahara / South Bangalore Corridor'
  );
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || name.trim().length < 2) {
      setError('Please provide your name.');
      return;
    }
    const cleanPhone = phone.replace(/[\s-]/g, '');
    if (!cleanPhone || !/^(\+91)?[6-9]\d{9}$/.test(cleanPhone)) {
      setError('Please provide a valid 10-digit Indian phone number.');
      return;
    }
    setError('');
    setIsDone(true);
  };

  const whatsappVisitUrl = `https://wa.me/919626368833?text=${encodeURIComponent(
    `Hello Dhanvi Enterprises, I would like to schedule a site visit.\nName: ${name}\nPhone: ${phone}\nDate: ${preferredDate || 'Flexible'}\nSlot: ${preferredTime}\nProperty Interest: ${propertyInterest}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 text-neutral-900 animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isDone ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-serif-display text-neutral-950">
              Site Visit Requested!
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-neutral-900">{name}</strong>. Our representative from Dhanvi Enterprises will call you shortly on <strong className="text-neutral-900">{phone}</strong> to confirm the appointment.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={whatsappVisitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Confirm on WhatsApp Now
              </a>
              <button
                onClick={onClose}
                className="w-full py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                On-Ground Property Tour
              </div>
              <h3 className="text-xl font-bold font-serif-display text-neutral-950 mt-1">
                Schedule a Site Visit
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Visit property locations with an experienced Dhanvi Enterprises advisor.
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-3.5 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Mobile Number <span className="text-red-500">*</span>
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
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Time Slot
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-hidden"
                >
                  <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                  <option value="Evening (4:00 PM – 7:00 PM)">Evening (4:00 PM – 7:00 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Property or Locality of Interest
              </label>
              <input
                type="text"
                value={propertyInterest}
                onChange={(e) => setPropertyInterest(e.target.value)}
                placeholder="e.g. 2 BHK near Kudlu Gate, Plot in Sai Baba Layout"
                className="w-full px-3.5 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-hidden"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg transition-all active:scale-98 cursor-pointer shadow-sm"
              >
                Confirm Site Visit Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
