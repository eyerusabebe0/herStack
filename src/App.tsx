import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-ink-950 flex items-center justify-center z-[100]">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-2xl bg-white/10 animate-pulse-glow" />
            <img src="/logo.png" alt="Herstack Technology" className="relative w-full h-full object-contain p-2" />
          </div>
          <div className="w-32 h-1 bg-ink-800 rounded-full overflow-hidden">
            <div className="h-full bg-pink-gradient rounded-full animate-shimmer" style={{ width: '40%' }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <Hero />
        <About />
        <Team />
        <Services />
        <Portfolio />
        <Pricing />
        <WhyChooseUs />
        <Process />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}
