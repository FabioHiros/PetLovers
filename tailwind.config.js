/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'azul':{
        100: '#6cb5c6',
        200: '#DFF2EB',
        300: '#B9E5E8',
        400: '#7AB2D3',
        500: '#4A628A'
      },
      screens: {
        'max-[1100px]': { 'max': '1100px' }, // Custom breakpoint
      },
    }}
    
  },
  plugins: [],
}

