import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../components/SocialIcons';
import { WEBSITE_DATA } from '../data/websiteData';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceRequired: 'Cinematography',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-40 sm:pt-48 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center justify-center gap-3 text-[#E6AF2E]">
          <span className="h-1 w-8 bg-[#E6AF2E] rounded-full" />
          <span className="font-heading font-bold text-xs uppercase tracking-[0.25em]">CONTACT PAGE</span>
          <span className="h-1 w-8 bg-[#E6AF2E] rounded-full" />
        </div>
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white leading-tight">
          Let's Bring Your Vision <br />
          <span className="gold-gradient-text">to Life.</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          Whether you have a clear concept, need professional creative direction, or want to inquire about dates and custom packages, our studio in Enugu is ready to collaborate.
        </p>
      </div>

      {/* Main Grid: Info & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Col: Contact Info Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#121218] rounded-3xl p-8 border border-white/15 space-y-8 shadow-2xl">
            <h3 className="font-heading font-bold text-2xl text-white">
              Contact Information
            </h3>
            
            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E6AF2E]/15 border border-[#E6AF2E]/40 flex items-center justify-center shrink-0 text-[#E6AF2E]">
                  <MapPin className="w-6 h-6 shrink-0" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-xs text-gray-400 uppercase tracking-wider">Location</h4>
                  <p className="font-heading font-bold text-lg text-white">Enugu, Nigeria</p>
                  <p className="text-xs text-gray-400">Available for nationwide & international travel</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E6AF2E]/15 border border-[#E6AF2E]/40 flex items-center justify-center shrink-0 text-[#E6AF2E]">
                  <Phone className="w-6 h-6 shrink-0" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-xs text-gray-400 uppercase tracking-wider">Phone / WhatsApp</h4>
                  <a href="tel:+2348061234567" className="font-heading font-bold text-lg text-white hover:text-[#E6AF2E] transition-colors block">
                    {WEBSITE_DATA.contactInfo.phone}
                  </a>
                  <p className="text-xs text-[#E6AF2E] inline-flex items-center gap-1.5 font-semibold pt-0.5">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>Response within 24 hours</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E6AF2E]/15 border border-[#E6AF2E]/40 flex items-center justify-center shrink-0 text-[#E6AF2E]">
                  <Mail className="w-6 h-6 shrink-0" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-xs text-gray-400 uppercase tracking-wider">Email Address</h4>
                  <a href={`mailto:${WEBSITE_DATA.contactInfo.email}`} className="font-heading font-bold text-lg text-white hover:text-[#E6AF2E] transition-colors block break-all">
                    {WEBSITE_DATA.contactInfo.email}
                  </a>
                  <p className="text-xs text-gray-400">Direct inquiries & corporate proposals</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">
                Follow Our Studio
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <a 
                  href={WEBSITE_DATA.contactInfo.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 inline-flex items-center gap-2.5 text-sm text-gray-300 hover:text-[#E6AF2E] hover:border-[#E6AF2E] transition-all"
                >
                  <InstagramIcon className="w-4 h-4 shrink-0 text-[#E6AF2E]" />
                  <span>Instagram</span>
                </a>
                <a 
                  href={WEBSITE_DATA.contactInfo.facebook} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 inline-flex items-center gap-2.5 text-sm text-gray-300 hover:text-[#E6AF2E] hover:border-[#E6AF2E] transition-all"
                >
                  <FacebookIcon className="w-4 h-4 shrink-0 text-[#E6AF2E]" />
                  <span>Facebook</span>
                </a>
                <a 
                  href={WEBSITE_DATA.contactInfo.youtube} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 inline-flex items-center gap-2.5 text-sm text-gray-300 hover:text-[#E6AF2E] hover:border-[#E6AF2E] transition-all"
                >
                  <YoutubeIcon className="w-4 h-4 shrink-0 text-[#E6AF2E]" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Send Us a Message Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#121218] rounded-3xl p-8 sm:p-12 border border-[#E6AF2E]/40 shadow-2xl relative">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
            <MessageSquare className="w-6 h-6 shrink-0 text-[#E6AF2E]" />
            <h3 className="font-heading font-bold text-2xl text-white">
              Send Us a Message
            </h3>
          </div>

          {submitted ? (
            <div className="text-center py-16 space-y-6 animate-fadeIn">
              <div className="w-20 h-20 bg-[#E6AF2E]/20 border-2 border-[#E6AF2E] rounded-full flex items-center justify-center mx-auto text-[#E6AF2E] shadow-[0_0_40px_rgba(230,175,46,0.6)]">
                <CheckCircle2 className="w-10 h-10 shrink-0" />
              </div>
              <div>
                <h4 className="font-heading text-3xl font-bold text-white">Message Delivered!</h4>
                <p className="text-base text-gray-300 mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="text-[#E6AF2E] font-semibold">{formData.fullName || 'Visionary'}</span>. Our production desk has logged your project details and will reply shortly.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-3.5 rounded-full bg-[#E6AF2E] text-black font-heading font-bold text-sm hover:bg-[#F5C542] transition-all shadow-[0_0_20px_rgba(230,175,46,0.3)]"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Ifeanyi Nwosu" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#181822] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#E6AF2E] focus:ring-1 focus:ring-[#E6AF2E] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required 
                    placeholder="e.g. ifeanyi@brand.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#181822] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#E6AF2E] focus:ring-1 focus:ring-[#E6AF2E] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+234 806 XXX XXXX" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#181822] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#E6AF2E] focus:ring-1 focus:ring-[#E6AF2E] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                    Service Required *
                  </label>
                  <select 
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full bg-[#181822] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#E6AF2E] focus:ring-1 focus:ring-[#E6AF2E] transition-colors"
                  >
                    {WEBSITE_DATA.services.map((service) => (
                      <option key={service.id} value={service.title} className="bg-[#181822] text-white">
                        {service.title}
                      </option>
                    ))}
                    <option value="General Consultation" className="bg-[#181822] text-white">General Consultation / Custom Project</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                  Tell Us About Your Project *
                </label>
                <textarea 
                  rows={4} 
                  required 
                  placeholder="Share your goals, event dates, locations, visual inspiration, or budget expectations..." 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#181822] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#E6AF2E] focus:ring-1 focus:ring-[#E6AF2E] transition-colors resize-none"
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#E6AF2E] text-black font-heading font-extrabold text-base hover:bg-[#F5C542] transition-all inline-flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(230,175,46,0.4)]"
                >
                  <Send className="w-5 h-5 shrink-0" />
                  <span>Send Message to Studio</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
