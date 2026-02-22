import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BadgeCheck, Calendar, ExternalLink } from 'lucide-react';

const certs = [
    { name: 'Introduction to OpenAI GPT Models', issuer: 'Infosys Springboard', date: 'Oct 2023', color: 'from-electric-500 to-blue-600', icon: '🤖' },
    { name: 'Introduction to Artificial Intelligence', issuer: 'Infosys Springboard', date: 'Oct 2023', color: 'from-violet-500 to-purple-600', icon: '🧠' },
    { name: 'Introduction to Deep Learning', issuer: 'Infosys Springboard', date: 'Oct 2023', color: 'from-pink-500 to-rose-600', icon: '🔥' },
    { name: 'Introduction to Natural Language Processing', issuer: 'Infosys Springboard', date: 'Oct 2023', color: 'from-cyan-500 to-blue-600', icon: '💬' },
    { name: 'Ethical AI', issuer: 'Infosys Springboard', date: 'Oct 2023', color: 'from-emerald-500 to-teal-600', icon: '⚖️' },
    { name: 'Programming in Python', issuer: 'Online Certification', date: '2024', color: 'from-orange-500 to-amber-600', icon: '🐍' },
    { name: 'Statistics for Data Science', issuer: 'Online Certification', date: '2024', color: 'from-violet-500 to-indigo-600', icon: '📊' },
    { name: 'Fundamentals of Databases', issuer: 'Online Certification', date: '2024', color: 'from-slate-500 to-gray-600', icon: '🗄️' },
];

export default function Certifications() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="certifications" ref={ref} className="section-pad">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-electric-500 dark:text-electric-400 mb-3 block">
                        Credentials
                    </span>
                    <h2 className="section-title text-navy-900 dark:text-white">
                        Licenses &{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-600 to-navy-600 dark:from-electric-400 dark:to-blue-400">
                            Certifications
                        </span>
                    </h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {certs.map((cert, i) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-matte-700/60 border border-gray-100 dark:border-matte-500/40 hover:border-electric-200 dark:hover:border-electric-700/50 hover:shadow-navy-sm hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-xl shadow-sm flex-shrink-0 group-hover:shadow-glow-sm transition-shadow duration-300`}>
                                {cert.icon}
                            </div>

                            <div className="flex-1 min-w-0">
                                <h3 className="font-display font-semibold text-sm text-navy-900 dark:text-white leading-snug mb-1">
                                    {cert.name}
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">{cert.issuer}</p>
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-600">
                                        <Calendar size={10} /> {cert.date}
                                    </span>
                                    <span className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400 font-medium">
                                        <BadgeCheck size={11} /> Verified
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
