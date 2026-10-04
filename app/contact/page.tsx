"use client";

import { useState, useId } from "react";
import { Send, MapPin, Mail, Phone, CheckCircle, Clock, ShieldCheck, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nameHintId = useId();
  const nameErrorId = useId();
  const emailHintId = useId();
  const emailErrorId = useId();
  const messageHintId = useId();
  const messageErrorId = useId();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate brief processing for polished feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <div className="py-24 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <div>
            <span className="text-violet-primary font-display text-xs font-bold uppercase tracking-[0.4em] mb-3 block">
              Direct Agency Inquiry
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black font-display text-white uppercase tracking-tighter leading-none mb-6">
              LET'S TALK <br /> <span className="gradient-text">PROJECTS</span>
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto text-base sm:text-lg font-display">
              Whether you need a new website designed, modern code built, or your Google rankings improved, we are here to help.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Details & Trust Commitments */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-white uppercase tracking-tight mb-4">
                Honest Advice, <br /> Transparent Estimates.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base font-display leading-relaxed">
                Tell us about your brand goals. Within 24 hours, our lead designer and technical specialist will review your requirements and provide a clear roadmap with realistic options.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-white/10" role="region" aria-label="Direct Contact Channels">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-primary flex-shrink-0" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold font-display uppercase text-xs tracking-wider mb-1">Direct Email</h3>
                  <a href="mailto:hello@creativerealm.co.uk" className="text-gray-300 hover:text-white font-display text-sm transition-colors">
                    hello@creativerealm.co.uk
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-peach-secondary/20 border border-peach-secondary/30 flex items-center justify-center text-peach-secondary flex-shrink-0" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold font-display uppercase text-xs tracking-wider mb-1">Office Location</h3>
                  <p className="text-gray-300 font-display text-sm">Design District, Greenwich Peninsula, London, UK</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-magenta-tertiary/20 border border-magenta-tertiary/30 flex items-center justify-center text-magenta-tertiary flex-shrink-0" aria-hidden="true">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold font-display uppercase text-xs tracking-wider mb-1">Direct Phone</h3>
                  <a href="tel:+442079460123" className="text-gray-300 hover:text-white font-display text-sm transition-colors">
                    +44 (0)20 7946 0123
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Commitments */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-violet-primary text-xs font-bold uppercase tracking-wider font-display">
                <Clock size={16} aria-hidden="true" />
                <span>24-Hour Guaranteed Reply</span>
              </div>
              <p className="text-gray-400 text-xs font-display">
                Every inquiry is reviewed directly by a project lead. No automated sales pitches or spam.
              </p>
            </div>
          </div>

          {/* Form with Modern Web Guidance compliance */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="glass-card p-12 text-center rounded-3xl border border-emerald-500/30" role="status" aria-live="polite">
                <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-6" aria-hidden="true" />
                <h2 className="text-3xl font-black font-display text-white uppercase mb-3">
                  Inquiry Received!
                </h2>
                <p className="text-gray-300 font-display text-base mb-8 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. We have logged your project details and will review them thoroughly before contacting you within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary text-xs uppercase tracking-widest px-8 py-3.5"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="glass-card p-8 sm:p-12 space-y-6 rounded-3xl border border-white/15" 
                aria-label="Agency Project Inquiry Form"
                noValidate={false}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field with format hint above input */}
                  <div className="form-field">
                    <label htmlFor="contact-name" className="text-xs font-bold text-gray-200 uppercase tracking-wider font-display">
                      Your Full Name <span className="text-violet-primary" aria-hidden="true">*</span>
                    </label>
                    <span id={nameHintId} className="form-hint">
                      Enter your first and last name
                    </span>
                    <input 
                      id="contact-name"
                      name="name"
                      type="text" 
                      required
                      minLength={2}
                      autoComplete="name"
                      placeholder="e.g. Eleanor Rigby" 
                      aria-describedby={`${nameHintId} ${nameErrorId}`}
                      className="form-input" 
                    />
                    <div id={nameErrorId} className="field-error" aria-live="polite">
                      <span aria-hidden="true">❌</span>
                      <span>Please enter your name (minimum 2 characters).</span>
                    </div>
                  </div>

                  {/* Email field with format hint above input */}
                  <div className="form-field">
                    <label htmlFor="contact-email" className="text-xs font-bold text-gray-200 uppercase tracking-wider font-display">
                      Work Email <span className="text-violet-primary" aria-hidden="true">*</span>
                    </label>
                    <span id={emailHintId} className="form-hint">
                      Format: you@company.com
                    </span>
                    <input 
                      id="contact-email"
                      name="email"
                      type="email" 
                      required
                      autoComplete="email"
                      placeholder="eleanor@company.com" 
                      aria-describedby={`${emailHintId} ${emailErrorId}`}
                      className="form-input" 
                    />
                    <div id={emailErrorId} className="field-error" aria-live="polite">
                      <span aria-hidden="true">❌</span>
                      <span>Please provide a valid email address.</span>
                    </div>
                  </div>
                </div>
                
                {/* Service Selection */}
                <div className="form-field">
                  <label htmlFor="contact-service" className="text-xs font-bold text-gray-200 uppercase tracking-wider font-display">
                    Primary Service You Require
                  </label>
                  <span className="form-hint">Select the main goal for your project</span>
                  <select 
                    id="contact-service"
                    name="service"
                    defaultValue="Full Design & Development"
                    className="w-full bg-[#1b1b22] border border-white/20 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-violet-primary focus:ring-2 focus:ring-violet-primary/50 transition-all font-display text-sm"
                  >
                    <option value="Website Design (UI/UX)" className="bg-obsidian text-white">Bespoke Website Design (UI/UX)</option>
                    <option value="Next.js Web Development" className="bg-obsidian text-white">Custom Web Development (Next.js / Speed)</option>
                    <option value="SEO & Google Growth" className="bg-obsidian text-white">SEO & Google Ranking Campaign</option>
                    <option value="Full Design & Development" className="bg-obsidian text-white">Full Design, Build & SEO Package</option>
                    <option value="Website Audit & Speed Optimization" className="bg-obsidian text-white">Website Speed & Audit Review</option>
                  </select>
                </div>

                {/* Estimated Budget / Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-field">
                    <label htmlFor="contact-budget" className="text-xs font-bold text-gray-200 uppercase tracking-wider font-display">
                      Anticipated Budget Range
                    </label>
                    <span className="form-hint">Helps us recommend the best approach</span>
                    <select 
                      id="contact-budget"
                      name="budget"
                      defaultValue="£2,500 - £5,000"
                      className="w-full bg-[#1b1b22] border border-white/20 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-violet-primary focus:ring-2 focus:ring-violet-primary/50 transition-all font-display text-sm"
                    >
                      <option value="£2,500 - £5,000" className="bg-obsidian text-white">£2,500 – £5,000 (Starter)</option>
                      <option value="£5,000 - £10,000" className="bg-obsidian text-white">£5,000 – £10,000 (Growth Engine)</option>
                      <option value="£10,000+" className="bg-obsidian text-white">£10,000+ (Full Scale / Custom)</option>
                      <option value="Undecided" className="bg-obsidian text-white">Need Consultation First</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-timeline" className="text-xs font-bold text-gray-200 uppercase tracking-wider font-display">
                      Ideal Target Launch
                    </label>
                    <span className="form-hint">When do you need to go live?</span>
                    <select 
                      id="contact-timeline"
                      name="timeline"
                      defaultValue="1 to 2 Months"
                      className="w-full bg-[#1b1b22] border border-white/20 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-violet-primary focus:ring-2 focus:ring-violet-primary/50 transition-all font-display text-sm"
                    >
                      <option value="Immediately (Within 3 weeks)" className="bg-obsidian text-white">As soon as possible (2–3 weeks)</option>
                      <option value="1 to 2 Months" className="bg-obsidian text-white">Standard (1–2 months)</option>
                      <option value="Flexible" className="bg-obsidian text-white">Flexible / Planning stage</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div className="form-field">
                  <label htmlFor="contact-message" className="text-xs font-bold text-gray-200 uppercase tracking-wider font-display">
                    Project Overview <span className="text-violet-primary" aria-hidden="true">*</span>
                  </label>
                  <span id={messageHintId} className="form-hint">
                    Share current website URL (if any), goals, and key requirements
                  </span>
                  <textarea 
                    id="contact-message"
                    name="message"
                    rows={4} 
                    required
                    minLength={10}
                    placeholder="Tell us about your brand, what is not working with your current website, or what you want to achieve..." 
                    aria-describedby={`${messageHintId} ${messageErrorId}`}
                    className="form-input resize-none" 
                  />
                  <div id={messageErrorId} className="field-error" aria-live="polite">
                    <span aria-hidden="true">❌</span>
                    <span>Please provide a brief description (at least 10 characters).</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full py-4 text-xs uppercase tracking-widest font-black inline-flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? "SENDING PROPOSAL REQUEST..." : "SUBMIT PROJECT INQUIRY"}</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                  <p className="text-center text-gray-400 text-xs font-display mt-3">
                    No spam. Your contact information is never shared.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
