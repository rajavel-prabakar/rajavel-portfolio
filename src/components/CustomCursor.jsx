import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        const moveCursor = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (dotRef.current) {
                dotRef.current.style.left = `${mouseX}px`;
                dotRef.current.style.top = `${mouseY}px`;
            }
        };

        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            if (ringRef.current) {
                ringRef.current.style.left = `${ringX}px`;
                ringRef.current.style.top = `${ringY}px`;
            }
            requestAnimationFrame(animateRing);
        };

        const handleEnter = () => {
            if (dotRef.current) dotRef.current.style.transform = 'translate(-50%, -50%) scale(2)';
            if (ringRef.current) ringRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
        };

        const handleLeave = () => {
            if (dotRef.current) dotRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
            if (ringRef.current) ringRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        };

        window.addEventListener('mousemove', moveCursor);
        document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
            el.addEventListener('mouseenter', handleEnter);
            el.addEventListener('mouseleave', handleLeave);
        });

        const rafId = requestAnimationFrame(animateRing);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            cancelAnimationFrame(rafId);
        };
    }, []);

    // Only show on non-touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

    return (
        <>
            {/* Dot */}
            <div
                ref={dotRef}
                className="fixed z-[9998] w-2 h-2 rounded-full bg-electric-500 pointer-events-none"
                style={{ transform: 'translate(-50%, -50%)', transition: 'transform 0.15s ease' }}
            />
            {/* Ring */}
            <div
                ref={ringRef}
                className="fixed z-[9997] w-8 h-8 rounded-full border border-electric-500/50 pointer-events-none"
                style={{ transform: 'translate(-50%, -50%)', transition: 'transform 0.2s ease' }}
            />
        </>
    );
}
