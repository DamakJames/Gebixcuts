import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../components/SocialIcons';

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
    <div className="pt-48 sm:pt-56 pb-28 sm:pb-36 flex flex-col gap-20 sm:gap-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact Details */}
        <div className="md:col-span-5 space-y-8 bg-[#121218] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
          <div>
            <h3 className="font-heading font-extrabold text-2xl text-white">Contact Information</h3>
            <p className="text-sm text-gray-400 mt-1">Direct communication channels for immediate inquiries across Nigeria.</p>
          </div>

          <div className="space-y-6 pt-2">
            
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E6AF2E]/15 border border-[#E6AF2E]/40 flex items-center justify-center shrink-0 text-[#E6AF2E]">
                <MapPin className="w-5 h-5 shrink-0" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Location</p>
                <p className="text-base font-semibold text-white mt-0.5">Enugu, Nigeria</p>
                <p className="text-xs text-gray-400 mt-0.5">Available for nationwide & international travel</p>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E6AF2E]/15 border border-[#E6AF2E]/40 flex items-center justify-center shrink-0 text-[#E6AF2E]">
                <Phone className="w-5 h-5 shrink-0" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Phone / WhatsApp</p>
                <a href="tel:+2348061234567" className="text-base font-semibold text-white hover:text-[#E6AF2E] transition-colors block mt-0.5">
                  +234 806 123 4567
                </a>
                <div className="inline-flex items-center gap-2 text-xs text-[#E6AF2E] font-semibold pt-1">
                  <span className="w-2 h-2 rounded-full bg-[#E6AF2E] animate-pulse" />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E6AF2E]/15 border border-[#E6AF2E]/40 flex items-center justify-center shrink-0 text-[#E6AF2E]">
                <Mail className="w-5 h-5 shrink-0" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</p>
                <a href="mailto:hello@gebixcuts.com" className="text-base font-semibold text-white hover:text-[#E6AF2E] transition-colors block mt-0.5 break-all">
                  hello@gebixcuts.com
                </a>
                <p className="text-xs text-gray-400 mt-0.5">Direct inquiries & corporate proposals</p>
              </div>
            </div>

          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Follow Our Studio</p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-[#E6AF2E] hover:text-black text-gray-300 font-semibold text-xs transition-all border border-white/10 hover:border-[#E6AF2E]"
              >
                <InstagramIcon className="w-4 h-4 shrink-0" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-[#E6AF2E] hover:text-black text-gray-300 font-semibold text-xs transition-all border border-white/10 hover:border-[#E6AF2E]"
              >
                <FacebookIcon className="w-4 h-4 shrink-0" />
                <span>Facebook</span>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-[#E6AF2E] hover:text-black text-gray-300 font-semibold text-xs transition-all border border-white/10 hover:border-[#E6AF2E]"
              >
                <YoutubeIcon className="w-4 h-4 shrink-0" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:col-span-7 bg-[#121218] rounded-3xl p-8 sm:p-12 border border-[#E6AF2E]/30 shadow-[0_0_50px_rgba(230,175,46,0.15)] relative">
          
          <div className="flex items-center justify-between pb-8 border-b border-white/10 mb-8">
            <div>
              <span className="px-3 py-1 rounded-full bg-[#E6AF2E]/15 text-[11px] font-bold text-[#E6AF2E] uppercase tracking-wider block w-fit mb-2">
                STUDIO INQUIRY FORM
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Send Us a Message
              </h2>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-16 space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#E6AF2E]/20 border-2 border-[#E6AF2E] flex items-center justify-center mx-auto text-[#E6AF2E] animate-bounce">
                <CheckCircle2 className="w-10 h-10 shrink-0" />
              </div>
              <div className="space-y-2">
                <h3 className="font-heading font-extrabold text-3xl text-white">Message Sent Successfully!</h3>
                <p className="text-gray-300 max-w-md mx-auto text-sm sm:text-base">
                  Thank you for reaching out, <span className="text-[#E6AF2E] font-bold">{formData.fullName || 'Creator'}</span>. Our production desk has received your brief and will respond via WhatsApp or Email within 24 hours.
                </p>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ fullName: '', email: '', phone: '', serviceRequired: 'Cinematography', message: '' });
                }}
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-[#E6AF2E] text-white hover:text-black font-heading font-bold text-xs uppercase tracking-wider transition-all border border-white/15"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ifeanyi Nwosu"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full rounded-xl bg-[#1A1A24] border border-white/15 text-white placeholder-gray-500 text-sm transition-all"
                    style={{ padding: '0.875rem 1.125rem' }}
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. ifeanyi@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl bg-[#1A1A24] border border-white/15 text-white placeholder-gray-500 text-sm transition-all"
                    style={{ padding: '0.875rem 1.125rem' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone / WhatsApp */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 806 XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl bg-[#1A1A24] border border-white/15 text-white placeholder-gray-500 text-sm transition-all"
                    style={{ padding: '0.875rem 1.125rem' }}
                  />
                </div>

                {/* Service Required */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Service Required *
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full rounded-xl bg-[#1A1A24] border border-white/15 text-white text-sm transition-all"
                    style={{ padding: '0.875rem 1.125rem' }}
                  >
                    <option value="Cinematography">Cinematography & Brand Films</option>
                    <option value="Event Coverage">Event & Wedding Documentation</option>
                    <option value="Photography">Professional Photography</option>
                    <option value="Video Editing">Post-Production & Editing</option>
                    <option value="Drone Coverage">Aerial & Drone Videography</option>
                    <option value="Gebixcuts Academy">Academy Enrollment Inquiry</option>
                    <option value="Other">Other / Custom Project</option>
                  </select>
                </div>
              </div>

              {/* Message / Project Brief */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                  Tell Us About Your Project *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Share your goals, event dates, locations, visual inspiration, or budget expectations..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl bg-[#1A1A24] border border-white/15 text-white placeholder-gray-500 text-sm transition-all resize-none"
                  style={{ padding: '1.125rem' }}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#E6AF2E] hover:bg-[#F5C542] text-black font-heading font-extrabold text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(230,175,46,0.4)] inline-flex items-center justify-center gap-2.5 group"
                >
                  <span>Send Message to Studio</span>
                  <Send className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

      {/* FAQ or Quick Notes */}
      <div className="bg-[#121218] rounded-3xl p-8 sm:p-12 border border-white/10 space-y-6">
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-white text-center">
          Frequently Asked Questions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="space-y-2">
            <h4 className="font-heading font-bold text-base text-[#E6AF2E]">How quickly do we deliver?</h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              We typically deliver initial cuts or highlights within 5-10 business days depending on the project scope and package selected.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-heading font-bold text-base text-[#E6AF2E]">Can we travel outside Enugu?</h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Yes! While our primary studio base is in Enugu, we routinely deploy production teams nationwide across Nigeria and internationally.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-heading font-bold text-base text-[#E6AF2E]">What equipment do we use?</h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              We utilize state-of-the-art cinema cameras, professional audio setups, professional lighting systems, and aerial drone technology.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
