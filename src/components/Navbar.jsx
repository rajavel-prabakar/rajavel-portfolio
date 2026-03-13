import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navLinks = [
  { id: 'about',      label: 'CORE'        },
  { id: 'skills',     label: 'GENOME'      },
  { id: 'projects',   label: 'EXPERIMENTS' },
  { id: 'internship', label: 'RUNTIME'     },
  { id: 'education',  label: 'DATASET'     },
  { id: 'contact',    label: 'NODE'        },
];

export default function Navbar({ scrolled, theme, toggleTheme }) {
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState('');

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 120;
      let current = '';
      navLinks.forEach(({ id }) => {
        const sec = document.getElementById(id);
        if (sec && sec.offsetTop <= scrollY) current = id;
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
        className={`fixed top-3 left-0 right-0 z-50 mx-4 md:mx-8 lg:mx-16 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl border shadow-navy-sm dark:shadow-neon-sm bg-white/85 border-gray-200 dark:bg-space-900/85 dark:border-neon-cyan/15'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group"
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                border: '1px solid rgba(0,229,255,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,229,255,0.07)',
                boxShadow: '0 0 12px rgba(0,229,255,0.15)',
                transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 22px rgba(0,229,255,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 12px rgba(0,229,255,0.15)'; }}
            >
              <span
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: '#00E5FF',
                  letterSpacing: '0.05em',
                }}
              >
                ◈
              </span>
            </div>
            <span
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'rgba(0,229,255,0.75)',
                letterSpacing: '0.1em',
              }}
              className="hidden sm:block group-hover:text-neon-cyan transition-colors duration-200"
            >
              RAJAVEL<span style={{ color: '#7B61FF' }}>.SYS</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    padding: '6px 12px',
                    borderRadius: 8,
                    border: isActive ? '1px solid rgba(0,229,255,0.35)' : '1px solid transparent',
                    background: isActive ? 'rgba(0,229,255,0.07)' : 'transparent',
                    color: isActive ? (theme === 'dark' ? '#00E5FF' : '#0284c7') : (theme === 'dark' ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.5)'),
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = theme === 'dark' ? 'rgba(0,229,255,0.8)' : '#0284c7';
                      e.currentTarget.style.background = theme === 'dark' ? 'rgba(0,229,255,0.05)' : 'rgba(2,132,199,0.05)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = theme === 'dark' ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.5)';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {isActive && (
                    <span style={{ color: '#00FFA3', marginRight: 4 }}>▶</span>
                  )}
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                padding: 8,
                borderRadius: 10,
                border: theme === 'dark' ? '1px solid rgba(0,229,255,0.15)' : '1px solid rgba(0,0,0,0.1)',
                background: theme === 'dark' ? 'rgba(0,229,255,0.05)' : 'rgba(0,0,0,0.05)',
                color: theme === 'dark' ? 'rgba(0,229,255,0.6)' : 'rgba(0,0,0,0.6)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.color = theme === 'dark' ? '#00E5FF' : '#0284c7'; 
                e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(0,229,255,0.4)' : 'rgba(0,0,0,0.3)'; 
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.color = theme === 'dark' ? 'rgba(0,229,255,0.6)' : 'rgba(0,0,0,0.6)'; 
                e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(0,229,255,0.15)' : 'rgba(0,0,0,0.1)'; 
              }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Hire Me CTA */}
            <button
              onClick={() => scrollTo('contact')}
              className="hidden md:flex btn-primary text-xs px-4 py-2"
            >
              HIRE ME
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-xl"
              style={{ color: 'rgba(0,229,255,0.7)', border: '1px solid rgba(0,229,255,0.2)' }}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed top-[5.5rem] left-4 right-4 z-40 rounded-2xl p-4 md:hidden bg-white/95 dark:bg-space-900/95 border border-gray-200 dark:border-neon-cyan/15 backdrop-blur-md"
          >
            {navLinks.map(({ id, label }, i) => (
              <motion.button
                key={id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => scrollTo(id)}
                className="block w-full text-left px-4 py-3 rounded-xl transition-all duration-200"
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  color: activeSection === id 
                    ? (theme === 'dark' ? '#00E5FF' : '#0284c7') 
                    : (theme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.6)'),
                  background: activeSection === id 
                    ? (theme === 'dark' ? 'rgba(0,229,255,0.07)' : 'rgba(2,132,199,0.07)')
                    : 'transparent',
                }}
              >
                {activeSection === id && <span style={{ color: '#00FFA3', marginRight: 8 }}>▶</span>}
                {label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
