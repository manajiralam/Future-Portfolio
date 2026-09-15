import { motion } from 'framer-motion';
import { Palette, Code, TrendingUp } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    category: "Graphic Design & Creative",
    icon: Palette,
    skills: [
      { name: "Adobe Photoshop", level: 95 },
      { name: "Adobe Illustrator", level: 90 },
      { name: "Adobe Premiere Pro", level: 85 },
      { name: "After Effects", level: 88 },
      { name: "Figma UI/UX Systems", level: 92 }
    ]
  },
  {
    category: "Web Development",
    icon: Code,
    skills: [
      { name: "React & Next.js", level: 96 },
      { name: "TypeScript & JavaScript", level: 90 },
      { name: "Tailwind CSS & Framer Motion", level: 98 },
      { name: "Three.js & WebGL", level: 82 },
      { name: "Node.js & GraphQL", level: 85 }
    ]
  },
  {
    category: "Digital Marketing & SEO",
    icon: TrendingUp,
    skills: [
      { name: "Technical SEO & Schema", level: 94 },
      { name: "Social Media Marketing", level: 90 },
      { name: "Content Strategy & Copywriting", level: 88 },
      { name: "Email Automation", level: 86 },
      { name: "Conversion Rate Optimization", level: 92 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-16 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">Skills & Mastery</h2>
          <p className="text-4xl md:text-5xl font-bold">Technical <span className="text-gold-gradient font-bold">Arsenal</span></p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-panel p-8 rounded-2xl space-y-6 hover:border-[#D4AF37]/40 transition-all gold-glow-hover"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{cat.category}</h3>
                </div>

                <div className="space-y-4 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-[#D4AF37] font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#8A6D1C] to-[#FFD700] rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3 + sIdx * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
