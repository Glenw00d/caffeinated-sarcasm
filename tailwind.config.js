/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        // 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          900: '#422006', // 
        },
      },
      fontFamily: {
        comic: ['"Comic Neue"', 'cursive'],
      },
    },
  },
  plugins: [],
};
