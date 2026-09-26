"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowUpRight, CheckCircle2 } from "lucide-react";

import { projects, categories, type Project } from "@/lib/projects";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="py-24 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Our Proven Work</span>
              <h1 className="text-5xl md:text-8xl font-black font-display text-white uppercase tracking-tighter leading-[0.9]">
                Selected <br /> <span className="gradient-text">Case Studies</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg font-display mt-6 max-w-xl">
                Explore real results across bespoke website design, clean engineering, and targeted organic SEO campaigns.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3" role="tablist" aria-label="Filter projects by category">
              {categories.map(cat => (
                <button 
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  aria-controls="portfolio-grid"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 border-b-2 transition-all font-bold font-display text-xs uppercase tracking-widest cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary ${
                    activeCategory === cat 
                    ? "border-violet-primary text-white" 
                    : "border-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </header>

        <div id="portfolio-grid" role="region" aria-label="Portfolio projects" className="grid grid-cols-1 gap-28">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 overflow-hidden rounded-[2.5rem] relative aspect-[16/10] bg-surface-container shadow-xl">
                    <Image 
                      src={project.image} 
                      alt={`Mockup and visual showcase for ${project.title} - ${project.category}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      loading="lazy"
                    />
                    <Link 
                      href={`/portfolio/${project.slug}`}
                      aria-label={`Explore ${project.title} project`}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-primary rounded-[2.5rem]"
                    >
                      <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500" aria-hidden="true">
                        <ArrowUpRight size={38} />
                      </div>
                    </Link>
                  </div>
                  
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.2em]">{project.category}</span>
                      <span className="text-gray-500 text-xs">•</span>
                      <span className="text-gray-400 font-display text-xs uppercase tracking-wider">{project.clientIndustry}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-black font-display text-white uppercase tracking-tighter mb-4 group-hover:text-violet-primary transition-colors">
                      <Link href={`/portfolio/${project.slug}`} className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary rounded-lg">
                        {project.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed font-display">
                      {project.description}
                    </p>

                    {/* Key Outcome Highlights */}
                    <div className="grid grid-cols-2 gap-3 mb-8 p-4 rounded-2xl bg-white/5 border border-white/10">
                      {project.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <div className="text-2xl font-black font-display text-violet-primary">{m.value}</div>
                          <div className="text-gray-400 text-[11px] font-bold uppercase tracking-wider font-display">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3.5 py-1 rounded-full border border-white/10 text-xs font-display text-gray-300 uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/portfolio/${project.slug}`} 
                      aria-label={`View full case study for ${project.title}`}
                      className="inline-flex items-center gap-3 text-white font-black font-display uppercase tracking-widest text-sm group/link interactive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary rounded-full px-2 py-1"
                    >
                      <span>Read Case Study</span>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/link:bg-white group-hover/link:text-black transition-all">
                        <ExternalLink size={16} aria-hidden="true" />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Results / Verified Agency Benchmarks */}
        <section className="mt-40 py-20 border-y border-white/10 cv-auto" aria-label="Agency Performance Standards">
          <div className="text-center mb-12">
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.4em] block mb-2">Our Standard</span>
            <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-white">
              Every Website We Build Meets These Criteria
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { label: "Google PageSpeed Core Metric", value: "98+", sub: "Sub-second load times on mobile" },
              { label: "Average Organic Search Lift", value: "+185%", sub: "Verified across 6-month client audits" },
              { label: "On-Time Launch Guarantee", value: "100%", sub: "Clear milestones with weekly demo check-ins" }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl">
                <div className="text-5xl font-black font-display gradient-text mb-3">{stat.value}</div>
                <p className="text-white font-display text-sm uppercase tracking-wider font-bold mb-1">{stat.label}</p>
                <p className="text-gray-400 text-xs font-display">{stat.sub}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="mt-36 py-28 text-center relative overflow-hidden rounded-[3rem] bg-violet-600/5 border border-white/10 cv-auto" aria-labelledby="portfolio-cta-heading">
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h2 id="portfolio-cta-heading" className="text-4xl md:text-6xl font-black font-display text-white uppercase tracking-tighter mb-6">
              Ready to Upgrade <br /> Your <span className="gradient-text">Digital Presence?</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg font-display mb-10">
              Get an honest assessment of your current website, design gaps, and Google SEO opportunities.
            </p>
            <Link 
              href="/contact" 
              className="btn-primary text-base px-10 py-4"
              aria-label="Request a consultation with Creative Realm"
            >
              SCHEDULE FREE STRATEGY CALL
            </Link>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
        </section>
      </div>
    </div>
  );
}
