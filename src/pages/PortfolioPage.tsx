import React, { useState } from 'react';
import { Play, ArrowRight, Clock } from 'lucide-react';
import { WEBSITE_DATA } from '../data/websiteData';
import type { PortfolioItem } from '../data/websiteData';

interface PortfolioPageProps {
  onOpenBooking: () => void;
  onOpenVideo: (project: PortfolioItem) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenBooking, onOpenVideo }) => {
  const [filter, setFilter] = useState<string>('All');

  const filterOptions = ['All', 'Documentary', 'Events', 'Commercial', 'Real Estate', 'Weddings'];

  const filteredPortfolio = filter === 'All'
    ? WEBSITE_DATA.portfolio
    : WEBSITE_DATA.portfolio.filter(p => p.filterCategory === filter);

  return (
    <div className="pt-32 pb-24 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-center space-x-2 text-[#E6AF2E]">
          <span className="h-1 w-8 bg-[#E6AF2E] rounded-full" />
          <span className="font-heading font-bold text-xs uppercase tracking-[0.25em]">PORTFOLIO PAGE</span>
          <span className="h-1 w-8 bg-[#E6AF2E] rounded-full" />
        </div>
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white leading-tight">
          Stories Captured. <br />
          <span className="gold-gradient-text">Memories Preserved.</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          Explore our collection of documentaries, commercial productions, weddings, corporate events, branding projects, photography, and cinematic films. Every project tells a unique story, and every frame reflects our commitment to excellence.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 py-2">
        {filterOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => setFilter(opt)}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-heading font-semibold transition-all ${
              filter === opt
                ? 'bg-[#E6AF2E] text-black shadow-[0_0_20px_rgba(230,175,46,0.4)] scale-105'
                : 'bg-[#121218] text-gray-300 border border-white/10 hover:border-[#E6AF2E]/60 hover:text-white'
            }`}
          >
            {opt === 'All' ? 'All Productions' : opt}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPortfolio.map((item: PortfolioItem) => (
          <div
            key={item.id}
            onClick={() => onOpenVideo(item)}
            className="group relative rounded-3xl overflow-hidden bg-[#121218] border border-white/10 hover:border-[#E6AF2E] cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Thumbnail */}
            <div className="aspect-[16/10] overflow-hidden relative">
              <img 
                src={item.thumbnailUrl} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-85 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121218] via-transparent to-transparent" />

              {/* Play Button Center Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-[#E6AF2E]/90 text-black flex items-center justify-center shadow-[0_0_30px_rgba(230,175,46,0.8)] group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs text-white flex items-center space-x-1.5 font-mono">
                <Clock className="w-3.5 h-3.5 text-[#E6AF2E]" />
                <span>{item.duration}</span>
              </div>
            </div>

            {/* Details Body */}
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#E6AF2E]/15 border border-[#E6AF2E]/30 text-[10px] font-bold uppercase tracking-wider text-[#E6AF2E]">
                  {item.category}
                </span>
                <span className="text-xs text-gray-400 font-medium">{item.client}</span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-[#E6AF2E] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-2">
                {item.description}
              </p>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#E6AF2E] font-semibold">
                <span>Watch Full Master Showreel</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="p-12 rounded-3xl bg-gradient-to-r from-[#1D170B] via-[#14141E] to-[#111116] border border-[#E6AF2E]/40 text-center max-w-4xl mx-auto space-y-6 shadow-[0_0_60px_rgba(230,175,46,0.2)]">
        <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
          Inspired by What You See?
        </h3>
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
          We bring this exact level of cinematic storytelling, color mastery, and audio design to your brand film, event, or documentary.
        </p>
        <button
          onClick={onOpenBooking}
          className="px-9 py-4 rounded-full bg-[#E6AF2E] text-black font-heading font-extrabold text-base hover:bg-[#F5C542] transition-all shadow-[0_0_35px_rgba(230,175,46,0.6)]"
        >
          Start Your Project With Us
        </button>
      </div>

    </div>
  );
};
