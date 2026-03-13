import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-gray-200 dark:border-neon-cyan/10 bg-white/95 dark:bg-space-900/95 py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* System status bar */}
        <div
          className="text-center mb-6 pb-5 border-b border-gray-200 dark:border-neon-cyan/10"
          style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '0.6rem',
            letterSpacing: '0.18em',
            color: 'rgba(0,229,255,0.5)', // Will need to adjust text to be visible in light mode
          }}
        >
          <span className="text-blue-500 dark:text-[#00FFA3]">●</span>
          {' '}SYSTEM: RAJAVEL.SYS v2.0{' '}
          <span className="text-gray-300 dark:text-white/20">|</span>
          <span className="text-gray-600 dark:text-neon-cyan/35">
            {' '}STATUS: ONLINE{' '}
            <span className="text-gray-300 dark:text-white/20">|</span>
            {' '}MODE: AI_ENGINEER
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-[10px] border border-gray-300 dark:border-neon-cyan/30 bg-gray-50 dark:bg-neon-cyan/5 flex items-center justify-center">
              <span style={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.65rem', fontWeight: 700 }} className="text-blue-500 dark:text-neon-cyan">◈</span>
            </div>
            <div>
              <p className="font-display font-bold text-gray-900 dark:text-white text-[0.9rem]">Rajavel P</p>
              <p className="text-gray-500 dark:text-neon-cyan/40" style={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.55rem', letterSpacing: '0.1em' }}>
                AI ENGINEER · DATA SCIENTIST
              </p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 dark:text-white/30 text-[0.75rem]" style={{ fontFamily: '"IBM Plex Mono"' }}>
            © {new Date().getFullYear()} Rajavel P. Built with React + Framer Motion.
          </p>

          {/* Social + Back to top */}
          <div className="flex items-center gap-2">
            {[
              { icon: Github,   href: 'https://github.com/rajavel-prabakar',      label: 'GitHub'   },
              { icon: Linkedin, href: 'https://linkedin.com/in/rajavel-p',         label: 'LinkedIn' },
              { icon: Mail,     href: 'https://mail.google.com/mail/?view=cm&fs=1&to=rajavelprabakar15@gmail.com',         label: 'Email'    },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-[7px] rounded-lg border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-400 dark:border-neon-cyan/15 dark:text-neon-cyan/50 dark:hover:text-neon-cyan dark:hover:border-neon-cyan/50 flex transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className="p-[7px] rounded-lg ml-1 flex transition-opacity duration-200 hover:opacity-80 bg-blue-100 text-blue-700 dark:bg-gradient-to-br dark:from-neon-cyan dark:to-neon-purple dark:text-space-900"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
