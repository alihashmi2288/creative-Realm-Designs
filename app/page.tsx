"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { 
  Palette, 
  Code2, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  TrendingUp,
  Clock,
  Sparkles
} from "lucide-react";

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<"design" | "dev" | "seo">("design");

  const serviceEstimates = {
    design: {
      title: "Bespoke Website Design",
      tagline: "Engage visitors and turn them into loyal customers.",
      timeline: "2 to 3 weeks",
      deliverables: [
        "User Journey & Conversion Wireframing",
        "Interactive Figma Clickable Prototype",
        "Mobile-First Responsive Layouts",
        "Custom Visual Branding & Asset Curation"
      ],
      idealFor: "Businesses seeking a modern, high-converting redesign without template cliches."
    },
    dev: {
      title: "Modern Web Development",
      tagline: "Lightning-fast, clean code that performs effortlessly on any device.",
      timeline: "3 to 4 weeks",
      deliverables: [
        "Modern Next.js & React Clean Architecture",
        "98+ Google PageSpeed Optimization",
        "Seamless Mobile & Cross-Browser Testing",
        "WCAG Accessibility Compliance & Security Hardening"
      ],
      idealFor: "Companies needing an ultra-responsive, secure website with instant page loads."
    },
    seo: {
      title: "Search Engine Optimization (SEO)",
      tagline: "Get found on Google by customers actively searching for your services.",
      timeline: "Ongoing 90-day sprints",
      deliverables: [
        "Comprehensive Technical SEO Audit",
        "High-Intent Keyword Architecture",
        "Rich Snippet Schema Markup & Metadata",
        "Google Search Console & Analytics Tracking"
      ],
      idealFor: "Brands wanting sustainable organic traffic and consistent inbound inquiries."
    }
  };

  const activeScope = serviceEstimates[selectedService];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center text-center px-6 sm:px-12 md:px-24 overflow-hidden" aria-labelledby="hero-title">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 bg-obsidian">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="metadata"
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-obsidian" aria-hidden="true" />
        </div>

        <div className="max-w-5xl z-10 px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-primary text-xs font-bold uppercase tracking-[0.3em] mb-6 font-display">
              <Sparkles size={14} aria-hidden="true" />
              <span>Digital Agency • Design • Development • SEO</span>
            </div>
            
            <h1 id="hero-title" className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display text-white leading-[0.95] uppercase tracking-tighter mb-8">
              WE BUILD WEBSITES <br />
              <span className="gradient-text">THAT GROW</span> <br />
              YOUR BUSINESS
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-medium leading-relaxed font-display">
              Stop losing customers to outdated templates and slow load times. We craft bespoke <strong>Website Design</strong>, high-performance <strong>Web Development</strong>, and rank-boosting <strong>SEO</strong> to drive real revenue.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="btn-primary text-base px-9 py-4 inline-flex items-center gap-2"
                aria-label="Start your project with Creative Realm"
              >
                <span>GET A FREE PROPOSAL</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link 
                href="/portfolio" 
                className="btn-secondary text-base px-8 py-4"
                aria-label="Explore our work and verified case studies"
              >
                VIEW CASE STUDIES
              </Link>
            </div>

            {/* Quick Trust Highlights */}
            <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="text-violet-primary w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs text-gray-300 font-display font-medium">100% Custom Code</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Zap className="text-violet-primary w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs text-gray-300 font-display font-medium">Sub-Second Load Times</span>
              </div>
              <div className="flex items-center gap-2.5">
                <TrendingUp className="text-violet-primary w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs text-gray-300 font-display font-medium">Google SEO Optimized</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="text-violet-primary w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs text-gray-300 font-display font-medium">Guaranteed Milestones</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Purpose Section */}
      <section className="py-24 px-6 sm:px-12 md:px-24 bg-black/40 backdrop-blur-3xl border-y border-white/5" aria-labelledby="philosophy-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
                Why Work With Us
              </span>
              <h2 id="philosophy-heading" className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white uppercase tracking-tighter mb-6 leading-tight">
                Most Websites Look Pretty. <br />
                <span className="text-violet-primary">Ours Actually Sell.</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed font-display">
                A generic website with slow code and poor search ranking is an expense, not an investment. We combine deliberate user interface design with modern web engineering and targeted SEO so your website becomes your #1 salesperson.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
                <div>
                  <div className="text-3xl sm:text-4xl font-black font-display gradient-text mb-1">98+</div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 font-bold font-display">PageSpeed Standard</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black font-display gradient-text mb-1">100%</div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 font-bold font-display">Bespoke Design</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black font-display gradient-text mb-1">+185%</div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 font-bold font-display">Avg. Organic Lift</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card p-8 aspect-square relative flex flex-col justify-end overflow-hidden group rounded-3xl border border-white/15">
                <Image 
                  src="/clean-design.png" 
                  alt="Showcase of clean, responsive web design mockup built for conversions" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy"
                />
                <div className="relative z-10 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider font-display">Tested For High Conversions</span>
                  </div>
                  <h3 className="text-xl font-black font-display text-white uppercase mb-1">Intentional Architecture</h3>
                  <p className="text-gray-300 text-xs font-display">No useless bloated plugins. Only lightning-fast, purpose-built code.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Core Pillars (What We Do) */}
      <section className="py-28 px-6 sm:px-12 md:px-24" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.4em] mb-3 block">
              Core Capabilities
            </span>
            <h2 id="services-heading" className="text-3xl md:text-5xl font-black font-display text-white uppercase tracking-tighter mb-4">
              Three Pillars to Grow Your Brand Online
            </h2>
            <p className="text-gray-400 font-display text-base max-w-xl mx-auto">
              Everything you need to attract, convince, and convert qualified clients through search and digital experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Website Design",
                icon: Palette,
                highlight: "UI/UX & Brand Story",
                desc: "We design websites that feel intuitive, reflect your prestige, and guide visitors straight to your contact or checkout button.",
                features: ["Figma Wireframes & Prototypes", "Mobile-First UX Architecture", "Conversion-Focused Visuals", "Brand Consistency & Assets"]
              },
              {
                title: "Website Development",
                icon: Code2,
                highlight: "Fast, Custom Code",
                desc: "We build with Next.js, eliminating clumsy page builders. Your site loads in milliseconds, stays secure, and never breaks.",
                features: ["Next.js & React Engineering", "Sub-Second Load Times", "Seamless Responsive Display", "Full Technical Accessibility"]
              },
              {
                title: "SEO & Growth",
                icon: Search,
                highlight: "Google Visibility",
                desc: "We structure your site so Google ranks it for the exact search terms your prospective buyers are typing every single day.",
                features: ["Keyword Architecture", "On-Page Metadata & Schema", "Search Console Indexing", "Local & Regional Ranking"]
              }
            ].map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-10 flex flex-col justify-between rounded-3xl border border-white/10 group hover:border-violet-500/40"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-primary mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <span className="text-violet-primary text-xs font-bold uppercase tracking-wider font-display block mb-1">
                    {feature.highlight}
                  </span>
                  <h3 className="text-2xl font-black font-display text-white uppercase mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-display mb-6">
                    {feature.desc}
                  </p>
                  
                  <ul className="space-y-2.5 pt-4 border-t border-white/10 mb-8">
                    {feature.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-xs text-gray-300 font-display">
                        <CheckCircle2 size={14} className="text-violet-primary flex-shrink-0" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href="/services" 
                  className="text-xs font-bold font-display uppercase tracking-widest text-violet-primary flex items-center gap-2 group/btn hover:text-white transition-colors"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Project Scope & Turnaround Preview */}
      <section className="py-24 px-6 sm:px-12 md:px-24 bg-surface-container-low/40 border-y border-white/10 cv-auto" aria-labelledby="scope-estimator-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.4em] mb-2 block">
              Transparent Execution
            </span>
            <h2 id="scope-estimator-heading" className="text-3xl md:text-5xl font-black font-display text-white uppercase tracking-tighter mb-4">
              What Does Your Project Need?
            </h2>
            <p className="text-gray-400 font-display text-sm sm:text-base max-w-xl mx-auto">
              Select a service below to see exact deliverables and realistic project timelines with zero guesswork.
            </p>
          </div>

          <div className="flex justify-center gap-2 sm:gap-4 mb-10 flex-wrap" role="tablist" aria-label="Select service to preview scope">
            {[
              { id: "design", label: "1. Website Design" },
              { id: "dev", label: "2. Web Development" },
              { id: "seo", label: "3. SEO Growth" }
            ].map(tab => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={selectedService === tab.id}
                onClick={() => setSelectedService(tab.id as "design" | "dev" | "seo")}
                className={`px-5 py-2.5 rounded-full font-display text-xs uppercase tracking-wider font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary ${
                  selectedService === tab.id
                    ? "bg-violet-primary text-black shadow-lg shadow-violet-primary/20"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/15">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs uppercase tracking-widest text-violet-primary font-bold block mb-2 font-display">
                  Service Overview
                </span>
                <h3 className="text-3xl font-black font-display text-white uppercase tracking-tight mb-3">
                  {activeScope.title}
                </h3>
                <p className="text-gray-300 text-base font-display mb-6">
                  {activeScope.tagline}
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                  <div className="text-xs uppercase font-bold text-gray-400 mb-1 font-display">Target Client Fit</div>
                  <div className="text-sm text-gray-200 font-display">{activeScope.idealFor}</div>
                </div>
                
                <h4 className="text-white text-xs font-bold uppercase tracking-wider font-display mb-3">Included Deliverables:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeScope.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-300 font-display">
                      <CheckCircle2 size={15} className="text-violet-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 p-8 rounded-2xl bg-black/50 border border-white/10 text-center flex flex-col justify-between h-full">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 font-display block mb-1">
                    Typical Delivery Time
                  </span>
                  <div className="text-3xl sm:text-4xl font-black font-display gradient-text mb-4">
                    {activeScope.timeline}
                  </div>
                  <p className="text-xs text-gray-400 font-display mb-6">
                    Structured with clear milestone reviews. You will see and test your website every single week.
                  </p>
                </div>
                <Link 
                  href="/contact" 
                  className="btn-primary w-full text-xs uppercase tracking-widest py-3.5"
                >
                  Book This Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Performance Benchmarks (Replacing generic filler stats) */}
      <section className="py-24 px-6 sm:px-12 md:px-24 bg-violet-600/5 overflow-hidden relative cv-auto" aria-label="Our measurable agency standards">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.4em] mb-2 block">
              Verifiable Quality
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white uppercase tracking-tighter">
              Standards We Commit To On Every Project
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Google PageSpeed Score", value: "98+", desc: "Zero bloat, sub-second rendering" },
              { label: "Avg. Organic Search Lift", value: "+185%", desc: "Measured across 6-month audits" },
              { label: "On-Time Milestone Rate", value: "100%", desc: "Direct project manager communication" },
              { label: "Mobile-First Accessibility", value: "WCAG", desc: "Compliant for all users & screens" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl text-center border border-white/10"
              >
                <div className="text-5xl sm:text-6xl font-black font-display gradient-text mb-3 tracking-tighter">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-white font-bold mb-1.5 font-display">{stat.label}</div>
                <div className="text-xs text-gray-400 font-display">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none" aria-hidden="true">
          <div className="w-[800px] h-[800px] bg-violet-500/20 rounded-full blur-[150px] mx-auto" />
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="py-28 px-6 sm:px-12 md:px-24 cv-auto" aria-labelledby="portfolio-teaser-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Proven Work</span>
              <h2 id="portfolio-teaser-heading" className="text-4xl md:text-6xl font-black font-display text-white uppercase tracking-tighter leading-none">
                Featured <br /> Case Studies
              </h2>
            </div>
            <Link 
              href="/portfolio" 
              className="group flex items-center gap-3 text-white font-bold font-display uppercase tracking-widest text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary rounded-full px-3 py-2 border border-white/10 hover:border-violet-primary transition-all"
              aria-label="View all portfolio projects"
            >
              <span>Explore All Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                t: "Lumina Studio", 
                c: "Website Design", 
                result: "+42% Mobile Conversion Rate",
                img: "/projects/ecommerce.png", 
                slug: "lumina-e-commerce" 
              },
              { 
                t: "Vantage Analytics", 
                c: "Website Development", 
                result: "99/100 Google PageSpeed Score",
                img: "/projects/saas.png", 
                slug: "vantage-saas" 
              }
            ].map((p) => (
              <Link 
                href={`/portfolio/${p.slug}`}
                key={p.t}
                aria-label={`View case study for ${p.t}`}
                className="group block interactive rounded-[2rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-[2rem] mb-6 relative bg-surface-container shadow-xl">
                  <Image 
                    src={p.img} 
                    alt={`Preview of ${p.t} website`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-violet-primary font-display text-xs font-bold uppercase tracking-wider">
                    {p.c}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm" aria-hidden="true">
                    <span className="px-6 py-2.5 bg-white text-black font-black font-display text-xs uppercase tracking-widest rounded-full">Read Case Study</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black font-display text-white uppercase group-hover:text-violet-primary transition-colors">{p.t}</h3>
                    <p className="text-emerald-400 font-display text-xs font-bold uppercase tracking-wider mt-1">{p.result}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight size={16} aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Client Testimonials */}
      <section className="py-28 px-6 sm:px-12 md:px-24 bg-black/20 cv-auto" aria-labelledby="client-stories-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.4em] mb-3 block">Real Experiences</span>
            <h2 id="client-stories-heading" className="text-3xl md:text-5xl font-black font-display text-white uppercase tracking-tighter">
              What Business Owners Say
            </h2>
            <p className="text-gray-400 font-display text-sm max-w-lg mx-auto mt-2">
              Hear directly from clients who trusted us with their redesign, development, and SEO campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "David Sterling", 
                role: "Founder, Luxury Retail Store", 
                service: "Website Design & Dev",
                text: "Creative Realm redesigned our online shop from the ground up. Mobile conversion went up by 28% in the first two months, and checkout friction disappeared entirely." 
              },
              { 
                name: "Claire Vance", 
                role: "Managing Director, B2B Advisory", 
                service: "SEO & Growth",
                text: "We used to be completely invisible on Google. With Creative Realm's technical SEO overhaul, we now rank in the top 3 for our most valuable search terms." 
              },
              { 
                name: "Marcus Thornton", 
                role: "CEO, Tech Analytics Platform", 
                service: "Custom Next.js Engineering",
                text: "Zero technical jargon, seamless weekly updates, and a site that loads in under a second worldwide. It is rare to find an agency that delivers on both design and code." 
              }
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-10 relative rounded-3xl flex flex-col justify-between border border-white/10"
              >
                <div>
                  <div className="text-xs uppercase tracking-wider text-violet-primary font-bold font-display mb-4">
                    {t.service}
                  </div>
                  <p className="text-gray-200 italic mb-8 relative z-10 font-display text-sm leading-relaxed">
                    "{t.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-violet-600/30 border border-violet-500/30 flex items-center justify-center font-bold font-display text-violet-primary text-sm" aria-hidden="true">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-bold font-display uppercase text-xs">{t.name}</div>
                    <div className="text-gray-400 text-[11px] font-display">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Actionable CTA */}
      <section className="py-36 px-6 sm:px-12 md:px-24 text-center relative overflow-hidden cv-auto" aria-labelledby="cta-heading">
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
            Start the Conversation
          </span>
          <h2 id="cta-heading" className="text-4xl sm:text-6xl md:text-7xl font-black font-display text-white uppercase tracking-tighter mb-8 leading-none">
            Ready to Build a <br /> <span className="gradient-text">Higher-Performing</span> <br /> Website?
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-10 max-w-xl mx-auto font-display">
            Contact us today for a free 20-minute Website & SEO consultation. We'll audit your current online footprint and show you where you can win.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="btn-primary text-base px-10 py-4"
              aria-label="Request your free consultation"
            >
              REQUEST A FREE STRATEGY CALL
            </Link>
            <Link 
              href="/services" 
              className="btn-secondary text-base px-8 py-4"
              aria-label="View our packages and pricing"
            >
              EXPLORE OUR PACKAGES
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-500/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
      </section>
    </div>
  );
}
