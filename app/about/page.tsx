"use client";

import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <div className="py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
                <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Our Story</span>
                <h1 className="text-6xl md:text-8xl font-black font-display text-white uppercase tracking-tighter leading-none mb-8">
                    MAKING IT <br /> <span className="gradient-text">SIMPLE</span>
                </h1>
                <p className="text-gray-400 text-xl font-display leading-relaxed">
                    Creative Realm was built to help businesses talk to their customers in the most effective way. We believe that good design should be clear, helpful, and easy for everyone to use.
                </p>
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
                <div className="glass-card aspect-[4/5] relative rounded-[40px] overflow-hidden">
                    <img 
                      src="/about-hero.png" 
                      alt="Creative Realm Agency" 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
            </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-16 py-24 border-y border-white/5 mb-24">
            <div>
                <h3 className="text-white font-display font-black text-2xl uppercase mb-6 italic tracking-tight">Purpose</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-display">
                    Our goal is to help your business stand out with a website that truly represents who you are and what you do.
                </p>
            </div>
            <div>
                <h3 className="text-white font-display font-black text-2xl uppercase mb-6 italic tracking-tight">Approach</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-display">
                    We listen first, then design, then build. We keep things simple and clear so you always know what we are working on.
                </p>
            </div>
            <div>
                <h3 className="text-white font-display font-black text-2xl uppercase mb-6 italic tracking-tight">Team</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-display">
                    We are a small team of passionate designers and developers who love building great things for our clients.
                </p>
            </div>
        </section>

        <section>
             <div className="text-center mb-16">
                <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.5em] mb-4 block">How We Work</span>
                <h2 className="text-4xl md:text-5xl font-black font-display text-white uppercase tracking-tighter">OUR SIMPLE PROCESS</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { n: "01", t: "DISCOVERY", d: "We learn about your business and your goals." },
                  { n: "02", t: "PLANNING", d: "We create a clear map for the project ahead." },
                  { n: "03", t: "DESIGN & BUILD", d: "We design and develop your custom solution." },
                  { n: "04", t: "LAUNCH", d: "We go live and help you reach your audience." }
                ].map((step, i) => (
                    <motion.div 
                        key={step.t}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-10 group"
                    >
                        <div className="text-6xl font-black font-display text-white/5 group-hover:text-violet-primary/20 transition-colors mb-4">{step.n}</div>
                        <h4 className="text-white font-black font-display text-lg uppercase mb-4 tracking-tight">{step.t}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed font-display">{step.d}</p>
                    </motion.div>
                ))}
            </div>
        </section>
      </div>

      {/* Manifesto Section */}
      <section className="mt-48 py-32 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <h2 className="text-4xl md:text-6xl font-black font-display text-white uppercase tracking-tighter leading-none">
              OUR <br /> <span className="gradient-text">MANIFESTO</span>
            </h2>
            <div className="space-y-12">
              {[
                { t: "Design as a Tool", d: "We don't just make things look pretty. We use design to solve problems and create emotional connections." },
                { t: "Radical Simplicity", d: "If it's not adding value, it's noise. We strip away the unnecessary to let your message shine." },
                { t: "Continuous Innovation", d: "The digital landscape moves fast. We move faster, constantly exploring new tech like Web3 and AI." }
              ].map((m, i) => (
                <div key={m.t}>
                  <h4 className="text-violet-primary font-black font-display text-lg uppercase mb-4 tracking-tight">{m.t}</h4>
                  <p className="text-gray-400 font-display leading-relaxed">{m.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-48 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.5em] mb-4 block">The Experts</span>
            <h2 className="text-4xl md:text-5xl font-black font-display text-white uppercase tracking-tighter">MEET THE MINDS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { n: "Alex Rivier", r: "Creative Lead", img: "https://i.pravatar.cc/400?u=alex" },
              { n: "Jordan Hayes", r: "Design Strategist", img: "https://i.pravatar.cc/400?u=jordan" },
              { n: "Sam Thorne", r: "Senior Developer", img: "https://i.pravatar.cc/400?u=sam" },
              { n: "Morgan Chen", r: "UX Designer", img: "https://i.pravatar.cc/400?u=morgan" }
            ].map((member, i) => (
              <motion.div
                key={member.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-[2rem] mb-6 grayscale hover:grayscale-0 transition-all duration-700">
                  <img src={member.img} alt={member.n} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <h4 className="text-white font-black font-display text-xl uppercase tracking-tight mb-1">{member.n}</h4>
                <p className="text-violet-primary font-bold font-display uppercase text-[10px] tracking-widest">{member.r}</p>
                
                {/* Social links placeholder */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-violet-primary transition-colors cursor-pointer">𝕏</div>
                   <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-violet-primary transition-colors cursor-pointer">in</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 border-t border-white/5 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-500 font-bold font-display text-[10px] uppercase tracking-[0.4em] mb-12">Trusted by industry leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {["Nexus", "Aura", "Zenith", "Flow", "Vertex", "Cipher"].map(name => (
              <div key={name} className="text-2xl font-black font-display text-white text-center cursor-default hover:text-violet-primary transition-colors">{name}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
