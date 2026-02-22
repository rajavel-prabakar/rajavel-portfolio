import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
    {
        degree: 'Master of Computer Applications (MCA)',
        institution: 'University of Madras, Guindy',
        period: '2024 – 2026',
        location: 'Chennai, Tamil Nadu',
        grade: 'Pursuing',
        highlights: ['Data Science & Machine Learning', 'Programming & Software Development', 'University of Madras Postgraduate Program'],
        color: 'from-electric-500 to-blue-600',
    },
    {
        degree: 'Bachelor of Computer Applications (BCA)',
        institution: 'Vysya College, Ayothiyapattinam',
        period: '2021 – 2024',
        location: 'Salem, Tamil Nadu',
        grade: 'Completed',
        highlights: ['Computer Applications', 'Programming Fundamentals', 'Database Management'],
        color: 'from-violet-500 to-purple-600',
    },
    {
        degree: 'Higher Secondary (12th) — Computer Science',
        institution: 'Bharathiyar Matriculation Higher Secondary School',
        period: '2019 – 2021',
        location: 'Attur, Tamil Nadu',
        grade: 'Completed',
        highlights: ['Computer Science', 'Mathematics', 'Higher Secondary Certificate'],
        color: 'from-emerald-500 to-teal-600',
    },
];

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="education" ref={ref} className="section-pad bg-gray-50/50 dark:bg-matte-800/30">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-electric-500 dark:text-electric-400 mb-3 block">
                        Academic Background
                    </span>
                    <h2 className="section-title text-navy-900 dark:text-white">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-600 to-navy-600 dark:from-electric-400 dark:to-blue-400">
                            Education
                        </span>
                    </h2>
                </motion.div>

                <div className="space-y-6">
                    {education.map((edu, i) => (
                        <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: i * 0.15 }}
                            className="group p-6 md:p-8 rounded-2xl bg-white dark:bg-matte-700/60 border border-gray-100 dark:border-matte-500/40 hover:border-electric-200 dark:hover:border-electric-700/40 hover:shadow-navy-sm transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row gap-5">
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-sm flex-shrink-0 group-hover:shadow-glow-sm transition-all duration-300`}>
                                    <GraduationCap size={24} className="text-white" />
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                                        <div>
                                            <h3 className="font-display font-bold text-base md:text-lg text-navy-900 dark:text-white">{edu.degree}</h3>
                                            <p className={`font-semibold text-sm bg-clip-text text-transparent bg-gradient-to-r ${edu.color}`}>
                                                {edu.institution}
                                            </p>
                                        </div>
                                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-700/40 flex-shrink-0">
                                            {edu.grade}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mb-3 text-xs text-gray-500 dark:text-gray-500">
                                        <span className="flex items-center gap-1.5"><Calendar size={12} /> {edu.period}</span>
                                        <span className="flex items-center gap-1.5"><MapPin size={12} /> {edu.location}</span>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {edu.highlights.map((h, j) => (
                                            <span key={j} className="px-2.5 py-1 text-xs rounded-lg bg-gray-50 dark:bg-matte-600 text-gray-600 dark:text-gray-400 border border-gray-200/60 dark:border-matte-500/50">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
