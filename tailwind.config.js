/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F2DD66',
        secondary: '#E50E2D',
        accent: '#EADA9C',
        accent2: '#F2EFE6',
        neutral: '#1B1F20',
      },
      fontFamily: {
        sans: ['var(--saira-font)'],
      },
    },
  },
  plugins: [],
};
