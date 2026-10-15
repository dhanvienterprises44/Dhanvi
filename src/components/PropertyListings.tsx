import React, { useState, useMemo } from 'react';
import { MapPin, Phone, MessageCircle, ExternalLink, BedDouble, Bath, Maximize2, Filter, Info, ArrowUpRight } from 'lucide-react';
import { PropertyListing, PropertyType } from '../types';
import { REPRESENTATIVE_PROPERTIES, COMPANY_DETAILS } from '../data/companyData';
import { PropertyDetailModal } from './PropertyDetailModal';

interface PropertyListingsProps {
  initialType?: string;
  initialLocality?: string;
  onOpenInquiry: (propertyName?: string) => void;
}

export const PropertyListings: React.FC<PropertyListingsProps> = ({
  initialType = 'all',
  initialLocality = 'all',
  onOpenInquiry,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialType);
  const [selectedLocality, setSelectedLocality] = useState<string>(initialLocality);
  const [activeModalProperty, setActiveModalProperty] = useState<PropertyListing | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Properties' },
    { id: 'residential', label: 'Residential Apartments' },
    { id: 'villa', label: 'Luxury Villas' },
    { id: 'commercial', label: 'Commercial Spaces' },
    { id: 'plot', label: 'Plots & Land' },
  ];

  const filteredProperties = useMemo(() => {
    return REPRESENTATIVE_PROPERTIES.filter((prop) => {
      const matchesCategory =
        selectedCategory === 'all' || prop.type === selectedCategory;
      const matchesLocality =
        selectedLocality === 'all' ||
        prop.location.toLowerCase().includes(selectedLocality.toLowerCase()) ||
        prop.localityArea.toLowerCase().includes(selectedLocality.toLowerCase());
      return matchesCategory && matchesLocality;
    });
  }, [selectedCategory, selectedLocality]);

  return (
    <section id="properties-section" className="py-16 sm:py-24 bg-neutral-100/60 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              Bangalore Property Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-display text-neutral-950">
              Featured Properties & Layout Land
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-2xl">
              Explore residential apartments, independent duplex villas, commercial hubs, and layout plots in South and East Bangalore corridors.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenInquiry()}
              className="px-4 py-2.5 text-xs font-semibold text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all active:scale-95 shadow-xs whitespace-nowrap cursor-pointer"
            >
              Post Your Property Requirement
            </button>
          </div>
        </div>

        {/* Mandatory Quality Constraint Advisory Note */}
        <div className="mb-8 p-4 bg-white border border-neutral-200 rounded-xl shadow-xs flex items-start gap-3 text-xs text-neutral-600">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-neutral-900 font-semibold">Inventory Notice: </strong>
            To protect property buyer confidentiality and maintain compliance, the listings shown below represent Dhanvi Enterprises’ verified property portfolio categories in Bangalore. Exact prices, unit surveys, survey numbers, and customized inspection schedules are shared upon direct consultation with our advisory team.
          </div>
        </div>

        {/* Interactive Filter Tabs - Functional Segmented Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-neutral-200 rounded-xl shadow-2xs">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="font-semibold text-neutral-900">{filteredProperties.length}</span>
            <span>categories found</span>
          </div>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProperties.map((prop) => {
            const propWhatsappUrl = `https://wa.me/919626368833?text=${encodeURIComponent(
              `Hello Dhanvi Enterprises, I would like to inquire about "${prop.title}" in ${prop.location}.`
            )}`;

            return (
              <div
                key={prop.id}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                {/* Property Image with Fallback Container & Unboxed Kicker */}
                <div className="relative aspect-16/10 overflow-hidden bg-neutral-900">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-neutral-950/15" />
                  
                  {/* Clean unboxed category & status */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-medium bg-neutral-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] tracking-wide">
                      {prop.typeLabel}
                    </span>
                    <span className="font-medium bg-amber-400 text-neutral-950 px-2 py-0.5 rounded-md text-[11px]">
                      {prop.priceDisplay}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-neutral-200">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{prop.location}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Placeholder Label */}
                    <div className="text-[11px] font-medium text-amber-800 mb-1">
                      {prop.isPlaceholderNotice}
                    </div>

                    <h3 className="text-lg font-bold text-neutral-950 font-serif-display group-hover:text-amber-900 transition-colors">
                      {prop.title}
                    </h3>

                    <p className="mt-2 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {prop.description}
                    </p>

                    {/* Unboxed Metadata Specs with Typographic Separators */}
                    <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center flex-wrap gap-2 text-xs text-neutral-600">
                      <span className="font-medium text-neutral-900">{prop.areaSqFt}</span>
                      <span aria-hidden="true" className="text-neutral-300">·</span>
                      <span>{prop.bedrooms || prop.typeLabel}</span>
                      <span aria-hidden="true" className="text-neutral-300">·</span>
                      <span className="text-neutral-700">{prop.possessionStatus}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalProperty(prop)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`tel:${COMPANY_DETAILS.phone}`}
                      className="inline-flex items-center justify-center p-2 text-xs font-medium text-neutral-700 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
                      title={`Call ${COMPANY_DETAILS.phone}`}
                    >
                      <Phone className="w-4 h-4 text-amber-700" />
                    </a>

                    <a
                      href={propWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors"
                      title="Inquire on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Custom Consultation Card */}
        <div className="mt-12 bg-neutral-950 text-white rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-serif-display">
              Have a Specific Property or Plot Requirement?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Whether you are looking for an independent site in Sai Baba Layout, a 3 BHK near Kudlu Gate, or commercial office floor space, Dhanvi Enterprises conducts dedicated on-ground searches.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => onOpenInquiry()}
              className="px-5 py-3 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all rounded-lg cursor-pointer"
            >
              Submit Requirements
            </button>
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="px-5 py-3 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 active:scale-95 transition-all rounded-lg border border-neutral-700"
            >
              Call {COMPANY_DETAILS.phoneDisplay}
            </a>
          </div>
        </div>

      </div>

      {/* Property Details Modal */}
      <PropertyDetailModal
        property={activeModalProperty}
        onClose={() => setActiveModalProperty(null)}
        onOpenInquiry={(title) => {
          setActiveModalProperty(null);
          onOpenInquiry(title);
        }}
      />
    </section>
  );
};
