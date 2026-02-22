import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Layers, Award, Users, Briefcase } from 'lucide-react';

const skills = [
    'Python', 'React', 'PyTorch', 'OpenCV', 'ENet', 'Streamlit',
    'Scikit-learn', 'Pandas', 'NumPy', 'MySQL', 'Git', 'GitHub',
    'Tableau', 'Power BI', 'Jupyter Notebook', 'AdaBoost',
];

const stats = [
    { icon: Code2, label: 'Projects Built', value: '2+' },
    { icon: Briefcase, label: 'Internships', value: '2' },
    { icon: Award, label: 'Certifications', value: '3' },
    { icon: Brain, label: 'ML Models Built', value: '5+' },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="about" ref={ref} className="section-pad bg-gray-50/50 dark:bg-matte-800/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-electric-500 dark:text-electric-400 mb-3 block">
                        Who I Am
                    </span>
                    <h2 className="section-title text-navy-900 dark:text-white">
                        About <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-600 to-navy-600 dark:from-electric-400 dark:to-blue-400">Me</span>
                    </h2>
                </motion.div>

                {/* Two-column layout */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left — Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Avatar + Name */}
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-navy-700 to-electric-500 flex items-center justify-center shadow-glow-md flex-shrink-0">
                                <span className="text-white font-display font-black text-2xl">RP</span>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-2xl text-navy-900 dark:text-white">Rajavel P</h3>
                                <p className="text-electric-600 dark:text-electric-400 text-sm font-medium">MCA Student • Data Scientist • ML Engineer</p>
                            </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                            I'm a postgraduate <strong className="text-navy-800 dark:text-white">MCA student</strong> from{' '}
                            <strong className="text-navy-800 dark:text-white">University of Madras</strong> with a strong foundation in
                            Python programming, data science, and machine learning. I build intelligent systems that solve real-world problems.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                            My experience spans machine learning–based prediction systems (Customer Churn Prediction with AdaBoost
                            deployed on Streamlit), deep learning for computer vision (Lane Detection with ENet/PyTorch), and
                            comprehensive data analytics for air quality forecasting.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                            I've interned at <strong className="text-navy-800 dark:text-white">Naso Technologies</strong> (ML development)
                            {' '}and <strong className="text-navy-800 dark:text-white">Xenforte Technology</strong> (frontend/web development),
                            {' '}contributing to real production systems with integrity and a passion for technology.
                        </p>

                        {/* CTA */}
                        <div className="pt-2 flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                                className="btn-primary"
                            >
                                Let's Connect
                            </a>
                            <a href="/resume.pdf" download className="btn-secondary">
                                Download CV
                            </a>
                        </div>
                    </motion.div>

                    {/* Right — Skill Badges + Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="space-y-8"
                    >
                        {/* Floating skill badges */}
                        <div
                            className="p-6 rounded-2xl border border-gray-200/60 dark:border-matte-500/50 bg-white dark:bg-matte-700/50 backdrop-blur-sm shadow-navy-sm"
                        >
                            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-4">Core Expertise</p>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, i) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.7 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.4 + i * 0.04, type: 'spring', stiffness: 200 }}
                                        className="skill-badge"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-3">
                            {stats.map(({ icon: Icon, label, value }, i) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="p-4 rounded-xl bg-white dark:bg-matte-700 border border-gray-100 dark:border-matte-500/50
                    hover:border-electric-300 dark:hover:border-electric-700/50 hover:shadow-glow-sm
                    transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-electric-50 dark:bg-electric-900/20 group-hover:bg-electric-500 transition-colors duration-300">
                                            <Icon size={16} className="text-electric-600 dark:text-electric-400 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-display font-black text-navy-900 dark:text-white">{value}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-500 leading-tight">{label}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
