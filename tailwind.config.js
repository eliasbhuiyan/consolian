/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222",
        brand: '#3b5998',
        basic: '#f1f1f1',
      },
      backgroundImage: {
        heroBg: 'linear-gradient(90deg, rgba(18,68,181,.8) 0%, rgba(255,0,0,.8) 53%, rgba(0,151,255,.8) 100%)',
      },
    },
    container: {
      center: true,
    }
  },
  plugins: [],
};
