/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        'sombra-imagenes': '0px 2px 2px 4px rgba(0, 0, 0, 0.811)',
        'sombra-bg-sm': '0px 2px 2px 0px rgba(0, 0, 0, 0.411)',
        'sombra-bg': '4px 4px 4px 0px rgba(81,87,208,0.6)',
        'sombra-bg-footer': '4px 4px 4px 4px rgba(0, 0, 0, 0.711)',
        'sombra-btn-proyects': '1px 1px 2px rgba(0,0,0,0.65)',
        'inset-shadow': 'inset 0px 4px 4px rgba(1, 1, 1, 0.5);',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}