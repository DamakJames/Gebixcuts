import React from 'react';
import { X, Play, Volume2, Maximize2, Award, Film } from 'lucide-react';
import type { PortfolioItem } from '../data/websiteData';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: PortfolioItem | null;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-5xl bg-[#111116] border border-[#E6AF2E]/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(230,175,46,0.2)] z-10 animate-scaleUp">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#16161E] border-b border-white/10">
          <div className="flex items-center space-x-3">
            <Film className="w-5 h-5 text-[#E6AF2E]" />
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                {project ? project.title : "Gebixcuts 2026 Official Cinematic Showreel"}
              </h3>
              <p className="text-xs text-[#E6AF2E] uppercase tracking-wider font-semibold">
                {project ? `${project.category} — ${project.client}` : "EVERY FRAME. EVERY STORY."}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-[#E6AF2E]/20 text-gray-400 hover:text-[#E6AF2E] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Simulation / Embedded Player Area */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          {/* Simulated High-Res Video Screen */}
          <img 
            src={project ? project.thumbnailUrl : "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80"} 
            alt="Video Preview"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />

          {/* Dark Overlay with Ambient Gold Bokeh */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Interactive Play Controls Overlay */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <div className="w-20 h-20 rounded-full bg-[#E6AF2E]/20 border-2 border-[#E6AF2E] flex items-center justify-center text-[#E6AF2E] shadow-[0_0_30px_rgba(230,175,46,0.6)] cursor-pointer hover:scale-110 hover:bg-[#E6AF2E] hover:text-black transition-all duration-300">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <p className="mt-4 text-sm font-semibold text-white/90 tracking-wide uppercase bg-black/60 px-4 py-1.5 rounded-full border border-white/10">
              Click to Play High-Definition Master ({project ? project.duration : "02:45"})
            </p>
          </div>

          {/* Bottom Player Toolbar */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black to-transparent flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center space-x-3">
              <button className="hover:text-[#E6AF2E]"><Play className="w-4 h-4 fill-current" /></button>
              <span>00:00 / {project ? project.duration : "02:45"}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1 text-[#E6AF2E]"><Award className="w-3.5 h-3.5" /> 4K Ultra HD</span>
              <button className="hover:text-white"><Volume2 className="w-4 h-4" /></button>
              <button className="hover:text-white"><Maximize2 className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        {/* Project Details Footer */}
        <div className="p-6 bg-[#121218] border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-sm text-gray-300 leading-relaxed">
              {project 
                ? project.description 
                : "Experience the world of Gebixcuts. We combine state-of-the-art cinema camera systems with passionate creative storytelling to deliver visual experiences that capture attention and leave lasting impact across Nigeria."}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#E6AF2E] text-black font-bold text-sm hover:bg-[#F5C542] transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(230,175,46,0.3)]"
          >
            Inquire About This Style
          </button>
        </div>
      </div>
    </div>
  );
};
