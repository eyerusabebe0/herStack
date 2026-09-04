import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye } from 'lucide-react';
import { useReveal } from '@/lib/hooks';
import bothImage from '@/assets/hero/both.jpg';

const VM_CARDS = [
  {
    icon: Eye,
    label: 'Our Vision',
    description:
      'To become a trusted technology partner for businesses by creating innovative, accessible, and impactful digital solutions.',
  },
  {
    icon: Target,
    label: 'Our Mission',
    description:
      'To help businesses grow through modern website, system, and mobile app development — combining creativity, technology, and user-focused design.',
  },
];

const TECH_STACK = [
  { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-pink-100/40 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-pink-100/30 rounded-full blur-[100px] -z-10" />
      <div ref={ref} className="container-max px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-16"
        >
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
              <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">About Us</span>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold mt-3 text-ink-950 text-balance">
                Turning Ideas Into <span className="gradient-text">Digital Solutions</span>
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-ink-600 leading-relaxed">
                Herstack Technology is a growing technology startup founded by two passionate developers dedicated to building modern digital solutions for businesses of all sizes.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={bothImage}
                alt="Herstack team"
                className="w-full max-w-[220px] sm:max-w-md rounded-2xl sm:rounded-[2rem] object-cover shadow-[0_32px_80px_rgba(15,23,42,0.12)] border border-pink-100"
              />
            </div>
          </div>
        </motion.div>

        {/* Vision & Mission — two columns from mobile up */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-10 sm:mb-16">
          {VM_CARDS.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="card-base min-h-[190px] p-3 sm:aspect-auto sm:min-h-0 sm:p-8 hover:shadow-card-hover hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-pink-100/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex h-full flex-col justify-center gap-2 sm:flex-row sm:gap-5">
                <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-pink-gradient flex items-center justify-center flex-shrink-0 shadow-pink">
                  <card.icon className="w-4.5 h-4.5 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-sm sm:text-xl font-bold text-ink-950 mb-1 sm:mb-2">{card.label}</h3>
                  <p className="text-[11px] sm:text-base text-ink-600 leading-snug sm:leading-relaxed">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech We Use */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h3 className="font-display text-xl sm:text-3xl font-bold text-ink-950">
            Tech We <span className="gradient-text">Use</span>
          </h3>
          <p className="mt-2 sm:mt-3 text-ink-500 text-xs sm:text-sm">The technologies powering our digital solutions</p>
        </motion.div>

        <div className="grid grid-cols-4 gap-2 sm:gap-5">
          {TECH_STACK.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
              className="card-base p-2.5 sm:p-6 flex flex-col items-center gap-1.5 sm:gap-3 hover:shadow-card-hover hover:-translate-y-1 group"
            >
              <div className="w-7 h-7 sm:w-14 sm:h-14 flex items-center justify-center">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-6 h-6 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <span className="text-[9px] sm:text-sm font-semibold text-ink-700 group-hover:text-pink-600 transition-colors text-center leading-tight">
                {tech.name}
              </span>
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
            Let's Build Something Great Together <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}