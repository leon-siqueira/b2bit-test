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
          200: '#F1F1F1',
        },
        'primary': '#02274F',
      },
    },
  },
  plugins: [],
}
