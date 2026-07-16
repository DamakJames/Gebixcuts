import React, { useState } from 'react';
import { Send, MessageSquare, Phone, Mail, X } from 'lucide-react';

export const WhatsAppFloatingIcon: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOpenWhatsApp = () => {
    const message = "Hello Gebixcuts Studio! 🎬 I am contacting you from your website and would like to make an inquiry.";
    window.open(`https://wa.me/2349042123833?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex flex-col items-end gap-3">
      {/* Expanded Info Badge */}
      {isExpanded && (
        <div className="bg-[#111116] border border-[#25D366]/50 rounded-2xl p-5 shadow-[0_0_40px_rgba(37,211,102,0.25)] max-w-xs sm:max-w-sm space-y-3.5 animate-scaleUp text-left">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
              <span className="font-heading font-bold text-sm text-white">Direct Studio Desk</span>
            </div>
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed">
            Since we directly manage all client bookings and academy consultations on WhatsApp, tap below to chat with our Enugu studio instantly!
          </p>

          <div className="space-y-2 pt-1 border-t border-white/10 text-xs font-semibold">
            <div className="flex items-center gap-2 text-[#25D366]">
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>WhatsApp / Call: +234 904 212 3833</span>
            </div>
            <div className="flex items-center gap-2 text-[#E6AF2E]">
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span>Email: gebixcuts@gmail.com</span>
            </div>
          </div>

          <button
            onClick={handleOpenWhatsApp}
            className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Start WhatsApp Chat Now</span>
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <div className="flex items-center gap-2.5">
        {!isExpanded && (
          <div 
            onClick={() => setIsExpanded(true)}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#121218]/95 border border-[#25D366]/40 text-xs font-bold text-white shadow-xl cursor-pointer hover:border-[#25D366] transition-all group"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat (+234 904 212 3833)</span>
          </div>
        )}

        <button
          onClick={() => isExpanded ? handleOpenWhatsApp() : setIsExpanded(true)}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all hover:scale-105 group relative"
          title="Chat with Gebixcuts on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#E6AF2E] border-2 border-black animate-pulse" />
          <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 fill-current group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
};
