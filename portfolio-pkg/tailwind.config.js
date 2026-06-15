/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F6F8FA', // cool analyst paper (deliberately not cream)
        surface: '#FFFFFF',
        ink: '#111A24', // near-black slate
        muted: '#5B6B7A',
        line: '#E2E8EE', // hairline
        accent: '#0B6E4F', // emerald = revenue / positive
        positive: '#0B6E4F',
        caution: '#B47100', // amber = variance / budget
        risk: '#B4322B', // red = churn / risk
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontVariantNumeric: ['tabular-nums'],
      boxShadow: {
        tile: '0 1px 2px rgba(17, 26, 36, 0.04), 0 1px 3px rgba(17, 26, 36, 0.06)',
        lift: '0 8px 28px -8px rgba(17, 26, 36, 0.18)',
      },
      backgroundImage: {
        // faint spreadsheet/chart grid used behind the hero
        grid: 'linear-gradient(#E2E8EE 1px, transparent 1px), linear-gradient(90deg, #E2E8EE 1px, transparent 1px)',
      },
      backgroundSize: {
        cell: '28px 28px',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.55s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
