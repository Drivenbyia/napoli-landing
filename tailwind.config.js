/** @type {import('tailwindcss').Config} */
export default {
  // Indique à Tailwind où chercher les classes utilitaires à compiler
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: '#8A9A86',
        'deep-sage': '#4A5D4E',
        cream: '#FAF9F6',
        terracotta: '#E27D60',
        taupe: '#B5A397',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
      },
    },
  },
  plugins: [],
}

