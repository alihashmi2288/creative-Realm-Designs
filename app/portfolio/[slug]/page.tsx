"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";

import { projects } from "@/lib/projects";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return (
      <div className="py-32 text-center text-white">
        <h1 className="text-3xl font-bold mb-4 font-display">Case Study Not Found</h1>
        <Link href="/portfolio" className="text-violet-primary hover:underline font-display text-sm">
          Return to All Work
        </Link>
      </div>
    );
  }

  return (
    <div className="py-24 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center gap-2 text-violet-primary hover:text-white transition-colors mb-12 font-display text-sm font-bold uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary rounded-lg px-2 py-1"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Portfolio
        </Link>
        
        <header className="mb-20">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-primary text-xs font-bold uppercase tracking-widest font-display">
              {project.category}
            </span>
            <span className="text-gray-400 text-xs font-display uppercase tracking-wider">
              {project.clientIndustry}
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black font-display text-white uppercase tracking-tighter mb-8 leading-none">
            {project.title}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-display max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* Hero Preview */}
        <div className="glass-card aspect-video rounded-3xl overflow-hidden mb-20 relative bg-surface-container shadow-2xl">
          <Image 
            src={project.image} 
            alt={`Detailed case study preview for ${project.title}`} 
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover" 
          />
        </div>

        {/* Case Study Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8 space-y-16">
            <section aria-labelledby="challenge-heading">
              <span className="text-xs uppercase tracking-widest text-violet-primary font-bold block mb-2 font-display">01 / The Challenge</span>
              <h2 id="challenge-heading" className="text-2xl sm:text-3xl font-black font-display text-white uppercase mb-4 tracking-tight">
                Identifying the Growth Bottleneck
              </h2>
              <p className="text-gray-300 text-base md:text-lg font-display leading-relaxed">
                {project.challenge}
              </p>
            </section>

            <section aria-labelledby="solution-heading">
              <span className="text-xs uppercase tracking-widest text-violet-primary font-bold block mb-2 font-display">02 / Strategic Solution</span>
              <h2 id="solution-heading" className="text-2xl sm:text-3xl font-black font-display text-white uppercase mb-4 tracking-tight">
                Design & Engineering Implementation
              </h2>
              <p className="text-gray-300 text-base md:text-lg font-display leading-relaxed">
                {project.solution}
              </p>
            </section>

            <section aria-labelledby="deliverables-heading">
              <span className="text-xs uppercase tracking-widest text-violet-primary font-bold block mb-2 font-display">03 / Scope Delivered</span>
              <h2 id="deliverables-heading" className="text-2xl sm:text-3xl font-black font-display text-white uppercase mb-6 tracking-tight">
                Delivered Capabilities
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 font-display text-sm text-gray-200">
                    <CheckCircle2 className="text-violet-primary w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          
          <aside className="lg:col-span-4 space-y-8" aria-label="Project statistics & outcomes">
            <div className="glass-card p-8 rounded-3xl border border-violet-500/20 bg-violet-600/5">
              <h3 className="text-white font-display font-black text-xl uppercase mb-6 tracking-tight">
                Verified Outcomes
              </h3>
              <ul className="space-y-6">
                {project.metrics.map((m) => (
                  <li key={m.label} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <div className="text-4xl font-black font-display gradient-text mb-1">{m.value}</div>
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest font-display">{m.label}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8 rounded-3xl text-center space-y-6">
              <h4 className="text-white font-bold font-display text-lg uppercase tracking-tight">
                Need Similar Results for Your Business?
              </h4>
              <p className="text-gray-300 text-sm font-display leading-relaxed">
                Let's discuss how we can redesign, build, or optimize your website for measurable organic growth.
              </p>
              <Link 
                href="/contact" 
                className="btn-primary w-full text-xs uppercase tracking-widest py-3.5 inline-flex items-center justify-center gap-2"
              >
                <span>Request Project Proposal</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
