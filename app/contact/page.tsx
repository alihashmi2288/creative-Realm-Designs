"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, MapPin, Mail, Phone, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Get in Touch</span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black font-display text-white uppercase tracking-tighter leading-none mb-8">
              START A <br /> <span className="gradient-text">PROJECT</span>
            </h1>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-3xl font-black font-display text-white uppercase tracking-tight mb-8">Let's build something <br /> great together.</h2>
            <p className="text-gray-300 text-lg font-display mb-12">
              Whether you have a clear plan or just an idea, we're here to help you build a professional website that works.
            </p>

            <div className="space-y-8" role="region" aria-label="Contact Information">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-600/20 flex items-center justify-center text-violet-primary" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold font-display uppercase text-xs tracking-widest mb-1">Email Us</h3>
                  <a href="mailto:hello@creativerealm.com" className="text-gray-300 hover:text-white font-display transition-colors">hello@creativerealm.com</a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-peach-secondary/10 border border-peach-secondary/20 flex items-center justify-center text-peach-secondary" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold font-display uppercase text-xs tracking-widest mb-1">Visit Studio</h3>
                  <p className="text-gray-300 font-display">123 Design District, London, UK</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-magenta-tertiary/10 border border-magenta-tertiary/20 flex items-center justify-center text-magenta-tertiary" aria-hidden="true">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold font-display uppercase text-xs tracking-widest mb-1">Call Us</h3>
                  <a href="tel:+442079460123" className="text-gray-300 hover:text-white font-display transition-colors">+44 20 7946 0123</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="glass-card p-12 text-center rounded-3xl" role="alert" aria-live="polite">
                <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-6" aria-hidden="true" />
                <h3 className="text-3xl font-black font-display text-white uppercase mb-4">Message Sent!</h3>
                <p className="text-gray-300 font-display mb-8">
                  Thank you for reaching out. We will review your project details and get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary text-sm font-display uppercase tracking-widest"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-10 space-y-6 rounded-3xl" aria-label="Contact Form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-2 font-display">
                      Your Name <span className="text-violet-primary" aria-hidden="true">*</span>
                    </label>
                    <input 
                      id="contact-name"
                      name="name"
                      type="text" 
                      required
                      autoComplete="name"
                      placeholder="John Doe" 
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-violet-primary focus-visible:ring-2 focus-visible:ring-violet-primary transition-colors font-display" 
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-2 font-display">
                      Email Address <span className="text-violet-primary" aria-hidden="true">*</span>
                    </label>
                    <input 
                      id="contact-email"
                      name="email"
                      type="email" 
                      required
                      autoComplete="email"
                      placeholder="john@example.com" 
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-violet-primary focus-visible:ring-2 focus-visible:ring-violet-primary transition-colors font-display" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="contact-service" className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-2 font-display">
                    What do you need help with?
                  </label>
                  <select 
                    id="contact-service"
                    name="service"
                    defaultValue="Web Development"
                    className="w-full bg-surface-container border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-primary focus-visible:ring-2 focus-visible:ring-violet-primary transition-colors font-display"
                  >
                    <option value="Web Development" className="bg-obsidian text-white">Web Development</option>
                    <option value="UI/UX Design" className="bg-obsidian text-white">UI/UX Design</option>
                    <option value="SEO & Marketing" className="bg-obsidian text-white">SEO & Marketing</option>
                    <option value="Brand Identity" className="bg-obsidian text-white">Brand Identity</option>
                    <option value="Other" className="bg-obsidian text-white">Other Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-2 font-display">
                    Your Message <span className="text-violet-primary" aria-hidden="true">*</span>
                  </label>
                  <textarea 
                    id="contact-message"
                    name="message"
                    rows={5} 
                    required
                    placeholder="Tell us about your project goals and timeline..." 
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-violet-primary focus-visible:ring-2 focus-visible:ring-violet-primary transition-colors font-display resize-none" 
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-3 text-sm uppercase tracking-widest"
                >
                  <span>SEND MESSAGE</span>
                  <Send size={18} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
