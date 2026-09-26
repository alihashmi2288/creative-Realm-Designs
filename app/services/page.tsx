"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { 
  Palette, 
  Code2, 
  Search, 
  Zap, 
  Smartphone, 
  Wrench,
  CheckCircle2,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

const services = [
  {
    title: "Website Design",
    subtitle: "UI/UX & Brand Presence",
    desc: "We design custom websites from scratch in Figma. Every layout is crafted to match your brand, engage your visitors, and guide them effortlessly toward contacting you.",
    icon: Palette,
    color: "from-purple-500 to-indigo-600",
    deliverables: ["Custom Figma prototypes", "Mobile-first layouts", "User journey mapping", "Design system & assets"]
  },
  {
    title: "Web Development",
    subtitle: "Fast, Clean Next.js Code",
    desc: "No slow plugins or heavy themes. We hand-code high-performance websites using modern Next.js and React, giving your visitors an instant, smooth experience.",
    icon: Code2,
    color: "from-blue-500 to-cyan-600",
    deliverables: ["Sub-second page speeds", "Clean semantic HTML & React", "Cross-browser perfection", "WCAG accessibility standards"]
  },
  {
    title: "SEO Services",
    subtitle: "Google Ranking & Traffic",
    desc: "A beautiful website is useless if no one finds it. We optimize your structure, speed, and content to rank on Google for the terms your customers actually search.",
    icon: Search,
    color: "from-emerald-500 to-teal-600",
    deliverables: ["Technical SEO foundation", "Keyword & metadata optimization", "Rich snippet schema markup", "Search Console & indexing"]
  },
  {
    title: "Mobile Optimization",
    subtitle: "Thumb-Friendly Usability",
    desc: "Over 65% of your visitors browse on a phone. We ensure every button, form, and page feels natural, responsive, and easy to use on any screen size.",
    icon: Smartphone,
    color: "from-orange-500 to-amber-600",
    deliverables: ["Responsive fluid layouts", "Touch-friendly ergonomics", "Compressed modern media", "Mobile speed optimization"]
  },
  {
    title: "Conversion Optimization",
    subtitle: "Turn Clicks Into Calls",
    desc: "We analyze visitor behavior to remove friction. By optimizing call-to-actions, contact forms, and layout hierarchy, we help you get more inquiries from the same traffic.",
    icon: Zap,
    color: "from-pink-500 to-rose-600",
    deliverables: ["High-converting page layouts", "Streamlined inquiry forms", "Clear value propositions", "Analytics event tracking"]
  },
  {
    title: "Speed & Maintenance",
    subtitle: "Care & Ongoing Support",
    desc: "Keep your website healthy, secure, and fast month after month. We take care of software updates, Core Web Vitals checks, and ongoing content changes.",
    icon: Wrench,
    color: "from-violet-500 to-purple-600",
    deliverables: ["Continuous speed monitoring", "Security & backup audits", "Content updates & fixes", "Dedicated agency support"]
  }
];

export default function ServicesPage() {
  return (
    <div className="py-24 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.4em] mb-3 block">
              What We Offer
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display text-white uppercase tracking-tighter mb-6">
              Services Designed to <span className="gradient-text">Grow Your Business</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-display">
              We focus on the three things that matter most for your online success: <strong>Design that impresses</strong>, <strong>Code that loads fast</strong>, and <strong>SEO that brings customers</strong>.
            </p>
          </motion.div>
        </header>

        {/* Services Grid */}
        <section aria-labelledby="services-list-heading" className="mb-32">
          <h2 id="services-list-heading" className="sr-only">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-8 sm:p-10 group relative flex flex-col justify-between rounded-3xl border border-white/10 hover:border-violet-500/40"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-105 transition-transform`}>
                    <service.icon className="text-white w-7 h-7" aria-hidden="true" />
                  </div>
                  <span className="text-violet-primary text-xs font-bold uppercase tracking-wider font-display block mb-1">
                    {service.subtitle}
                  </span>
                  <h3 className="text-2xl font-black font-display text-white uppercase tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-display mb-6">
                    {service.desc}
                  </p>
                  
                  <div className="pt-4 border-t border-white/10 mb-8">
                    <div className="text-[11px] uppercase font-bold text-gray-400 font-display mb-2.5">Key Deliverables:</div>
                    <ul className="space-y-2">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-gray-300 font-display">
                          <CheckCircle2 size={13} className="text-violet-primary flex-shrink-0" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Link 
                  href="/contact" 
                  aria-label={`Inquire about ${service.title}`}
                  className="inline-flex items-center justify-between w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:border-violet-primary hover:bg-violet-600/10 text-white font-display text-xs uppercase font-bold tracking-wider transition-all"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight size={14} className="text-violet-primary" aria-hidden="true" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Simple 4-Step Process */}
        <section className="mb-36 glass-card p-8 sm:p-14 rounded-3xl border border-white/15 cv-auto" aria-labelledby="process-heading">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.4em] mb-2 block">
                How We Deliver
              </span>
              <h2 id="process-heading" className="text-3xl sm:text-4xl font-black font-display text-white uppercase tracking-tighter mb-4">
                Our Simple, Transparent Process
              </h2>
              <p className="text-gray-300 mb-8 font-display text-sm sm:text-base">
                No jargon or confusing agency buzzwords. Just clear steps and predictable milestones from day one.
              </p>
              
              <div className="space-y-6">
                {[
                  { step: "01", title: "Strategy & Discovery", desc: "We understand your business goals, target clients, and key competitors to plan the website structure." },
                  { step: "02", title: "Figma UI/UX Design", desc: "We design every page in high-fidelity Figma layouts. You review, suggest tweaks, and approve the exact look." },
                  { step: "03", title: "Clean Next.js Code", desc: "We build your site with modern code engineered for sub-second speeds, smooth animations, and perfect mobile display." },
                  { step: "04", title: "SEO Setup & Launch", desc: "We optimize tags, schema markup, and speed audits before taking your site live and submitting to Google." }
                ].map(item => (
                  <div key={item.step} className="flex gap-4">
                    <span className="text-violet-primary font-black font-display text-xl opacity-60 w-8" aria-hidden="true">{item.step}</span>
                    <div>
                      <h3 className="text-white font-bold font-display uppercase text-sm mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm font-display">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square bg-surface-container rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/projects/process.png" 
                alt="Illustration showing the collaborative 4-step digital design and development process" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-90" 
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Transparent Packages */}
        <section className="mb-36 cv-auto" aria-labelledby="packages-heading">
          <div className="text-center mb-16">
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.4em] mb-2 block">
              Transparent Pricing
            </span>
            <h2 id="packages-heading" className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tighter">
              Tailored Investment Packages
            </h2>
            <p className="text-gray-400 font-display text-sm sm:text-base max-w-xl mx-auto mt-2">
              Clear deliverables and fixed price scopes. You always know exactly what you are paying for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Starter Showcase", 
                price: "From £2,500", 
                desc: "Ideal for emerging businesses needing a professional, modern presence that builds immediate credibility.",
                features: [
                  "Bespoke 5-page custom design",
                  "Fast Next.js development",
                  "Mobile-first responsive layouts",
                  "Foundational technical SEO",
                  "Accessible contact form setup",
                  "1 Month post-launch support"
                ],
                recommended: false
              },
              { 
                name: "Growth Engine", 
                price: "From £4,800", 
                desc: "Our most popular package for established brands ready to generate consistent client leads through search and design.",
                features: [
                  "Up to 10 custom designed pages",
                  "Full interactive Figma prototype",
                  "Advanced 98+ PageSpeed tuning",
                  "Full 90-day technical SEO setup",
                  "Custom interactive animations",
                  "Google Search Console & analytics",
                  "3 Months ongoing maintenance"
                ],
                recommended: true
              },
              { 
                name: "Scale & Authority", 
                price: "Custom Quote", 
                desc: "Comprehensive custom web solutions for high-traffic companies, e-commerce stores, and specialized platforms.",
                features: [
                  "Multi-page custom web application",
                  "Advanced e-commerce or client portal",
                  "Deep organic SEO & keyword strategy",
                  "Custom API & third-party integrations",
                  "Dedicated project manager",
                  "Priority ongoing SLA support"
                ],
                recommended: false
              }
            ].map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`glass-card p-8 sm:p-10 relative flex flex-col justify-between rounded-3xl border ${pkg.recommended ? 'border-violet-primary/60 shadow-[0_0_50px_rgba(106,0,244,0.25)]' : 'border-white/10'}`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-violet-primary text-black font-black font-display text-[10px] uppercase tracking-widest rounded-full shadow-md">
                    Most Popular
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-black font-display text-white uppercase mb-2 tracking-tight">{pkg.name}</h3>
                  <div className="text-3xl sm:text-4xl font-black font-display text-violet-primary mb-4 tracking-tight">{pkg.price}</div>
                  <p className="text-gray-300 text-xs sm:text-sm font-display mb-8 leading-relaxed">{pkg.desc}</p>
                  
                  <ul className="space-y-3 mb-8 pt-4 border-t border-white/10">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200 font-display">
                        <CheckCircle2 size={15} className="text-violet-primary flex-shrink-0" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href="/contact" 
                  aria-label={`Get started with the ${pkg.name} package`}
                  className={`w-full text-center py-4 rounded-xl font-black font-display text-xs uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary ${pkg.recommended ? 'bg-violet-primary text-black hover:bg-white' : 'bg-white/10 text-white hover:bg-white hover:text-black'}`}
                >
                  Request Package Details
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Clear FAQ Section */}
        <section className="max-w-4xl mx-auto cv-auto" aria-labelledby="faq-heading">
          <div className="text-center mb-16">
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.4em] mb-2 block">
              Clear Answers
            </span>
            <h2 id="faq-heading" className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tighter">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "How long does a typical website design & build take?", 
                a: "A standard bespoke website typically takes 3 to 6 weeks from kick-off to launch. We provide a milestone timeline before starting so you always know when each phase is delivered." 
              },
              { 
                q: "Why do you hand-code with Next.js instead of using WordPress templates?", 
                a: "Generic templates are weighed down with heavy plugins that slow down your website, damage your Google SEO rankings, and break frequently. Hand-coding with Next.js gives you sub-second loading speeds, bulletproof security, and complete design freedom." 
              },
              { 
                q: "What makes your SEO services different?", 
                a: "We don't sell 'magic' automated audits. We focus on real technical foundations: mobile Core Web Vitals, rich schema markup, fast indexing, and clean keyword hierarchy tailored to your local or national market." 
              },
              { 
                q: "Do I own 100% of the website and code after launch?", 
                a: "Yes. Once the final invoice is settled, you retain full ownership of all design files (Figma), source code, domain, and assets. There are no lock-in fees or hostage contracts." 
              },
              { 
                q: "What do you need from me to get started?", 
                a: "Simply reach out via our contact page. We'll schedule a 20-minute strategy call to understand your business goals, target audience, and provide a clear, no-obligation quote." 
              }
            ].map((item, i) => (
              <details key={i} className="glass-card group rounded-2xl border border-white/10">
                <summary className="p-6 sm:p-8 cursor-pointer flex justify-between items-center list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-primary rounded-2xl">
                  <span className="text-white font-bold font-display uppercase text-sm sm:text-base tracking-tight pr-4">{item.q}</span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">
                    <svg className="w-4 h-4 text-violet-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  </div>
                </summary>
                <div className="px-6 sm:px-8 pb-8 text-gray-300 text-sm font-display leading-relaxed border-t border-white/5 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
