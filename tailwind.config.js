/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light para modo claro, y dark para modo oscuro
        primary: {
          light: '#1D4ED8',
          dark: '#3B82F6',
        },
        secondary: {
          light: '#8B2D2F',
          dark: '#A13B3D',
        },
        background: {
          light: '#FFFFFF',
          dark: '#1E293B',
        },
        text: {
          light: '#111827',
          dark: '#F3F4F6',
        },
        accent: {
          light: '#F59E0B',
          dark: '#F59E0B',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      }, fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'monospace'],
      },
    },
    zIndex: {
      toast: '1100',
      tooltip: '1000',
      dialog: '900',
      navbar: '800',
      navbarPhone: '600',
      backdrop: '-10',
    },
  },
  plugins: [],
}
