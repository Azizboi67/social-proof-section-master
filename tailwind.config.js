/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors:{  
        'dark-magneta':' hsl(300, 43%, 22%)',
        'soft-pink':'hsl(333, 80%, 67%)',
        'light-gray-magneta':' hsl(300, 24%, 96%)',
        'dark-gray-magneta':'hsl(303, 10%, 53%)'
      }
    },
  },
  plugins: [],
}