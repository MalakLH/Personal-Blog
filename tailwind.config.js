// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vivid_purple: '#fff3f8ff',    
        light_pink: '#F3C8DD',  
        vivd_pink: '#D183A9',     
        light_purple: '#71557A',
        brown_purple: '#4B1535',  
      }
    },
  },
  plugins: [],
}