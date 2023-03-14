module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {

      },
      fontFamily: {
        // Overriding sans font family because sans is the default font family used by tailwind in its base css file
        roboto: ["Roboto", "sans-serif"],
        arial: 'Arial, Helvetica, sans-serif',
        // poppins: ''
      },
      colors: {
        primary: '#F2F2F6',
        'dark-purple': '#19134F',
        'footer-purple': '#07002F',
        'maroon': '#C52C29',
        skin: '#FAEBD7',
        orange: '#FF7300',
        'light-purple': '#aa97d6',
        'light-blue': '#9FD8EB',
        'light-pink': '#EB91A6',
        'lightest-brown': '#DABAA1',
        'lighter-gray': '#F5F5F5',
        'light-greenish': '#7FFFD4',
        'blue-light': '#6071ec',
        'red-light': '#ff5965',
        // MG Theme Colors
        'mg-dark': '#111723',
        'mg-white': '#F2F3F8',
        'mg-black': '#0d111b',
        'mg-gray': '#e2e5ec',
        'mg-primary':'#303086',
        'mg-secondary': '#eb8923'
      },
      boxShadow: {
        rounded: '0 0 20px 1px rgba(0, 0, 0, 0.13)',
        'purple-outline': '0 0 1px 3px #6f5d99',
        'gray-outline': '0 0 1px 3px #D1D5DB',

      },
      backgroundImage: {
        poster: "url('https://logo.us-east-1.linodeobjects.com/valentinee.jpg')",
        bestSellerPoster: "linear-gradient(164deg, rgba(248,239,234,1) 0%, rgba(180,151,145,1) 97%, rgba(125,62,57,1) 100%), url('@/assets/img/home/collection-1.jpg')"
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover']
    },
  },
   daisyui: {
      styled: true,
      themes: false,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      // themes: [
      //   'light', // first one will be the default theme
      // ],
  },
  plugins: [
    require('daisyui'),
  ],
}
