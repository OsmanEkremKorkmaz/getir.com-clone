module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '0.25': '0.063rem'
      },
      backgroundImage: theme => ({
        'mobile-app': 'url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)',
        'partner': 'url(https://getir.com/_next/static/images/partners-background-e516806adcf95650572224b0c2e681f3.jpg)'
      }),
      colors: theme => ({
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
        'brand-yellow': '#ffd300',
        'gray-storm': '#697488',
        'bg-gray': '#fafafa',
        'primary-light' : "#f3f0fe"
      })
    },
  },
  plugins: [],
}
