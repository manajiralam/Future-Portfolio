import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 lg:px-16 border-t border-white/5 relative bg-[#050507]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#8A6D1C] to-[#D4AF37] flex items-center justify-center font-bold text-black text-xs">
            AV
          </div>
          <span className="text-sm font-semibold text-white tracking-wider">ALEXANDER VANCE</span>
        </div>

        {/* Copyright */}
        <p className="text-xs font-mono text-gray-500">
          © {new Date().getFullYear()} Alexander Vance. All Rights Reserved. Built for Awwwards.
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-xl glass-panel text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all flex items-center gap-2 text-xs font-mono uppercase"
        >
          <span>Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
