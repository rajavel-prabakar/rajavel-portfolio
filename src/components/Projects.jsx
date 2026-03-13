import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const experiments = [
  {
    id: '01',
    title: 'Lane Detection AI',
    status: 'STABLE',
    accuracy: '~92%',
    model: 'ENet',
    description:
      'Real-time deep learning lane detection pipeline using ENet + PyTorch. Custom preprocessing, edge detection & perspective transforms for ADAS-grade accuracy.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'ENet', 'NumPy'],
    github: 'https://github.com/rajavel-prabakar',
    demo: '#',
    accent: '#00E5FF',
  },
  {
    id: '02',
    title: 'AQI Pollution Analysis',
    status: 'STABLE',
    accuracy: 'Seasonal',
    model: 'MLRegression',
    description:
      'Full-stack analytics platform forecasting AQI across cities. PM2.5, PM10, NO₂, CO, SO₂, O₃ analysis with ML regression models and seasonal trend detection.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'SciPy', 'Matplotlib'],
    github: 'https://github.com/rajavel-prabakar',
    demo: '#',
    accent: '#00FFA3',
  },
  {
    id: '03',
    title: 'Churn Prediction Engine',
    status: 'DEPLOYED',
    accuracy: 'High Precision',
    model: 'AdaBoost',
    description:
      'End-to-end ML system identifying at-risk subscribers using content usage & engagement signals. Deployed as a live Streamlit app for real-time churn scoring.',
    tech: ['Python', 'AdaBoost', 'Scikit-learn', 'Pandas', 'Streamlit'],
    github: 'https://github.com/rajavel-prabakar',
    demo: '#',
    accent: '#7B61FF',
  },
];

const STATUS_COLORS = {
  STABLE:   '#00FFA3',
  DEPLOYED: '#00E5FF',
  BETA:     '#FF61D8',
};

function ExperimentCard({ exp, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white/80 dark:bg-[#0D1117]/85"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: 16,
        overflow: 'hidden',
        border: `1px solid ${hovered ? exp.accent + '55' : exp.accent + '18'}`,
        boxShadow: hovered ? `0 0 28px ${exp.accent}18` : 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Neon scan-line on hover */}
      {hovered && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: 1,
            background: `linear-gradient(to right, transparent, ${exp.accent}88, transparent)`,
            animation: 'data-scan 2s ease-in-out infinite',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        />
      )}

      {/* Top accent bar */}
      <div style={{ height: 2, background: `linear-gradient(to right, ${exp.accent}, ${exp.accent}44)` }} />

      <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', flex: 1, gap: 14 }}>

        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '0.6rem',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.15em',
            }}
          >
            EXPERIMENT #{exp.id}
          </span>
          <span
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '0.55rem',
              padding: '2px 8px',
              borderRadius: 20,
              border: `1px solid ${STATUS_COLORS[exp.status]}55`,
              color: STATUS_COLORS[exp.status],
              background: `${STATUS_COLORS[exp.status]}0F`,
              letterSpacing: '0.15em',
            }}
          >
            {exp.status}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-display font-bold text-[1.05rem] transition-colors duration-250 m-0"
          style={{
            color: hovered ? exp.accent : undefined,
          }}
        >
          <span className="text-gray-900 dark:text-white" style={hovered ? { color: exp.accent } : {}}>
            {exp.title}
          </span>
        </h3>

        {/* Metrics */}
        <div
          className="font-mono text-[0.67rem] flex flex-col gap-[3px] text-gray-500 dark:text-white/45"
        >
          <span><span style={{ color: exp.accent, marginRight: 4 }}>&gt;</span> Accuracy<span className="text-gray-300 dark:text-white/20">........</span> {exp.accuracy}</span>
          <span><span style={{ color: exp.accent, marginRight: 4 }}>&gt;</span> Model<span className="text-gray-300 dark:text-white/20">...........</span> {exp.model}</span>
          <span><span style={{ color: exp.accent, marginRight: 4 }}>&gt;</span> Stack<span className="text-gray-300 dark:text-white/20">...........</span> {exp.tech.slice(0, 2).join(' · ')}</span>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: `${exp.accent}18` }} />

        {/* Description */}
        <p
          className="text-[0.8rem] leading-[1.65] m-0 flex-1 text-gray-600 dark:text-white/45"
        >
          {exp.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {exp.tech.map(t => (
            <span
              key={t}
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '0.6rem',
                padding: '2px 8px',
                borderRadius: 4,
                background: `${exp.accent}0D`,
                border: `1px solid ${exp.accent}2A`,
                color: `${exp.accent}BB`,
                letterSpacing: '0.05em',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
          <a
            href={exp.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[5px] px-[14px] py-[7px] rounded-lg font-mono text-[0.65rem] border no-underline tracking-[0.05em] transition-all duration-200 text-[#475569] border-[#CBD5E1] dark:text-white/50 dark:border-white/10 hover:bg-[#F7FAFC] dark:hover:bg-transparent"
            style={{
              borderColor: hovered ? (document.documentElement.classList.contains('dark') ? exp.accent + '55' : '#0066FF') : undefined,
              color: hovered ? (document.documentElement.classList.contains('dark') ? exp.accent : '#0066FF') : undefined,
            }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.color = ''; }}
          >
            <Github size={12} />
            git clone
          </a>
          <a
            href={exp.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              padding: '7px 14px',
              borderRadius: 8,
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '0.65rem',
              background: `linear-gradient(135deg, ${exp.accent}, ${exp.accent}99)`,
              color: '#0B0F1A',
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.05em',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
          >
            <ExternalLink size={12} />
            run demo →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="section-pad"
      style={{ position: 'relative', zIndex: 1 }}
    >
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
            {'>'} AI_EXPERIMENTS --list
          </span>
          <h2 className="section-title text-gray-900 dark:text-white">
            AI{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00E5FF, #7B61FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Experiments
            </span>
          </h2>
          <p className="mt-2 max-w-[480px] mx-auto text-gray-600 dark:text-white/40">
            Research-grade ML & data science projects — built, tested, deployed.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {experiments.map((exp, i) => (
            <ExperimentCard key={exp.id} exp={exp} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/rajavel-prabakar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={15} />
            More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
