import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import NeuralBackground from './components/NeuralBackground';
import SectionTransition from './components/SectionTransition';

function App() {
    const [theme, setTheme] = useState('dark');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // Always start in dark mode for the Neural Interface
        document.documentElement.classList.add('dark');
        setTheme('dark');
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        document.documentElement.classList.toggle('dark', next === 'dark');
        localStorage.setItem('theme', next);
    };

    return (
        <div
            className="min-h-screen transition-colors duration-500"
        >
            {/* Fixed neural network background — z-index 0 */}
            <NeuralBackground />

            {/* Cursor */}
            <CustomCursor />

            {/* Scroll progress bar */}
            <ScrollProgress />

            {/* Navigation */}
            <Navbar scrolled={scrolled} theme={theme} toggleTheme={toggleTheme} />

            <main style={{ position: 'relative', zIndex: 1 }}>
                <Hero />

                <SectionTransition label="CORE_IDENTITY">
                    <About />
                </SectionTransition>

                <SectionTransition label="TECH_GENOME">
                    <Skills />
                </SectionTransition>

                <SectionTransition label="AI_EXPERIMENTS">
                    <Projects />
                </SectionTransition>

                <SectionTransition label="RUNTIME_LOG">
                    <Internship />
                </SectionTransition>

                <SectionTransition label="DATASET_HISTORY">
                    <Education />
                </SectionTransition>

                <SectionTransition label="CERTIFICATIONS">
                    <Certifications />
                </SectionTransition>

                <SectionTransition label="CONTACT_NODE">
                    <Contact />
                </SectionTransition>
            </main>

            <Footer />
        </div>
    );
}

export default App;
