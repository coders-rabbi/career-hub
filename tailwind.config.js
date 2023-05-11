/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#1A1919', 
        'secondary':'#757575',
        'bg-primary': '#F9F9FF',
        'bg-secondary': '#F4F4F4',
        'bg-tertiary': '#818DFE',
        'bg-extra': '#9675FF',
        'extra': '#F4F4F4',
        'heading-bg': '#F9F9FF'
      },
    },
  },
  plugins: [],
}

