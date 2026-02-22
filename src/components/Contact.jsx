import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Send, CheckCircle, MapPin, MessageSquare } from 'lucide-react';

const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/rajavel-prabakar', color: 'hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/rajavel-p', color: 'hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400' },
    { icon: Mail, label: 'Email', href: 'mailto:rajavelprabakar15@gmail.com', color: 'hover:text-red-500 dark:hover:text-red-400 hover:border-red-400' },
];

function FloatingInput({ id, label, type = 'text', value, onChange, required, textarea }) {
    const Tag = textarea ? 'textarea' : 'input';
    return (
        <div className="relative">
            <Tag
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={label}
                rows={textarea ? 5 : undefined}
                className={`w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-matte-500 bg-white dark:bg-matte-700
          focus:border-electric-500 dark:focus:border-electric-400 focus:outline-none
          text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600
          transition-all duration-200 text-sm font-medium
          ${textarea ? 'resize-none' : ''}`}
            />
        </div>
    );
}

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate send
        await new Promise(r => setTimeout(r, 1500));
        setSent(true);
        setLoading(false);
    };

    return (
        <section id="contact" ref={ref} className="section-pad bg-gray-50/50 dark:bg-matte-800/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-electric-500 dark:text-electric-400 mb-3 block">
                        Get In Touch
                    </span>
                    <h2 className="section-title text-navy-900 dark:text-white">
                        Let's{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-600 to-navy-600 dark:from-electric-400 dark:to-blue-400">
                            Connect
                        </span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-500 mt-3 max-w-md mx-auto">
                        Open to full-time roles, freelance projects, and exciting collaborations. Drop a message!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8 items-start">

                    {/* Left Info Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Availability */}
                        <div className="p-6 rounded-2xl bg-white dark:bg-matte-700/60 border border-gray-100 dark:border-matte-500/40">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-semibold text-green-600 dark:text-green-400">Available for Work</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Currently open to <strong className="text-navy-800 dark:text-white">full-time</strong> roles in data science, machine learning, and software development. Response within 24 hours.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="p-6 rounded-2xl bg-white dark:bg-matte-700/60 border border-gray-100 dark:border-matte-500/40 space-y-4">
                            <h3 className="font-display font-bold text-navy-900 dark:text-white">Contact Details</h3>
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <Mail size={16} className="text-electric-500 flex-shrink-0" />
                                <a href="mailto:rajavelprabakar15@gmail.com" className="hover:text-electric-600 dark:hover:text-electric-400 transition-colors duration-200">
                                    rajavelprabakar15@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <MapPin size={16} className="text-electric-500 flex-shrink-0" />
                                <span>Attur, Salem / Chennai, India</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <MessageSquare size={16} className="text-electric-500 flex-shrink-0" />
                                <span>Response time: &lt; 24 hours</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="p-6 rounded-2xl bg-white dark:bg-matte-700/60 border border-gray-100 dark:border-matte-500/40">
                            <h3 className="font-display font-bold text-navy-900 dark:text-white mb-4">Find Me Online</h3>
                            <div className="flex gap-3">
                                {socials.map(({ icon: Icon, label, href, color }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-xl
                      border border-gray-200 dark:border-matte-500 text-gray-400 dark:text-gray-500
                      ${color} hover:bg-gray-50 dark:hover:bg-matte-600
                      transition-all duration-200 group`}
                                    >
                                        <Icon size={20} />
                                        <span className="text-[10px] font-semibold">{label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        <div className="p-7 rounded-2xl bg-white dark:bg-matte-700/60 border border-gray-100 dark:border-matte-500/40 shadow-navy-sm">
                            <AnimatePresence mode="wait">
                                {sent ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-16 text-center gap-4"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                            <CheckCircle size={32} className="text-green-500" />
                                        </div>
                                        <h3 className="font-display font-bold text-xl text-navy-900 dark:text-white">Message Sent!</h3>
                                        <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                                            Thanks for reaching out! I'll get back to you within 24 hours.
                                        </p>
                                        <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }} className="btn-secondary mt-2">
                                            Send Another
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                    >
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <FloatingInput id="name" label="Your Name" value={form.name} onChange={handleChange('name')} required />
                                            <FloatingInput id="email" label="Email Address" type="email" value={form.email} onChange={handleChange('email')} required />
                                        </div>
                                        <FloatingInput id="subject" label="Subject" value={form.subject} onChange={handleChange('subject')} required />
                                        <FloatingInput id="message" label="Your Message..." value={form.message} onChange={handleChange('message')} textarea required />

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            {loading ? (
                                                <>
                                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={18} />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
