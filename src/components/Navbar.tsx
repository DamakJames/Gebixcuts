import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Film } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Academy', id: 'academy' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#08080A]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          {/* Custom Film Reel G Logo SVG Icon */}
          <div className="relative w-11 h-11 flex items-center justify-center bg-gradient-to-br from-[#181822] to-[#0A0A0E] border border-[#E6AF2E]/40 rounded-xl group-hover:border-[#E6AF2E] transition-all shadow-[0_0_15px_rgba(230,175,46,0.2)]">
            <Film className="w-6 h-6 text-[#E6AF2E] group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-[#E6AF2E]/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl md:text-2xl tracking-tighter text-white flex items-center">
              <span className="text-[#E6AF2E]">G</span>EBIX
            </span>
            <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#A0A6B2] -mt-1 group-hover:text-[#E6AF2E] transition-colors">
              — CUTS —
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 bg-[#121218]/95 backdrop-blur-md border border-white/20 px-8 py-2.5 rounded-full shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4.5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all relative whitespace-nowrap ${
                  isActive
                    ? 'text-[#E6AF2E] font-bold bg-[#E6AF2E]/20 border border-[#E6AF2E]/40 shadow-[0_0_20px_rgba(230,175,46,0.3)] scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Book a Session CTA (Desktop) */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenBooking}
            className="group relative px-5 py-2.5 rounded-full bg-transparent border border-[#E6AF2E] text-[#E6AF2E] text-xs sm:text-sm font-heading font-bold hover:bg-[#E6AF2E] hover:text-black transition-all duration-300 flex items-center space-x-2 shadow-[0_0_20px_rgba(230,175,46,0.25)] hover:shadow-[0_0_35px_rgba(230,175,46,0.6)] overflow-hidden"
          >
            <span>Book a Session</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 rounded-full bg-[#E6AF2E] text-black text-xs font-bold font-heading"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#14141C] border border-white/10 text-gray-300 hover:text-[#E6AF2E] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 p-5 rounded-2xl bg-[#111116]/95 backdrop-blur-xl border border-[#E6AF2E]/30 shadow-2xl space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#E6AF2E]/15 text-[#E6AF2E] font-bold border-l-4 border-[#E6AF2E]'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#E6AF2E] shadow-[0_0_8px_#E6AF2E]" />}
                </button>
              );
            })}
          </div>
          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-xl bg-[#E6AF2E] text-black font-heading font-bold text-sm flex items-center justify-center space-x-2 shadow-[0_0_25px_rgba(230,175,46,0.4)]"
            >
              <span>Book Your Session Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
