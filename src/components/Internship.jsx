import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const experiences = [
    {
        role: 'AI & Backend Developer Intern',
        company: 'vibexio.ai',
        logo: '🧠',
        location: 'India',
        period: 'Present',
        type: 'Current',
        color: 'from-pink-500 to-violet-600',
        highlights: [
            'Working as an AI & Backend Developer Intern at vibexio.ai',
            'Contributing to AI-powered backend systems and product development',
        ],
    },
    {
        role: 'Web Development Intern',
        company: 'Xenforte Technology Private Limited',
        logo: '🌐',
        location: 'Chennai, India',
        period: 'August 2025 – November 2025',
        type: 'Internship',
        color: 'from-emerald-500 to-teal-600',
        highlights: [
            'Contributed to an existing Audit Management System project over a three-month internship',
            'Extracted and validated key fields from audit forms such as ITR, GST, and ROC documents',
            'Resolved functional bugs and redesigned the user interface using HTML, CSS, and JavaScript',
            'Gained hands-on experience in frontend development, debugging, and UI enhancement',
        ],
    },
    {
        role: 'Software Development Intern',
        company: 'Naso Technologies Pvt. Ltd.',
        logo: '🤖',
        location: 'India',
        period: 'May 2025 – June 2025',
        type: 'Internship',
        color: 'from-electric-500 to-blue-600',
        highlights: [
            'Developed a machine learning–based Customer Churn Prediction system end-to-end',
            'Performed data preprocessing and predictive modeling using customer content usage, subscription history, and engagement metrics',
            'Implemented and evaluated multiple algorithms including AdaBoost to improve prediction accuracy',
            'Deployed the final solution as an interactive Streamlit web application for data-driven retention strategies',
        ],
    },
];

export default function Internship() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="internship" ref={ref} className="section-pad">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-electric-500 dark:text-electric-400 mb-3 block">
                        Work Experience
                    </span>
                    <h2 className="section-title text-navy-900 dark:text-white">
                        Professional{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-600 to-navy-600 dark:from-electric-400 dark:to-blue-400">
                            Journey
                        </span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                        className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-400 via-violet-400 to-emerald-400 origin-top"
                        style={{ transformOrigin: 'top' }}
                    />

                    <div className="space-y-12">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: i * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 mt-6 z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{ delay: i * 0.2 + 0.3, type: 'spring', stiffness: 300 }}
                                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-glow-sm text-lg`}
                                    >
                                        {exp.logo}
                                    </motion.div>
                                </div>

                                {/* Spacer for opposite side */}
                                <div className="hidden md:block flex-1" />

                                {/* Card */}
                                <div className="flex-1 ml-16 md:ml-0">
                                    <div className="p-6 rounded-2xl bg-white dark:bg-matte-700/60 border border-gray-100 dark:border-matte-500/40 hover:border-electric-200 dark:hover:border-electric-700/40 hover:shadow-navy-sm transition-all duration-300">

                                        {/* Header */}
                                        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                            <div>
                                                <h3 className="font-display font-bold text-lg text-navy-900 dark:text-white">{exp.role}</h3>
                                                <p className={`font-semibold text-sm bg-clip-text text-transparent bg-gradient-to-r ${exp.color}`}>
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <span className="px-3 py-1 text-xs font-bold rounded-full bg-electric-50 dark:bg-electric-900/20 text-electric-600 dark:text-electric-400 border border-electric-200 dark:border-electric-700/50 flex-shrink-0">
                                                {exp.type}
                                            </span>
                                        </div>

                                        {/* Meta */}
                                        <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-500 dark:text-gray-500">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={12} /> {exp.period}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <MapPin size={12} /> {exp.location}
                                            </span>
                                        </div>

                                        {/* Highlights */}
                                        <ul className="space-y-2">
                                            {exp.highlights.map((point, j) => (
                                                <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.color} flex-shrink-0`} />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

