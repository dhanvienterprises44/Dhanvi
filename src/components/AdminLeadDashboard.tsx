import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Mail, Clock, Download, CheckCircle, Trash2, Search, Filter, ShieldCheck, X } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export interface StoredLead {
  id: string;
  date: string;
  fullName: string;
  phone: string;
  email: string;
  propertyType: string;
  preferredLocality: string;
  budgetRange: string;
  message: string;
  status?: 'New' | 'Contacted' | 'Site Visit' | 'Closed';
}

interface AdminLeadDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLeadDashboard: React.FC<AdminLeadDashboardProps> = ({ isOpen, onClose }) => {
  const [leads, setLeads] = useState<StoredLead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen]);

  const loadLeads = () => {
    try {
      const data = JSON.parse(localStorage.getItem('dhanvi_inquiries') || '[]');
      if (data.length === 0) {
        // Seed initial realistic sample leads for Dhanvi Enterprises so the dashboard is immediately demonstrable
        const sampleLeads: StoredLead[] = [
          {
            id: 'DE-849201',
            date: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
            fullName: 'Rajesh Subramanian',
            phone: '9845123980',
            email: 'rajesh.subra@example.com',
            propertyType: 'Residential Apartment (3 BHK)',
            preferredLocality: 'Parappana Agrahara Main Road',
            budgetRange: '₹1 Crore – ₹2 Crores',
            message: 'Looking for a ready-to-move 3 BHK near Food Max Hypermarket corridor with covered car parking.',
            status: 'New'
          },
          {
            id: 'DE-849188',
            date: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
            fullName: 'Anita & Karthik Gowda',
            phone: '9900887712',
            email: 'anita.gowda@example.com',
            propertyType: 'Residential Layout Plot',
            preferredLocality: 'Sai Baba Layout / Southern Winds',
            budgetRange: '₹50 Lakhs – ₹1 Crore',
            message: 'Need a 30x40 or 30x50 BDA/clear title plot for independent house construction.',
            status: 'Contacted'
          },
          {
            id: 'DE-849140',
            date: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
            fullName: 'Sandeep Varma',
            phone: '9620456123',
            email: 'sandeep.v@example.com',
            propertyType: 'Independent Luxury Villa',
            preferredLocality: 'Sarjapur Road Corridor',
            budgetRange: '₹2 Crores – ₹5 Crores',
            message: 'Interested in gated villa community with private garden terrace. Need site visit on Saturday.',
            status: 'Site Visit'
          }
        ];
        localStorage.setItem('dhanvi_inquiries', JSON.stringify(sampleLeads));
        setLeads(sampleLeads);
      } else {
        setLeads(data);
      }
    } catch {
      setLeads([]);
    }
  };

  const handleUpdateStatus = (id: string, newStatus: 'New' | 'Contacted' | 'Site Visit' | 'Closed') => {
    const updated = leads.map((l) => (l.id === id ? { ...l, status: newStatus } : l));
    setLeads(updated);
    localStorage.setItem('dhanvi_inquiries', JSON.stringify(updated));
  };

  const handleDeleteLead = (id: string) => {
    const updated = leads.filter((l) => l.id !== id);
    setLeads(updated);
    localStorage.setItem('dhanvi_inquiries', JSON.stringify(updated));
  };

  const handleExportCSV = () => {
    if (leads.length === 0) return;
    const headers = ['Ref ID', 'Date', 'Full Name', 'Phone', 'Email', 'Property Type', 'Locality', 'Budget', 'Status', 'Message'];
    const rows = leads.map((l) => [
      l.id,
      new Date(l.date).toLocaleString('en-IN'),
      `"${l.fullName}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.propertyType}"`,
      `"${l.preferredLocality}"`,
      `"${l.budgetRange}"`,
      l.status || 'New',
      `"${(l.message || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Dhanvi_Enterprises_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  const filtered = leads.filter((lead) => {
    const matchesSearch =
      lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm) ||
      lead.preferredLocality.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.propertyType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || (lead.status || 'New') === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div 
        className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-neutral-200 text-neutral-900"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-neutral-900 text-white flex items-center justify-between border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-400 text-neutral-950 rounded-lg">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-serif-display text-white">
                Dhanvi Enterprises · Lead Generation Desk
              </h2>
              <div className="text-xs text-neutral-400">
                Live buyer inquiries captured from real estate searches & property inquiries
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold rounded-lg border border-neutral-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 bg-neutral-50 border-b border-neutral-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-neutral-400 shrink-0" />
            <input
              type="text"
              placeholder="Search by buyer name, phone, locality, or requirement..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-1.5 text-xs text-neutral-900 focus:outline-hidden focus:ring-1 focus:ring-neutral-900"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-neutral-500 font-medium">Status:</span>
            {['All', 'New', 'Contacted', 'Site Visit', 'Closed'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  statusFilter === st
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Lead List Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-neutral-500 text-xs">
              No buyer inquiries found matching current filters.
            </div>
          ) : (
            filtered.map((lead) => {
              const leadWhatsAppUrl = `https://wa.me/91${lead.phone.replace(/[^0-9]/g, '').slice(-10)}?text=${encodeURIComponent(
                `Hello ${lead.fullName}, thank you for inquiring with Dhanvi Enterprises regarding ${lead.propertyType} in ${lead.preferredLocality}. How can I assist you today?`
              )}`;

              return (
                <div
                  key={lead.id}
                  className="bg-white rounded-xl border border-neutral-200 p-4 sm:p-5 shadow-2xs hover:border-neutral-300 transition-all space-y-3"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-neutral-950 font-serif-display">
                          {lead.fullName}
                        </span>
                        <span className="text-[11px] font-mono text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded">
                          {lead.id}
                        </span>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                            lead.status === 'Contacted'
                              ? 'bg-blue-100 text-blue-800'
                              : lead.status === 'Site Visit'
                              ? 'bg-purple-100 text-purple-800'
                              : lead.status === 'Closed'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-900'
                          }`}
                        >
                          {lead.status || 'New Lead'}
                        </span>
                      </div>
                      
                      <div className="text-xs text-neutral-500 mt-1 flex items-center gap-2">
                        <Clock className="w-3 h-3 text-neutral-400" />
                        <span>{new Date(lead.date).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</span>
                      </div>
                    </div>

                    {/* Quick Call & WhatsApp Action for Dhanvi Team */}
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${lead.phone}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold transition-colors"
                      >
                        <Phone className="w-3 h-3 text-amber-400" />
                        <span>Call Buyer</span>
                      </a>

                      <a
                        href={leadWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </a>

                      <button
                        onClick={() => handleDeleteLead(lead.id)}
                        className="p-1.5 text-neutral-400 hover:text-red-600 rounded-md transition-colors"
                        title="Delete Lead"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Requirements Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-neutral-100 text-xs">
                    <div className="p-2 bg-neutral-50 rounded-lg">
                      <div className="text-[10px] text-neutral-500 uppercase font-medium">Looking For</div>
                      <div className="font-semibold text-neutral-900 truncate mt-0.5">{lead.propertyType}</div>
                    </div>
                    <div className="p-2 bg-neutral-50 rounded-lg">
                      <div className="text-[10px] text-neutral-500 uppercase font-medium">Target Locality</div>
                      <div className="font-semibold text-neutral-900 truncate mt-0.5">{lead.preferredLocality}</div>
                    </div>
                    <div className="p-2 bg-neutral-50 rounded-lg">
                      <div className="text-[10px] text-neutral-500 uppercase font-medium">Budget Bracket</div>
                      <div className="font-semibold text-neutral-900 truncate mt-0.5">{lead.budgetRange}</div>
                    </div>
                    <div className="p-2 bg-neutral-50 rounded-lg">
                      <div className="text-[10px] text-neutral-500 uppercase font-medium">Contact Phone</div>
                      <div className="font-semibold text-neutral-900 truncate mt-0.5">{lead.phone}</div>
                    </div>
                  </div>

                  {/* Message / Remarks */}
                  {lead.message && (
                    <div className="text-xs bg-amber-50/50 border border-amber-100 p-2.5 rounded-lg text-neutral-800">
                      <strong className="text-amber-900 font-semibold">Buyer Message: </strong>
                      {lead.message}
                    </div>
                  )}

                  {/* Status Toggle Buttons */}
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-100 text-xs">
                    <span className="text-neutral-500">Update Lead Progress:</span>
                    <div className="flex items-center gap-1.5">
                      {(['New', 'Contacted', 'Site Visit', 'Closed'] as const).map((st) => (
                        <button
                          key={st}
                          onClick={() => handleUpdateStatus(lead.id, st)}
                          className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                            (lead.status || 'New') === st
                              ? 'bg-neutral-900 text-white font-semibold'
                              : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })
          )}
        </div>

        {/* Footer Note */}
        <div className="p-3 bg-neutral-100 border-t border-neutral-200 text-[11px] text-neutral-600 flex items-center justify-between">
          <span>Inquiries are synchronized locally and dispatched immediately to Dhanvi Enterprises.</span>
          <span className="font-medium text-neutral-900">Total Leads: {leads.length}</span>
        </div>

      </div>
    </div>
  );
};
