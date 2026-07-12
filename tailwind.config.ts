import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFEFF',
        gray: { DEFAULT: '#F2F3F3', 100: '#F2F3F3', 200: '#E5E7E8', 300: '#D1D3D4', 400: '#9A9C9E', 500: '#6B6D6F', 600: '#4A4C4E', 700: '#2D2F31' },
        primary: { DEFAULT: '#2C6DF6', 50: '#EBF1FE', 100: '#D6E3FD', 200: '#A8C5FB', 300: '#7AA7F9', 400: '#2C6DF6', 500: '#1A5AE0', 600: '#1348B8' },
        deep: { DEFAULT: '#001081', 50: '#E6E8F3', 100: '#B3B8D9', 200: '#8088BF', 300: '#4D58A5', 400: '#1A288B', 500: '#001081', 600: '#000D68' },
        // Formal consultancy palette
        ink: { DEFAULT: '#0A1A38', deep: '#06122B' },
        paper: { DEFAULT: '#FAF9F6', white: '#FFFFFF' },
        cobalt: { DEFAULT: '#2C6DF6', deep: '#1A5AE0' },
      },
      fontFamily: {
        sans: 'var(--font-inter, system-ui, sans-serif)',
        heading: 'var(--font-plus-jakarta, system-ui, sans-serif)',
        serif: 'var(--font-serif-display, Georgia, serif)',
      },
      spacing: {
        13: '3.25rem',
        17: '4.25rem',
        30: '7.5rem',
      },
      borderRadius: {
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
      },
      boxShadow: {
        sm: '0 4px 40px rgba(0, 16, 129, 0.06)',
        md: '0 8px 24px rgba(44, 109, 246, 0.12)',
        lg: '0 12px 32px rgba(44, 109, 246, 0.25)',
      },
      borderWidth: {
        1.5: '1.5px',
      },
      zIndex: {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        10: '10',
        900: '900',
      },
    },
  },
  plugins: [],
}

export default config
