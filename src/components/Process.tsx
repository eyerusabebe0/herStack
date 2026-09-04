import { motion } from 'framer-motion';
import { Search, PenTool, Code, TestTube, Rocket, Headphones } from 'lucide-react';
import { useReveal } from '@/lib/hooks';

const STEPS = [
  { num: '01', icon: Search, title: 'Discovery', description: 'Understand your goals and requirements.' },
  { num: '02', icon: PenTool, title: 'UI/UX Design', description: 'Wireframes and visual designs.' },
  { num: '03', icon: Code, title: 'Development', description: 'Build frontend, backend, and database.' },
  { num: '04', icon: TestTube, title: 'Testing', description: 'Check functionality and performance.' },
  { num: '05', icon: Rocket, title: 'Launch', description: 'Deploy and go live.' },
  { num: '06', icon: Headphones, title: 'Support', description: 'Ongoing maintenance and updates.' },
];

export default function Process() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-pink-soft/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-200/30 rounded-full blur-[120px] -z-10" />
      <div ref={ref} className="container-max px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-16"
        >
          <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">Development Process</span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold mt-3 text-ink-950 text-balance">
            How We <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <div className="card-base p-3.5 sm:p-7 hover:shadow-card-hover group relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 text-3xl sm:text-7xl font-display font-bold text-pink-50 group-hover:text-pink-100 transition-colors leading-none p-1.5 sm:p-3">
                  {step.num}
                </div>
                <div className="relative">
                  <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl bg-pink-gradient flex items-center justify-center mb-2.5 sm:mb-5 shadow-pink">
                    <step.icon className="w-4 h-4 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="font-display text-xs sm:text-lg font-bold text-ink-950 mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-[11px] sm:text-sm text-ink-600 leading-snug">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}