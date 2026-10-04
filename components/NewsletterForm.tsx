"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  if (subscribed) {
    return (
      <div className="p-3.5 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center gap-2 text-violet-primary text-xs font-display font-bold">
        <Check size={16} />
        <span>Thank you! You are subscribed.</span>
      </div>
    );
  }

  return (
    <form className="relative" onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}>
      <label htmlFor="newsletter-email" className="sr-only">Email address for agency newsletter</label>
      <input 
        id="newsletter-email"
        name="email"
        type="email" 
        required
        autoComplete="email"
        placeholder="your.email@company.com" 
        className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm text-white font-display placeholder-gray-400 focus:outline-none focus:border-violet-primary focus-visible:ring-2 focus-visible:ring-violet-primary transition-colors pr-20"
      />
      <button 
        type="submit" 
        aria-label="Join our newsletter"
        className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-violet-primary text-black font-black font-display text-xs uppercase tracking-wider rounded-lg hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
      >
        Join
      </button>
    </form>
  );
}
