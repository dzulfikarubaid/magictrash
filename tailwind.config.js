/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'color1':'#7A918D',
        'color2':'#93B1A7',
        'color3':'#99C2A2',
        'color4':'#C5EDAC',
        'color5':'#DBFEB8',
        'color6':'#FFDF82',
        'color7':'#D9EDDF',
        'teks1':'#386C5F',
        'tekssub':'#47495C',
        'judul':'#0E1735',
        'tekssmall':'#888B97',
      },
      
    },
    screens: {
      
    },
    
  },
  plugins: [],
}

