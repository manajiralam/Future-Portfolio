import { motion } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';

const CERTIFICATES = [
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", date: "2023" },
  { name: "Google Professional Digital Marketer", issuer: "Google Partner Academy", date: "2022" },
  { name: "Meta Certified Full-Stack Developer", issuer: "Meta Meta Blueprint", date: "2023" },
  { name: "Awwwards Academy Master UI/UX", issuer: "Awwwards Certificate", date: "2021" },
];

export default function Certificates() {
  return (
    <section className="py-24 px-6 lg:px-16 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">Credentials</h2>
          <p className="text-4xl md:text-5xl font-[#D4AF37] font-bold">Certifications & <span className="text-gold-gradient">Badges</span></p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-[#D4AF37]/50 transition-all gold-glow-hover"
            >
              <div className="p-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] w-fit">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white leading-snug">{cert.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{cert.issuer}</p>
              </div>
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest">{cert.date}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
