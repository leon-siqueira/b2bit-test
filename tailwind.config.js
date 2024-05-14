/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray':{
          100: '#fafafa',
        }
      },
    },
  },
  plugins: [],
}
