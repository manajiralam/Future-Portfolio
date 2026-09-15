import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Loader from './components/UI/Loader';
import CustomCursor from './components/UI/CustomCursor';
import Navbar from './components/UI/Navbar';
import HeroSection from './components/Hero/HeroSection';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Services from './components/Sections/Services';
import Projects from './components/Sections/Projects';
import Experience from './components/Sections/Experience';
import Education from './components/Sections/Education';
import Certificates from './components/Sections/Certificates';
import Testimonials from './components/Sections/Testimonials';
import Contact from './components/Sections/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-[#050507] overflow-hidden">
      <CustomCursor />

      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <HeroSection />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Experience />
          <Education />
          <Certificates />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}
