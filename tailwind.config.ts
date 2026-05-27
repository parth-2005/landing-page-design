import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A192F',
        'navy-light': '#112240',
        'navy-mid': '#233554',
        blue: '#0070F3',
        'blue-light': '#E6F0FD',
        'blue-mid': '#0051B3',
        accent: '#38BDF8',
        'accent-light': '#E0F2FE',
        off: '#F4F7FA',
        off2: '#E1E8F0',
        danger: '#EF4444',
        'danger-light': '#FEE2E2',
        white: '#FFFFFF',
        // High-contrast semantic colors for text
        slate: {
          600: '#475569',
          700: '#334155',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: 'var(--font-inter, system-ui, sans-serif)',
        serif: 'var(--font-plus-jakarta, system-ui, sans-serif)',
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
        sm: '0 4px 40px rgba(10, 25, 47, 0.06)',
        lg: '0 12px 32px rgba(0, 112, 243, 0.25)',
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
