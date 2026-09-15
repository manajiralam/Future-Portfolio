import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-16 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">Get In Touch</h2>
          <p className="text-4xl md:text-5xl font-bold">Initiate a <span className="text-gold-gradient">Collaboration</span></p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Let's discuss your next project</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Available for luxury bespoke websites, enterprise digital marketing advisory, and full-stack architecture roles.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-4">
              {/* <!-- Replace email below with your email --> */}
              <a href="mailto:alexander@example.com" className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:border-[#D4AF37]/50 transition-all">
                <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-widest block">Email</span>
                  <span className="text-sm font-semibold text-white">alexander@example.com</span>
                </div>
              </a>

              {/* <!-- Replace phone below with your phone --> */}
              <a href="tel:+1234567890" className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:border-[#D4AF37]/50 transition-all">
                <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-widest block">Phone</span>
                  <span className="text-sm font-semibold text-white">+1 (555) 019-2834</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl glass-panel">
                <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-widest block">Location</span>
                  <span className="text-sm font-semibold text-white">San Francisco, CA / Remote</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {/* <!-- Replace social link hrefs below --> */}
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 rounded-xl glass-panel text-gray-300 hover:text-[#D4AF37] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 rounded-xl glass-panel text-gray-300 hover:text-[#D4AF37] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-3 rounded-xl glass-panel text-gray-300 hover:text-[#D4AF37] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-[#D4AF37]/30 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 uppercase tracking-widest">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-300 uppercase tracking-widest">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Project Inquiry / Advisory"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-300 uppercase tracking-widest">Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell me about your project goals and timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#8A6D1C] text-black font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 gold-glow-shadow hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
                {submitted ? "Message Sent!" : "Send Inquiry"}
              </button>
            </form>

            {/* Google Maps Placeholder */}
            <div className="pt-6 border-t border-white/5 text-center">
              <p className="text-xs font-mono text-gray-500">
                {/* Google Maps Embed Placeholder: San Francisco, CA */}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
