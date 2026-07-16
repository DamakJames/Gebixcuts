import React, { useState } from 'react';
import { 
  Camera, Users, Clapperboard, Aperture, Scissors, Send, Home as HomeIcon, 
  Mic, Smartphone, GraduationCap, ArrowRight, Check, Sparkles 
} from 'lucide-react';
import { WEBSITE_DATA } from '../data/websiteData';
import type { ServiceItem } from '../data/websiteData';

interface ServicesPageProps {
  onOpenBooking: (service?: string) => void;
  onOpenTrainingBooking?: (course?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking, onOpenTrainingBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera': return <Camera className="w-6 h-6 text-[#E6AF2E]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#E6AF2E]" />;
      case 'Clapperboard': return <Clapperboard className="w-6 h-6 text-[#E6AF2E]" />;
      case 'Aperture': return <Aperture className="w-6 h-6 text-[#E6AF2E]" />;
      case 'Scissors': return <Scissors className="w-6 h-6 text-[#E6AF2E]" />;
      case 'Send': return <Send className="w-6 h-6 text-[#E6AF2E]" />;
      case 'Home': return <HomeIcon className="w-6 h-6 text-[#E6AF2E]" />;
      case 'Mic': return <Mic className="w-6 h-6 text-[#E6AF2E]" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-[#E6AF2E]" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#E6AF2E]" />;
      default: return <Sparkles className="w-6 h-6 text-[#E6AF2E]" />;
    }
  };

  const categories = ['All', 'Video', 'Photo', 'Audio', 'Digital', 'Education'];

  const filteredServices = selectedCategory === 'All'
    ? WEBSITE_DATA.services
    : WEBSITE_DATA.services.filter(s => s.category === selectedCategory);

  return (
    <div className="pt-48 sm:pt-56 pb-28 sm:pb-36 flex flex-col gap-16 sm:gap-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-center space-x-2 text-[#E6AF2E]">
          <span className="h-1 w-8 bg-[#E6AF2E] rounded-full" />
          <span className="font-heading font-bold text-xs uppercase tracking-[0.25em]">OUR SERVICES</span>
          <span className="h-1 w-8 bg-[#E6AF2E] rounded-full" />
        </div>
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white leading-tight">
          Every Story Deserves <br />
          <span className="gold-gradient-text">Exceptional Production.</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          Browse our complete range of media services designed to help brands, businesses, ministries, organizations, and individuals communicate with impact.
        </p>
      </div>

      {/* Filter Category Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 py-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-[#E6AF2E] text-black shadow-[0_0_20px_rgba(230,175,46,0.4)] scale-105'
                : 'bg-[#121218] text-gray-300 border border-white/10 hover:border-[#E6AF2E]/60 hover:text-white'
            }`}
          >
            {cat === 'All' ? 'Explore All (10)' : cat}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service: ServiceItem) => (
          <div
            key={service.id}
            className="group relative bg-[#121218] rounded-3xl p-8 border border-white/10 hover:border-[#E6AF2E] transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-2 shadow-xl hover:shadow-[0_15px_40px_rgba(230,175,46,0.18)] overflow-hidden"
          >
            {/* Background Image preview on hover */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
              <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#1A1A24] border border-white/10 group-hover:border-[#E6AF2E] flex items-center justify-center transition-colors shadow-md">
                  {renderServiceIcon(service.iconName)}
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-[#E6AF2E]">
                  {service.category}
                </span>
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-[#E6AF2E] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              <div className="pt-2 space-y-2 text-xs text-gray-400">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#E6AF2E] shrink-0" />
                  <span>Professional creative direction & cinema equipment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#E6AF2E] shrink-0" />
                  <span>Dedicated editing & color grading workflow</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#E6AF2E] shrink-0" />
                  <span>On-time delivery guaranteed within timeline</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 block">Estimate</span>
                <span className="text-xs font-bold text-[#E6AF2E]">{service.priceEstimate || 'Custom Quote'}</span>
              </div>
              <button
                onClick={() => (service.title === 'Gebixcuts Academy' && onOpenTrainingBooking) ? onOpenTrainingBooking() : onOpenBooking(service.title)}
                className="px-5 py-2.5 rounded-xl bg-[#E6AF2E] text-black font-heading font-bold text-xs hover:bg-[#F5C542] transition-colors flex items-center space-x-1.5 shadow-[0_0_15px_rgba(230,175,46,0.3)]"
              >
                <span>Book Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Box */}
      <div className="p-10 rounded-3xl bg-gradient-to-r from-[#14141E] to-[#121218] border border-[#E6AF2E]/40 text-center max-w-4xl mx-auto space-y-6 shadow-[0_0_50px_rgba(230,175,46,0.15)]">
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
          Need a Custom Production Package?
        </h3>
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
          We often bundle documentary filming, drone coverage, photography, and social content for major brand launches and multi-day conventions across Nigeria.
        </p>
        <button
          onClick={() => onOpenBooking('Custom Production Package')}
          className="px-8 py-4 rounded-full bg-[#E6AF2E] text-black font-heading font-bold text-sm hover:bg-[#F5C542] transition-all shadow-[0_0_30px_rgba(230,175,46,0.4)]"
        >
          Request Custom Consultation
        </button>
      </div>

    </div>
  );
};
