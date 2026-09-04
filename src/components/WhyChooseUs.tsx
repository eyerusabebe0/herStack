import { motion } from 'framer-motion';
import { Cpu, Smartphone, Lightbulb, Zap, DollarSign, LifeBuoy } from 'lucide-react';
import { useReveal } from '@/lib/hooks';

const REASONS = [
  { icon: Cpu, title: 'Modern Tech', description: 'Reliable, modern technologies behind every build.' },
  { icon: Smartphone, title: 'Responsive', description: 'Looks great on phones, tablets, and desktops.' },
  { icon: Lightbulb, title: 'Custom Solutions', description: 'Built around your exact requirements.' },
  { icon: Zap, title: 'Fast Delivery', description: 'An organized process that ships on time.' },
  { icon: DollarSign, title: 'Fair Pricing', description: 'Professional work at startup-friendly rates.' },
  { icon: LifeBuoy, title: 'Ongoing Support', description: "We don't disappear after launch." },
];

export default function WhyChooseUs() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-white relative overflow-hidden py-12 sm:py-16">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/30 rounded-full blur-[100px] -z-10" />
      <div ref={ref} className="container-max px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-16"
        >
          <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold mt-3 text-ink-950 text-balance">
            Why Clients <span className="gradient-text">Choose Herstack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex flex-col sm:flex-row items-start gap-2.5 sm:gap-4 p-3.5 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-pink-50/50 transition-colors duration-300 card-base sm:!shadow-none sm:!border-0"
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-gradient group-hover:border-transparent transition-all duration-300">
                <reason.icon className="w-4.5 h-4.5 sm:w-6 sm:h-6 text-pink-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-display text-xs sm:text-base font-bold text-ink-950 mb-0.5 sm:mb-1.5">{reason.title}</h3>
                <p className="text-[11px] sm:text-sm text-ink-600 leading-snug">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}