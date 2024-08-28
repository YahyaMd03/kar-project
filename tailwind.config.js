/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slideInFromBottom: 'slideInFromBottom 1s ease-out',
        typing: 'typing 4s steps(40, end) forwards',
      },
    },
  },
  plugins: [],
}

