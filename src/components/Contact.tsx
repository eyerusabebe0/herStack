import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/lib/hooks';

const SERVICES = ['Website Development', 'System Development', 'Website Maintenance'];
const BUDGETS = ['Starter', 'Business', 'Custom Platform'];

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'herstacktech@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+251994430049 / +251 982622917' },
  { icon: MapPin, label: 'Location', value: 'Bahir Dar, Ethiopia' },
];

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', service_needed: '', budget: '', description: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.full_name.trim()) e.full_name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.description.trim()) e.description = 'Please describe your project';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const response = await fetch('https://formsubmit.co/ajax/herstacktech@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.full_name,
          email: form.email,
          phone: form.phone || 'Not provided',
          service: form.service_needed || 'Not specified',
          budget: form.budget || 'Not specified',
          message: form.description,
          _subject: `New project inquiry from ${form.full_name}`,
          _captcha: 'false',
        }),
      });
      if (!response.ok) throw new Error('Email request failed');
      setStatus('success');
      setForm({ full_name: '', email: '', phone: '', service_needed: '', budget: '', description: '' });
    } catch {
      setStatus('error');
    }
  };

  const update = (key: string, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: '' }));
  };

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-100/30 rounded-full blur-[120px] -z-10" />

      <div ref={ref} className="container-max px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-16"
        >
          <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">Contact</span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold mt-3 text-ink-950 text-balance">
            Let's Build Your Next <span className="gradient-text">Digital Product</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink-600 max-w-2xl mx-auto text-balance">
            Have an idea? Tell us what you need and let's turn it into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-1 gap-2.5 sm:gap-4 sm:block sm:space-y-4"
          >
            {CONTACT_INFO.map((info) => (
              <div key={info.label} className="card-base rounded-xl sm:rounded-2xl p-3 sm:p-5 flex items-center gap-2.5 sm:gap-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-pink-gradient flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs text-ink-500 uppercase tracking-wider">{info.label}</div>
                  <div className="text-ink-950 font-medium text-xs sm:text-base truncate">{info.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="col-span-2 lg:col-span-3 mt-3 sm:mt-0"
          >
            <div className="card-base rounded-2xl sm:rounded-3xl p-4 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <FormField label="Full Name" error={errors.full_name}>
                    <input type="text" value={form.full_name} onChange={(e) => update('full_name', e.target.value)} placeholder="John Doe" className="form-input" />
                  </FormField>
                  <FormField label="Email" error={errors.email}>
                    <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="john@example.com" className="form-input" />
                  </FormField>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <FormField label="Phone Number">
                    <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+251 900 000 000" className="form-input" />
                  </FormField>
                  <FormField label="Service Needed">
                    <select value={form.service_needed} onChange={(e) => update('service_needed', e.target.value)} className="form-input">
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </FormField>
                </div>

                <FormField label="Budget">
                  <select value={form.budget} onChange={(e) => update('budget', e.target.value)} className="form-input">
                    <option value="">Select a plan</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </FormField>

                <FormField label="Project Description" error={errors.description}>
                  <textarea value={form.description} onChange={(e) => update('description', e.target.value)} rows={4} placeholder="Tell us about your project..." className="form-input resize-none" />
                </FormField>

                {status === 'error' && <p className="text-pink-600 text-sm">Something went wrong. Please try again or email us directly.</p>}

                <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-60 justify-center">
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                {status === 'success' && (
                  <p className="flex items-center justify-center gap-2 text-sm text-green-600" role="status">
                    <CheckCircle2 className="w-4 h-4" /> Message sent successfully.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.7rem 0.9rem;
          border-radius: 0.75rem;
          background: #ffffff;
          border: 1px solid #e7e5e4;
          color: #1c1917;
          font-size: 0.875rem;
          transition: all 0.2s;
        }
        .form-input::placeholder { color: #a8a29e; }
        .form-input:focus {
          outline: none;
          border-color: rgba(236,72,153,0.5);
          box-shadow: 0 0 0 3px rgba(236,72,153,0.1);
        }
      `}</style>
    </section>
  );
}

function FormField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[10px] sm:text-xs font-medium text-ink-500 mb-1.5 sm:mb-2 uppercase tracking-wider">{label}</label>
      {children}
      {error && <p className="text-pink-600 text-xs mt-1.5">{error}</p>}
    </div>
  );
}