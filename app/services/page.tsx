"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  Palette, 
  Code2, 
  Layers, 
  Search, 
  Smartphone, 
  Globe 
} from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    desc: "We create user-friendly designs for websites and mobile apps that your customers will love.",
    icon: Layers,
    color: "from-orange-400 to-amber-600"
  },
  {
    title: "Web Development",
    desc: "We build fast, responsive websites from scratch using the latest technologies.",
    icon: Code2,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "SEO Services",
    desc: "We optimize your website to help you rank higher on search results and get more traffic.",
    icon: Search,
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Brand Identity",
    desc: "We help you build a strong brand with logos, colors, and a clear message.",
    icon: Palette,
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Mobile Optimization",
    desc: "We ensure your website looks and works perfectly on all smartphones and tablets.",
    icon: Smartphone,
    color: "from-indigo-500 to-violet-700"
  },
  {
    title: "Cloud Solutions",
    desc: "We help move your business to the latest cloud platforms for safety and speed.",
    icon: Globe,
    color: "from-violet-500 to-purple-600"
  }
];

export default function ServicesPage() {
  return (
    <div className="py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Our Expertise</span>
            <h1 className="text-5xl md:text-7xl font-black font-display text-white uppercase tracking-tighter mb-8 italic">
              Digital <span className="gradient-text">Solutions</span> That Work
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-display">
              We offer simple and effective services to help your business succeed online.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="glass-card p-10 group relative flex flex-col justify-between min-h-[320px]"
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black font-display text-white uppercase tracking-tight mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-display">{service.desc}</p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between group">
                <Link href="/contact" className="text-xs font-bold font-display uppercase tracking-widest text-gray-500 group-hover:text-violet-primary transition-colors">Start a Project</Link>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-violet-primary group-hover:border-violet-primary group-hover:translate-x-1 transition-all">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>

              {/* Decorative gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-[inherit]`} />
            </motion.div>
          ))}
        </div>
        
        {/* Process Highlight */}
        <div className="mt-32 glass-card p-16 rounded-3xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black font-display text-white uppercase tracking-tighter mb-6">Simple 3-Step Process</h2>
              <p className="text-gray-400 mb-8 font-display">We make it easy to go from an idea to a finished product.</p>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Plan", desc: "We talk about your goals and create a plan." },
                  { step: "02", title: "Design & Build", desc: "We design and develop your custom solution." },
                  { step: "03", title: "Launch", desc: "We launch your project and make sure it works." }
                ].map(item => (
                  <div key={item.step} className="flex gap-6">
                    <span className="text-violet-primary font-black font-display text-2xl opacity-40">{item.step}</span>
                    <div>
                      <h4 className="text-white font-bold font-display uppercase text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs font-display">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square sm:aspect-video lg:aspect-square">
              <img 
                src="/projects/process.png" 
                alt="Our Process" 
                className="w-full h-full object-cover rounded-2xl opacity-80" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Pricing/Packages Section */}
        <section className="mt-48">
          <div className="text-center mb-24">
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Tailored Solutions</span>
            <h2 className="text-4xl md:text-5xl font-black font-display text-white uppercase tracking-tighter">OUR PACKAGES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Startup", 
                price: "From £2,500", 
                features: ["5 Page Website", "Custom UI Design", "Basic SEO", "Mobile Responsive", "1 Month Support"],
                recommended: false
              },
              { 
                name: "Business", 
                price: "From £5,000", 
                features: ["10 Page Website", "Advanced Animations", "Full SEO Audit", "CMS Integration", "3 Months Support", "Performance Hosting"],
                recommended: true
              },
              { 
                name: "Enterprise", 
                price: "Custom Quote", 
                features: ["Unlimited Pages", "Custom Web App", "Web3/API Integration", "Dedicated Project Mgr", "Priority Support", "Security Audit"],
                recommended: false
              }
            ].map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`glass-card p-12 relative flex flex-col justify-between ${pkg.recommended ? 'border-violet-primary/50 shadow-[0_0_50px_rgba(106,0,244,0.2)]' : ''}`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-violet-primary text-black font-black font-display text-[10px] uppercase tracking-widest rounded-full">Recommended</div>
                )}
                <div>
                  <h3 className="text-2xl font-black font-display text-white uppercase mb-4 tracking-tight">{pkg.name}</h3>
                  <div className="text-4xl font-black font-display text-violet-primary mb-12 tracking-tighter">{pkg.price}</div>
                  <ul className="space-y-6 mb-12">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-center gap-4 text-sm text-gray-400 font-display">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className={`w-full text-center py-4 rounded-xl font-black font-display text-xs uppercase tracking-widest transition-all ${pkg.recommended ? 'bg-violet-primary text-black hover:bg-white' : 'bg-white/5 text-white hover:bg-white hover:text-black'}`}>Get Started</Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-48 max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Got Questions?</span>
            <h2 className="text-4xl md:text-5xl font-black font-display text-white uppercase tracking-tighter">FREQUENTLY ASKED</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "How long does a typical project take?", a: "Most website projects take between 4 to 8 weeks depending on the complexity and content required." },
              { q: "Do you offer ongoing maintenance?", a: "Yes, we have monthly support packages that cover security updates, content changes, and performance monitoring." },
              { q: "Can you help with rebranding?", a: "Absolutely. We offer full brand identity services including logo design, color palettes, and brand guidelines." },
              { q: "Will my site be SEO friendly?", a: "Every site we build is optimized for search engines from the ground up, following all modern technical SEO best practices." }
            ].map((item, i) => (
              <details key={i} className="glass-card group">
                <summary className="p-8 cursor-pointer flex justify-between items-center list-none">
                  <span className="text-white font-bold font-display uppercase text-sm tracking-tight">{item.q}</span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-open:rotate-45 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  </div>
                </summary>
                <div className="px-8 pb-8 text-gray-400 text-sm font-display leading-relaxed">
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
