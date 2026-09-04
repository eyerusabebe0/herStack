import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { useReveal } from '@/lib/hooks';

const PLANS = [
  {
    name: 'STARTER',
    tagline: 'Simple business website',
    price: '8,000 – 15,000 ETB',
    timeline: '1–2 weeks',
    features: ['Up to 5 pages', 'Responsive design', 'Contact form', 'Basic SEO setup', '1 round of revisions', '1 month free support'],
    popular: false,
    cta: 'Choose Starter',
  },
  {
    name: 'BUSINESS',
    tagline: 'Custom web app with backend',
    price: '20,000 – 40,000 ETB',
    timeline: '3–5 weeks',
    features: ['Everything in Starter', 'Custom UI/UX', 'Database & backend', 'Admin dashboard', 'Authentication', '3 rounds of revisions', '3 months free support'],
    popular: true,
    cta: 'Choose Business',
  },
  {
    name: 'CUSTOM PLATFORM',
    tagline: 'Full system or SaaS product',
    price: '45,000+ ETB',
    timeline: '6–10 weeks',
    features: ['Everything in Business', 'Advanced architecture', 'API integrations', 'Multi-user roles & admin panel', 'Security hardening', '6 months priority support'],
    popular: false,
    cta: 'Choose Custom',
  },
];

export default function Pricing() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="pricing" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-100/50 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-100/40 rounded-full blur-[120px]" />

      <div ref={ref} className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-16 px-5 sm:px-8"
        >
          <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">Pricing</span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold mt-3 text-ink-950 text-balance">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm text-ink-500 max-w-2xl mx-auto text-balance">
            Every project starts with a free consultation to scope exact needs and timeline.
          </p>
        </motion.div>

        {/* Swipeable row on mobile, grid from sm up */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-5 pb-4 sm:pb-0 sm:px-8 sm:grid sm:grid-cols-3 sm:gap-7 sm:overflow-visible max-w-5xl mx-auto md:items-center [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 min-w-[82%] sm:min-w-0 flex-shrink-0 sm:flex-shrink snap-center ${
                plan.popular
                  ? 'bg-pink-gradient shadow-pink-lg sm:scale-[1.05] lg:scale-110'
                  : 'bg-white border border-ink-100 shadow-card hover:-translate-y-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-pink-600 text-xs font-bold shadow-lg whitespace-nowrap">
                  <Star className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
                  MOST POPULAR
                </div>
              )}
              <h3 className="font-display text-lg font-bold text-white">{plan.name}</h3>
              <p className={`text-sm mt-1 ${plan.popular ? 'text-white/80' : 'text-ink-500'}`}>{plan.tagline}</p>
              <div className={`font-display text-xl sm:text-2xl font-bold mt-4 ${plan.popular ? 'text-white' : 'text-ink-950'}`}>{plan.price}</div>
              <div className={`text-xs mt-1.5 ${plan.popular ? 'text-white/70' : 'text-ink-500'}`}>Delivery: {plan.timeline}</div>
              <div className={`h-px my-6 ${plan.popular ? 'bg-white/20' : 'bg-ink-100'}`} />
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-white/20' : 'bg-pink-100'}`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-pink-600'}`} />
                    </div>
                    <span className={plan.popular ? 'text-white/90' : 'text-ink-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full mt-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-pink-600 hover:shadow-lg hover:-translate-y-0.5'
                    : 'bg-ink-950 text-white hover:bg-pink-gradient'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-ink-500 text-xs sm:text-sm mt-8 sm:mt-16 max-w-xl mx-auto px-5"
        >
          Final pricing depends on project requirements, features, complexity, and timeline. Numbers above are starting estimates — every quote is confirmed after a free consultation.
        </motion.p>
      </div>
    </section>
  );
}