import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const EXPERIENCES = [
  {
    role: "Senior Digital Architect & Lead Engineer",
    company: "Vanguard Creative Labs",
    period: "2022 - Present",
    description: "Leading multi-disciplinary engineering and design teams in constructing high-performance digital experiences for luxury enterprise clients."
  },
  {
    role: "Full-Stack Web Developer & Strategist",
    company: "Aether Digital Agency",
    period: "2019 - 2022",
    description: "Engineered responsive web applications utilizing Next.js, WebGL, and Tailwind while directing performance growth marketing frameworks."
  },
  {
    role: "Senior Graphic Designer & Brand Specialist",
    company: "Apex Design Studio",
    period: "2016 - 2019",
    description: "Created visual identities, brand guidelines, and high-impact digital advertising assets for tech startups and luxury retail brands."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-16 relative">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">Career Roadmap</h2>
          <p className="text-4xl md:text-5xl font-bold">Professional <span className="text-gold-gradient">Experience</span></p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-[#D4AF37]/30 ml-4 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Marker Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full glass-panel border border-[#D4AF37] flex items-center justify-center gold-glow-shadow bg-[#050507]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFD700]" />
              </div>

              {/* Timeline Content Box */}
              <div className="glass-panel p-8 rounded-2xl space-y-4 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all gold-glow-hover">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-mono uppercase tracking-wider">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
