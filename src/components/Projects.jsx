import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'Lane Detection System',
        description: 'Engineered a real-time deep learning lane detection pipeline using ENet architecture and PyTorch, achieving precise lane boundary segmentation from video frames. Applied custom image preprocessing, edge detection, and perspective transforms to improve segmentation accuracy — contributing to safer autonomous driving and ADAS development.',
        tech: ['Python', 'PyTorch', 'OpenCV', 'ENet', 'NumPy', 'Matplotlib', 'Jupyter Notebook'],
        github: 'https://github.com/rajavel-prabakar',
        demo: '#',
        featured: true,
        color: 'from-blue-500 to-electric-600',
    },
    {
        title: 'Air Quality & Pollution Analysis',
        description: 'Built a full-stack data analytics platform to analyze and forecast AQI across multiple cities using Pandas, Scikit-learn, and SciPy. Performed descriptive, diagnostic, and predictive analysis on PM2.5, PM10, NO₂, CO, SO₂, and O₃ pollutants. Implemented seasonal trend analysis and ML regression models to predict future pollution levels with measurable accuracy gains.',
        tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'SciPy', 'Jupyter Notebook'],
        github: 'https://github.com/rajavel-prabakar',
        demo: '#',
        featured: true,
        color: 'from-emerald-500 to-teal-600',
    },
    {
        title: 'Customer Churn Prediction',
        description: 'Developed an end-to-end ML system to identify at-risk subscribers using customer content usage, subscription history, and engagement signals. Trained and evaluated multiple algorithms with AdaBoost achieving highest precision, then deployed the solution as a live Streamlit web app — enabling real-time churn risk scoring for data-driven retention decisions.',
        tech: ['Python', 'AdaBoost', 'Scikit-learn', 'Pandas', 'Streamlit', 'Jupyter Notebook'],
        github: 'https://github.com/rajavel-prabakar',
        demo: '#',
        color: 'from-violet-500 to-purple-600',
    },
];

function ProjectCard({ project, index, isInView }) {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: x * 10, y: -y * 10 });
    };
    const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transition: 'transform 0.15s ease',
            }}
            className="group relative flex flex-col h-full rounded-2xl overflow-hidden
        bg-white dark:bg-matte-700/70
        border border-gray-100 dark:border-matte-500/50
        hover:border-electric-300 dark:hover:border-electric-700/50
        hover:shadow-navy-lg dark:hover:shadow-glow-md
        transition-shadow duration-300"
        >
            {/* Top gradient bar */}
            <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

            {/* Featured badge */}
            {project.featured && (
                <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full bg-electric-50 dark:bg-electric-900/30 text-electric-600 dark:text-electric-400 border border-electric-200 dark:border-electric-700/50">
                        Featured
                    </span>
                </div>
            )}

            <div className="flex flex-col flex-1 p-6">
                {/* Icon */}
                <div className={`w-10 h-10 mb-4 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-sm`}>
                    <ArrowUpRight size={18} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-navy-900 dark:text-white mb-2 group-hover:text-electric-600 dark:group-hover:text-electric-400 transition-colors duration-200">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                    {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="px-2 py-1 text-[11px] font-semibold rounded-md
                bg-gray-100 dark:bg-matte-600 text-gray-600 dark:text-gray-400
                border border-gray-200/60 dark:border-matte-500/50"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold
              bg-gray-100 dark:bg-matte-600 text-gray-700 dark:text-gray-300
              hover:bg-navy-900 hover:text-white dark:hover:bg-matte-500
              transition-all duration-200"
                    >
                        <Github size={14} /> GitHub
                    </a>
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold
              bg-electric-500 text-white hover:bg-electric-600 hover:shadow-glow-sm
              transition-all duration-200"
                    >
                        <ExternalLink size={14} /> Live Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="projects" ref={ref} className="section-pad bg-gray-50/50 dark:bg-matte-800/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-electric-500 dark:text-electric-400 mb-3 block">
                        What I've Built
                    </span>
                    <h2 className="section-title text-navy-900 dark:text-white">
                        Featured{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-600 to-navy-600 dark:from-electric-400 dark:to-blue-400">
                            Projects
                        </span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-500 mt-3 max-w-xl mx-auto">
                        Selected work showcasing machine learning, deep learning, and data analytics — built with Python, PyTorch, and modern data science tools.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} isInView={isInView} />
                    ))}
                </div>

                {/* More Projects CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/rajavel-prabakar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        <Github size={16} />
                        More on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
