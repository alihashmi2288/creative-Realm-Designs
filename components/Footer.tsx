import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4">
            <h3 className="text-white font-display text-3xl font-black mb-8 uppercase tracking-tighter">CREATIVE <span className="gradient-text">REALM</span></h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 font-display max-w-sm">
              We define the next generation of digital experiences. Merging art, strategy, and technology into seamless products.
            </p>
            <div className="flex gap-4">
              {['𝕏', 'in', 'be', 'dr'].map(icon => (
                <a key={icon} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all text-white font-bold interactive">
                  {icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2 lg:ml-auto">
            <h4 className="text-white font-display text-xs font-bold uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-display text-gray-500">
              <li><Link href="/" className="hover:text-violet-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-violet-primary transition-colors">Agency</Link></li>
              <li><Link href="/services" className="hover:text-violet-primary transition-colors">Expertise</Link></li>
              <li><Link href="/portfolio" className="hover:text-violet-primary transition-colors">Work</Link></li>
              <li><Link href="/contact" className="hover:text-violet-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-display text-xs font-bold uppercase tracking-[0.3em] mb-8">Expertise</h4>
            <ul className="space-y-4 text-sm font-display text-gray-500">
              <li className="hover:text-white transition-colors cursor-default">UI/UX Design</li>
              <li className="hover:text-white transition-colors cursor-default">Web Development</li>
              <li className="hover:text-white transition-colors cursor-default">Web3 Solutions</li>
              <li className="hover:text-white transition-colors cursor-default">Brand Identity</li>
              <li className="hover:text-white transition-colors cursor-default">AI Integration</li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white font-display text-xs font-bold uppercase tracking-[0.3em] mb-8">Newsletter</h4>
            <p className="text-gray-500 text-sm font-display mb-6">Get the latest insights on design and technology.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white font-display focus:outline-none focus:border-violet-primary transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 bg-violet-primary text-black font-black font-display text-[10px] uppercase tracking-widest rounded-lg hover:bg-white transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-display uppercase tracking-widest text-gray-600">
          <div className="flex gap-12">
            <p>© 2024 Creative Realm. UK Reg #12345678.</p>
            <p>Built with Passion & Code.</p>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </footer>
  );
}
