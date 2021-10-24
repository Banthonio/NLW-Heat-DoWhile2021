module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'banner-girl': "url('./src/assets/banner-girl.png')",
        'side-banner': "url('./src/assets/background.svg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
