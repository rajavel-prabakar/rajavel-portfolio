import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Award, Briefcase } from 'lucide-react';

const skills = [
  'Python', 'React', 'PyTorch', 'OpenCV', 'ENet', 'Streamlit',
  'Scikit-learn', 'Pandas', 'NumPy', 'MySQL', 'Git', 'GitHub',
  'Tableau', 'Power BI', 'Jupyter Notebook', 'AdaBoost',
];

const stats = [
  { icon: Code2,    label: 'Projects Built',   value: '2+' },
  { icon: Briefcase,label: 'Internships',       value: '2'  },
  { icon: Award,    label: 'Certifications',    value: '8'  },
  { icon: Brain,    label: 'ML Models Built',   value: '5+' },
];

export default function About() {
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      className="section-pad"
      style={{ position: 'relative', zIndex: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            color: '#00E5FF',
            display: 'block',
            marginBottom: 12,
          }}>
            {'>'} CORE_IDENTITY
          </span>
          <h2 className="section-title text-gray-900 dark:text-white">
            About{' '}
            <span style={{
              background: 'linear-gradient(135deg, #00E5FF, #7B61FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Avatar */}
            <div className="flex items-center gap-4">
              <div style={{
                width: 72, height: 72, borderRadius: 16,
                background: 'linear-gradient(135deg, #00E5FF22, #7B61FF33)',
                border: '1px solid rgba(0,229,255,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 20px rgba(0,229,255,0.15)',
                flexShrink: 0,
              }}>
                <span style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '0.8rem', fontWeight: 700, color: '#00E5FF', letterSpacing: '0.05em',
                }}>◈ RP</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">Rajavel P</h3>
                <p style={{ color: '#00E5FF', fontSize: '0.8rem', fontFamily: '"IBM Plex Mono", monospace', letterSpacing: '0.08em' }}>
                  MCA Student · Data Scientist · ML Engineer
                </p>
              </div>
            </div>

            {[
              `I'm a postgraduate MCA student from University of Madras with a strong foundation in Python programming, data science, and machine learning. I build intelligent systems that solve real-world problems.`,
              `My experience spans ML-based prediction systems (Customer Churn with AdaBoost on Streamlit), deep learning for computer vision (Lane Detection with ENet/PyTorch), and comprehensive data analytics for air quality forecasting.`,
              `I've interned at Naso Technologies (ML development) and Xenforte Technology (frontend/web), contributing to real production systems with integrity and passion.`,
            ].map((text, i) => (
              <p key={i} className="leading-[1.75] text-[0.9rem] text-gray-600 dark:text-white/50">
                {text}
              </p>
            ))}

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Establish Connection
              </button>
              <a href="/Raj_Res.pdf" download className="btn-secondary">
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right — Skill badges + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Skill badges */}
            <div className="p-6 rounded-2xl border bg-white dark:bg-[#0D1117]/70 border-gray-200 dark:border-neon-cyan/10 shadow-sm">
              <p className="font-mono text-[0.6rem] tracking-[0.25em] mb-[14px] text-gray-400 dark:text-neon-cyan/50">
                // CORE_EXPERTISE
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.04, type: 'spring', stiffness: 200 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="p-[16px_18px] rounded-[14px] border transition-all duration-300 bg-white border-gray-200 dark:bg-[#0D1117]/70 dark:border-neon-cyan/10 shadow-sm"
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,229,255,0.35)';
                    e.currentTarget.style.boxShadow = '0 0 18px rgba(0,229,255,0.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <p className="font-display font-extrabold text-[1.75rem] mb-[2px] text-blue-500 dark:text-neon-cyan drop-shadow-sm dark:drop-shadow-[0_0_14px_rgba(0,229,255,0.4)]">
                    {value}
                  </p>
                  <p className="text-[0.72rem] text-gray-500 dark:text-white/40">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
