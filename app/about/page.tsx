"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { 
  Palette, 
  Code2, 
  Search, 
  ShieldCheck, 
  CheckCircle2, 
  Target, 
  Layers, 
  Zap,
  ArrowRight
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-24 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Story */}
        <header className="mb-28 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              About Creative Realm
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display text-white uppercase tracking-tighter leading-none mb-6">
              Websites Crafted to <br /> <span className="gradient-text">Build Authority</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg font-display leading-relaxed mb-6">
              Creative Realm was founded with a direct mission: help ambitious businesses stand out with custom websites that load instantly, captivate their ideal audience, and rank on Google.
            </p>
            <p className="text-gray-400 text-sm sm:text-base font-display leading-relaxed mb-8">
              We eliminated the traditional agency bloat. You work directly with senior designers, engineers, and SEO specialists who care about your project outcomes as much as you do.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-xs uppercase tracking-widest px-8 py-3.5">
                Work With Us
              </Link>
              <Link href="/portfolio" className="btn-secondary text-xs uppercase tracking-widest px-8 py-3.5">
                View Our Work
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:pl-8">
            <div className="glass-card aspect-[4/5] relative rounded-[32px] overflow-hidden bg-surface-container border border-white/15 shadow-2xl">
              <Image 
                src="/about-hero.png" 
                alt="Creative Realm studio workspace and design collaboration" 
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                <div className="text-violet-primary font-display font-bold text-xs uppercase tracking-wider mb-1">Our Standard</div>
                <div className="text-white font-display text-sm">Every line of code and pixel of design is crafted purposefully for your business.</div>
              </div>
            </div>
          </div>
        </header>

        {/* 3 Core Agency Principles */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-y border-white/10 mb-28 cv-auto" aria-label="Core Agency Values">
          {[
            {
              title: "Deliberate Design",
              desc: "We don't use cookie-cutter templates. Every layout, color, and interaction is tailored to reflect your credibility and guide visitors toward taking action."
            },
            {
              title: "Clean Modern Code",
              desc: "We build with Next.js and clean HTML/CSS. This guarantees sub-second page loads, effortless responsiveness, and reliable stability without bloated plugins."
            },
            {
              title: "Proven Search Visibility",
              desc: "From technical schema to keyword hierarchy, we ensure your site is engineered to rank on Google and attract high-intent organic visitors."
            }
          ].map((principle) => (
            <div key={principle.title} className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-display font-black text-xl uppercase mb-3 tracking-tight">
                {principle.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed font-display">
                {principle.desc}
              </p>
            </div>
          ))}
        </section>

        {/* Transparent Process */}
        <section className="mb-32 cv-auto" aria-labelledby="process-heading">
          <div className="text-center mb-16">
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.4em] mb-2 block">
              Execution Roadmap
            </span>
            <h2 id="process-heading" className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tighter">
              How We Work Together
            </h2>
            <p className="text-gray-400 font-display text-sm sm:text-base max-w-xl mx-auto mt-2">
              Predictable milestones, weekly video updates, and zero unexpected surprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "01", t: "DISCOVERY", d: "We dissect your business goals, target clients, and competitor landscape to build an actionable blueprint." },
              { n: "02", t: "UI/UX DESIGN", d: "We design complete interactive Figma prototypes. You test every screen and provide feedback before code starts." },
              { n: "03", t: "NEXT.JS BUILD", d: "We develop your website with clean code, testing rigorously across mobile, tablet, and desktop devices." },
              { n: "04", t: "SEO & LAUNCH", d: "We run Core Web Vitals checks, set up Google Search Console, and launch with full security and analytics in place." }
            ].map((step, i) => (
              <motion.div 
                key={step.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 group rounded-2xl border border-white/10"
              >
                <div className="text-4xl font-black font-display text-violet-primary/50 group-hover:text-violet-primary transition-colors mb-4" aria-hidden="true">{step.n}</div>
                <h3 className="text-white font-black font-display text-base uppercase mb-2 tracking-tight">{step.t}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-display">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Agency Disciplines (Authentic & Professional) */}
        <section className="mb-32 cv-auto" aria-labelledby="team-heading">
          <div className="text-center mb-16">
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.4em] mb-2 block">
              Core Disciplines
            </span>
            <h2 id="team-heading" className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tighter">
              Dedicated Specialists On Every Project
            </h2>
            <p className="text-gray-400 font-display text-sm sm:text-base max-w-xl mx-auto mt-2">
              Every client project is handled directly by dedicated leads across design, engineering, and SEO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: "UI/UX & Web Design",
                lead: "Creative Direction",
                icon: Palette,
                focus: "Figma Prototypes • Brand Systems • Conversion Journey",
                desc: "Focused on crafting high-end aesthetics that communicate your brand value and make browsing smooth and frictionless."
              },
              {
                role: "Web Engineering",
                lead: "Technical Development",
                icon: Code2,
                focus: "Next.js • Sub-Second Load Speeds • Accessible Code",
                desc: "Translates Figma designs into lightweight, pixel-perfect code engineered for top performance on all mobile and desktop screens."
              },
              {
                role: "SEO & Growth",
                lead: "Search Engine Strategy",
                icon: Search,
                focus: "Technical SEO • Keyword Hierarchy • Google Indexing",
                desc: "Ensures your website structure is fully optimized so search engines index your pages and drive qualified, organic prospective clients."
              }
            ].map((discipline, i) => (
              <motion.div
                key={discipline.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-violet-500/40 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-primary mb-6">
                    <discipline.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-violet-primary font-bold font-display block mb-1">
                    {discipline.lead}
                  </span>
                  <h3 className="text-2xl font-black font-display text-white uppercase mb-3 tracking-tight">
                    {discipline.role}
                  </h3>
                  <p className="text-gray-300 text-sm font-display leading-relaxed mb-6">
                    {discipline.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 font-display font-medium">
                    {discipline.focus}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Agency Commitments & Guarantees */}
        <section className="glass-card p-8 sm:p-14 rounded-3xl border border-violet-500/20 bg-violet-600/5 mb-32 cv-auto" aria-labelledby="commitments-heading">
          <div className="max-w-4xl mx-auto text-center">
            <ShieldCheck className="w-12 h-12 text-violet-primary mx-auto mb-4" aria-hidden="true" />
            <h2 id="commitments-heading" className="text-2xl sm:text-4xl font-black font-display text-white uppercase tracking-tight mb-4">
              Our 4 Agency Commitments to You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mt-10">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-white/10">
                <CheckCircle2 className="text-violet-primary w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-white font-bold font-display text-sm uppercase">100% Code & Asset Ownership</h3>
                  <p className="text-gray-400 text-xs font-display mt-1">You own all source code, Figma assets, and credentials upon project completion.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-white/10">
                <CheckCircle2 className="text-violet-primary w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-white font-bold font-display text-sm uppercase">98+ PageSpeed Benchmark</h3>
                  <p className="text-gray-400 text-xs font-display mt-1">We don't launch sites with slow load times. Every build passes strict speed audits.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-white/10">
                <CheckCircle2 className="text-violet-primary w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-white font-bold font-display text-sm uppercase">No Hidden Monthly Fees</h3>
                  <p className="text-gray-400 text-xs font-display mt-1">Clear fixed scopes and transparent quotes. No surprise invoices or hostage fees.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-white/10">
                <CheckCircle2 className="text-violet-primary w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-white font-bold font-display text-sm uppercase">Direct Communication</h3>
                  <p className="text-gray-400 text-xs font-display mt-1">Speak directly with the team designing and coding your project. No confusing bureaucracy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 cv-auto">
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight mb-6">
            Let's Discuss Your Next Website
          </h2>
          <p className="text-gray-300 text-base max-w-lg mx-auto font-display mb-8">
            Tell us about your project goals. We will provide an honest, no-jargon roadmap to get you there.
          </p>
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            START YOUR PROJECT
          </Link>
        </section>
      </div>
    </div>
  );
}
