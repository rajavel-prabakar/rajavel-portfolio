import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ChevronRight } from 'lucide-react';

const roles = [
  'Data Scientist',
  'ML Engineer',
  'Python Developer',
  'AI Enthusiast',
];

const socialLinks = [
  { icon: Github,   href: 'https://github.com/rajavel-prabakar',     label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/rajavel-p',       label: 'LinkedIn' },
];

/* ─── 3-D CSS Neural Rings ─────────────────────────────────────────── */
function NeuralCore() {
  return (
    <div
      className="relative mx-auto mb-10 select-none"
      style={{ width: 220, height: 220, perspective: 800 }}
    >
      {/* Outer ring — spins on X */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '1.5px solid rgba(0,229,255,0.35)',
          animation: 'ring-spin-x 18s linear infinite',
          transformStyle: 'preserve-3d',
          boxShadow: '0 0 18px rgba(0,229,255,0.15)',
        }}
      />
      {/* Middle ring — spins on Y */}
      <div
        style={{
          position: 'absolute',
          inset: 30,
          borderRadius: '50%',
          border: '1.5px solid rgba(123,97,255,0.45)',
          animation: 'ring-spin-y 12s linear infinite',
          transformStyle: 'preserve-3d',
          boxShadow: '0 0 14px rgba(123,97,255,0.2)',
        }}
      />
      {/* Inner ring — spins on Z */}
      <div
        style={{
          position: 'absolute',
          inset: 60,
          borderRadius: '50%',
          border: '1px solid rgba(0,255,163,0.35)',
          animation: 'ring-spin-z 25s linear infinite reverse',
          transformStyle: 'preserve-3d',
        }}
      />
      {/* Core dot */}
      <div
        style={{
          position: 'absolute',
          inset: '50%',
          transform: 'translate(-50%,-50%)',
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #00E5FF 0%, #7B61FF 60%, transparent 100%)',
          animation: 'neural-pulse 3s ease-in-out infinite',
        }}
      />
      {/* Core label */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 2,
        }}
      >
        <span
          style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '0.5rem',
            color: 'rgba(0,229,255,0.7)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginTop: 46,
          }}
        >
          NEURAL CORE
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex(p => (p + 1) % roles.length);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  // blinking cursor tick
  useEffect(() => {
    const t = setInterval(() => setTick(p => p + 1), 530);
    return () => clearInterval(t);
  }, []);

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ zIndex: 1 }}
    >
      {/* Subtle radial gradient backdrop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(0,229,255,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

        {/* System status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full"
          style={{
            border: '1px solid rgba(0,255,163,0.3)',
            background: 'rgba(0,255,163,0.06)',
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '0.7rem',
            color: '#00FFA3',
            letterSpacing: '0.15em',
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#00FFA3',
              display: 'inline-block',
              boxShadow: '0 0 8px #00FFA3',
              animation: 'pulse 2s infinite',
            }}
          />
          SYSTEM : ONLINE &nbsp;|&nbsp; OPEN TO OPPORTUNITIES
        </motion.div>

        {/* Neural Core 3-D rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <NeuralCore />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display font-black text-5xl sm:text-6xl md:text-7xl mb-3 bg-clip-text text-transparent bg-gradient-to-br from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-neon-cyan dark:to-neon-purple"
        >
          Rajavel Prabakar
        </motion.h1>

        {/* Subtitle / role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mb-6 flex flex-col items-center gap-1"
        >
          <p className="text-[#475569] dark:text-gray-400 text-lg font-light">
            MCA Student · University of Madras
          </p>
          <div
            className="font-mono text-base flex items-center gap-1.5 text-[#334155] dark:text-neon-cyan tracking-[0.1em]"
          >
            <span className="text-[#334155]/60 dark:text-neon-cyan/45">&gt;</span>
            {roles[roleIndex]}
            <span style={{ opacity: tick % 2 === 0 ? 1 : 0 }} className="text-[#0066FF] dark:text-neon-cyan">_</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building intelligent systems that{' '}
          <span className="font-medium text-blue-600 dark:text-neon-cyan">solve real-world problems</span>{' '}
          — from computer vision to predictive analytics.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="btn-primary px-8 py-3.5 text-sm"
          >
            <ChevronRight size={16} />
            View Experiments
          </button>
          <a href="/Raj_Res.pdf" download className="btn-secondary px-8 py-3.5 text-sm">
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Social nodes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          <div
            style={{
              width: 40,
              height: 1,
              background: 'linear-gradient(to right, transparent, rgba(0,229,255,0.4))',
            }}
          />
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                color: 'rgba(0,229,255,0.6)',
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                transition: 'color 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#00E5FF')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(0,229,255,0.6)')}
            >
              <span
                style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#00E5FF', display: 'inline-block',
                  boxShadow: '0 0 6px #00E5FF',
                }}
              />
              <Icon size={14} />
              {label}
            </a>
          ))}
          <div
            style={{
              width: 40,
              height: 1,
              background: 'linear-gradient(to left, transparent, rgba(0,229,255,0.4))',
            }}
          />
        </motion.div>

        {/* Scroll hint */}
        <motion.button
          onClick={() => scrollTo('about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            margin: '0 auto',
            color: 'rgba(0,229,255,0.4)',
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '0.55rem',
            letterSpacing: '0.25em',
          }}
        >
          <span>SCROLL</span>
          <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
            <path d="M6 0v16M1 11l5 5 5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}