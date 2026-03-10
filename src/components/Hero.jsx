import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Download, ChevronRight } from 'lucide-react';

const roles = ['Data Scientist', 'ML Engineer', 'Python Developer', 'AI Enthusiast'];

const floatingTags = [
    'Python', 'PyTorch', 'OpenCV', 'ENet', 'React',
    'Scikit-learn', 'MySQL', 'Pandas', 'NumPy', 'Streamlit',
    'Matplotlib', 'Git', 'Tableau', 'Power BI', 'Jupyter',
];

function Particle({ style }) {
    return (
        <div
            className="absolute rounded-full bg-electric-500/30 dark:bg-electric-400/20 animate-particle"
            style={style}
        />
    );
}

const particles = Array.from({ length: 25 }, () => ({
    left: `${Math.random() * 100}%`,
    animationDuration: `${12 + Math.random() * 18}s`,
    animationDelay: `${Math.random() * 12}s`,
    width: `${2 + Math.random() * 4}px`,
    height: `${2 + Math.random() * 4}px`,
    opacity: 0.3 + Math.random() * 0.5,
}));

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setRoleIndex(prev => (prev + 1) % roles.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Mesh gradient background */}
            <div className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark" />

            {/* Glowing orbs */}
            <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-electric-500/10 blur-[80px] animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-violet-500/10 blur-[80px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px]" />

            {/* Spinning ring decorations */}
            <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full border border-electric-400/10 dark:border-electric-500/10 animate-spin-slow" />
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full border border-navy-400/10 dark:border-white/5 animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />

            {/* Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((p, i) => <Particle key={i} style={p} />)}
            </div>

            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
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
                    Open to Full‑Time Opportunities
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] mb-6 tracking-tight leading-none"
                >
                    <span className="text-navy-900 dark:text-white">Rajavel </span>
                    <span
                        className="bg-clip-text text-transparent"
                        style={{
                            backgroundImage: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 40%, #06b6d4 100%)',
                            backgroundSize: '200% auto',
                            animation: 'gradient-x 4s ease infinite',
                        }}
                    >
                        P
                    </span>
                </motion.h1>

                {/* Power statement */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-navy-800 dark:text-gray-100 max-w-4xl mx-auto leading-tight mb-4"
                >
                    Building Intelligent Systems That{' '}
                    <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
                    >
                        Solve Real‑World Problems
                    </span>
                </motion.p>

                {/* Rotating role */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-8 h-8 flex items-center justify-center gap-2"
                >
                    <span className="text-gray-500 dark:text-gray-400 text-base sm:text-lg font-medium">
                        MCA Student · University of Madras ·
                    </span>
                    <motion.span
                        key={roleIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="text-base sm:text-lg font-bold text-electric-600 dark:text-electric-400"
                    >
                        {roles[roleIndex]}
                    </motion.span>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="text-sm sm:text-base text-gray-500 dark:text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Passionate about Python, machine learning, and data science.
                    Turning raw data into intelligent solutions with{' '}
                    <span className="text-navy-700 dark:text-gray-300 font-medium">integrity and excellence</span>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="flex flex-wrap items-center justify-center gap-3 mb-12"
                >
                    <button onClick={() => scrollTo('projects')} className="btn-primary px-8 py-3.5 text-base group">
                        <ExternalLink size={18} />
                        View Projects
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                    <a href="/Raj_Res.pdf" download className="btn-secondary px-8 py-3.5 text-base">
                        <Download size={18} />
                        Download Resume
                    </a>
                    <button onClick={() => scrollTo('contact')} className="btn-secondary px-8 py-3.5 text-base">
                        <Mail size={18} />
                        Contact Me
                    </button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.85 }}
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
                            className="p-3 rounded-xl text-gray-500 dark:text-gray-500
                            hover:text-electric-600 dark:hover:text-electric-400
                            hover:bg-electric-50 dark:hover:bg-matte-700
                            hover:shadow-glow-sm
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
                            bg-white/80 dark:bg-matte-700/80 backdrop-blur-sm
                            border border-gray-200 dark:border-matte-500
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
                    onClick={() => scrollTo('about')}
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
