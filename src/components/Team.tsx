import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useReveal } from '@/lib/hooks';
import hilawitImg from '@/components/Team/hilawit.jpg';
import eyerusImg from '@/components/Team/eyerus.jpg';

const TEAM = [
  {
    name: 'Hilawit Assefa',
    role: 'CEO & Co-Founder | Frontend',
    description:
      'Hilawit focuses on frontend development, interactive user experiences, responsive web design, and transforming ideas into beautiful, functional interfaces.',
    skills: ['React', 'JavaScript', 'UI/UX', 'Responsive Design'],
    image: hilawitImg,
    socials: {
      linkedin: 'https://www.linkedin.com/in/hilawit-assefa',
      github: 'https://github.com/hilawitahailu-wq',
      email: 'mailto:hilawit.ahailu@gmail.com',
    },
  },
  {
    name: 'Eyerusalem Abebe',
    role: 'CEO & Co-Founder | Backend',
    description:
      'Eyerus focuses on backend development, APIs, databases, system architecture, authentication, and building reliable business systems.',
    skills: ['Node.js', 'APIs', 'Databases', 'System Development'],
    image: eyerusImg,
    socials: {
      linkedin: 'https://www.linkedin.com/in/eyerus-abebe-484303370',
      github: 'https://github.com/eyerusabebe0',
      email: 'mailto:jeryabebe1321@gmail.com',
    },
  },
];

export default function Team() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  return (
    <section id="team" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[34rem] h-72 bg-pink-100/40 rounded-full blur-[110px] -z-10" />

      <div ref={ref} className="container-max px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-sm font-semibold text-pink-600 uppercase tracking-[0.18em]">Herstack Technology</span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold mt-3 text-ink-950">Members</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink-500 max-w-xl mx-auto">
            Two co-founders, one shared standard: build things we'd be proud to put our names on.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {TEAM.map((member, index) => {
            const isExpanded = expandedMember === member.name;

            return (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 36 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: index * 0.15 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-pink-100 aspect-[3/4] sm:aspect-[3/4] shadow-card group-hover:shadow-card-hover transition-shadow duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="pt-3 sm:pt-5">
                  <h3 className="font-display text-sm sm:text-2xl font-bold text-ink-800 group-hover:text-pink-600 transition-colors leading-tight">
                    {member.name}
                  </h3>
                  <p className="mt-1 sm:mt-1.5 text-[11px] sm:text-base text-ink-700 leading-snug">{member.role}</p>

                  <button
                    type="button"
                    onClick={() => setExpandedMember(isExpanded ? null : member.name)}
                    aria-expanded={isExpanded}
                    className="mt-2.5 sm:mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-pink-600 hover:text-pink-800 transition-colors"
                  >
                    {isExpanded ? 'Less' : 'More info'}
                    <ChevronDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 sm:mt-5 pt-3 sm:pt-5 border-t border-ink-100">
                          <p className="text-[11px] sm:text-sm text-ink-600 leading-relaxed">{member.description}</p>
                          <div className="flex flex-wrap gap-1 sm:gap-2 mt-2.5 sm:mt-4">
                            {member.skills.map((skill) => (
                              <span key={skill} className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-pink-50 text-pink-700 text-[9px] sm:text-xs font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-1.5 sm:gap-2 mt-3 sm:mt-5">
                            {[
                              { Icon: Linkedin, href: member.socials.linkedin, label: 'LinkedIn' },
                              { Icon: Github, href: member.socials.github, label: 'GitHub' },
                              { Icon: Mail, href: member.socials.email, label: 'Email' },
                            ].map(({ Icon, href, label }) => (
                              <a
                                key={label}
                                href={href}
                                aria-label={`${member.name} ${label}`}
                                className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-ink-50 text-ink-600 flex items-center justify-center hover:bg-pink-gradient hover:text-white transition-all duration-300"
                              >
                                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              </a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}