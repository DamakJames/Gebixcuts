import React from 'react';
import { X, HardHat, Clock, ArrowRight, Sparkles } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-md bg-[#0F0F15]/95 border border-[#E6AF2E]/40 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(230,175,46,0.2)] z-10 animate-scaleUp flex flex-col p-8 text-center">
        {/* Decorative Top Accent Light */}
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#E6AF2E] to-transparent" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon Badge */}
        <div className="relative mx-auto mt-4 mb-6">
          <div className="w-20 h-20 rounded-2xl bg-[#E6AF2E]/15 border border-[#E6AF2E]/60 flex items-center justify-center text-[#E6AF2E] mx-auto shadow-[0_0_30px_rgba(230,175,46,0.25)]">
            <HardHat className="w-10 h-10 animate-pulse" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#1A1A24] border border-[#E6AF2E] rounded-full p-1.5 text-[#E6AF2E] shadow-lg">
            <Clock className="w-4 h-4" />
          </div>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#E6AF2E]" />
          <span className="text-[11px] font-bold text-[#E6AF2E] uppercase tracking-[0.2em]">
            Student & Client Portal
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#E6AF2E]" />
        </div>

        {/* Title */}
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
          Under Construction
        </h3>

        {/* Status Badge */}
        <div className="mx-auto mb-5 px-3.5 py-1 rounded-full bg-[#E6AF2E]/10 border border-[#E6AF2E]/30 text-[10px] font-extrabold text-[#E6AF2E] uppercase tracking-widest inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E6AF2E] animate-ping" />
          <span>Active Development • Coming Soon</span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-8">
          We are currently building and upgrading our dedicated <strong className="text-white">Gebixcuts Student Classroom & Client Dashboard</strong>. When launched, academy students will access live training modules, assignments, and mentorship feeds right here.
        </p>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-xl bg-[#E6AF2E] text-black font-heading font-extrabold text-sm hover:bg-[#F5C542] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 shadow-[0_0_25px_rgba(230,175,46,0.35)]"
          >
            <span>Return to Website</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <p className="text-[11px] text-gray-500 pt-1">
            Need urgent academy support? Reach us via WhatsApp or email.
          </p>
        </div>
      </div>
    </div>
  );
};
