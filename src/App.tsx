import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PropertyListings } from './components/PropertyListings';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScheduleVisitModal } from './components/ScheduleVisitModal';
import { FloatingContactBar } from './components/FloatingContactBar';
import { AdminLeadDashboard } from './components/AdminLeadDashboard';
import { LeadCaptureModal } from './components/LeadCaptureModal';
import { LeadSystemExplainer } from './components/LeadSystemExplainer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedLocality, setSelectedLocality] = useState<string>('all');
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [selectedInquirySubject, setSelectedInquirySubject] = useState('');
  
  // Lead Generation States
  const [leadDeskOpen, setLeadDeskOpen] = useState(false);
  const [leadCaptureOpen, setLeadCaptureOpen] = useState(false);
  const [captureCriteria, setCaptureCriteria] = useState<{ type?: string; locality?: string; budget?: string }>({});

  const handleOpenInquiry = (subject?: string) => {
    setSelectedInquirySubject(subject || '');
    setScheduleModalOpen(true);
  };

  const handleOpenLeadCapture = (criteria?: { type?: string; locality?: string; budget?: string }) => {
    setCaptureCriteria(criteria || { type: selectedType, locality: selectedLocality });
    setLeadCaptureOpen(true);
  };

  const handleSearch = () => {
    setActiveTab('properties');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Also trigger the lead capture modal so Dhanvi Enterprises gets their contact details!
    setTimeout(() => {
      handleOpenLeadCapture({ type: selectedType, locality: selectedLocality });
    }, 600);
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedInquirySubject(`Service: ${serviceName}`);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 pb-14 md:pb-0">
      
      {/* Header with Lead Desk Access */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenLeadDesk={() => setLeadDeskOpen(true)}
      />

      {/* Main Content Area based on activeTab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero
              onExploreProperties={() => {
                setActiveTab('properties');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenInquiry={handleOpenInquiry}
              onOpenLeadCapture={handleOpenLeadCapture}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedLocality={selectedLocality}
              setSelectedLocality={setSelectedLocality}
              onSearch={handleSearch}
            />

            <PropertyListings
              initialType={selectedType}
              initialLocality={selectedLocality}
              onOpenInquiry={handleOpenInquiry}
            />

            <LeadSystemExplainer
              onOpenLeadDesk={() => setLeadDeskOpen(true)}
              onOpenTestLead={() => handleOpenLeadCapture()}
            />

            <ServicesSection onSelectService={handleSelectService} />

            <AboutSection
              onContactClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <TestimonialsSection />

            <ContactSection initialPropertyOrService={selectedInquirySubject} />
          </>
        )}

        {activeTab === 'properties' && (
          <div className="pt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <nav className="text-xs text-neutral-500 flex items-center gap-2">
                <button 
                  onClick={() => setActiveTab('home')} 
                  className="hover:text-neutral-900 transition-colors cursor-pointer"
                >
                  Home
                </button>
                <span>/</span>
                <span className="text-neutral-900 font-semibold">Properties in Bangalore</span>
              </nav>
            </div>

            <PropertyListings
              initialType={selectedType}
              initialLocality={selectedLocality}
              onOpenInquiry={handleOpenInquiry}
            />

            <LeadSystemExplainer
              onOpenLeadDesk={() => setLeadDeskOpen(true)}
              onOpenTestLead={() => handleOpenLeadCapture()}
            />

            <ContactSection initialPropertyOrService={selectedInquirySubject} />
          </div>
        )}

        {activeTab === 'services' && (
          <div className="pt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <nav className="text-xs text-neutral-500 flex items-center gap-2">
                <button 
                  onClick={() => setActiveTab('home')} 
                  className="hover:text-neutral-900 transition-colors cursor-pointer"
                >
                  Home
                </button>
                <span>/</span>
                <span className="text-neutral-900 font-semibold">Real Estate Services</span>
              </nav>
            </div>

            <ServicesSection onSelectService={handleSelectService} />

            <LeadSystemExplainer
              onOpenLeadDesk={() => setLeadDeskOpen(true)}
              onOpenTestLead={() => handleOpenLeadCapture()}
            />

            <ContactSection initialPropertyOrService={selectedInquirySubject} />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="pt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <nav className="text-xs text-neutral-500 flex items-center gap-2">
                <button 
                  onClick={() => setActiveTab('home')} 
                  className="hover:text-neutral-900 transition-colors cursor-pointer"
                >
                  Home
                </button>
                <span>/</span>
                <span className="text-neutral-900 font-semibold">About Dhanvi Enterprises</span>
              </nav>
            </div>

            <AboutSection
              onContactClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <TestimonialsSection />

            <ContactSection initialPropertyOrService={selectedInquirySubject} />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <nav className="text-xs text-neutral-500 flex items-center gap-2">
                <button 
                  onClick={() => setActiveTab('home')} 
                  className="hover:text-neutral-900 transition-colors cursor-pointer"
                >
                  Home
                </button>
                <span>/</span>
                <span className="text-neutral-900 font-semibold">Contact & Location</span>
              </nav>
            </div>

            <ContactSection initialPropertyOrService={selectedInquirySubject} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavClick={(tab) => {
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      {/* Mobile Floating Sticky Contact Bar */}
      <FloatingContactBar onOpenSchedule={() => handleOpenInquiry()} />

      {/* Schedule Visit & Consultation Modal */}
      <ScheduleVisitModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
        initialPropertyOrService={selectedInquirySubject}
      />

      {/* Search-to-Lead Instant Capture Modal */}
      <LeadCaptureModal
        isOpen={leadCaptureOpen}
        onClose={() => setLeadCaptureOpen(false)}
        searchCriteria={captureCriteria}
      />

      {/* Dhanvi Enterprises Admin Lead Desk */}
      <AdminLeadDashboard
        isOpen={leadDeskOpen}
        onClose={() => setLeadDeskOpen(false)}
      />

    </div>
  );
}
