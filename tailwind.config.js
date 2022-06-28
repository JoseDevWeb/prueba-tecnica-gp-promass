/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': "'Inter', sans-serif",
      },
      colors: {
        'ptec-dark': '#617089',
        'ptec-golden': '#FFD25F',
        'ptec-gray': '#A6AFBE',
        'ptec-gray-light': '#EAF0FA',
        'ptec-light': '#FFFFFF',
      },
      fontSize: {
        '27px': ['27px'],
      },
      lineHeight: {
        'extra-70px': '70px',
        'extra-custom-subtitulos': '87px',
        'extra-58px': '58px',
        'extra-29px': '29px',
      }
    },
  },
  plugins: [],
}
