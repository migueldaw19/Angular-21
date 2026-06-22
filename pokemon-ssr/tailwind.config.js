// Para poder generar este archivo hay que hacer lo siguiente
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss-cli@latest init

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      // Luego en el hatml para ponerlo en partica solo hay que poner animated-fadeIn
      animation: {
        fadeIn: 'fadeIn .2s ease-in-out'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
