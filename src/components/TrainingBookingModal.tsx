import React, { useState } from 'react';
import { X, GraduationCap, CheckCircle2, Send, Phone, Mail } from 'lucide-react';

interface TrainingBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
}

export const TrainingBookingModal: React.FC<TrainingBookingModalProps> = ({ isOpen, onClose, preselectedCourse }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: preselectedCourse || 'Cinematography & Creative Direction',
    plan: '1 Month Training — Professional Mastery (₦250,000)',
    goals: ''
  });

  const trainingPlans = [
    {
      id: '2weeks',
      title: '2 Weeks Training — Intensive Starter',
      price: '₦150,000',
      desc: 'Practical camera handling, basic 3-point studio lighting & editing essentials.'
    },
    {
      id: '1month',
      title: '1 Month Training — Professional Mastery',
      price: '₦250,000',
      desc: 'Comprehensive cinematography, DaVinci Resolve color grading, audio & field shoots.'
    },
    {
      id: '2months',
      title: '2 Months Training — Advanced Diploma & Mentorship',
      price: '₦400,000',
      desc: 'Complete studio mastery, real-world commercial shoots, client pitching & lifetime community.'
    }
  ];

  const courseOptions = [
    'Cinematography & Creative Direction',
    'Photography Masterclass',
    'Video Editing & Color Grading (DaVinci Resolve)',
    'Drone Piloting & Aerial Cinematography',
    'Digital Content Creation & Brand Strategy'
  ];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hello Gebixcuts Academy! 🎬 I would like to confirm my training enrollment.\n\n` +
      `*Full Name:* ${formData.fullName}\n` +
      `*Email Address:* ${formData.email}\n` +
      `*WhatsApp/Phone:* ${formData.phone}\n` +
      `*Course/Specialization:* ${formData.course}\n` +
      `*Selected Training Plan:* ${formData.plan}\n` +
      `*Experience/Goals:* ${formData.goals || 'Ready to start training right away!'}\n\n` +
      `Please let me know the resumption date and payment confirmation details.`;

    const whatsappUrl = `https://wa.me/2349042123833?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={handleResetAndClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-3xl bg-[#111116] border border-[#E6AF2E]/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(230,175,46,0.25)] z-10 animate-scaleUp my-4 sm:my-auto max-h-[92vh] sm:max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="shrink-0 sticky top-0 z-20 flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 bg-[#16161E] border-b border-white/10">
          <div className="flex items-center space-x-3 sm:space-x-3.5">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#E6AF2E]/20 border border-[#E6AF2E] flex items-center justify-center text-[#E6AF2E]">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg sm:text-2xl text-white">
                Academy Training Enrollment
              </h3>
              <p className="text-[10px] sm:text-xs text-[#E6AF2E] uppercase tracking-wider font-bold">
                GEBIXCUTS ACADEMY — ENUGU, NIGERIA
              </p>
            </div>
          </div>
          <button 
            onClick={handleResetAndClose}
            className="p-2 sm:p-2.5 rounded-full bg-white/5 hover:bg-[#E6AF2E]/20 text-gray-400 hover:text-[#E6AF2E] transition-colors shrink-0"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-6 sm:py-10 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#E6AF2E]/20 border-2 border-[#E6AF2E] rounded-full flex items-center justify-center mx-auto text-[#E6AF2E] shadow-[0_0_30px_rgba(230,175,46,0.5)]">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-heading text-xl sm:text-3xl font-extrabold text-white">Redirecting to WhatsApp!</h4>
                <p className="text-xs sm:text-base text-gray-300 max-w-lg mx-auto leading-relaxed">
                  Thank you, <span className="text-[#E6AF2E] font-bold">{formData.fullName}</span>. Your enrollment summary has been sent directly to our studio WhatsApp (<span className="text-white font-bold">+234 904 212 3833</span>) for instant confirmation and fee processing.
                </p>
              </div>

              {/* Direct Contact Summary Card */}
              <div className="bg-[#16161E] rounded-xl p-4 sm:p-6 border border-white/10 max-w-md mx-auto space-y-2 sm:space-y-3 text-left text-xs sm:text-sm">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Need Immediate Assistance?</p>
                <div className="flex items-center gap-2.5 text-white font-semibold">
                  <Phone className="w-4 h-4 text-[#E6AF2E]" />
                  <span>WhatsApp/Call: +234 904 212 3833</span>
                </div>
                <div className="flex items-center gap-2.5 text-white font-semibold break-all">
                  <Mail className="w-4 h-4 text-[#E6AF2E]" />
                  <span>Email: gebixcuts@gmail.com</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
                <button 
                  onClick={() => {
                    const message = `Hello Gebixcuts Academy! 🎬 I would like to confirm my training enrollment.\n\n*Full Name:* ${formData.fullName}\n*Email Address:* ${formData.email}\n*WhatsApp/Phone:* ${formData.phone}\n*Course:* ${formData.course}\n*Plan:* ${formData.plan}`;
                    window.open(`https://wa.me/2349042123833?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="px-6 py-3 sm:py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-heading font-extrabold text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Open WhatsApp Again</span>
                </button>
                <button 
                  onClick={handleResetAndClose}
                  className="px-6 py-3 sm:py-3.5 rounded-xl bg-white/10 text-white font-heading font-bold text-xs sm:text-sm hover:bg-white/20 transition-all border border-white/15"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              
              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5">
                <div>
                  <label className="block text-[11px] sm:text-xs uppercase tracking-wider font-bold text-gray-300 mb-1.5">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Ifeanyi Nwosu" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#181820] border border-white/15 rounded-xl px-3.5 py-2.5 sm:py-3.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:border-[#E6AF2E] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs uppercase tracking-wider font-bold text-gray-300 mb-1.5">
                    Email Address (Gmail) *
                  </label>
                  <input 
                    type="email" 
                    required 
                    placeholder="e.g. ifeanyi@gmail.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#181820] border border-white/15 rounded-xl px-3.5 py-2.5 sm:py-3.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:border-[#E6AF2E] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs uppercase tracking-wider font-bold text-gray-300 mb-1.5">
                    WhatsApp / Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+234 904 212 3833" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#181820] border border-white/15 rounded-xl px-3.5 py-2.5 sm:py-3.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:border-[#E6AF2E] transition-colors"
                  />
                </div>
              </div>

              {/* Course Selector */}
              <div>
                <label className="block text-[11px] sm:text-xs uppercase tracking-wider font-bold text-gray-300 mb-1.5">
                  Select Specialization Course *
                </label>
                <select 
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full bg-[#181820] border border-white/15 rounded-xl px-3.5 py-2.5 sm:py-3.5 text-xs sm:text-sm text-white focus:border-[#E6AF2E] transition-colors"
                >
                  {courseOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Duration & Pricing Radio Cards */}
              <div className="space-y-2 sm:space-y-3">
                <label className="block text-[11px] sm:text-xs uppercase tracking-wider font-bold text-gray-300">
                  Select Training Duration & Pricing Plan *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {trainingPlans.map((plan) => {
                    const isSelected = formData.plan.startsWith(plan.title.split(' — ')[0]);
                    const fullPlanName = `${plan.title} (${plan.price})`;
                    return (
                      <div
                        key={plan.id}
                        onClick={() => setFormData({ ...formData, plan: fullPlanName })}
                        className={`cursor-pointer rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border transition-all flex flex-col justify-between ${
                          isSelected 
                            ? 'bg-[#E6AF2E]/15 border-[#E6AF2E] shadow-[0_0_20px_rgba(230,175,46,0.2)]' 
                            : 'bg-[#181820] border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className="space-y-1 sm:space-y-2">
                          <div className="flex items-center justify-between">
                            <span className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-[#E6AF2E]' : 'text-gray-400'}`}>
                              {plan.title.split(' — ')[0]}
                            </span>
                            <span className="font-heading font-extrabold text-sm sm:text-base text-white">
                              {plan.price}
                            </span>
                          </div>
                          <h4 className="font-heading font-bold text-xs sm:text-sm text-white">
                            {plan.title.split(' — ')[1]}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed">
                            {plan.desc}
                          </p>
                        </div>
                        <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs font-semibold">
                          <span className={isSelected ? 'text-[#E6AF2E]' : 'text-gray-400'}>
                            {isSelected ? '✓ Selected Plan' : 'Click to Select'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Goals / Experience */}
              <div>
                <label className="block text-[11px] sm:text-xs uppercase tracking-wider font-bold text-gray-300 mb-1.5">
                  Tell Us About Your Goals & Current Experience (Optional)
                </label>
                <textarea 
                  rows={2} 
                  placeholder="Are you a complete beginner, or looking to upgrade your existing photography/video skills?" 
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  className="w-full bg-[#181820] border border-white/15 rounded-xl px-3.5 py-2.5 sm:py-3.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:border-[#E6AF2E] transition-colors resize-none"
                />
              </div>

              {/* WhatsApp Note & Submit Button */}
              <div className="space-y-3 sm:space-y-4 pt-1">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center gap-3 text-xs sm:text-sm text-gray-200">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center shrink-0 text-[#25D366]">
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Instant WhatsApp Confirmation</span>
                    <span className="text-[11px] sm:text-xs">Submitting opens direct WhatsApp chat (<strong className="text-[#25D366]">+234 904 212 3833</strong>) pre-filled!</span>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-xl bg-[#E6AF2E] text-black font-heading font-extrabold text-sm sm:text-base hover:bg-[#F5C542] transition-all flex items-center justify-center space-x-2.5 shadow-[0_0_30px_rgba(230,175,46,0.4)] group"
                >
                  <span>Confirm Training Enrollment via WhatsApp</span>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
