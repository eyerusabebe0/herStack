import { motion } from 'framer-motion';
import { Globe, Settings, Wrench, Smartphone, ArrowRight } from 'lucide-react';
import { useReveal } from '@/lib/hooks';

const SERVICES = [
  {
    icon: Globe,
    title: 'Website & Web Development',
    description: 'Modern, responsive websites and web apps built to represent your business and engage customers.',
    features: ['Business sites', 'Web apps', 'Frontend & backend', 'API integration'],
  },
  {
    icon: Settings,
    title: 'System Development',
    description: 'Custom business systems that help you manage operations efficiently.',
    features: ['Admin dashboards', 'Database systems', 'Authentication', 'Custom workflows'],
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    description: 'Keep your site secure, updated, fast, and running smoothly.',
    features: ['Bug fixing', 'Performance', 'Security updates', 'Technical support'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'iOS and Android apps that keep customers engaged on the go.',
    features: ['iOS & Android', 'Push notifications', 'App/Play Store release', 'Offline support'],
  },
];

export default function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="section-padding bg-pink-soft/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-200/30 rounded-full blur-[120px] -z-10" />
      <div ref={ref} className="container-max px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-16"
        >
          <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">Services</span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold mt-3 text-ink-950 text-balance">
            What We <span className="gradient-text">Do Best</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-6 max-w-4xl mx-auto">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="card-base p-4 sm:p-7 hover:shadow-card-hover group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start gap-3 sm:block sm:gap-0">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-pink-gradient flex items-center justify-center flex-shrink-0 sm:mb-5 shadow-pink">
                  <service.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-sm sm:text-xl font-bold text-ink-950 mb-1 sm:mb-3">{service.title}</h3>
                  <p className="text-ink-600 text-xs sm:text-sm leading-relaxed mb-2.5 sm:mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.features.map((feature) => (
                      <span key={feature} className="px-2 py-0.5 rounded-full bg-pink-50 text-pink-700 text-[10px] sm:text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 sm:mt-12"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-sm sm:text-base"
          >
            Need a Custom Solution? Let's Talk <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}