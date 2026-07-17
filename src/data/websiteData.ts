export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Video' | 'Photo' | 'Audio' | 'Education' | 'Digital';
  iconName: string;
  imageUrl: string;
  priceEstimate?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  filterCategory: 'All' | 'Documentary' | 'Events' | 'Commercial' | 'Real Estate' | 'Weddings';
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  client: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatar: string;
}

export const WEBSITE_DATA = {
  tagline: "Every Frame. Every Story.",
  heroHeadline: "Your Story Deserves More Than Just a Camera.",
  heroSubheadline: "It Deserves a Vision.",
  heroDescription:
    "At Gebixcuts, we don't just capture moments—we create cinematic experiences that inspire, connect, and leave lasting impressions. From brand films and documentaries to weddings, events, and digital content, we bring every story to life with creativity, precision, and excellence.",
  
  trustedBrands: [
    { name: "Todal Media", logoText: "TODAL", subtitle: "MEDIA" },
    { name: "Leafup Digital", logoText: "LEAFUP", subtitle: "DIGITAL" },
    { name: "Bethel Media", logoText: "BETHEL", subtitle: "MEDIA" },
    { name: "FirstBank Since 1894", logoText: "FirstBank", subtitle: "Since 1894" },
    { name: "GTBank", logoText: "GTBank", subtitle: "" },
    { name: "Access Bank", logoText: "access", subtitle: "" },
    { name: "Airtel Nigeria", logoText: "airtel", subtitle: "" },
    { name: "MAX Media", logoText: "MAX", subtitle: "MEDIA" },
    { name: "LASAA", logoText: "LASAA", subtitle: "" },
  ],

  stats: [
    { value: "250+", label: "Projects Completed", icon: "CheckCircle" },
    { value: "150+", label: "Happy Customers", icon: "Users" },
    { value: "20+", label: "Brands Served", icon: "Award" },
    { value: "5+", label: "Years Experience", icon: "Clock" },
  ],

  whyChooseUs: [
    {
      title: "Cinematic Excellence",
      description: "Every project is produced with professional equipment, creative direction, and industry-standard quality.",
      icon: "Video"
    },
    {
      title: "Creative Storytelling",
      description: "We don't just record events—we tell stories that evoke emotion and create lasting impact.",
      icon: "Film"
    },
    {
      title: "Professional Team",
      description: "Experienced creatives committed to delivering excellence from planning to final delivery.",
      icon: "Users"
    },
    {
      title: "Fast Turnaround",
      description: "Quality work delivered within agreed timelines without compromising standards.",
      icon: "Zap"
    },
    {
      title: "Client-Focused Approach",
      description: "We listen first, understand your vision, and work closely with you throughout the production process.",
      icon: "HeartHandshake"
    },
    {
      title: "Premium Experience",
      description: "From your first inquiry to project delivery, every interaction is designed to exceed expectations.",
      icon: "Sparkles"
    }
  ],

  services: [
    {
      id: "documentary",
      title: "Documentary Production",
      shortDesc: "Authentic stories crafted with depth, emotion, and cinematic quality.",
      fullDesc: "We specialize in in-depth documentary filmmaking for organizations, NGOs, corporate brands, and personal legacies. Our approach combines exhaustive research, intimate character interviews, and cinematic B-roll to tell powerful narratives that inspire action.",
      category: "Video",
      iconName: "Camera",
      imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      priceEstimate: "Custom Quote / Project"
    },
    {
      id: "event-coverage",
      title: "Event Coverage",
      shortDesc: "Professional coverage for summits, conferences, brand launches, concerts, awards, and corporate events.",
      fullDesc: "Ensure no moment is forgotten with multi-camera cinematic event documentation. We capture high-energy conferences, international tech summits, royal celebrations, and corporate awards with unobtrusive precision and crystal-clear broadcast audio.",
      category: "Video",
      iconName: "Users",
      imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      priceEstimate: "From ₦450,000"
    },
    {
      id: "cinematography",
      title: "Cinematography",
      shortDesc: "High-end cinematic productions for brands, campaigns, music videos, and documentaries.",
      fullDesc: "High-end motion picture production using cinema camera packages, anamorphic lenses, and professional lighting setups. Ideal for TV commercials, brand anthems, narrative films, and high-budget music videos.",
      category: "Video",
      iconName: "Clapperboard",
      imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      priceEstimate: "From ₦850,000"
    },
    {
      id: "photography",
      title: "Photography",
      shortDesc: "Portraits, branding, events, commercial, product, and lifestyle photography.",
      fullDesc: "Crystal-clear high-resolution photography designed to elevate your personal or corporate brand. We cover studio portraiture, executive headshots, commercial product advertising, architectural interiors, and editorial lifestyle spreads.",
      category: "Photo",
      iconName: "Aperture",
      imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      priceEstimate: "From ₦150,000"
    },
    {
      id: "video-editing",
      title: "Video Editing",
      shortDesc: "Professional editing that transforms raw footage into compelling visual stories.",
      fullDesc: "State-of-the-art post-production services including rhythm editing, Hollywood-style color grading (DaVinci Resolve), custom sound design, audio sweetening, and motion graphics integration for pre-shot footage.",
      category: "Video",
      iconName: "Scissors",
      imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
      priceEstimate: "From ₦180,000"
    },
    {
      id: "drone-coverage",
      title: "Drone Coverage",
      shortDesc: "Stunning aerial photography and videography that elevate every production.",
      fullDesc: "Breathtaking 4K and 6K aerial cinematography capturing expansive landscapes, high-altitude event perspectives, infrastructure inspections, and dynamic tracking shots operated by FAA/NCAA certified pilots.",
      category: "Video",
      iconName: "Send",
      imageUrl: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80",
      priceEstimate: "From ₦200,000 / Day"
    },
    {
      id: "real-estate",
      title: "Real Estate Visuals",
      shortDesc: "Premium visuals that help properties attract buyers and stand out in the market.",
      fullDesc: "Accelerate property sales with luxury architectural walkthrough films, high-HDR interior photography, virtual tours, and dramatic sunset drone showcases tailored for real estate developers and agents.",
      category: "Photo",
      iconName: "Home",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      priceEstimate: "From ₦250,000"
    },
    {
      id: "jingle-production",
      title: "Jingle Production",
      shortDesc: "Professional audio branding that gives your business a memorable identity.",
      fullDesc: "Engaging sonic branding, custom musical scores, commercial jingles, voiceovers, and radio spots recorded in acoustically treated studios to make your brand instantly recognizable.",
      category: "Audio",
      iconName: "Mic",
      imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
      priceEstimate: "From ₦120,000"
    },
    {
      id: "content-creation",
      title: "Content Creation",
      shortDesc: "Creative social media content designed to increase engagement and grow your brand.",
      fullDesc: "Consistently viral and high-retention short-form video content (Reels, TikTok, YouTube Shorts), branded snippets, and content calendars engineered specifically for modern digital algorithms and audience growth.",
      category: "Digital",
      iconName: "Smartphone",
      imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
      priceEstimate: "Monthly Packages Available"
    },
    {
      id: "gebixcuts-academy",
      title: "Gebixcuts Academy",
      shortDesc: "Learn photography, cinematography, editing, and content creation from experienced professionals.",
      fullDesc: "Our comprehensive mentorship program designed to take you from beginner to highly paid professional creative. Features practical field training, studio mastery, business of media instruction, and lifetime community access.",
      category: "Education",
      iconName: "GraduationCap",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      priceEstimate: "Enrollment Open"
    }
  ] as ServiceItem[],

  portfolio: [
    {
      id: "bethel-media-summit",
      title: "Global Media & Tech Summit 2026",
      category: "Event Coverage",
      filterCategory: "Events",
      thumbnailUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "04:15",
      client: "Bethel Media & Todal Productions",
      description: "A multi-camera broadcast production and highlight reel capturing the keynotes, panel sessions, and creative masterclasses of over 5,000 attendees."
    },
    {
      id: "flourish-brand",
      title: "Flourish — The Dawn of Luxury",
      category: "Brand Film",
      filterCategory: "Commercial",
      thumbnailUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "02:40",
      client: "Flourish Cosmetics & Lifestyle",
      description: "A cinematic brand film shot across 3 nighttime city locations using anamorphic lenses and dynamic lighting to launch the 2026 luxury collection."
    },
    {
      id: "legacy-of-us",
      title: "Legacy of Us",
      category: "Documentary",
      filterCategory: "Documentary",
      thumbnailUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "18:22",
      client: "Heritage Foundation Nigeria",
      description: "An emotional, deeply researched historical documentary preserving the stories of pioneer educators across Southeast Nigeria."
    },
    {
      id: "royal-wedding",
      title: "Royal Union — Chioma & Emeka",
      category: "Wedding Film",
      filterCategory: "Weddings",
      thumbnailUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "06:50",
      client: "Chioma & Emeka Nwosu",
      description: "A breathtaking 4K wedding documentary capturing vows, traditional celebrations, and aerial views of the grand reception."
    },
    {
      id: "emerald-residences",
      title: "Emerald Residences Walkthrough",
      category: "Real Estate Visuals",
      filterCategory: "Real Estate",
      thumbnailUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "03:10",
      client: "Max Realty & Properties",
      description: "High-dynamic-range interior cinematography and sunset drone sweeps showcasing a 7-bedroom luxury penthouse in Enugu."
    },
    {
      id: "firstbank-anthem",
      title: "Empowering Next-Gen Visionaries",
      category: "Corporate Production",
      filterCategory: "Commercial",
      thumbnailUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "03:45",
      client: "FirstBank Nigeria",
      description: "An inspirational corporate documentary spotlighting young entrepreneurs building impactful businesses across Nigeria."
    }
  ] as PortfolioItem[],

  processSteps: [
    {
      step: "01",
      title: "Discover",
      desc: "We begin by understanding your goals, audience, and vision to ensure every detail aligns with your objectives."
    },
    {
      step: "02",
      title: "Plan",
      desc: "Our team develops a creative strategy, production schedule, and execution plan for a smooth workflow."
    },
    {
      step: "03",
      title: "Create",
      desc: "Using professional equipment and creative expertise, we capture and produce stunning visual content."
    },
    {
      step: "04",
      title: "Deliver",
      desc: "Your project is carefully edited, reviewed, and delivered on time with exceptional quality."
    }
  ],

  testimonials: [
    {
      id: "1",
      quote: "Gebixcuts turned our vision into a cinematic masterpiece. From concept to broadcast delivery, their precision, creative direction, and color grading were exceptional!",
      author: "Adewale Okonkwo",
      role: "Creative Director",
      organization: "Todal Media",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "2",
      quote: "Their attention to detail and fast turnaround speed is second to none. Gebixcuts consistently elevates our digital campaigns with high-impact visuals that drive massive engagement.",
      author: "Chidinma Okafor",
      role: "Head of Digital Strategy",
      organization: "Leafup Digital",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "3",
      quote: "Working with the Gebixcuts team on our multi-camera production was seamless. Every frame looked crystal-clear, broadcast-grade, and truly cinematic!",
      author: "Emanuel Nwangi",
      role: "Executive Producer",
      organization: "Bethel Media",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "4",
      quote: "Our real estate brand has grown significantly because of the premium, crisp walkthrough visuals Gebixcuts delivered. Every listing sold within weeks!",
      author: "David Chukwuma",
      role: "Lead Broker & Developer",
      organization: "Max Realty & Properties",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
    }
  ] as TestimonialItem[],

  contactInfo: {
    location: "Enugu, Nigeria",
    phone: "+234 904 212 3833",
    email: "gebixcuts@gmail.com",
    instagram: "https://instagram.com/gebixcuts",
    facebook: "https://facebook.com/gebixcuts",
    tiktok: "https://tiktok.com/@gebixcuts",
    youtube: "https://youtube.com/gebixcuts"
  }
};
