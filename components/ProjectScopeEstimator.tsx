"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ProjectScopeEstimator() {
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
                prefetch={false}
                className="btn-primary w-full text-xs uppercase tracking-widest py-3.5"
              >
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
