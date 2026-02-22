import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';

const floatingTags = [
    'Python', 'PyTorch', 'OpenCV', 'ENet', 'React',
    'Scikit-learn', 'MySQL', 'Pandas', 'NumPy', 'Streamlit',
    'Matplotlib', 'Git', 'Tableau', 'Power BI', 'Jupyter',
];

// Particle component for animated background dots
function Particle({ style }) {
    return (
        <div
            className="absolute w-1 h-1 rounded-full bg-electric-500/40 dark:bg-electric-400/30 animate-particle"
            style={style}
        />
    );
}

const particles = Array.from({ length: 20 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    animationDuration: `${12 + Math.random() * 18}s`,
    animationDelay: `${Math.random() * 12}s`,
    width: `${2 + Math.random() * 4}px`,
    height: `${2 + Math.random() * 4}px`,
    opacity: 0.3 + Math.random() * 0.5,
}));

export default function Hero() {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated mesh gradient background */}
            <div className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark" />

            {/* Animated circle decorations */}
            <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full border border-electric-400/10 dark:border-electric-500/10 animate-spin-slow" />
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full border border-navy-400/10 dark:border-white/5 animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-electric-500/5 dark:bg-electric-500/5 blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-navy-500/5 dark:bg-blue-500/5 blur-3xl" />

            {/* Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((p, i) => <Particle key={i} style={p} />)}
            </div>

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Main Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Availability badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8
            bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/40
            text-green-700 dark:text-green-400 text-sm font-medium"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Open to Opportunities
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-4 tracking-tight"
                >
                    <span className="text-navy-900 dark:text-white">Rajavel</span>{' '}
                    <span
                        className="bg-clip-text text-transparent bg-gradient-to-r from-electric-600 via-blue-500 to-navy-600 dark:from-electric-400 dark:via-blue-300 dark:to-electric-500"
                        style={{ backgroundSize: '200% auto', animation: 'gradient-x 4s ease infinite' }}
                    >
                        P
                    </span>
                </motion.h1>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="mb-6"
                >
                    <p className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-gray-500 dark:text-gray-400 flex flex-wrap items-center justify-center gap-2 md:gap-4">
                        <span className="text-navy-800 dark:text-gray-200">MCA Student</span>
                        <span className="w-1 h-1 rounded-full bg-electric-500 hidden sm:block" />
                        <span>Data Scientist</span>
                        <span className="w-1 h-1 rounded-full bg-electric-500 hidden sm:block" />
                        <span>ML Engineer</span>
                    </p>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="text-base sm:text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Postgraduate MCA student from University of Madras with skills in Python, data science,
                    and machine learning. Passionate about solving real-world problems through technology.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.65 }}
                    className="flex flex-wrap items-center justify-center gap-3 mb-12"
                >
                    <button onClick={scrollToProjects} className="btn-primary px-8 py-3.5 text-base">
                        <ExternalLink size={18} />
                        View Projects
                    </button>
                    <a
                        href="/resume.pdf"
                        download
                        className="btn-secondary px-8 py-3.5 text-base"
                    >
                        <Download size={18} />
                        Download Resume
                    </a>
                    <button onClick={scrollToContact} className="btn-secondary px-8 py-3.5 text-base">
                        <Mail size={18} />
                        Contact Me
                    </button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="flex items-center justify-center gap-4 mb-16"
                >
                    {[
                        { icon: Github, href: 'https://github.com/rajavel-prabakar', label: 'GitHub' },
                        { icon: Linkedin, href: 'https://linkedin.com/in/rajavel-p', label: 'LinkedIn' },
                        { icon: Mail, href: 'mailto:rajavelprabakar15@gmail.com', label: 'Email' },
                    ].map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="p-3 rounded-xl text-gray-500 dark:text-gray-500 hover:text-electric-600 dark:hover:text-electric-400
                hover:bg-electric-50 dark:hover:bg-matte-700 hover:shadow-glow-sm
                border border-transparent hover:border-electric-200 dark:hover:border-electric-700/50
                transition-all duration-200"
                        >
                            <Icon size={20} />
                        </a>
                    ))}
                </motion.div>

                {/* Floating tech tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mb-12"
                >
                    {floatingTags.map((tag, i) => (
                        <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + i * 0.06, type: 'spring', stiffness: 200 }}
                            className="px-3 py-1.5 text-xs font-semibold rounded-lg
                bg-white dark:bg-matte-700 border border-gray-200 dark:border-matte-500
                text-gray-600 dark:text-gray-400
                hover:border-electric-400 hover:text-electric-600 dark:hover:text-electric-400 dark:hover:border-electric-600/50
                hover:bg-electric-50 dark:hover:bg-matte-600
                hover:shadow-glow-sm hover:-translate-y-1
                transition-all duration-200 cursor-default"
                        >
                            {tag}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Scroll Down Indicator */}
                <motion.button
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 8, 0] }}
                    transition={{ delay: 1.5, duration: 2, repeat: Infinity, repeatType: 'loop' }}
                    className="text-gray-400 dark:text-gray-600 hover:text-electric-500 dark:hover:text-electric-400 transition-colors duration-200"
                    aria-label="Scroll down"
                >
                    <ArrowDown size={24} />
                </motion.button>
            </div>
        </section>
    );
}
