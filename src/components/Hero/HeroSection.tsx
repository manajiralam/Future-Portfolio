import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Sparkles } from 'lucide-react';

const TYPING_TITLES = [
  "Graphic Designer",
  "Digital Marketer",
  "Full-Stack Web Developer",
  "Creative UI/UX Architect"
];

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TYPING_TITLES[titleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TYPING_TITLES.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 pt-32 pb-16 overflow-hidden">
      {/* Ambient Lighting Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

        {/* Left Column: Heading & CTAs */}
        <motion.div
          className="lg:col-span-7 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-[#D4AF37]/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium tracking-widest text-[#D4AF37] uppercase">
              Available for Elite Projects & Leadership
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <p className="text-xl text-gray-400 font-light tracking-wide">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
              {/* Personal Name - Replace as needed */}
              Manajir <span className="text-gold-gradient">Alam</span>
            </h1>

            {/* Typewriter Line */}
            <div className="h-12 flex items-center">
              <span className="text-2xl md:text-3xl font-mono text-[#D4AF37]">
                {displayText}
              </span>
              <span className="w-0.5 h-8 bg-[#FFD700] ml-1 animate-pulse" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-gray-400 text-base sm:text-lg max-w-xl font-light leading-relaxed">
            Crafting high-impact digital experiences at the intersection of high-end brand aesthetics, scalable full-stack engineering, and revenue-driven marketing strategies.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#8A6D1C] text-black font-semibold text-sm tracking-wide uppercase flex items-center gap-2 gold-glow-shadow transition-all"
            >
              Hire Me
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl glass-panel text-white font-medium text-sm tracking-wide uppercase hover:border-[#D4AF37]/50 transition-all flex items-center gap-2"
            >
              View Projects
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            </motion.a>

            {/* Resume Placeholder */}
            {/* <!-- Replace /resume.pdf with your actual resume URL --> */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-4 rounded-xl glass-panel text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-[#D4AF37]" />
              Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D Canvas Placeholder */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            <img
              src="/src/Asset/Mitul2.0.png"
              alt=""
              className="rounded-[10px]"
            />

            <div className="absolute inset-0 bg-black/25 rounded-[10px]"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
