import { motion } from 'framer-motion';
import { Award, Code2, Rocket, Users } from 'lucide-react';

const STATS = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Rocket, value: "120+", label: "Projects Completed" },
  { icon: Users, value: "85+", label: "Global Clients" },
  { icon: Code2, value: "15+", label: "Design Awards" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-16 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">About Me</h2>
          <p className="text-4xl md:text-5xl font-bold">Bridging <span className="text-gold-gradient">Design, Code & Growth</span></p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Story Narrative */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-gray-300 font-light text-base leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-white font-normal leading-normal">
              I am a multi-disciplinary Digital Architect operating seamlessly across <span className="text-[#D4AF37] font-medium">Graphic Design</span>, <span className="text-[#D4AF37] font-medium">Full-Stack Development</span>, and <span className="text-[#D4AF37] font-medium">Digital Marketing Strategy</span>.
            </p>
            <p>
              Over the past decade, I have partnered with Fortune 500 brands, high-growth VC startups, and luxury labels to engineer interactive websites, craft striking visual identities, and deploy performance marketing engines that drive measurable revenue.
            </p>
            <p>
              My philosophy centers around absolute visual elegance powered by relentless technical perfection. Whether designing custom 3D web applications, building ultra-fast WebGL interfaces, or scaling SEO campaigns, every project is executed to Awwwards standards.
            </p>
          </motion.div>

          {/* Interactive Counter Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center space-y-3 hover:border-[#D4AF37]/40 transition-all gold-glow-hover"
                >
                  <div className="p-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-bold text-white font-mono">{stat.value}</span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</span>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
