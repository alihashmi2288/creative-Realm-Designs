"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";

import { projects, categories } from "@/lib/projects";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Our Work</span>
              <h1 className="text-5xl md:text-8xl font-black font-display text-white uppercase tracking-tighter leading-[0.9]">
                Selected <br /> <span className="gradient-text">Projects</span>
              </h1>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-4" role="tablist" aria-label="Filter projects by category">
              {categories.map(cat => (
                <button 
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  aria-controls="portfolio-grid"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 border-b-2 transition-all font-bold font-display text-xs uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary ${
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

        <div id="portfolio-grid" role="region" aria-label="Portfolio projects" className="grid grid-cols-1 gap-32">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 overflow-hidden rounded-[2.5rem] relative aspect-[16/10] bg-surface-container">
                    <Image 
                      src={project.image} 
                      alt={`Showcase mockup for ${project.title} - ${project.category}`}
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
                        <ArrowUpRight size={40} />
                      </div>
                    </Link>
                  </div>
                  
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.2em]">{project.category}</span>
                      <div className="h-[1px] flex-grow bg-white/10" aria-hidden="true" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black font-display text-white uppercase tracking-tighter mb-6 group-hover:text-violet-primary transition-colors">
                      <Link href={`/portfolio/${project.slug}`} className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary rounded-lg">
                        {project.title}
                      </Link>
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed font-display">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-display text-gray-300 uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/portfolio/${project.slug}`} 
                      aria-label={`View full case study for ${project.title}`}
                      className="inline-flex items-center gap-3 text-white font-black font-display uppercase tracking-widest text-sm group/link interactive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary rounded-full px-2 py-1"
                    >
                      View Case Study
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
        
        {/* Results / Impact Section */}
        <section className="mt-48 py-24 border-y border-white/5" aria-label="Portfolio performance statistics">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                {[
                  { label: "Conversion Increase", value: "45%" },
                  { label: "User Engagement", value: "2.5x" },
                  { label: "Page Speed Score", value: "99" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-5xl font-black font-display gradient-text mb-4">{stat.value}</div>
                    <p className="text-gray-400 font-display text-xs uppercase tracking-widest font-bold">{stat.label}</p>
                  </div>
                ))}
            </div>
        </section>
        
        {/* Contact CTA */}
        <section className="mt-48 py-32 text-center relative overflow-hidden rounded-[3rem] bg-violet-600/5" aria-labelledby="portfolio-cta-heading">
            <div className="relative z-10">
              <h2 id="portfolio-cta-heading" className="text-4xl md:text-7xl font-black font-display text-white uppercase tracking-tighter mb-12">
                Ready to start <br /> your <span className="gradient-text">project?</span>
              </h2>
              <Link 
                href="/contact" 
                className="btn-primary transform hover:scale-105 transition-transform text-lg px-12 py-4 inline-block interactive"
                aria-label="Contact Creative Realm to start your project"
              >
                LET'S TALK
              </Link>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
        </section>
      </div>
    </div>
  );
}
