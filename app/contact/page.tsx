"use client";

import { motion } from "motion/react";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Get in Touch</span>
            <h1 className="text-6xl md:text-8xl font-black font-display text-white uppercase tracking-tighter leading-none mb-8">
              START A <br /> <span className="gradient-text">PROJECT</span>
            </h1>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-3xl font-black font-display text-white uppercase tracking-tight mb-8">Let's build something <br /> great together.</h2>
            <p className="text-gray-400 text-lg font-display mb-12">
              Whether you have a clear plan or just an idea, we're here to help you build a professional website that works.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-600/20 flex items-center justify-center text-violet-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold font-display uppercase text-xs tracking-widest mb-1">Email Us</h4>
                  <p className="text-gray-400 font-display">hello@creativerealm.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-peach-secondary/10 border border-peach-secondary/20 flex items-center justify-center text-peach-secondary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold font-display uppercase text-xs tracking-widest mb-1">Visit Studio</h4>
                  <p className="text-gray-400 font-display">123 Design District, London, UK</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-magenta-tertiary/10 border border-magenta-tertiary/20 flex items-center justify-center text-magenta-tertiary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold font-display uppercase text-xs tracking-widest mb-1">Call Us</h4>
                  <p className="text-gray-400 font-display">+44 20 7946 0123</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="glass-card p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 font-display">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-primary transition-colors font-display" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 font-display">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-primary transition-colors font-display" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 font-display">What do you need help with?</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-primary transition-colors font-display appearance-none">
                  <option className="bg-obsidian">Web Development</option>
                  <option className="bg-obsidian">UI/UX Design</option>
                  <option className="bg-obsidian">SEO & Marketing</option>
                  <option className="bg-obsidian">Brand Identity</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 font-display">Your Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Tell us about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-primary transition-colors font-display resize-none" 
                />
              </div>

              <button className="w-full btn-primary flex items-center justify-center gap-3">
                SEND MESSAGE
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
