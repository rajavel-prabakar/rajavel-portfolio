import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Send, CheckCircle, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const socials = [
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/rajavel-prabakar' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/rajavel-p' },
  { icon: Mail,     label: 'Email',    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=rajavelprabakar15@gmail.com' },
];

const inputClass = "w-full p-3 md:p-4 rounded-xl border font-mono text-sm transition-all duration-200 outline-none select-text bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:bg-[#0D1117]/60 dark:border-neon-cyan/20 dark:text-gray-100 dark:focus:border-neon-cyan/60 dark:focus:shadow-[0_0_14px_rgba(0,229,255,0.1)] dark:focus:ring-0";

function TerminalInput({ id, label, type = 'text', value, onChange, required, textarea }) {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[0.6rem] tracking-[0.2em] mb-1.5 text-gray-500 dark:text-neon-cyan/55"
      >
        {'$ '}{label.toLowerCase().replace(/ /g, '_')}<span className="text-blue-500 dark:text-neon-cyan">:</span>
      </label>
      <Tag
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={`Enter ${label.toLowerCase()}...`}
        rows={textarea ? 5 : undefined}
        className={inputClass}
        style={{ resize: textarea ? 'none' : undefined }}
      />
    </div>
  );
}

export default function Contact() {
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = field => e => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send('service_phhzvjo', 'template_vvbs3ui',
        { name: form.name, email: form.email, subject: form.subject, message: form.message },
        '79zBYL6HlY7VFkQGS'
      );
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Email send failed:', err);
      alert('Failed to send message. Please try again.');
    }
    setLoading(false);
  };

  return (
    <section id="contact" ref={ref} className="section-pad" style={{ position: 'relative', zIndex: 1 }}>
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '0.65rem', letterSpacing: '0.3em', color: '#00E5FF',
            display: 'block', marginBottom: 12,
          }}>
            {'>'} CONTACT_NODE --open
          </span>
          <h2 className="section-title text-gray-900 dark:text-white">
            Establish{' '}
            <span style={{
              background: 'linear-gradient(135deg, #00E5FF, #7B61FF)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Connection</span>
          </h2>
          <p className="mt-2 text-gray-600 dark:text-white/40">
            Open to collaborations, opportunities, and interesting discussions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="p-6 rounded-xl bg-white text-center border border-[#CBD5E1] dark:border-neon-cyan/20 dark:bg-[#0D1117]/80 shadow-sm">
              <p className="font-mono text-[0.6rem] tracking-[0.25em] mb-4 text-gray-400 dark:text-neon-cyan/50">
                // CONTACT_DETAILS
              </p>
              <div className="space-y-3">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rajavelprabakar15@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[0.82rem] transition-colors duration-200 text-gray-600 hover:text-blue-600 dark:text-white/55 dark:hover:text-neon-cyan no-underline"
                >
                  <Mail size={14} style={{ color: '#00E5FF' }} />
                  rajavelprabakar15@gmail.com
                </a>
                <div className="flex items-center gap-3 text-[0.82rem] text-gray-500 dark:text-white/45">
                  <MapPin size={14} className="text-purple-500 dark:text-neon-purple" />
                  Attur, Salem / Chennai
                </div>
              </div>
            </div>

            {/* Social nodes */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0D1117]/70 border border-[#CBD5E1] dark:border-neon-cyan/10 shadow-sm">
              <p className="font-mono text-[0.6rem] tracking-[0.25em] mb-4 text-gray-400 dark:text-neon-cyan/50">
                // NETWORK_NODES
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 group border-[#CBD5E1] bg-[#F7FAFC] text-[#475569] hover:border-[#0066FF] hover:bg-white hover:text-[#0066FF] hover:shadow-[0_4px_12px_rgba(0,102,255,0.1)] dark:border-neon-cyan/20 dark:bg-neon-cyan/5 dark:text-neon-cyan/60 dark:hover:border-neon-cyan dark:hover:bg-neon-cyan/10 dark:hover:text-neon-cyan dark:hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]"
              >
                    <Icon size={13} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-7 rounded-2xl bg-white dark:bg-[#0D1117]/70 border border-gray-200 dark:border-neon-cyan/10 shadow-sm"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={40} style={{ margin: '0 auto 12px', color: '#00FFA3' }} />
                  <h3 className="font-display font-bold text-[1.2rem] mb-1.5 text-gray-900 dark:text-white">
                    Transmission Sent!
                  </h3>
                  <p className="text-[0.85rem] mb-5 text-gray-600 dark:text-white/45">
                    Signal received. I'll respond soon.
                  </p>
                  <button onClick={() => setSent(false)} className="btn-secondary text-sm px-5 py-2">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                  <TerminalInput id="name"    label="Your Name"     value={form.name}    onChange={handleChange('name')}    required />
                  <TerminalInput id="email"   label="Email Address" type="email" value={form.email}   onChange={handleChange('email')}   required />
                  <TerminalInput id="subject" label="Subject"       value={form.subject} onChange={handleChange('subject')} required />
                  <TerminalInput id="message" label="Your Message"  textarea value={form.message} onChange={handleChange('message')} required />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary justify-center"
                    style={{ opacity: loading ? 0.7 : 1 }}
                  >
                    <Send size={16} />
                    {loading ? 'Transmitting...' : '[ TRANSMIT → ]'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}