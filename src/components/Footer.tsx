
const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'team', label: 'Our Team' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'pricing', label: 'Pricing' },
];

const SERVICES = ['Website Development', 'System Development', 'Website Maintenance', 'Mobile App'];



export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-ink-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-pink-500/5 rounded-full blur-[100px]" />

      <div className="container-max px-5 sm:px-8 py-14 sm:py-16 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 sm:gap-8 mb-12">
          <div className="col-span-2 md:col-span-3 md:flex md:items-center md:gap-8">
            <div className="flex items-center gap-2.5 mb-4 md:mb-0">
              <img
                src="/logo.png"
                alt="Herstack Technology"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform"
              />
           
            </div>
            <p className="text-sm text-ink-400 leading-relaxed md:max-w-xl">
              Building modern digital experiences for businesses and organizations.
            </p>
         
          </div>

          <div className="min-w-0">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollTo(item.id)} className="text-sm text-ink-400 hover:text-pink-400 transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service}>
                  <button onClick={() => scrollTo('services')} className="text-sm text-ink-400 hover:text-pink-400 transition-colors text-left">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Get In Touch</h4>
            <ul className="space-y-2.5 text-sm text-ink-400">
              <li>herstacktech@gmail.com</li>
              <li>+251 982622917 / +251994430049</li>
              <li>Addis Ababa, Ethiopia</li>
            </ul>
            <button
              onClick={() => scrollTo('contact')}
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-pink-gradient text-white shadow-pink hover:shadow-pink-lg hover:-translate-y-0.5 transition-all"
            >
              Start Your Project
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm text-ink-500">© 2026 Herstack Technology. All Rights Reserved.</p>
        </div>
      </div>

    </footer>
  );
}