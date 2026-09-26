"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { projects } from "@/lib/projects";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return (
      <div className="py-32 text-center text-white">
        <h1 className="text-3xl font-bold mb-4 font-display">Project Not Found</h1>
        <Link href="/portfolio" className="text-violet-primary hover:underline font-display text-sm">
          Return to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center gap-2 text-violet-primary hover:text-white transition-colors mb-12 font-display text-sm font-bold uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary rounded-lg px-2 py-1"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Portfolio
        </Link>
        
        <header className="mb-24">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black font-display text-white uppercase tracking-tighter mb-8 leading-none">
            {project.title}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2 font-display">Client</div>
              <div className="text-white font-display font-medium italic">Premium Client</div>
            </div>
            <div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2 font-display">Year</div>
              <div className="text-white font-display font-medium">2024</div>
            </div>
            <div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2 font-display">Services</div>
              <div className="text-white font-display font-medium">{project.category}</div>
            </div>
          </div>
        </header>

        <div className="glass-card aspect-video rounded-3xl overflow-hidden mb-24 relative bg-surface-container">
          <Image 
            src={project.image} 
            alt={`Detailed preview of ${project.title}`} 
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-2 space-y-12">
            <section aria-labelledby="goal-heading">
              <h2 id="goal-heading" className="text-3xl font-black font-display text-white uppercase mb-6 tracking-tight italic border-l-4 border-violet-600 pl-6">The Goal</h2>
              <p className="text-gray-300 text-lg font-display leading-relaxed">
                The objective was simple: create a website that not only looks great but also works perfectly for the user. We focused on making the experience smooth and easy to understand for every visitor.
              </p>
            </section>
            <section aria-labelledby="work-heading">
              <h2 id="work-heading" className="text-3xl font-black font-display text-white uppercase mb-6 tracking-tight italic border-l-4 border-violet-600 pl-6">What We Did</h2>
              <p className="text-gray-300 text-lg font-display leading-relaxed">
                We used a clean design and fast code to build a site that loads quickly and is easy to navigate. Every detail was planned to help the client reach their business goals through a better online presence.
              </p>
            </section>
          </div>
          
          <aside className="space-y-12" aria-label="Project statistics">
            <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-white font-display font-black text-xl uppercase mb-6 italic tracking-tight">Success Stats</h3>
                <ul className="space-y-6">
                    <li>
                        <div className="text-3xl font-black font-display text-violet-primary mb-1">50%</div>
                        <div className="text-gray-400 text-xs font-bold uppercase tracking-widest font-display">Faster Load Time</div>
                    </li>
                    <li>
                        <div className="text-3xl font-black font-display text-violet-primary mb-1">2x</div>
                        <div className="text-gray-400 text-xs font-bold uppercase tracking-widest font-display">More Conversions</div>
                    </li>
                </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
