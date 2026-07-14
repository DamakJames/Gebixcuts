import React from 'react';
import { GraduationCap, Camera, Clapperboard, Scissors, Send, Smartphone, CheckCircle2, Award, BookOpen, ArrowRight } from 'lucide-react';

interface AcademyPageProps {
  onOpenBooking: (service?: string) => void;
}

export const AcademyPage: React.FC<AcademyPageProps> = ({ onOpenBooking }) => {
  const courses = [
    {
      id: "photo-masterclass",
      title: "Photography Masterclass",
      level: "Beginner to Advanced",
      duration: "6 Weeks (Practical & Studio)",
      desc: "Master DSLR and mirrorless camera systems, natural and artificial studio lighting, commercial product photography, portrait retouching, and building an elite portfolio.",
      icon: <Camera className="w-6 h-6 text-[#E6AF2E]" />
    },
    {
      id: "cinema-lighting",
      title: "Cinematography & Creative Direction",
      level: "Intermediate to Pro",
      duration: "8 Weeks Intensive",
      desc: "Learn high-end cinema camera operations, lens selection, 3-point and moody lighting packages, blocking, framing, and directing high-budget commercial shoots.",
      icon: <Clapperboard className="w-6 h-6 text-[#E6AF2E]" />
    },
    {
      id: "post-production",
      title: "Video Editing & Color Grading (DaVinci Resolve)",
      level: "All Levels",
      duration: "6 Weeks Hands-On",
      desc: "Transform raw footage into cinematic masterpieces. Master DaVinci Resolve color grading, node workflows, sound design, audio sweetening, and professional export standards.",
      icon: <Scissors className="w-6 h-6 text-[#E6AF2E]" />
    },
    {
      id: "drone-piloting",
      title: "Drone Piloting & Aerial Cinematography",
      level: "All Levels",
      duration: "4 Weeks Field Training",
      desc: "Become a certified, confident drone operator. Master flight safety, NCAA guidelines, cinematic tracking movements, reveal shots, and real estate aerial walkthroughs.",
      icon: <Send className="w-6 h-6 text-[#E6AF2E]" />
    },
    {
      id: "content-creation",
      title: "Digital Content Creation & Brand Strategy",
      level: "All Levels",
      duration: "4 Weeks Workshop",
      desc: "Engineered for creators and business owners. Learn smartphone and mirrorless content production, viral pacing, scriptwriting, lighting setups, and social growth mechanics.",
      icon: <Smartphone className="w-6 h-6 text-[#E6AF2E]" />
    }
  ];

  const benefits = [
    { title: "Practical Studio Mentorship", desc: "Train directly inside our state-of-the-art production studio in Enugu with industry-standard cameras and lighting gear." },
    { title: "Real-World Field Experience", desc: "Accompany the Gebixcuts crew on live commercial shoots, weddings, and documentary sets to gain practical set experience." },
    { title: "The Business of Media", desc: "Learn how to price your services, pitch to high-paying clients across Nigeria, draw up contracts, and build a profitable creative business." },
    { title: "Lifetime Community & Support", desc: "Get permanent access to our private alumni community for job referrals, equipment sharing, and ongoing feedback." }
  ];

  return (
    <div className="pt-32 pb-24 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-center space-x-2 text-[#E6AF2E]">
          <span className="h-1 w-8 bg-[#E6AF2E] rounded-full" />
          <span className="font-heading font-bold text-xs uppercase tracking-[0.25em]">GEBIXCUTS ACADEMY</span>
          <span className="h-1 w-8 bg-[#E6AF2E] rounded-full" />
        </div>
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white leading-tight">
          Learn from Experts. <br />
          <span className="gold-gradient-text">Create Like a Pro.</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          The Gebixcuts Academy is our premier training institution dedicated to nurturing the next generation of visual storytellers, cinematographers, photographers, and editors across Africa.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onOpenBooking('Gebixcuts Academy Enrollment')}
            className="px-8 py-4 rounded-full bg-[#E6AF2E] text-black font-heading font-bold text-sm hover:bg-[#F5C542] transition-all shadow-[0_0_30px_rgba(230,175,46,0.5)] scale-105 inline-flex items-center space-x-2"
          >
            <GraduationCap className="w-5 h-5" />
            <span>Apply for the Next Cohort</span>
          </button>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Available Masterclasses & Programs
          </h2>
          <p className="text-sm text-gray-400">
            Intensive, project-based curriculums designed to give you practical mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-[#121218] rounded-3xl p-8 border border-white/10 hover:border-[#E6AF2E] transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#1A1A24] border border-white/10 group-hover:border-[#E6AF2E] flex items-center justify-center transition-colors">
                    {course.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#E6AF2E]/15 text-[10px] font-bold text-[#E6AF2E] uppercase tracking-wider">
                    {course.level}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-white group-hover:text-[#E6AF2E] transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs font-semibold text-[#E6AF2E] uppercase tracking-wider flex items-center space-x-1.5">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.duration}</span>
                </p>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {course.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">Limited Seats / Cohort</span>
                <button
                  onClick={() => onOpenBooking(`Academy: ${course.title}`)}
                  className="px-5 py-2.5 rounded-xl bg-[#E6AF2E] text-black font-heading font-bold text-xs hover:bg-[#F5C542] transition-colors flex items-center space-x-1 shadow-[0_0_15px_rgba(230,175,46,0.3)]"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Gebixcuts Academy */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0F0F14] border border-[#E6AF2E]/30 space-y-10 shadow-2xl">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Why Train With <span className="text-[#E6AF2E]">Gebixcuts?</span>
          </h2>
          <p className="text-sm text-gray-400">
            We don't teach theory from old textbooks—we teach modern, real-world production techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {benefits.map((ben, idx) => (
            <div key={idx} className="flex items-start space-x-4 p-5 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-[#E6AF2E]/20 border border-[#E6AF2E] flex items-center justify-center shrink-0 text-[#E6AF2E]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-lg text-white">{ben.title}</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{ben.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enrollment CTA Box */}
      <div className="p-12 rounded-3xl bg-gradient-to-r from-[#1D170B] via-[#14141E] to-[#111116] border border-[#E6AF2E]/40 text-center max-w-4xl mx-auto space-y-6 shadow-[0_0_60px_rgba(230,175,46,0.2)]">
        <div className="w-16 h-16 rounded-full bg-[#E6AF2E]/20 border-2 border-[#E6AF2E] flex items-center justify-center mx-auto text-[#E6AF2E]">
          <Award className="w-8 h-8" />
        </div>
        <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
          Ready to Start Your Creative Career?
        </h3>
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
          Enrollment for our upcoming 2026 cohort in Enugu is currently open. Secure your spot today and receive professional mentorship that sets you apart.
        </p>
        <button
          onClick={() => onOpenBooking('Gebixcuts Academy Enrollment')}
          className="px-9 py-4 rounded-full bg-[#E6AF2E] text-black font-heading font-extrabold text-base hover:bg-[#F5C542] transition-all shadow-[0_0_35px_rgba(230,175,46,0.6)]"
        >
          Submit Enrollment Application
        </button>
      </div>

    </div>
  );
};
