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
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Poppins', 'Inter', 'sans-serif'],
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
          radial-gradient(at 40% 20%, hsla(215, 100%, 40%, 0.15) 0px, transparent 50%),
          radial-gradient(at 80% 0%, hsla(225, 80%, 35%, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, hsla(210, 90%, 30%, 0.1) 0px, transparent 50%),
          radial-gradient(at 80% 50%, hsla(220, 85%, 35%, 0.08) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(215, 100%, 25%, 0.12) 0px, transparent 50%)
        `,
            },
            animation: {
                'gradient-x': 'gradient-x 6s ease infinite',
                'gradient-y': 'gradient-y 6s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'float-delay': 'float 8s ease-in-out infinite 2s',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'spin-slow': 'spin 20s linear infinite',
                'cursor-ring': 'cursor-ring 0.3s ease',
                'particle': 'particle 20s linear infinite',
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
            },
            boxShadow: {
                'glow-sm': '0 0 15px rgba(59, 130, 246, 0.2)',
                'glow-md': '0 0 30px rgba(59, 130, 246, 0.3)',
                'glow-lg': '0 0 60px rgba(59, 130, 246, 0.4)',
                'glow-xl': '0 0 80px rgba(59, 130, 246, 0.5)',
                'navy-sm': '0 4px 20px rgba(11, 31, 59, 0.15)',
                'navy-md': '0 8px 40px rgba(11, 31, 59, 0.25)',
                'navy-lg': '0 20px 80px rgba(11, 31, 59, 0.4)',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};
