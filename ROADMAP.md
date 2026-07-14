# 🎬 GEBIXCUTS — Premium Cinematic Website Roadmap & Implementation Plan

> **Every Frame. Every Story.**  
> *Your Story Deserves More Than Just a Camera. It Deserves a Vision.*

---

## 📌 Executive Summary

**Gebixcuts** is a premium media production company specializing in high-end cinematography, creative storytelling, documentary production, event coverage, drone visuals, real estate media, jingle production, and professional media training (**Gebixcuts Academy**).

This roadmap outlines the complete engineering and design strategy to build an ultra-premium, cinematic, and responsive web application that reflects the top-tier quality of Gebixcuts' media productions. The site will feature an **Obsidian & Gold (`#0A0A0A` + `#E6AF2E`)** dark-mode visual identity, smooth micro-animations, glassmorphism UI elements, video showreels, interactive service explorers, portfolio filters, and seamless consultation booking workflows.

---

## 🎨 Design System & Brand Identity

### 1. Color Palette (Cinematic Dark Theme)
| Token Name | Hex Value | Usage |
| :--- | :--- | :--- |
| `--color-bg-main` | `#08080A` | Deep obsidian backdrop for maximum contrast and focus on visuals |
| `--color-bg-surface` | `#121216` | Card backgrounds, elevated panels, and modal wrappers |
| `--color-bg-surface-hover` | `#1A1A22` | Hover states for service cards and portfolio items |
| `--color-accent-gold` | `#E6AF2E` | Primary CTAs, active indicators, borders, star ratings, and highlights |
| `--color-accent-gold-glow`| `rgba(230, 175, 46, 0.15)` | Subtle ambient glowing backdrops and box-shadows |
| `--color-text-primary` | `#F8F9FA` | Main headings (`<h1>`, `<h2>`), crisp primary text |
| `--color-text-secondary`| `#A0A6B2` | Subtitles, body paragraphs, and descriptions |
| `--color-border-subtle` | `rgba(255, 255, 255, 0.08)` | Glassmorphism borders and section separators |

### 2. Typography & Motion
- **Headings:** Modern, punchy geometric sans-serif (e.g., *Outfit*, *Plus Jakarta Sans*, or *Inter* with tight kerning).
- **Body & Captions:** Clean readable sans-serif (*Inter*) ensuring crisp legibility on mobile and desktop.
- **Motion & Micro-interactions:**
  - **Parallax & Fade-ins:** Smooth scroll-driven section entries (`intersection-observer` / CSS animations).
  - **Card Hover Effects:** Subtle scale up (`1.02x`), gold border illumination (`--color-accent-gold`), and video loop triggers on portfolio hover.
  - **Process Stepper:** Interactive numbered workflow tabs (`01 Discover` → `02 Plan` → `03 Create` → `04 Deliver`).

---

## 🏗️ Technical Architecture & Stack

- **Framework / Core:** Modern Web Application (`Next.js 15` / `React` or modular `Vite` architecture) for fast rendering, SEO optimization, and smooth client-side routing.
- **Styling:** Modular Vanilla CSS (`index.css` & CSS Variables) ensuring total fine-grained control over gradients, glassmorphism, responsive breakpoints, and animations without framework bloat.
- **Content Architecture:** Structured data layers for easy future dynamic CMS or Supabase integration (e.g., centralized `servicesData.ts`, `portfolioData.ts`, `testimonialsData.ts`).
- **Performance & SEO:** OpenGraph social sharing meta tags, responsive WebP/AVIF image optimization, structured JSON-LD organization schema, and lazy-loaded video previews.

---

## 📅 Phased Implementation Roadmap

### Phase 1: Foundation, Design System & Core Scaffold (Completed / Initializing)
- [x] Extract complete website copy, service breakdown, metrics, and testimonials.
- [x] Establish official GitHub repository documentation (`README.md`, `ROADMAP.md`, and `GITHUB_PROJECT_INFO.md`).
- [x] Initialize project architecture with responsive viewport configuration and global styling tokens (`--color-bg-main`, `--color-accent-gold`, etc.).
- [x] Build core reusable UI components:
  - `Navbar` with responsive mobile drawer and "Book a Session" CTA button.
  - `Footer` with quick links, service breakdown, and social media icons.
  - `Button` variations (`Primary Gold Pill`, `Secondary Outline Glow`).
  - `SectionHeader` with stylized tagline eyebrows (`EVERY FRAME. EVERY STORY.`).

### Phase 2: High-Impact Homepage (`/`) Rollout
- [x] **Hero Section:**
  - Dramatic headline (`Your Story Deserves More Than Just a Camera. It Deserves a Vision.`).
  - Background cinematic showreel / atmospheric dark gradient overlay.
  - Dual CTAs (`Book a Session` & `View Our Portfolio`).
- [x] **Trusted By Banner:**
  - Sleek monochrome/gold-tinted client & partner logo ticker (e.g., *Dunamis*, *FirstBank*, *GTBank*, *Access*, *Airtel*, *MAX Media*, *LASAA*, *Redemption Camp*).
- [x] **Interactive Services Grid (`Professional Visual Solutions`):**
  - 10 distinct service cards (`Documentary`, `Event Coverage`, `Cinematography`, `Photography`, `Video Editing`, `Drone Coverage`, `Real Estate`, `Jingle Production`, `Gebixcuts Academy`, `Content Creation`).
  - Visual icons and hover states.
- [x] **Featured Portfolio Showcase (`Stories We've Had the Privilege to Tell`):**
  - Horizontal carousel / grid featuring highlighted projects (`Faith Conference`, `Flourish Brand Film`, `Legacy of Us Documentary`, `Royal Wedding`).
  - Modal video player integration.
- [x] **Why Choose Gebixcuts & Key Metrics:**
  - 6 value propositions (`Cinematic Excellence`, `Creative Storytelling`, `Professional Team`, `Fast Turnaround`, `Client-Focused`, `Premium Experience`).
  - Live animated stat counters (`250+ Projects Completed`, `150+ Happy Customers`, `20+ Brands Served`, `5+ Years Experience`).
- [x] **Interactive Workflow (`Our Process`):**
  - 4-step interactive timeline (`01 Discover` → `02 Plan` → `03 Create` → `04 Deliver`).
- [x] **Testimonials & Social Proof:**
  - Star ratings and review cards from satisfied clients (`Pastor E.A. Adeboye / Dunamis`, `Ifeanyi Nwosu / CEO Max Media`, `Chioma Okafor / Event Planner`, `David Umeh / Realtor`).
- [x] **Final Call to Action (`Let's Create Something Extraordinary`):**
  - High-conversion booking banner with warm gold backlighting.

### Phase 3: Dedicated Core Pages Rollout
- [x] **About Page (`/about`):**
  - Deep dive into the Gebixcuts philosophy (`We Turn Moments Into Timeless Stories`).
  - Mission Statement (`To transform ideas and moments into exceptional visual experiences...`).
  - Vision Statement (`To become Africa's most trusted creative production company...`).
  - Behind-the-scenes showcase of equipment, creative directors, and industry standards.
- [x] **Services Hub Page (`/services`):**
  - Comprehensive catalog of all 10 services with detailed inclusions, deliverables, and sample use cases.
  - Direct inquiry CTA buttons per service category (`Book Documentary`, `Inquire About Drone Coverage`, etc.).
- [x] **Portfolio Gallery Page (`/portfolio`):**
  - Filterable multi-category gallery (`All`, `Documentary`, `Events`, `Commercial`, `Real Estate`, `Weddings`).
  - Lightbox / Video showreel playback on item click.
- [x] **Gebixcuts Academy Page (`/academy`):**
  - Curriculum overview (`Photography`, `Cinematography`, `Editing`, `Content Creation`).
  - Student testimonials, mentorship benefits, and enrollment registration form.
- [x] **Contact & Booking Page (`/contact`):**
  - Direct contact details (Enugu, Nigeria location, Phone/WhatsApp, Email).
  - Interactive multi-field booking inquiry form (`Full Name`, `Email`, `Phone`, `Service Required`, `Project Brief`).
  - Social media hub links (`Instagram`, `Facebook`, `TikTok`, `YouTube`).

### Phase 4: Polish, Optimization & Deployment
- [ ] **Cross-Device & Mobile Responsiveness Audit:**
  - Ensure pristine scaling across iPhone, iPad, laptop, and ultra-wide desktop screens.
  - Verify touch-friendly navigation and smooth drawer animations.
- [ ] **Performance & SEO Tuning:**
  - Implement dynamic page titles and meta descriptions (`Gebixcuts | Premium Cinematography & Video Production in Nigeria`).
  - Lighthouse performance optimization (`>95` score across Accessibility, Best Practices, and Performance).
- [ ] **CI/CD & Production Deployment:**
  - Automated deployment pipeline setup via Vercel / GitHub Pages.
  - Final domain verification (`gebixcuts.com`) and production release check.

---

## 🚀 Immediate Next Steps

1. Conduct cross-device responsive UI testing across mobile and desktop viewports.
2. Fine-tune animations, performance optimization, and dynamic page metadata.
3. Configure Vercel / GitHub Pages automated deployment for production launch.

---
*© 2026 Gebixcuts. All Rights Reserved. Every Frame. Every Story.*
