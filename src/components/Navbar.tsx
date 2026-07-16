import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, User } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenBooking, onOpenLogin }) => {
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
          ? 'bg-[#08080A]/98 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.9)]' 
          : 'bg-gradient-to-b from-[#06060A]/95 via-[#06060A]/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center cursor-pointer group"
        >
          <img 
            src="/logo.svg" 
            alt="Gebixcuts Logo" 
            className="h-10 md:h-12 w-auto object-contain brightness-100 group-hover:scale-[1.03] transition-transform duration-300" 
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 bg-[#121218]/98 backdrop-blur-xl border border-white/20 px-9 py-3 rounded-full shadow-2xl">
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

        {/* Book a Session CTA & Client Login (Desktop) */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onOpenLogin}
            className="flex items-center space-x-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold text-gray-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 border border-white/10"
          >
            <User className="w-4 h-4 text-[#E6AF2E]" />
            <span>Portal Login</span>
          </button>
          
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
          <div className="pt-3 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-heading font-bold text-sm flex items-center justify-center space-x-2 border border-white/10 transition-all"
            >
              <User className="w-4 h-4 text-[#E6AF2E]" />
              <span>Portal Login</span>
            </button>
            
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
