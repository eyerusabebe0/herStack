import { motion } from 'framer-motion';
import { ArrowRight, Globe, Settings, Smartphone } from 'lucide-react';
import { useCountUp, useReveal } from '@/lib/hooks';

const STATS = [
  { value: 10, suffix: '+', label: 'Projects' },
  { value: 1, suffix: '+', label: 'Years of Experience' },
  { value: 2, suffix: '', label: 'Developers' },
  { value: 24, suffix: '/7', label: 'Support' },
];

const OFFER_POINTS = [
  { icon: Globe, label: 'Web Development' },
  { icon: Settings, label: 'System Development' },
 
];

export default function Hero() {
  const { ref: statsRef, visible: statsVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="home" className="relative overflow-hidden bg-ink-950">
      {/* Background video, dimmed to pure atmosphere so text stays the focus */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline aria-hidden="true" className="w-full h-full object-cover">
          <source src="/bgvid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink-950/80" />
      </div>

      <div className="container-max relative z-10 px-5 sm:px-8 pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight"
          >
            Herstack <span className="text-pink-400">Tech</span>
          </motion.h1>

          {/* Compact offer line, sitting close under the name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-2.5 sm:mt-3 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1"
          >
            {OFFER_POINTS.map((point, i) => (
              <span key={point.label} className="inline-flex items-center gap-x-1.5">
                <span className="inline-flex items-center gap-1 text-white/55 text-[10px] sm:text-xs font-medium tracking-wide uppercase">
                  <point.icon className="w-3 h-3 text-pink-300/80" />
                  {point.label}
                </span>
                {i < OFFER_POINTS.length - 1 && <span className="text-pink-400/40 text-[10px]">•</span>}
              </span>
            ))}
          </motion.div>

          {/* The motto — given real size and weight as the memorable line */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 sm:mt-8 font-display italic text-2xl sm:text-3xl md:text-4xl text-white leading-snug text-balance px-2"
          >
            "Transforming ideas into powerful digital solutions."
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="mt-7 sm:mt-9 flex flex-row items-center justify-center gap-2.5 sm:gap-3"
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary !px-4 sm:!px-6 !py-2.5 sm:!py-3 text-xs sm:text-base justify-center whitespace-nowrap"
            >
              Start Your Project
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary !px-4 sm:!px-6 !py-2.5 sm:!py-3 text-xs sm:text-base justify-center whitespace-nowrap !bg-white/10 !border-white/20 !text-white hover:!bg-white/15"
            >
              View Portfolio
            </button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <div ref={statsRef} className="mt-10 sm:mt-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 max-w-2xl mx-auto">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} visible={statsVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index, visible }: { stat: { value: number; suffix: string; label: string }; index: number; visible: boolean }) {
  const count = useCountUp(stat.value, 1800, visible);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/10 p-3 sm:p-5 text-center hover:bg-white/[0.1] transition-colors"
    >
      <div className="text-xl sm:text-3xl font-display font-bold text-white">
        {count}
        {stat.suffix}
      </div>
      <div className="text-[10px] sm:text-sm text-white/60 mt-0.5 sm:mt-1 font-medium">{stat.label}</div>
    </motion.div>
  );
}