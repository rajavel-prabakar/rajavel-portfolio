import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const categories = [
    {
        title: 'Programming',
        color: 'from-violet-500 to-purple-600',
        glow: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]',
        skills: [
            { name: 'Python', level: 90, icon: '🐍' },
            { name: 'React', level: 80, icon: '⚛️' },
            { name: 'JavaScript', level: 78, icon: '⚡' },
            { name: 'HTML & CSS', level: 82, icon: '🎨' },
            { name: 'SQL', level: 85, icon: '🗃️' },
        ],
    },
    {
        title: 'AI / ML',
        color: 'from-electric-500 to-blue-600',
        glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
        skills: [
            { name: 'PyTorch', level: 82, icon: '🔥' },
            { name: 'Scikit-learn', level: 85, icon: '🔬' },
            { name: 'OpenCV', level: 78, icon: '👁️' },
            { name: 'Pandas & NumPy', level: 88, icon: '📊' },
            { name: 'AdaBoost / ENet', level: 75, icon: '🧠' },
        ],
    },
    {
        title: 'Tools & Analytics',
        color: 'from-emerald-500 to-teal-600',
        glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
        skills: [
            { name: 'Git & GitHub', level: 88, icon: '📦' },
            { name: 'Tableau', level: 78, icon: '📈' },
            { name: 'Power BI', level: 75, icon: '📉' },
            { name: 'Jupyter Notebook', level: 90, icon: '📓' },
            { name: 'Streamlit', level: 80, icon: '🚀' },
        ],
    },
    {
        title: 'Database',
        color: 'from-orange-500 to-amber-600',
        glow: 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]',
        skills: [
            { name: 'MySQL', level: 85, icon: '🗄️' },
            { name: 'Data Preprocessing', level: 88, icon: '🔧' },
            { name: 'Statistical Analysis', level: 82, icon: '📐' },
            { name: 'Data Visualization', level: 85, icon: '📊' },
            { name: 'Predictive Modeling', level: 80, icon: '🎯' },
        ],
    },
];

function SkillBar({ name, level, icon, inView, delay }) {
    return (
        <div className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300">
                    <span>{icon}</span> {name}
                </span>
                <span className="text-xs font-bold text-gray-400 dark:text-gray-500">{level}%</span>
            </div>
            <div className="h-1.5 bg-gray-100 dark:bg-matte-600 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="h-full rounded-full bg-gradient-to-r from-current to-current"
                    style={{ background: 'linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)' }}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="skills" ref={ref} className="section-pad">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-electric-500 dark:text-electric-400 mb-3 block">
                        Technical Expertise
                    </span>
                    <h2 className="section-title text-navy-900 dark:text-white">
                        Skills &{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-600 to-navy-600 dark:from-electric-400 dark:to-blue-400">
                            Technologies
                        </span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-500 mt-3 max-w-xl mx-auto">
                        A curated stack for building intelligent, scalable, and production-ready AI systems.
                    </p>
                </motion.div>

                {/* Category Cards */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {categories.map((cat, catIdx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: catIdx * 0.12 }}
                            className={`group p-6 rounded-2xl bg-white dark:bg-matte-700/60
                border border-gray-100 dark:border-matte-500/40
                hover:border-current transition-all duration-300
                ${cat.glow} hover:-translate-y-2`}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-sm`}>
                                    <div className="w-2 h-2 rounded-full bg-white/80" />
                                </div>
                                <h3 className="font-display font-bold text-navy-900 dark:text-white">{cat.title}</h3>
                            </div>

                            {/* Skill Bars */}
                            <div className="space-y-3.5">
                                {cat.skills.map((skill, i) => (
                                    <SkillBar
                                        key={skill.name}
                                        {...skill}
                                        inView={isInView}
                                        delay={catIdx * 0.1 + i * 0.08}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
