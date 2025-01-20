/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-background-gray': '#F6F7F8',
        // 'brand-primary-green': '#01F0D0',
        'brand-primary-blue': '#1b609d',   //fixme - change to blue
        'brand-primary-black': '#202224',
        'brand-primary-white': '#fff',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}