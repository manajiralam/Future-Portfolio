import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Alexander transformed our entire brand architecture and web platform. The final result looks like something straight out of an Apple design showcase.",
    author: "Elena Rostova",
    title: "Chief Brand Officer, Luxura Global",
  },
  {
    quote: "Rarely do you find someone who possesses world-class aesthetic vision while writing rock-solid full-stack code. A true top 1% developer.",
    author: "Marcus Sterling",
    title: "VP of Product, Apex Digital",
  },
  {
    quote: "Our organic conversion rate jumped over 200% within two months of launching the new site and search marketing campaign. Incredible execution.",
    author: "David Chen",
    title: "Founder, Enterprise AI Labs",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-16 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">Endorsements</h2>
          <p className="text-4xl md:text-5xl font-bold">Client <span className="text-gold-gradient">Testimonials</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between space-y-6 hover:border-[#D4AF37]/50 transition-all gold-glow-hover relative"
            >
              <Quote className="w-10 h-10 text-[#D4AF37]/20 absolute top-6 right-6" />

              <div className="space-y-4">
                <div className="flex gap-1 text-[#FFD700]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFD700]" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm font-light leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <h3 className="text-base font-bold text-white">{item.author}</h3>
                <p className="text-xs text-[#D4AF37] font-mono">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
