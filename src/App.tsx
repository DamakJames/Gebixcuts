import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { VideoModal } from './components/VideoModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AcademyPage } from './pages/AcademyPage';
import { ContactPage } from './pages/ContactPage';
import type { PortfolioItem } from './data/websiteData';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>();
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const handleOpenBooking = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleOpenVideo = (project?: PortfolioItem) => {
    setSelectedProject(project || null);
    setIsVideoOpen(true);
  };

  // Scroll to top on tab switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#060608] text-white flex flex-col justify-between selection:bg-[#E6AF2E] selection:text-black font-sans">
      {/* Cinematic Header Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Dynamic Page Views */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <Home 
            setActiveTab={setActiveTab} 
            onOpenBooking={handleOpenBooking} 
            onOpenVideo={handleOpenVideo} 
          />
        )}
        {activeTab === 'about' && (
          <About onOpenBooking={() => handleOpenBooking()} />
        )}
        {activeTab === 'services' && (
          <ServicesPage onOpenBooking={handleOpenBooking} />
        )}
        {activeTab === 'portfolio' && (
          <PortfolioPage onOpenBooking={() => handleOpenBooking()} onOpenVideo={handleOpenVideo} />
        )}
        {activeTab === 'academy' && (
          <AcademyPage onOpenBooking={handleOpenBooking} />
        )}
        {activeTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Cinematic Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Interactive Modals */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        preselectedService={preselectedService} 
      />
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        project={selectedProject} 
      />
    </div>
  );
}

export default App;
