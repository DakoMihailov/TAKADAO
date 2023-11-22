/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#434449',
          200: '#8B8D84',
        },
        yellow: {
          100: '#D0FD3E',
        },
      },
    },
  },
}
