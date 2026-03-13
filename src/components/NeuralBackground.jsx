import { useEffect, useRef } from 'react';

const NODE_COUNT = 75;
const MAX_DIST    = 160;
const NODE_SPEED  = 0.35;

function createNode(w, h) {
  return {
    x:   Math.random() * w,
    y:   Math.random() * h,
    vx:  (Math.random() - 0.5) * NODE_SPEED,
    vy:  (Math.random() - 0.5) * NODE_SPEED,
    r:   1.5 + Math.random() * 1.5,
  };
}

export default function NeuralBackground() {
  const canvasRef = useRef(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    let   nodes  = [];
    let   raf;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      nodes = Array.from({ length: NODE_COUNT }, () =>
        createNode(canvas.width, canvas.height)
      );
    };

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const draw = () => {
      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);

      // Move nodes
      nodes.forEach(n => {
        // Slight mouse attraction
        const dx = mouseRef.current.x - n.x;
        const dy = mouseRef.current.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 220) {
          n.vx += (dx / dist) * 0.012;
          n.vy += (dy / dist) * 0.012;
        }

        // Speed cap
        const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        if (speed > NODE_SPEED * 2) {
          n.vx = (n.vx / speed) * NODE_SPEED * 2;
          n.vy = (n.vy / speed) * NODE_SPEED * 2;
        }

        n.x += n.vx;
        n.y += n.vy;

        // Wrap edges
        if (n.x < -10) n.x = w + 10;
        if (n.x > w + 10) n.x = -10;
        if (n.y < -10) n.y = h + 10;
        if (n.y > h + 10) n.y = -10;
      });

      // Draw connections
      const isDark = document.documentElement.classList.contains('dark');

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx   = nodes[i].x - nodes[j].x;
          const dy   = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * (isDark ? 0.18 : 0.25);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            
            // Connection colors
            let hue = '';
            if (isDark) {
                hue = ((i + j) % 2 === 0) ? '0,229,255' : '123,97,255';
            } else {
                hue = '107,92,255'; // rgba(107,92,255,0.25)
            }
            
            ctx.strokeStyle = `rgba(${hue},${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n, i) => {
        let color = '';
        let fillAlpha = 0;
        
        if (isDark) {
            const isCyan = i % 3 !== 0;
            color  = isCyan ? '0,229,255' : '0,255,163';
            fillAlpha = 0.45;
        } else {
            color = '0,102,255'; // light mode node color #0066FF
            fillAlpha = 0.35;
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${fillAlpha})`;
        ctx.fill();

        // Glow
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 5);
        grd.addColorStop(0, `rgba(${color},${isDark ? 0.15 : 0.25})`);
        grd.addColorStop(1, `rgba(${color},0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.6,
      }}
    />
  );
}
