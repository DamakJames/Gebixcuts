import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';
import { WEBSITE_DATA } from '../data/websiteData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenBooking }) => {
  const handleNavClick = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 mt-16 sm:mt-24 bg-[#06060A] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Top Gold Radial Backlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#E6AF2E]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Bio (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center cursor-pointer group w-fit"
            >
              <img 
                src="/logo.svg" 
                alt="Gebixcuts Logo" 
                className="h-10 w-auto object-contain brightness-100 group-hover:scale-[1.03] transition-transform duration-300" 
              />
            </div>

            <p className="font-heading font-semibold text-xs tracking-widest text-[#E6AF2E] uppercase">
              Cinematic Media & Academy Studio
            </p>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              We create cinematic experiences through photography, videography, documentaries, creative content, and visual storytelling that leave lasting impressions across Nigeria and beyond.
            </p>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2 rounded-full bg-[#E6AF2E]/10 border border-[#E6AF2E] text-[#E6AF2E] text-xs font-heading font-bold hover:bg-[#E6AF2E] hover:text-black transition-all flex items-center space-x-2"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Col 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {['home', 'about', 'services', 'portfolio', 'academy', 'contact'].map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => handleNavClick(tab)}
                    className="hover:text-[#E6AF2E] transition-colors capitalize flex items-center space-x-1 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#E6AF2E] transition-colors mr-1" />
                    <span>{tab === 'home' ? 'Home' : tab === 'about' ? 'About Us' : tab === 'services' ? 'Services' : tab === 'portfolio' ? 'Portfolio' : tab === 'academy' ? 'Gebixcuts Academy' : 'Contact'}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Breakdown (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Visual Solutions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              {WEBSITE_DATA.services.slice(0, 8).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="hover:text-white transition-colors text-left"
                  >
                    • {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect & Studio Info (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Connect With Us
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#E6AF2E] shrink-0" />
                <span>Enugu, Nigeria (Available Nationwide)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#E6AF2E] shrink-0" />
                <a href="tel:+2349042123833" className="hover:text-[#E6AF2E] transition-colors">
                  {WEBSITE_DATA.contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#E6AF2E] shrink-0" />
                <a href={`mailto:${WEBSITE_DATA.contactInfo.email}`} className="hover:text-[#E6AF2E] transition-colors">
                  {WEBSITE_DATA.contactInfo.email}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center space-x-3">
              <a 
                href={WEBSITE_DATA.contactInfo.instagram} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#E6AF2E] hover:border-[#E6AF2E] transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href={WEBSITE_DATA.contactInfo.facebook} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#E6AF2E] hover:border-[#E6AF2E] transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a 
                href={WEBSITE_DATA.contactInfo.youtube} 
                target="_blank" 
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#E6AF2E] hover:border-[#E6AF2E] transition-all"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Gebixcuts. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => handleNavClick('about')} className="hover:text-gray-400">Privacy Policy</button>
            <button onClick={() => handleNavClick('about')} className="hover:text-gray-400">Terms of Service</button>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[#E6AF2E] hover:underline">
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
