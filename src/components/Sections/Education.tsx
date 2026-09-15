import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const EDUCATION = [
  {
    degree: "B.S. in Computer Science & Interactive Media",
    institution: "Stanford University",
    year: "2012 - 2016",
    details: "Focused on Web Graphics Architecture, Software Design Patterns, and Human-Computer Interaction (HCI)."
  },
  {
    degree: "Master Design Certification & Branding Strategy",
    institution: "Royal College of Art & Design",
    year: "2016 - 2017",
    details: "Specialized in luxury visual communications, graphic systems, and creative direction."
  }
];

export default function Education() {
  return (
    <section className="py-24 px-6 lg:px-16 relative">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">Academic History</h2>
          <p className="text-4xl md:text-5xl font-bold">Education & <span className="text-gold-gradient">Background</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-panel p-8 rounded-2xl space-y-4 hover:border-[#D4AF37]/50 transition-all gold-glow-hover"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#D4AF37]">{item.year}</span>
              </div>

              <h3 className="text-xl font-bold text-white">{item.degree}</h3>
              <p className="text-sm font-medium text-gray-300">{item.institution}</p>
              <p className="text-xs text-gray-400 font-light leading-relaxed">{item.details}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
