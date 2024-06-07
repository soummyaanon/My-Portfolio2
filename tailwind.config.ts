import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'type': 'type 6s steps(60) infinite',
      },
      keyframes: {
        type: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      scale: {
        '90': '0.9',
      },
      rotate: { // Add this
        '45': '45deg',
      },
    },
  },
  plugins: [],
}

export default config