import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useActiveSection } from '@/lib/hooks';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'team', label: 'Our Team' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Selected works' },
  { id: 'pricing', label: 'Pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(['home', ...NAV_ITEMS.map((n) => n.id), 'contact']);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/85 backdrop-blur-md ${
          scrolled ? 'shadow-[0_4px_24px_rgba(15,23,42,0.06)] py-1.5 border-b border-ink-100' : 'py-2 border-b border-transparent'
        }`}
      >
        <nav className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <button onClick={() => scrollTo('home')} aria-label="Herstack Technology — home" className="flex items-center group flex-shrink-0">
            <img
              src="/logo.png"
              alt="Herstack Technology"
              className="h-9 sm:h-10 lg:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  active === item.id ? 'text-pink-600' : 'text-ink-600 hover:text-ink-950'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {active === item.id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-pink-50 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:inline-flex btn-primary !px-5 !py-2 text-sm"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden w-9 h-9 rounded-xl bg-ink-50 flex items-center justify-center text-ink-800 active:scale-95 transition-transform"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-ink-950/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[82%] max-w-80 bg-white shadow-2xl p-6 pt-24 flex flex-col gap-1.5 overflow-y-auto"
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left px-4 py-3.5 rounded-xl font-medium text-base transition-colors ${
                    active === item.id ? 'bg-pink-50 text-pink-600' : 'text-ink-700 hover:bg-ink-50'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <button onClick={() => scrollTo('contact')} className="btn-primary mt-4 w-full justify-center">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}