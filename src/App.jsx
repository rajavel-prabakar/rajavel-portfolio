import { useState, useEffect, useRef } from 'react';
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

function App() {
    const [theme, setTheme] = useState('dark');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        if (saved) {
            setTheme(saved);
            document.documentElement.classList.toggle('dark', saved === 'dark');
        } else {
            // Default to dark
            document.documentElement.classList.add('dark');
        }
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
        <div className="min-h-screen bg-white dark:bg-matte-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
            <CustomCursor />
            <ScrollProgress />
            <Navbar scrolled={scrolled} theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Internship />
                <Education />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
