/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        niva: {
          bg: '#FBFBF9',
          canvas: '#FFFFFF',
          card: '#FFFFFF',
          border: '#E3ECE6',
          text: '#13231F',
          muted: '#61756F',
          subtle: '#8FA19B',
          forest: '#153E35',
          forestDark: '#0D2923',
          emerald: '#10B981',
          teal: '#14B8A6',
          sage: '#DEEEE7',
          sageLight: '#F2F8F5',
          gold: '#C5A880',
          goldLight: '#FAF6EE',
          sand: '#ECE7DD',
          cyan: '#06B6D4',
          blue: '#0284C7',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'monospace']
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(21, 62, 53, 0.05)',
        'luxury': '0 20px 50px -10px rgba(21, 62, 53, 0.08), 0 0 0 1px rgba(227, 236, 230, 0.8)',
        'float': '0 25px 60px -15px rgba(21, 62, 53, 0.10)',
        'sage-glow': '0 0 30px rgba(16, 185, 129, 0.15)',
      }
    },
  },
  plugins: [],
}
