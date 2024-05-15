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
        'red': {
          200: '#FADBD8',
        },
        'primary': '#02274F',
        'secondary': '#F1F5F9',
      },
      fontFamily: {
        'sans': ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
