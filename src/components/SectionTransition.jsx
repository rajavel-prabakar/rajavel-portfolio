import { useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

/**
 * Wraps a section with a brief "Loading [label]…" glitch overlay
 * that plays once when the section enters the viewport.
 */
export default function SectionTransition({ children, label = 'MODULE' }) {
  const ref       = useRef(null);
  const isInView  = useInView(ref, { once: true, margin: '-60px' });
  const [loading, setLoading] = useState(false);
  const [done,    setDone]    = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (isInView && !hasTriggered.current) {
      hasTriggered.current = true;
      setLoading(true);
      const t = setTimeout(() => {
        setLoading(false);
        setDone(true);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 20,
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'flex-start',
              paddingTop: '1.5rem',
              paddingLeft: '2rem',
            }}
          >
            <span
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '0.7rem',
                color: '#00E5FF',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                animation: 'glitch-anim 0.4s steps(2) forwards',
              }}
            >
              {'>'} Loading {label}...
            </span>

            {/* Progress bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.48, ease: 'linear' }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '1px',
                background: 'linear-gradient(to right, #00E5FF, #7B61FF)',
                opacity: 0.6,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
