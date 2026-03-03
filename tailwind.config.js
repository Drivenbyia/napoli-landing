/** @type {import('tailwindcss').Config} */
export default {
  // Indique à Tailwind où chercher les classes utilitaires à compiler
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Tu pourras ajouter ici des couleurs ou polices personnalisées si besoin plus tard
    },
  },
  plugins: [],
}

