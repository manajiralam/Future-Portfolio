import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: "Aura Luxe - Haute Horlogerie 3D",
    category: "Web Development / 3D",
    description: "Interactive WebGL catalog for luxury timepiece collection featuring dynamic lighting shaders, 360-degree rotation, and high-converting checkout flows.",
    // Replace with your project screenshot in /public/projects/project-1.jpg
    imagePlaceholder: "Aura Luxe Watch Experience Image",
    github: "https://github.com/yourusername/aura-luxe",
    live: "https://example.com/aura-luxe",
    tags: ["Next.js", "Three.js", "Tailwind CSS", "GSAP"]
  },
  {
    id: 2,
    title: "Vortex Growth - Marketing Platform",
    category: "Digital Marketing / Brand Strategy",
    description: "Complete visual redesign and organic search campaign strategy resulting in a +340% increase in inbound enterprise lead volume within 90 days.",
    imagePlaceholder: "Vortex Marketing Dashboard Image",
    github: "https://github.com/yourusername/vortex-growth",
    live: "https://example.com/vortex",
    tags: ["SEO", "Brand Strategy", "Content Campaign", "Analytics"]
  },
  {
    id: 3,
    title: "Obsidian AI - SaaS Interface",
    category: "Graphic Design / UI/UX",
    description: "Next-gen dark theme user dashboard for high-frequency algorithmic trading platform with real-time WebSocket chart rendering.",
    imagePlaceholder: "Obsidian AI SaaS Portal Image",
    github: "https://github.com/yourusername/obsidian-ai",
    live: "https://example.com/obsidian",
    tags: ["Figma UI/UX", "React", "Tailwind", "Framer Motion"]
  },
  {
    id: 4,
    title: "Solstice - E-Commerce Brand Engine",
    category: "Full-Stack Development",
    description: "High-scale headless storefront integrating Shopify GraphQL API with custom Next.js frontend rendering at 100/100 Lighthouse performance score.",
    imagePlaceholder: "Solstice Storefront Image",
    github: "https://github.com/yourusername/solstice-commerce",
    live: "https://example.com/solstice",
    tags: ["Next.js", "Shopify API", "Stripe", "Tailwind"]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section id="projects" className="py-24 px-6 lg:px-16 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">Portfolio</h2>
          <p className="text-4xl md:text-5xl font-bold">Featured <span className="text-gold-gradient">Masterpieces</span></p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel rounded-2xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all gold-glow-hover flex flex-col justify-between group"
            >
              {/* Image / Canvas Container */}
              <div className="relative h-64 bg-black/60 flex items-center justify-center p-6 border-b border-white/5 overflow-hidden">
                
                {/* 
                  ===================================================================
                  <!-- Replace project image placeholders below -->
                  Replace this box with an <img src="/projects/project-1.jpg" /> tag.
                  ===================================================================
                */}
                <div className="text-center space-y-2 z-10">
                  <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block">
                    {project.category}
                  </span>
                  <p className="text-sm text-gray-400 italic">
                    {/* Placeholder comment visual indicator */}
                    [ Project Image Placeholder ]
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Body */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4AF37]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-2 border-t border-white/5">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 rounded-xl glass-panel text-xs uppercase tracking-wider font-semibold text-white hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4 text-[#D4AF37]" />
                    Quick View
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Repository"
                    className="p-2.5 rounded-xl glass-panel text-gray-300 hover:text-[#D4AF37] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live Demo"
                    className="p-2.5 rounded-xl glass-panel text-gray-300 hover:text-[#D4AF37] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Modal Preview */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-panel max-w-2xl w-full p-8 rounded-2xl border border-[#D4AF37] space-y-6 relative"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold"
            >
              ✕
            </button>
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest">
              {selectedProject.category}
            </span>
            <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.description}</p>
            <div className="flex gap-4 pt-4">
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#8A6D1C] text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                Launch Live Demo <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl glass-panel text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                Source Code <Github className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
