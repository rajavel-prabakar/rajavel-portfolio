/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                navy: {
                    50: '#e8eef8',
                    100: '#c5d3ed',
                    200: '#9fb5e0',
                    300: '#7997d3',
                    400: '#5c81ca',
                    500: '#3f6bc0',
                    600: '#2d57a8',
                    700: '#1d3f88',
                    800: '#0e2866',
                    900: '#0B1F3B',
                },
                electric: {
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                },
                matte: {
                    900: '#0E0E11',
                    800: '#121215',
                    700: '#18181c',
                    600: '#1e1e24',
                    500: '#27272e',
                    400: '#3a3a44',
                },
                // ── Neural Interface palette ──────────────────────────────
                space: {
                    900: '#0B0F1A',
                    800: '#0D1117',
                    700: '#111827',
                    600: '#161D2E',
                },
                neon: {
                    cyan:   '#00E5FF',
                    purple: '#7B61FF',
                    green:  '#00FFA3',
                    pink:   '#FF61D8',
                },
                // ── Light Theme palette ──────────────────────────────
                light: {
                    bg: '#F7FAFC',
                    primary: '#0066FF',
                    secondary: '#6B5CFF',
                    green: '#00B86B',
                    text: {
                        primary: '#0F172A',
                        secondary: '#475569',
                    },
                    border: '#CBD5E1',
                },
            },
            fontFamily: {
                sans:    ['Inter', 'system-ui', 'sans-serif'],
                display: ['Space Grotesk', 'Poppins', 'Inter', 'sans-serif'],
                mono:    ['"IBM Plex Mono"', 'Fira Code', 'monospace'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'mesh-light': `
          radial-gradient(at 40% 20%, hsla(215, 100%, 74%, 0.15) 0px, transparent 50%),
          radial-gradient(at 80% 0%, hsla(225, 80%, 60%, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, hsla(210, 90%, 70%, 0.1) 0px, transparent 50%),
          radial-gradient(at 80% 50%, hsla(220, 85%, 65%, 0.08) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(215, 100%, 75%, 0.12) 0px, transparent 50%)
        `,
                'mesh-dark': `
          radial-gradient(at 40% 20%, hsla(197, 100%, 40%, 0.12) 0px, transparent 50%),
          radial-gradient(at 80% 0%, hsla(252, 100%, 68%, 0.08) 0px, transparent 50%),
          radial-gradient(at 0% 50%, hsla(160, 100%, 50%, 0.06) 0px, transparent 50%),
          radial-gradient(at 80% 50%, hsla(197, 100%, 50%, 0.07) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(252, 100%, 60%, 0.08) 0px, transparent 50%)
        `,
            },
            animation: {
                'gradient-x':    'gradient-x 6s ease infinite',
                'gradient-y':    'gradient-y 6s ease infinite',
                'float':         'float 6s ease-in-out infinite',
                'float-delay':   'float 8s ease-in-out infinite 2s',
                'pulse-glow':    'pulse-glow 2s ease-in-out infinite',
                'spin-slow':     'spin 20s linear infinite',
                'cursor-ring':   'cursor-ring 0.3s ease',
                'particle':      'particle 20s linear infinite',
                'neural-pulse':  'neural-pulse 3s ease-in-out infinite',
                'ring-spin-x':   'ring-spin-x 18s linear infinite',
                'ring-spin-y':   'ring-spin-y 12s linear infinite',
                'ring-spin-z':   'ring-spin-z 25s linear infinite',
                'data-scan':     'data-scan 2s ease-in-out infinite',
                'glitch-anim':   'glitch-anim 0.4s steps(2) forwards',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'gradient-y': {
                    '0%, 100%': { backgroundPosition: '50% 0%' },
                    '50%': { backgroundPosition: '50% 100%' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
                },
                'particle': {
                    '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { transform: 'translateY(-100vh) rotate(720deg)', opacity: '0' },
                },
                'neural-pulse': {
                    '0%, 100%': { boxShadow: '0 0 10px #00E5FF44, 0 0 30px #00E5FF22, inset 0 0 20px #00E5FF11' },
                    '50%': { boxShadow: '0 0 25px #00E5FF99, 0 0 60px #00E5FF44, inset 0 0 40px #00E5FF22' },
                },
                'ring-spin-x': {
                    from: { transform: 'rotateX(0deg) rotateZ(20deg)' },
                    to:   { transform: 'rotateX(360deg) rotateZ(20deg)' },
                },
                'ring-spin-y': {
                    from: { transform: 'rotateY(0deg) rotateX(15deg)' },
                    to:   { transform: 'rotateY(360deg) rotateX(15deg)' },
                },
                'ring-spin-z': {
                    from: { transform: 'rotateZ(0deg) rotateX(45deg)' },
                    to:   { transform: 'rotateZ(360deg) rotateX(45deg)' },
                },
                'data-scan': {
                    '0%':   { top: '-2px', opacity: '0' },
                    '10%':  { opacity: '1' },
                    '90%':  { opacity: '1' },
                    '100%': { top: '100%', opacity: '0' },
                },
                'glitch-anim': {
                    '0%':   { clipPath: 'inset(40% 0 60% 0)', transform: 'translate(-4px, 0)' },
                    '25%':  { clipPath: 'inset(10% 0 80% 0)', transform: 'translate(4px, 0)' },
                    '50%':  { clipPath: 'inset(70% 0 10% 0)', transform: 'translate(-2px, 0)' },
                    '75%':  { clipPath: 'inset(30% 0 50% 0)', transform: 'translate(2px, 0)' },
                    '100%': { clipPath: 'inset(0% 0 0% 0)',   transform: 'translate(0, 0)' },
                },
            },
            boxShadow: {
                'glow-sm':        '0 0 15px rgba(59, 130, 246, 0.2)',
                'glow-md':        '0 0 30px rgba(59, 130, 246, 0.3)',
                'glow-lg':        '0 0 60px rgba(59, 130, 246, 0.4)',
                'glow-xl':        '0 0 80px rgba(59, 130, 246, 0.5)',
                'navy-sm':        '0 4px 20px rgba(11, 31, 59, 0.15)',
                'navy-md':        '0 8px 40px rgba(11, 31, 59, 0.25)',
                'navy-lg':        '0 20px 80px rgba(11, 31, 59, 0.4)',
                'neon-sm':        '0 0 12px rgba(0,229,255,0.25)',
                'neon-md':        '0 0 28px rgba(0,229,255,0.4)',
                'neon-lg':        '0 0 60px rgba(0,229,255,0.5)',
                'neon-purple-sm': '0 0 12px rgba(123,97,255,0.3)',
                'neon-green-sm':  '0 0 12px rgba(0,255,163,0.3)',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};
