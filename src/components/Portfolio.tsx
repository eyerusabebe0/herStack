import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useReveal } from '@/lib/hooks';
import nefsyimarImage from '@/assets/hero/nefsyimar.jpg';
import amgcImage from '@/assets/hero/amgc.jpg';
import gymImage from '@/assets/hero/gym.jpg';
import menuImage from '@/assets/hero/menu.jpg';
import clinicImage from '@/assets/clinic.png';
import cakeImage from '@/assets/cake.png';

type Category = 'Website Development' | 'System Development' ;

interface Project {
  title: string;
  category: Category;
  description: string;
  image: string;
  hasGithub: boolean;
  details: string;
  liveUrl?: string;
  githubUrl?: string;
}

const PROJECTS: Project[] = [
  {
    title: 'AMGC Website',
    category: 'Website Development',
    description: 'Professional business website presenting services and digital presence.',
    image: amgcImage,
    hasGithub: true,
    details: 'A fully responsive business website built with modern web technologies. Features include a dynamic homepage, service showcase, contact integration, and SEO optimization.',
    liveUrl: 'https://amcgcompany.com',
  },
  {
    title: 'Nefsyimar System',
    category: 'System Development',
    description: 'A respectful space for families to build memorial pages for loved ones.',
    image: nefsyimarImage,
    hasGithub: true,
    details: 'A complete business management system with admin dashboard, user authentication, database integration, and custom workflows.',
    liveUrl: 'https://nefsyimar.ruhamus.com/',
  },
  {
    title: 'Dentora Dental Clinic',
    category: 'Website Development',
    description: 'A clean site for a dental clinic to present services and take inquiries.',
    image: clinicImage,
    hasGithub: true,
    githubUrl: 'https://github.com/eyerusabebe0/Dentora',
    details: 'A clean, simple site for a dental clinic to present services and take inquiries.',
    liveUrl: 'https://dentora-swart.vercel.app/',
  },
  {
    title: 'Cake Hub',
    category: 'System Development',
    description: 'Multi-tenant SaaS — bakeries get their own branded ordering page.',
    image: cakeImage,
    hasGithub: true,
    githubUrl: 'https://github.com/eyerusabebe0/Cake-Hub',
    details: "Multi-tenant SaaS. Bakeries get their own branded ordering page under one shared platform — customers order directly from their tenant's shop.",
    liveUrl: 'https://cake-hub-nu.vercel.app/tenant/jsweet/',
  },
  {
    title: 'MK Digital Menu',
    category: 'Website Development',
    description: 'Digital menu experience for restaurants with ordering and engagement.',
    image: menuImage,
    hasGithub: false,
    details: 'A digital menu solution for restaurants that supports menu browsing, ordering, and push notifications. Includes an admin panel for menu management.',
    liveUrl: 'https://digital-menu1-chzd.vercel.app/',
  },
  {
    title: 'Gym Website',
    category: 'Website Development',
    description: 'Modern gym website promoting services, trainers, and memberships.',
    image: gymImage,
    hasGithub: false,
    details: 'A high-energy fitness website with class schedules, trainer profiles, membership plans, and a contact form.',
    liveUrl: 'https://gym-website-updated.vercel.app/',
  },
];

const FILTERS = ['All', 'Websites', 'Systems'] as const;
type Filter = (typeof FILTERS)[number];

const FILTER_MAP: Record<Filter, Category[]> = {
  All: ['Website Development', 'System Development'],
  Websites: ['Website Development'],
  Systems: ['System Development'],
};

export default function Portfolio() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [filter, setFilter] = useState<Filter>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = PROJECTS.filter((p) => FILTER_MAP[filter].includes(p.category));

  return (
    <section id="portfolio" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/40 rounded-full blur-[120px] -z-10" />
      <div ref={ref} className="container-max px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6 sm:mb-12"
        >
          <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">Portfolio</span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold mt-3 text-ink-950 text-balance">
            Our Recent <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                filter === f ? 'bg-pink-gradient text-white shadow-pink' : 'bg-ink-50 text-ink-600 hover:bg-pink-50 hover:text-pink-600'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 gap-2.5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelected(project)}
                className="group relative cursor-pointer rounded-xl sm:rounded-3xl overflow-hidden card-base hover:shadow-card-hover"
              >
                <div className="relative h-32 sm:h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />
                  <span className="hidden sm:inline-block absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur text-pink-600">
                    {project.category}
                  </span>
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                    <h3 className="font-display text-xs sm:text-xl font-bold text-white mb-0.5 sm:mb-1 leading-tight">{project.title}</h3>
                    <p className="hidden sm:block text-white/80 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-ink-950/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 40 }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-t-3xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative h-52 sm:h-64">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-ink-800 hover:bg-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-600">{selected.category}</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink-950 mt-4 mb-3">{selected.title}</h3>
                <p className="text-ink-600 leading-relaxed text-sm sm:text-base">{selected.details}</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  {selected.liveUrl ? (
                    <a href={selected.liveUrl} target="_blank" rel="noreferrer" className="btn-primary !py-2.5 text-sm justify-center">
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button className="btn-primary !py-2.5 text-sm justify-center" type="button">
                      View Project <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                  {selected.hasGithub &&
                    (selected.githubUrl ? (
                      <a href={selected.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary !py-2.5 text-sm justify-center">
                        <Github className="w-4 h-4" /> GitHub
                      </a>
                    ) : (
                      <button className="btn-secondary !py-2.5 text-sm justify-center" type="button">
                        <Github className="w-4 h-4" /> GitHub
                      </button>
                    ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}