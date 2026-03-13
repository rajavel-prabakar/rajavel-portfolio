import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const strands = [
  {
    label: 'PROGRAMMING',
    accent: '#00E5FF',
    shadow: 'rgba(0,229,255,0.4)',
    skills: [
      { name: 'Python',      level: 90 },
      { name: 'React',       level: 80 },
      { name: 'JavaScript',  level: 78 },
      { name: 'HTML & CSS',  level: 82 },
      { name: 'SQL',         level: 85 },
    ],
  },
  {
    label: 'AI / ML',
    accent: '#7B61FF',
    shadow: 'rgba(123,97,255,0.4)',
    skills: [
      { name: 'PyTorch',        level: 82 },
      { name: 'Scikit-learn',   level: 85 },
      { name: 'OpenCV',         level: 78 },
      { name: 'Pandas/NumPy',   level: 88 },
      { name: 'AdaBoost/ENet',  level: 75 },
    ],
  },
  {
    label: 'TOOLS',
    accent: '#00FFA3',
    shadow: 'rgba(0,255,163,0.4)',
    skills: [
      { name: 'Git & GitHub',    level: 88 },
      { name: 'Tableau',         level: 78 },
      { name: 'Power BI',        level: 75 },
      { name: 'Jupyter',         level: 90 },
      { name: 'Streamlit',       level: 80 },
    ],
  },
  {
    label: 'DATABASE',
    accent: '#FF61D8',
    shadow: 'rgba(255,97,216,0.35)',
    skills: [
      { name: 'MySQL',               level: 85 },
      { name: 'Data Preprocessing',  level: 88 },
      { name: 'Statistical Analysis',level: 82 },
      { name: 'Data Visualization',  level: 85 },
      { name: 'Predictive Modeling', level: 80 },
    ],
  },
];

/* ─── Single DNA Node row ──────────────────────────────────────────── */
function SkillNode({ name, level, accent, shadow, inView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      className="flex items-center gap-3 group"
    >
      {/* Connecting line + node */}
      <div className="flex items-center gap-1 flex-shrink-0" style={{ width: 90 }}>
        <span
          className="text-right truncate text-[0.67rem] font-mono w-[70px] text-gray-500 dark:text-white/55"
        >
          {name}
        </span>
        {/* Dashed line */}
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: 16 } : { width: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.1 }}
          style={{ height: 1, background: `${accent}55`, flexShrink: 0 }}
        />
        {/* Node dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: delay + 0.2, type: 'spring', stiffness: 300 }}
          style={{
            width: 9,
            height: 9,
            borderRadius: '50%',
            background: accent,
            boxShadow: `0 0 8px ${shadow}`,
            flexShrink: 0,
          }}
        />
      </div>

      {/* Percentage bar */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            height: 2,
            background: 'rgba(255,255,255,0.07)',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${level}%` } : { width: 0 }}
            transition={{ duration: 1.1, delay: delay + 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              height: '100%',
              background: `linear-gradient(to right, ${accent}, ${accent}88)`,
              borderRadius: 2,
              boxShadow: `0 0 6px ${accent}66`,
            }}
          />
        </div>
      </div>

      {/* Level label */}
      <span
        style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: '0.6rem',
          color: accent,
          opacity: 0.7,
          width: 28,
          textAlign: 'right',
        }}
      >
        {level}%
      </span>
    </motion.div>
  );
}

/* ─── Strand panel ─────────────────────────────────────────────────── */
function StrandPanel({ strand, strandIndex, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: strandIndex * 0.1 }}
      className="relative flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-[#0D1117]/70 shadow-sm"
      style={{
        border: `1px solid ${strand.accent}22`,
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${strand.accent}55`;
        e.currentTarget.style.boxShadow = `0 0 24px ${strand.shadow.replace('0.4', '0.1')}`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = `${strand.accent}22`;
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Category header */}
      <div className="flex items-center gap-2 mb-1">
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: strand.accent,
            boxShadow: `0 0 8px ${strand.shadow}`,
          }}
        />
        <span
          style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            color: strand.accent,
            fontWeight: 600,
          }}
        >
          {strand.label}
        </span>
      </div>

      {/* Vertical DNA spine */}
      <div
        style={{
          position: 'absolute',
          left: 28,
          top: 56,
          bottom: 20,
          width: 1,
          background: `linear-gradient(to bottom, ${strand.accent}44, transparent)`,
          pointerEvents: 'none',
        }}
      />

      {/* Skill nodes */}
      <div className="flex flex-col gap-3.5 pl-4">
        {strand.skills.map((skill, i) => (
          <SkillNode
            key={skill.name}
            {...skill}
            accent={strand.accent}
            shadow={strand.shadow}
            inView={inView}
            delay={strandIndex * 0.08 + i * 0.07}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} className="section-pad" style={{ position: 'relative', zIndex: 1 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              color: '#00E5FF',
              display: 'block',
              marginBottom: 12,
            }}
          >
            // TECH_GENOME.map()
          </span>
          <h2 className="section-title text-gray-900 dark:text-white">
            Tech{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00E5FF, #7B61FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Genome
            </span>
          </h2>
          <p className="mt-2 max-w-[480px] mx-auto text-gray-600 dark:text-white/40">
            The AI skill network powering intelligent, production-ready systems.
          </p>
        </motion.div>

        {/* Strand grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {strands.map((strand, i) => (
            <StrandPanel key={strand.label} strand={strand} strandIndex={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
