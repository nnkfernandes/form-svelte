/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{svelte, html, js, css, ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
