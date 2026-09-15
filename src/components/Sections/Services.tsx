import { motion } from 'framer-motion';
import { Layers, Monitor, Target, Sparkles, Cpu, BarChart3 } from 'lucide-react';

const SERVICES = [
  {
    icon: Layers,
    title: "Brand Identity & Graphic Design",
    description: "Bespoke visual branding, typography design, vector assets, and promotional materials crafted to convey high-end positioning.",
    tags: ["Photoshop", "Illustrator", "Brand Systems"]
  },
  {
    icon: Monitor,
    title: "Web Engineering & Next.js Development",
    description: "High-performance full-stack web applications, landing pages, and ecommerce platforms with dynamic 3D WebGL experiences.",
    tags: ["Next.js", "React", "Three.js", "Tailwind"]
  },
  {
    icon: Target,
    title: "Digital Marketing & Growth Systems",
    description: "End-to-end user acquisition channels including organic SEO strategies, programmatic ad creatives, and high-converting funnel setups.",
    tags: ["SEO", "Ad Creative", "Email Flow", "CRO"]
  },
  {
    icon: Sparkles,
    title: "UI/UX Design & Prototyping",
    description: "Intuitive, micro-interactive design systems built with wireframes, high-fidelity prototypes, and user accessibility standards.",
    tags: ["Figma", "Micro-Interactions", "User Journey"]
  },
  {
    icon: Cpu,
    title: "3D & Motion Graphics",
    description: "Cinematic promotional trailers, video editing, logo stings, and real-time interactive 3D web graphics.",
    tags: ["After Effects", "Premiere", "Spline", "GSAP"]
  },
  {
    icon: BarChart3,
    title: "Technical SEO & Analytics",
    description: "Complete performance audits, structured Schema metadata markup, speed optimization, and live analytics tracking.",
    tags: ["Schema.org", "Core Web Vitals", "GA4"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-16 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">Services</h2>
          <p className="text-4xl md:text-5xl font-bold">Solutions <span className="text-gold-gradient">Engineered for Excellence</span></p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-2xl flex flex-col justify-between space-y-6 hover:border-[#D4AF37]/50 transition-all gold-glow-hover group"
              >
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] w-fit group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {tag}
                    </span>
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
