import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Send } from 'lucide-react';
import { WEBSITE_DATA } from '../data/websiteData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preselectedService }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceRequired: preselectedService || 'Cinematography',
    projectDate: '',
    projectBrief: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hello Gebixcuts Studio! 🎬 I would like to book a session or make an inquiry.\n\n` +
      `*Full Name:* ${formData.fullName}\n` +
      `*Email Address:* ${formData.email}\n` +
      `*Phone/WhatsApp:* ${formData.phone}\n` +
      `*Service Required:* ${formData.serviceRequired}\n` +
      `*Project Date:* ${formData.projectDate || 'Flexible / TBD'}\n` +
      `*Project Brief & Vision:* ${formData.projectBrief}`;

    const whatsappUrl = `https://wa.me/2349042123833?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={handleResetAndClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-[#111116] border border-[#E6AF2E]/40 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(230,175,46,0.25)] z-10 animate-scaleUp">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#16161E] border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6AF2E]/20 border border-[#E6AF2E] flex items-center justify-center text-[#E6AF2E]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-white">
                Book Your Session
              </h3>
              <p className="text-xs text-[#E6AF2E] uppercase tracking-wider font-semibold">
                EVERY FRAME. EVERY STORY. — GEBIXCUTS
              </p>
            </div>
          </div>
          <button 
            onClick={handleResetAndClose}
            className="p-2 rounded-full bg-white/5 hover:bg-[#E6AF2E]/20 text-gray-400 hover:text-[#E6AF2E] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-10 space-y-6 animate-fadeIn">
              <div className="w-20 h-20 bg-[#E6AF2E]/20 border-2 border-[#E6AF2E] rounded-full flex items-center justify-center mx-auto text-[#E6AF2E] shadow-[0_0_30px_rgba(230,175,46,0.5)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="font-heading text-2xl font-bold text-white">Redirecting to WhatsApp!</h4>
                <p className="text-sm text-gray-300 mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#E6AF2E] font-semibold">{formData.fullName || 'Visionary'}</span>. Your booking brief has been sent directly to our studio WhatsApp (<span className="text-white font-bold">+234 904 212 3833</span>) for instant response within 24 hours.
                </p>
              </div>

              <div className="bg-[#16161E] rounded-2xl p-5 border border-white/10 max-w-md mx-auto space-y-2 text-left text-xs text-gray-300">
                <p className="font-bold text-gray-400 uppercase tracking-wider text-center pb-1">Direct Studio Contact</p>
                <p>WhatsApp/Call: <strong className="text-[#E6AF2E]">+234 904 212 3833</strong></p>
                <p>Email: <strong className="text-[#E6AF2E]">gebixcuts@gmail.com</strong></p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  onClick={() => {
                    const message = `Hello Gebixcuts Studio! 🎬 I would like to book a session.\n\n*Name:* ${formData.fullName}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Service:* ${formData.serviceRequired}\n*Brief:* ${formData.projectBrief}`;
                    window.open(`https://wa.me/2349042123833?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Open WhatsApp Again</span>
                </button>
                <button 
                  onClick={handleResetAndClose}
                  className="px-6 py-3 rounded-xl bg-white/10 text-white font-bold text-xs hover:bg-white/20 transition-colors border border-white/15"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Chioma Okafor" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#181820] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#E6AF2E] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required 
                    placeholder="hello@visionary.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#181820] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#E6AF2E] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+234 904 212 3833" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#181820] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#E6AF2E] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                    Service Required *
                  </label>
                  <select 
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full bg-[#181820] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#E6AF2E] transition-colors"
                  >
                    {WEBSITE_DATA.services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="General Consultation">General Consultation / Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                  Estimated Project Date (Optional)
                </label>
                <input 
                  type="date" 
                  value={formData.projectDate}
                  onChange={(e) => setFormData({ ...formData, projectDate: e.target.value })}
                  className="w-full bg-[#181820] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#E6AF2E] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                  Tell Us About Your Project & Vision *
                </label>
                <textarea 
                  rows={3} 
                  required 
                  placeholder="Describe your event, brand film concept, location, or goals..." 
                  value={formData.projectBrief}
                  onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
                  className="w-full bg-[#181820] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#E6AF2E] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#E6AF2E] text-black font-heading font-bold text-base hover:bg-[#F5C542] transition-all flex items-center justify-center space-x-2 shadow-[0_0_25px_rgba(230,175,46,0.35)]"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Booking Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
