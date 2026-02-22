import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Zap } from 'lucide-react';

const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'internship', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
];

export default function Navbar({ scrolled, theme, toggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    useEffect(() => {
        const handler = () => {
            const sections = navLinks.map(l => document.getElementById(l.id));
            const scrollY = window.scrollY + 120;
            let current = '';
            sections.forEach(sec => {
                if (sec && sec.offsetTop <= scrollY) current = sec.id;
            });
            setActiveSection(current);
        };
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-3 left-0 right-0 z-50 mx-4 md:mx-8 lg:mx-16 rounded-2xl transition-all duration-500 ${scrolled
                        ? 'bg-white/80 dark:bg-matte-800/80 backdrop-blur-xl border border-gray-200/60 dark:border-matte-500/40 shadow-navy-sm'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 group"
                    >
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy-800 to-electric-500 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md transition-all duration-300">
                            <span className="text-white font-display font-bold text-sm">RP</span>
                        </div>
                        <span className="hidden sm:block font-display font-bold text-navy-900 dark:text-white text-lg group-hover:text-electric-600 dark:group-hover:text-electric-400 transition-colors duration-200">
                            Rajavel<span className="text-electric-500">.</span>
                        </span>
                    </button>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${activeSection === link.id
                                        ? 'text-electric-600 dark:text-electric-400'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-navy-900 dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-matte-600/50'
                                    }`}
                            >
                                {link.label}
                                {activeSection === link.id && (
                                    <motion.div
                                        layoutId="nav-indicator"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-electric-500"
                                    />
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-2">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-matte-600 hover:text-navy-800 dark:hover:text-electric-400 transition-all duration-200"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        {/* Resume Button */}
                        <a
                            href="#contact"
                            onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
                            className="hidden md:flex btn-primary text-xs px-4 py-2"
                        >
                            <Zap size={14} />
                            Hire Me
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-matte-600 transition-all duration-200"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="fixed top-[5.5rem] left-4 right-4 z-40 bg-white/95 dark:bg-matte-800/95 backdrop-blur-xl border border-gray-200 dark:border-matte-500 rounded-2xl shadow-navy-lg p-4 md:hidden"
                    >
                        {navLinks.map((link, i) => (
                            <motion.button
                                key={link.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                onClick={() => scrollTo(link.id)}
                                className="block w-full text-left px-4 py-3 text-sm font-medium rounded-xl text-gray-700 dark:text-gray-300 hover:bg-electric-50 dark:hover:bg-matte-600 hover:text-electric-600 dark:hover:text-electric-400 transition-all duration-200"
                            >
                                {link.label}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
