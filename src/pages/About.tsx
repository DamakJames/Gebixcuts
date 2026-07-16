import React from 'react';
import { CheckCircle2, Sparkles, Target, ArrowRight } from 'lucide-react';
import { WEBSITE_DATA } from '../data/websiteData';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-48 sm:pt-56 pb-28 sm:pb-36 flex flex-col gap-20 sm:gap-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-center space-x-2 text-[#E6AF2E]">
          <span className="h-1 w-8 bg-[#E6AF2E] rounded-full" />
          <span className="font-heading font-bold text-xs uppercase tracking-[0.25em]">ABOUT SECTION</span>
          <span className="h-1 w-8 bg-[#E6AF2E] rounded-full" />
        </div>
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white">
          We Turn Moments Into <br />
          <span className="gold-gradient-text">Timeless Stories.</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          Every brand has a vision. Every business has a purpose. Every individual has a story worth telling.
        </p>
      </div>

      {/* Main Bio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-6 text-gray-300 leading-relaxed text-base">
          <h2 className="font-heading font-bold text-3xl text-white">
            We Are <span className="text-[#E6AF2E]">Gebixcuts.</span>
          </h2>
          <p>
            Gebixcuts is a premium media production company dedicated to creating visually stunning and emotionally engaging content that connects with audiences. Through professional cinematography, photography, storytelling, and creative direction, we help our clients communicate with confidence and stand out.
          </p>
          <p>
            Whether it's a corporate production, a royal wedding, a ground-breaking documentary, a commercial product launch, or engaging social media content, we approach every project with passion, professionalism, and meticulous attention to detail.
          </p>
          <p>
            Our passion for creativity, innovation, and excellence drives everything we do. Every project is an opportunity to tell a meaningful story that inspires action and leaves a lasting impression across Nigeria and beyond.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full bg-[#E6AF2E] text-black font-heading font-bold text-sm hover:bg-[#F5C542] transition-all flex items-center space-x-2 shadow-[0_0_25px_rgba(230,175,46,0.35)]"
            >
              <span>Book Your Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-[#E6AF2E]/40 shadow-[0_0_50px_rgba(230,175,46,0.2)]">
            <img 
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80"
              alt="Gebixcuts Behind the Scenes — Studio Production"
              className="w-full object-cover"
              style={{ minHeight: '280px' }}
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded-full bg-[#E6AF2E] text-black font-bold text-xs uppercase">
                Studio &amp; Cinema Systems
              </span>
              <p className="text-white font-heading font-bold text-lg mt-2">
                Enugu, Nigeria — Available Nationwide
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#121218] rounded-3xl p-8 border border-white/10 hover:border-[#E6AF2E] transition-all space-y-4 shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-[#E6AF2E]/20 border border-[#E6AF2E] flex items-center justify-center text-[#E6AF2E]">
            <Target className="w-7 h-7" />
          </div>
          <h3 className="font-heading font-bold text-2xl text-white">Our Mission</h3>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            To transform ideas and moments into exceptional visual experiences that inspire, educate, and connect people with authenticity and cinematic excellence.
          </p>
        </div>

        <div className="bg-[#121218] rounded-3xl p-8 border border-white/10 hover:border-[#E6AF2E] transition-all space-y-4 shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-[#E6AF2E]/20 border border-[#E6AF2E] flex items-center justify-center text-[#E6AF2E]">
            <Sparkles className="w-7 h-7" />
          </div>
          <h3 className="font-heading font-bold text-2xl text-white">Our Vision</h3>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            To become Africa's most trusted creative production company, recognized across the globe for world-class quality, innovation, and impactful storytelling.
          </p>
        </div>
      </div>

      {/* Why Clients Choose Us Deep Dive */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0F0F14] border border-white/10 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Why Clients Choose <span className="text-[#E6AF2E]">Gebixcuts</span>
          </h2>
          <p className="text-sm text-gray-400">
            Our commitment goes beyond operating equipment—we deliver a complete, seamless production journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WEBSITE_DATA.whyChooseUs.map((pillar, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#E6AF2E]/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6AF2E]/15 text-[#E6AF2E] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-lg text-white">{pillar.title}</h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-[#121218] border border-[#E6AF2E]/30 rounded-2xl p-8 text-center">
        {WEBSITE_DATA.stats.map((st, i) => (
          <div key={i} className="space-y-1">
            <p className="font-heading font-extrabold text-3xl sm:text-5xl text-[#E6AF2E]">{st.value}</p>
            <p className="text-xs uppercase tracking-wider text-gray-300 font-bold">{st.label}</p>
          </div>
        ))}
      </div>

    </div>
  );
};
