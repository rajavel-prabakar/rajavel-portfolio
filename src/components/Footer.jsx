import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="border-t border-gray-100 dark:border-matte-600/50 bg-white dark:bg-matte-900 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Logo + tagline */}
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy-800 to-electric-500 flex items-center justify-center shadow-glow-sm">
                            <span className="text-white font-display font-bold text-sm">RP</span>
                        </div>
                        <div>
                            <p className="font-display font-bold text-navy-900 dark:text-white text-sm">Rajavel P</p>
                            <p className="text-xs text-gray-400 dark:text-gray-600">AI Engineer · Data Scientist · Full Stack Dev</p>
                        </div>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-gray-400 dark:text-gray-600 flex items-center gap-1.5">
                        © {new Date().getFullYear()} Rajavel P. Built with
                        <Heart size={13} className="text-red-400 inline" fill="currentColor" />
                        and React.
                    </p>

                    {/* Social + Back to top */}
                    <div className="flex items-center gap-3">
                        {[
                            { icon: Github, href: 'https://github.com/rajavel-prabakar', label: 'GitHub' },
                            { icon: Linkedin, href: 'https://linkedin.com/in/rajavel-p', label: 'LinkedIn' },
                            { icon: Mail, href: 'mailto:rajavel@email.com', label: 'Email' },
                        ].map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="p-2 rounded-lg text-gray-400 dark:text-gray-600 hover:text-electric-500 dark:hover:text-electric-400 hover:bg-gray-100 dark:hover:bg-matte-700 transition-all duration-200"
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                        <button
                            onClick={scrollTop}
                            className="ml-2 p-2 rounded-lg bg-electric-500 text-white hover:bg-electric-600 hover:shadow-glow-sm transition-all duration-200"
                            aria-label="Back to top"
                        >
                            <ArrowUp size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
