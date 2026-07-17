import React, { useState } from 'react';
import { 
  Play, ArrowRight, Video, Camera, Scissors, Send, Home as HomeIcon, 
  Mic, Smartphone, GraduationCap, Users, Clapperboard, Aperture, 
  CheckCircle2, ChevronLeft, ChevronRight, Star
} from 'lucide-react';
import { WEBSITE_DATA } from '../data/websiteData';
import type { PortfolioItem } from '../data/websiteData';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  onOpenBooking: (service?: string) => void;
  onOpenVideo: (project?: PortfolioItem) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab, onOpenBooking, onOpenVideo }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [cameraCarouselIndex, setCameraCarouselIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const cameraRigs = [
    {
      id: "rig-red",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
      title: "RED V-Raptor Cinema Rig",
      spec: "16-Bit RAW • DaVinci Studio Suite",
      tc: "TC 01:24:48:19"
    },
    {
      id: "rig-arri",
      image: "https://images.unsplash.com/photo-1524985069026-dd778a51c7b7?auto=format&fit=crop&w=1200&q=80",
      title: "ARRI Alexa Mini Anamorphic",
      spec: "ProRes 4444 XQ • Cooke Primes",
      tc: "TC 02:15:33:04"
    },
    {
      id: "rig-sony",
      image: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=1200&q=80",
      title: "Sony Venice FX9 Production Rig",
      spec: "Full Frame Sensor • Dual ISO",
      tc: "TC 00:48:12:15"
    },
    {
      id: "rig-filmset",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      title: "Commercial Film Set Setup",
      spec: "120FPS Slow-Mo • Wireless FIZ",
      tc: "TC 03:09:21:11"
    }
  ];

  const typingOptions = [
    "Vision to Life.",
    "Brand to the Screen.",
    "Story into Focus.",
    "Moments to Eternity.",
    "Ideas to Cinema."
  ];

  React.useEffect(() => {
    const cameraTimer = setInterval(() => {
      setCameraCarouselIndex((prev) => (prev + 1) % cameraRigs.length);
    }, 4000);
    return () => clearInterval(cameraTimer);
  }, [cameraRigs.length]);

  React.useEffect(() => {
    const currentOption = typingOptions[typingIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && typedText === currentOption) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setTypingIndex((prev) => (prev + 1) % typingOptions.length);
    } else {
      const speed = isDeleting ? 35 : 75;
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentOption.substring(0, typedText.length - 1)
            : currentOption.substring(0, typedText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, typingIndex]);

  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera': return <Camera className="w-6 h-6 text-[#E6AF2E]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#E6AF2E]" />;
      case 'Clapperboard': return <Clapperboard className="w-6 h-6 text-[#E6AF2E]" />;
      case 'Aperture': return <Aperture className="w-6 h-6 text-[#E6AF2E]" />;
      case 'Scissors': return <Scissors className="w-6 h-6 text-[#E6AF2E]" />;
      case 'Send': return <Send className="w-6 h-6 text-[#E6AF2E]" />;
      case 'Home': return <HomeIcon className="w-6 h-6 text-[#E6AF2E]" />;
      case 'Mic': return <Mic className="w-6 h-6 text-[#E6AF2E]" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-[#E6AF2E]" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#E6AF2E]" />;
      default: return <Video className="w-6 h-6 text-[#E6AF2E]" />;
    }
  };

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % WEBSITE_DATA.portfolio.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + WEBSITE_DATA.portfolio.length) % WEBSITE_DATA.portfolio.length);
  };

  return (
    <div className="flex flex-col gap-24 sm:gap-32 pb-24 sm:pb-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center pt-36 pb-20 overflow-hidden">
        {/* Subtle Ambient Backlight */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#E6AF2E]/10 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-transparent to-[#060608]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Ultra-Tight 4D Typography & HUD */}
            <div className="lg:col-span-7 space-y-5 text-left">
              
              {/* Live Viewfinder Recording Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#121218]/90 border border-[#E6AF2E]/40 shadow-[0_0_25px_rgba(230,175,46,0.2)] animate-fadeIn">
                <div className="flex items-center gap-2 px-2.5 py-0.5 rounded bg-red-600/20 border border-red-500/60 text-[10px] font-extrabold text-red-500 uppercase tracking-widest animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span>REC</span>
                </div>
                <span className="text-xs font-mono font-bold text-gray-300 tracking-wider">
                  [ 4K UHD • 60FPS • ISO 800 ]
                </span>
              </div>

              {/* Tagline Eyebrow */}
              <div className="flex items-center space-x-3 pt-1">
                <span className="h-px w-10 bg-[#E6AF2E]" />
                <span className="font-heading font-bold text-xs uppercase tracking-[0.25em] text-[#E6AF2E]">
                  {WEBSITE_DATA.tagline}
                </span>
              </div>

              {/* Static Cinematic Headline with Typing Keyword Animation */}
              <div className="min-h-[170px] sm:min-h-[220px] lg:min-h-[250px] flex items-center">
                <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.08] sm:leading-[1.12] tracking-tight text-white drop-shadow-[0_8px_25px_rgba(230,175,46,0.35)] transition-all duration-500 hover:scale-[1.01] w-full">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent block">
                    Your Story Deserves
                  </span>
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent block">
                    More Than Just a Camera.
                  </span>
                  <span className="block mt-2 sm:mt-3 text-3xl sm:text-5xl lg:text-6xl tracking-tight font-extrabold">
                    <span className="text-gray-200">We bring your </span>
                    <span className="gold-gradient-text drop-shadow-[0_4px_15px_rgba(230,175,46,0.6)] inline-block min-h-[1em]">
                      {typedText}
                    </span>
                    <span className="inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-[#E6AF2E] ml-1.5 align-middle animate-pulse" />
                  </span>
                </h1>
              </div>

              {/* Static Description Tagline */}
              <div className="pt-1">
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#121218]/95 border border-[#E6AF2E]/40 shadow-[0_0_20px_rgba(230,175,46,0.15)] max-w-xl">
                  <div className="w-2 h-2 rounded-full bg-[#E6AF2E] shrink-0" />
                  <p className="text-xs sm:text-sm font-semibold text-gray-200 leading-snug">
                    🎬 Cinematic Brand Films, Documentaries, Drone Coverage & Professional Academy.
                  </p>
                </div>
              </div>

              {/* Dual CTAs */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3">
                <button
                  onClick={() => onOpenBooking()}
                  className="group px-8 py-4 rounded-full bg-[#E6AF2E] text-black font-heading font-bold text-sm sm:text-base hover:bg-[#F5C542] transition-all flex items-center space-x-3 shadow-[0_0_30px_rgba(230,175,46,0.4)] hover:shadow-[0_0_45px_rgba(230,175,46,0.7)] hover:scale-105"
                >
                  <span>Book a Session</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenVideo()}
                  className="group px-7 py-4 rounded-full bg-[#14141C]/90 border border-white/15 hover:border-[#E6AF2E] text-white font-heading font-semibold text-sm sm:text-base backdrop-blur-md transition-all flex items-center space-x-3.5 hover:bg-[#1C1C26]"
                >
                  <div className="w-7 h-7 rounded-full bg-[#E6AF2E]/20 flex items-center justify-center text-[#E6AF2E] group-hover:bg-[#E6AF2E] group-hover:text-black transition-colors">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  <span>View Our Portfolio</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-3 flex flex-wrap items-center gap-6 text-xs font-semibold text-gray-400 border-t border-white/10 max-w-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E6AF2E]" />
                  <span>250+ Projects Produced</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E6AF2E]" />
                  <span>Enugu & Nationwide Production</span>
                </div>
              </div>

            </div>

            {/* Right Column: Rotating High-End Cinema Camera Rig Carousel & Viewfinder HUD */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Viewfinder Box with Carousel */}
                <div className="relative rounded-3xl overflow-hidden border border-[#E6AF2E]/30 bg-[#111116] shadow-[0_0_80px_rgba(230,175,46,0.22)] group aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5]">
                  
                  {/* Rotating High-Resolution Cinema Camera Photographs */}
                  {cameraRigs.map((rig, idx) => (
                    <img
                      key={rig.id}
                      src={rig.image}
                      alt={rig.title}
                      className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ${
                        idx === cameraCarouselIndex ? 'opacity-100 scale-105 group-hover:scale-110 z-0' : 'opacity-0 scale-100 -z-10'
                      }`}
                    />
                  ))}

                  {/* Dark Cinematic Grading & Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-black/40 opacity-80 pointer-events-none" />

                  {/* Viewfinder Corner HUD Brackets */}
                  <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-[#E6AF2E] pointer-events-none" />
                  <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-[#E6AF2E] pointer-events-none" />
                  <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-[#E6AF2E] pointer-events-none" />
                  <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-[#E6AF2E] pointer-events-none" />

                  {/* Top HUD Recording Overlay with Dynamic Timecode */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 flex items-center gap-3 text-xs font-mono font-bold text-white z-10 shadow-lg">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-red-400">REC</span>
                    <span className="text-gray-400">|</span>
                    <span>{cameraRigs[cameraCarouselIndex].tc}</span>
                  </div>

                  {/* Carousel Indicator Dots inside Top Right */}
                  <div className="absolute top-5 right-5 z-10 flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
                    {cameraRigs.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setCameraCarouselIndex(dotIdx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          dotIdx === cameraCarouselIndex ? 'bg-[#E6AF2E] w-4' : 'bg-white/40 hover:bg-white'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Center Crosshair HUD Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                    <div className="w-16 h-16 border border-white/40 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E6AF2E]" />
                    </div>
                  </div>

                  {/* Bottom Stats Overlay inside Camera Card showing dynamic rig specs */}
                  <div className="absolute bottom-6 left-6 right-6 bg-[#121218]/95 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex items-center justify-between text-left shadow-2xl z-10 transition-all duration-500">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-[#E6AF2E]/20 border border-[#E6AF2E] flex items-center justify-center text-[#E6AF2E] shrink-0">
                        <Clapperboard className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Production Setup</p>
                        <p className="font-heading font-extrabold text-sm text-white">{cameraRigs[cameraCarouselIndex].title}</p>
                      </div>
                    </div>
                    <div className="text-right hidden sm:block">
                      <span className="px-2.5 py-1 rounded-md bg-[#E6AF2E]/20 text-[#E6AF2E] font-mono text-[11px] font-extrabold block">
                        {cameraRigs[cameraCarouselIndex].spec.split(' • ')[0]}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Floating Glass Badge: Broadcast Standard */}
                <div className="absolute -top-6 -left-6 bg-[#14141E]/95 border border-[#E6AF2E]/40 px-4 py-3 rounded-2xl shadow-[0_0_30px_rgba(230,175,46,0.25)] backdrop-blur-md hidden sm:flex items-center gap-3 z-20 animate-float">
                  <div className="w-10 h-10 rounded-xl bg-[#E6AF2E]/20 border border-[#E6AF2E] flex items-center justify-center text-[#E6AF2E]">
                    <Aperture className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Optics & Grading</p>
                    <p className="text-xs font-heading font-extrabold text-white">{cameraRigs[cameraCarouselIndex].spec.split(' • ')[1] || 'Anamorphic & DaVinci'}</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY BRANDS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-2xl bg-[#111116] border border-[#E6AF2E]/20 shadow-2xl relative overflow-hidden">
          <p className="text-center text-xs uppercase font-bold tracking-[0.25em] text-[#E6AF2E] mb-8">
            TRUSTED BY BRANDS, BUSINESSES & VISIONARIES
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto items-center justify-items-center opacity-90">
            {WEBSITE_DATA.trustedBrands.map((brand, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center text-center p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#E6AF2E]/40 hover:bg-white/[0.06] transition-all duration-300 w-full min-h-[85px] sm:min-h-[95px] group cursor-pointer shadow-lg hover:scale-[1.02]"
              >
                <span className="font-heading font-extrabold text-base sm:text-lg text-gray-300 group-hover:text-[#E6AF2E] transition-colors tracking-tight">
                  {brand.logoText}
                </span>
                {brand.subtitle && (
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-gray-300 mt-1 font-semibold">
                    {brand.subtitle}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-[#E6AF2E] mb-2">
              <span className="h-1 w-6 bg-[#E6AF2E] rounded-full" />
              <span className="font-heading font-bold text-xs uppercase tracking-widest">WHAT WE DO</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white">
              Professional Visual Solutions <br />
              <span className="text-[#E6AF2E]">for Every Story</span>
            </h2>
          </div>
          <button
            onClick={() => {
              setActiveTab('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="self-start md:self-auto px-6 py-3 rounded-full bg-transparent border border-[#E6AF2E]/60 text-[#E6AF2E] hover:bg-[#E6AF2E] hover:text-black font-heading font-bold text-sm transition-all flex items-center space-x-2 shrink-0 shadow-[0_0_15px_rgba(230,175,46,0.15)]"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WEBSITE_DATA.services.slice(0, 8).map((srv) => (
            <div
              key={srv.id}
              onClick={() => onOpenBooking(srv.title)}
              className="group relative bg-[#121218] rounded-2xl p-6 border border-white/10 hover:border-[#E6AF2E] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 shadow-lg hover:shadow-[0_10px_30px_rgba(230,175,46,0.15)] overflow-hidden"
            >
              {/* Background Thumbnail preview on hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500">
                <img src={srv.imageUrl} alt={srv.title} className="w-full h-full object-cover" />
              </div>

              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A24] border border-white/10 group-hover:border-[#E6AF2E] flex items-center justify-center transition-colors">
                  {renderServiceIcon(srv.iconName)}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#E6AF2E] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    {srv.shortDesc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/5 flex items-center justify-between mt-6">
                <span className="text-[11px] font-semibold text-[#E6AF2E]">Book Service</span>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#E6AF2E] group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED WORK CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-[#E6AF2E] mb-2">
              <span className="h-1 w-6 bg-[#E6AF2E] rounded-full" />
              <span className="font-heading font-bold text-xs uppercase tracking-widest">FEATURED WORK</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white">
              Stories We've Had the <br />
              <span className="text-[#E6AF2E]">Privilege to Tell</span>
            </h2>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                setActiveTab('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-transparent border border-white/20 text-white hover:border-[#E6AF2E] hover:text-[#E6AF2E] font-heading font-bold text-sm transition-all flex items-center space-x-2 shrink-0 mr-4"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-[#161620] border border-white/10 hover:border-[#E6AF2E] text-white transition-colors"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-[#161620] border border-white/10 hover:border-[#E6AF2E] text-white transition-colors"
              aria-label="Next Project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Project Showcase Cards - Mobile Responsive Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WEBSITE_DATA.portfolio
            .slice(carouselIndex, carouselIndex + 4)
            .concat(WEBSITE_DATA.portfolio.slice(0, Math.max(0, carouselIndex + 4 - WEBSITE_DATA.portfolio.length)))
            .slice(0, 4)
            .map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenVideo(item)}
              className={`group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#121218] border border-white/10 hover:border-[#E6AF2E] cursor-pointer shadow-xl transition-all duration-500 animate-fadeIn ${
                index === 0 ? 'block' :
                index === 1 ? 'hidden sm:block' :
                'hidden lg:block'
              }`}
            >
              <img 
                src={item.thumbnailUrl} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-[#E6AF2E]/90 text-black flex items-center justify-center shadow-[0_0_25px_rgba(230,175,46,0.7)] group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-1">
                <span className="px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-[#E6AF2E]">
                  {item.category}
                </span>
                <h4 className="font-heading font-bold text-lg text-white group-hover:text-[#E6AF2E] transition-colors pt-1">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE GEBIXCUTS + STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0F0F14] border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 6 Pillars (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <div className="flex items-center space-x-2 text-[#E6AF2E] mb-2">
                <span className="h-1 w-6 bg-[#E6AF2E] rounded-full" />
                <span className="font-heading font-bold text-xs uppercase tracking-widest">WHY CHOOSE GEBIXCUTS?</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                Why Clients Choose Us
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WEBSITE_DATA.whyChooseUs.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#E6AF2E]/15 border border-[#E6AF2E]/40 flex items-center justify-center shrink-0 text-[#E6AF2E] mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-white">{item.title}</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Stats (4 cols) */}
          <div className="lg:col-span-4 bg-[#14141E] border border-[#E6AF2E]/30 rounded-2xl p-8 space-y-6 text-center shadow-[0_0_40px_rgba(230,175,46,0.1)]">
            <div className="grid grid-cols-2 gap-6">
              {WEBSITE_DATA.stats.map((st, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <p className="font-heading font-extrabold text-3xl sm:text-4xl text-[#E6AF2E]">
                    {st.value}
                  </p>
                  <p className="text-xs text-gray-300 uppercase tracking-wider font-semibold mt-1">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => onOpenBooking()}
                className="w-full py-3.5 rounded-xl bg-[#E6AF2E] text-black font-heading font-bold text-sm hover:bg-[#F5C542] transition-all shadow-[0_0_20px_rgba(230,175,46,0.3)]"
              >
                Start Your Project With Us
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. OUR PROCESS STEPPER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-[#E6AF2E] mb-2">
            <span className="h-1 w-6 bg-[#E6AF2E] rounded-full" />
            <span className="font-heading font-bold text-xs uppercase tracking-widest">HOW WE WORK</span>
            <span className="h-1 w-6 bg-[#E6AF2E] rounded-full" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            A Simple Process. <span className="text-[#E6AF2E]">Extraordinary Results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WEBSITE_DATA.processSteps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-[#121218] rounded-2xl p-6 border border-white/10 hover:border-[#E6AF2E] transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="w-12 h-12 rounded-2xl bg-[#E6AF2E]/20 border border-[#E6AF2E] flex items-center justify-center font-heading font-extrabold text-xl text-[#E6AF2E] shadow-[0_0_20px_rgba(230,175,46,0.3)]">
                  {step.step}
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Step {step.step}</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#E6AF2E] transition-colors mb-3">
                {step.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-[#E6AF2E] mb-2">
              <span className="h-1 w-6 bg-[#E6AF2E] rounded-full" />
              <span className="font-heading font-bold text-xs uppercase tracking-widest">WHAT OUR CLIENTS SAY</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              Loved by <span className="text-[#E6AF2E]">Happy Customers</span>
            </h2>
          </div>
          <div className="flex items-center space-x-1 text-[#E6AF2E]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="text-sm font-bold text-white ml-2">5.0 / 5.0 Rating across 150+ Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WEBSITE_DATA.testimonials.map((test) => (
            <div 
              key={test.id}
              className="bg-[#121218] rounded-2xl p-6 border border-white/10 flex flex-col justify-between space-y-6 hover:border-[#E6AF2E]/50 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex text-[#E6AF2E] space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>
              
              <div className="flex items-center space-x-3 pt-4 border-t border-white/5">
                <img 
                  src={test.avatar} 
                  alt={test.author} 
                  className="w-10 h-10 rounded-full object-cover border border-[#E6AF2E]"
                />
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">{test.author}</h4>
                  <p className="text-[11px] text-[#E6AF2E] font-medium">{test.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1D170B] via-[#121218] to-[#0A0A0E] border border-[#E6AF2E]/40 p-10 sm:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_60px_rgba(230,175,46,0.2)]">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E6AF2E]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="space-y-3 max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E6AF2E]">
              READY TO TELL YOUR STORY?
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
              Let's Create Something <br />
              <span className="text-[#E6AF2E]">Extraordinary.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Whether you're launching a brand, documenting an event, producing a film, or creating content that inspires, we're ready to bring your vision to life beautifully.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="px-9 py-5 rounded-full bg-[#E6AF2E] text-black font-heading font-extrabold text-base hover:bg-[#F5C542] transition-all flex items-center space-x-3 shadow-[0_0_35px_rgba(230,175,46,0.6)] hover:scale-105"
            >
              <span>Book Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
