module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Include all your source files with JS, TS, JSX, TSX extensions
    './pages/**/*.{js,ts,jsx,tsx}', // Include files in the `pages` directory (for Next.js)
    './components/**/*.{js,ts,jsx,tsx}', // Include files in the `components` directory
    './app/**/*.{js,ts,jsx,tsx}', // If you're using Next.js App Router
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
