/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        'sm': { max: '500px' },
        // => @media (min-width: 640px) { ... }

        'md': { max: '850px' },
        // => @media (min-width: 1024px) { ... }

        'xl': { max: '1280px' },
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
