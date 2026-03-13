import { useEffect, useRef, useState } from 'react';

const CYAN   = '#00E5FF';
const LIGHT_BLUE = '#0066FF';
const PURPLE = '#7B61FF';
const TRAIL_LEN = 10;

export default function CustomCursor() {
  const canvasRef   = useRef(null);
  const stateRef    = useRef({
    x: -100, y: -100,
    trail: [],
    hovering: false,
    clicking: false,
    clickTime: 0,
    ripples: [],      // [{x,y,t}]
    shockwaves: [],   // [{x,y,t}]
  });
  const rafRef = useRef(null);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Mouse move — update position & trail
    const onMove = (e) => {
      const s = stateRef.current;
      s.trail.push({ x: s.x, y: s.y });
      if (s.trail.length > TRAIL_LEN) s.trail.shift();
      s.x = e.clientX;
      s.y = e.clientY;
    };

    // Click — shockwave
    const onClick = (e) => {
      const s = stateRef.current;
      s.shockwaves.push({ x: e.clientX, y: e.clientY, t: 0 });
    };

    // Hover detection
    const addHover = () => { stateRef.current.hovering = true; };
    const removeHover = () => { stateRef.current.hovering = false; };

    const attachHover = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    };
    attachHover();

    // Re-attach on DOM changes  
    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', onMove);
    window.addEventListener('click', onClick);

    // ─── Draw loop ────────────────────────────────────────────────────────────
    const draw = () => {
      const s   = stateRef.current;
      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);

      const now = performance.now();

      const isDark = document.documentElement.classList.contains('dark');
      const baseColorRGB = isDark ? '0,229,255' : '0,102,255';
      const baseColorHex = isDark ? CYAN : LIGHT_BLUE;

      // ── Trail ──────────────────────────────────────────────────────────────
      s.trail.forEach((pt, i) => {
        const prog  = (i + 1) / s.trail.length;
        const alpha = prog * (isDark ? 0.45 : 0.6);
        const r     = prog * (s.hovering ? 4 : 2.5);
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseColorRGB},${alpha})`;
        ctx.fill();
      });

      // ── Main particle ──────────────────────────────────────────────────────
      const pR = s.hovering ? 7 : 4;
      const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, pR * 4);
      grd.addColorStop(0, `rgba(${baseColorRGB},0.9)`);
      grd.addColorStop(0.4, `rgba(${baseColorRGB},0.3)`);
      grd.addColorStop(1, `rgba(${baseColorRGB},0)`);
      ctx.beginPath();
      ctx.arc(s.x, s.y, pR * 4, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(s.x, s.y, pR, 0, Math.PI * 2);
      ctx.fillStyle = baseColorHex;
      ctx.shadowColor = baseColorHex;
      ctx.shadowBlur = isDark ? 12 : 20;
      ctx.fill();
      ctx.shadowBlur = 0;

      // ── Hover ripple rings ─────────────────────────────────────────────────
      if (s.hovering) {
        for (let k = 0; k < 3; k++) {
          const phase = (now / 1000 + k * 0.33) % 1;
          const ringR = phase * 30;
          const alpha = (1 - phase) * (isDark ? 0.4 : 0.6);
          ctx.beginPath();
          ctx.arc(s.x, s.y, ringR, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${baseColorRGB},${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // ── Shockwaves (on click) ──────────────────────────────────────────────
      s.shockwaves = s.shockwaves.filter(sw => {
        sw.t += 1 / 40;
        if (sw.t > 1) return false;
        const r     = sw.t * 80;
        const alpha = (1 - sw.t) * (isDark ? 0.7 : 0.9);
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${baseColorRGB},${alpha})`;
        ctx.lineWidth = 2 - sw.t;
        ctx.stroke();

        // Inner secondary ring
        const r2 = sw.t * 45;
        const secondaryRGB = isDark ? '123,97,255' : '107,92,255'; // neon purple vs light purple
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, r2, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${secondaryRGB},${alpha * 0.8})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        return true;
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="energy-cursor-canvas mix-blend-screen dark:mix-blend-screen mix-blend-multiply"
      style={{ mixBlendMode: 'normal' }} // Removing mix-blend-mode: screen so colors render truly in light mode
      aria-hidden="true"
    />
  );
}
