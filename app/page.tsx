"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-8 sm:px-12 md:px-24 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        </div>

        <div className="max-w-5xl z-10 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-violet-primary font-display text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">
              Innovation & Design
            </span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black font-display text-white leading-[0.95] uppercase tracking-tighter mb-8">
              WELCOME TO <br />
              <span className="gradient-text">CREATIVE REALM</span> <br />
              DESIGNS
            </h1>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-medium leading-relaxed font-display">
              We are a team of experts dedicated to crafting premium digital experiences. We design, we build, and we help your business thrive in the modern world.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="btn-primary text-lg px-12 py-4 inline-block transform hover:scale-105 transition-transform interactive">
                GET STARTED
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-8 md:px-24 bg-black/40 backdrop-blur-3xl border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black font-display text-white uppercase tracking-tighter mb-8 leading-tight">
                Your Growth is Our <span className="text-violet-primary">Main Focus</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed font-display">
                We believe a website should do more than just look good. It should help your business grow. We mix creative design with smart code to make sites that work for you and your customers.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-black font-display text-white mb-2">100%</div>
                  <div className="text-xs uppercase tracking-widest text-violet-primary font-bold">Dedication</div>
                </div>
                <div>
                  <div className="text-3xl font-black font-display text-white mb-2">50+</div>
                  <div className="text-xs uppercase tracking-widest text-violet-primary font-bold">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card p-8 aspect-square relative flex flex-col justify-end overflow-hidden group">
                <img 
                  src="/clean-design.png" 
                  alt="Web Design" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10">
                  <h3 className="text-2xl font-black font-display text-white uppercase mb-2">Clean Design</h3>
                  <p className="text-gray-300 text-sm font-display">Simple layouts that make your brand stand out.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black font-display text-white uppercase tracking-tighter mb-4">What We Do</h2>
            <div className="w-24 h-1 bg-violet-primary mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "UI/UX Design", desc: "We design apps and sites that are easy to use and look amazing.", icon: "🎨" },
              { title: "Web Development", desc: "We build fast, secure, and modern websites for any business.", icon: "💻" },
              { title: "SEO Growth", desc: "We help your website rank higher on search engines like Google.", icon: "📈" }
            ].map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-12 text-center"
              >
                <div className="text-4xl text-violet-primary mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold font-display text-white uppercase mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-display">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 px-8 md:px-24 bg-violet-600/5 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Projects Completed", value: "250+" },
              { label: "Global Users", value: "1.2M" },
              { label: "Design Awards", value: "12" },
              { label: "Coffee Consumed", value: "∞" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-black font-display gradient-text mb-4 tracking-tighter">{stat.value}</div>
                <div className="text-sm uppercase tracking-[0.3em] text-gray-500 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="w-[800px] h-[800px] bg-violet-500/20 rounded-full blur-[150px] mx-auto" />
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-32 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Case Studies</span>
              <h2 className="text-4xl md:text-6xl font-black font-display text-white uppercase tracking-tighter leading-none">Featured <br /> Projects</h2>
            </div>
            <Link href="/portfolio" className="group flex items-center gap-4 text-white font-bold font-display uppercase tracking-widest text-sm">
              View All Work
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { t: "Lumina E-Commerce", c: "Premium Retail", img: "/projects/ecommerce.png" },
              { t: "Aura Interiors", c: "Interior Design", img: "/projects/interior.png" }
            ].map((p, i) => (
              <motion.div 
                key={p.t}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group cursor-none interactive"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-[2rem] mb-8 relative">
                  <img src={p.img} alt={p.t} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                    <span className="px-8 py-3 bg-white text-black font-black font-display text-xs uppercase tracking-widest rounded-full">Explore</span>
                  </div>
                </div>
                <h3 className="text-2xl font-black font-display text-white uppercase mb-2">{p.t}</h3>
                <p className="text-gray-500 font-display uppercase text-xs tracking-widest">{p.c}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-8 md:px-24 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Kind Words</span>
            <h2 className="text-4xl md:text-5xl font-black font-display text-white uppercase tracking-tighter">Client Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Product Manager", text: "Creative Realm didn't just build a site; they built our brand's future. The design is beyond what we imagined." },
              { name: "Marcus Hayes", role: "Marketing Strategist", text: "Their attention to detail and kinetic design language set them apart. Best investment we've made this year." },
              { name: "Elena Rossi", role: "Creative Lead", text: "A team that truly understands the intersection of art and technology. Pure excellence." }
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-12 relative"
              >
                <div className="text-6xl font-serif text-violet-primary/20 absolute top-8 left-8">"</div>
                <p className="text-gray-300 italic mb-8 relative z-10 font-display leading-relaxed">
                  {t.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-violet-600/30" />
                  <div>
                    <div className="text-white font-bold font-display uppercase text-sm">{t.name}</div>
                    <div className="text-violet-primary text-[10px] uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 px-8 md:px-24 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-black font-display text-white uppercase tracking-tighter mb-12 leading-none">
              Let's craft something <br /> <span className="gradient-text">Legendary</span>
            </h2>
            <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-display">
              We're currently accepting new projects for Q3 2026. Reach out and let's discuss your vision.
            </p>
            <Link href="/contact" className="btn-primary text-xl px-16 py-6 inline-block">
              START A PROJECT
            </Link>
          </motion.div>
        </div>
        
        {/* Decorative background for CTA */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
          <div className="w-[1000px] h-[1000px] bg-gradient-to-r from-violet-600/20 to-peach-secondary/20 rounded-full blur-[150px] animate-pulse" />
        </div>
      </section>
    </div>
  );
}
