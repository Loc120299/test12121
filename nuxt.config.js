import redirectSSL from 'redirect-ssl'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'Online Store',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: '~/components/common/loading.vue',
  env: {
    API_URL: process.env.API_URL,
    PRODUCT_API_URL: process.env.PRODUCT_API_URL,
    CLOUDFRONT_IMAGE_API: process.env.CLOUDFRONT_IMAGE_API,
    REDIS_HOST: process.env.REDIS_HOST,
    CACHE_HOME_PAGE: process.env.CACHE_HOME_PAGE,
    CACHE_PRODUCT_PAGE: process.env.CACHE_PRODUCT_PAGE,
    CACHE_INFO_STORE: process.env.CACHE_INFO_STORE,
    GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID,
    ENABLE_CACHE: process.env.ENABLE_CACHE,
    CRAWL_DELAY: process.env.CRAWL_DELAY,
    ADWORD_TRACKING_ID: process.env.ADWORD_TRACKING_ID,
    FACEBOOK_PIXEL_ID: process.env.FACEBOOK_PIXEL_ID,
    IS_ESTORE: process.env.IS_ESTORE,
    S3_BUCKET_LINK: process.env.S3_BUCKET_LINK,
    ONLY_SHIRT_SYS: process.env.ONLY_SHIRT_SYS,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios.js',
    '@/plugins/vue-lodash.js',
    '@/plugins/vue2-filters.js',
    '~/plugins/custom-filter.js',
    '~/plugins/product-api.js',
    '~/plugins/gtag.client.js',
    '~/plugins/pin.client.js',
    '~/plugins/stripe-card-element.client.js',
    '~/plugins/vee-validate.js',
    '~/plugins/ecomTracking.client.js',
    { src: '~/plugins/global-components.js', ssr: true },
    { src: '~/plugins/vue-slick-carousel.js' },
    { src: '~/plugins/vue-star-rating.js', ssr: false },
    { src: '~/plugins/v-lazy-image.js', ssr: true}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/robots',
    [
      'nuxt-perfect-cache',
      {
        disable: true,
        appendHost: false,
        ignoreConnectionErrors: true,
        prefix: 'r-',
        url: process.env.REDIS_HOST,
        getCacheData(route, context) {
          return false
        }
      }
    ]
  ],

  fontawesome: {
    icons: {
      solid: [ 'faAnglesLeft', 'faChevronLeft', 'faAnglesRight', 'faChevronRight', 'faMagnifyingGlass' ]
    }
  },

  toast: {
    position: 'top-center',
    duration: 2000,
    theme: 'bubble',
    register: []
  },
  robots: [
    {
      'UserAgent': 'bingbot',
      'Disallow': ['/checkout', '/confirm', '/cart', '/wholesale', '/shop'],
      'Allow': '/',
      'CrawlDelay': process.env.CRAWL_DELAY
    },
    {
      'UserAgent': 'Googlebot',
      'Disallow': ['/checkout', '/confirm', '/cart', '/wholesale', '/shop'],
      'Allow': '/',
      'CrawlDelay': process.env.CRAWL_DELAY
    },
    {
      'UserAgent': 'Googlebot-Mobile',
      'Disallow': ['/checkout', '/confirm', '/cart', '/wholesale', '/shop'],
      'Allow': '/',
      'CrawlDelay': process.env.CRAWL_DELAY
    },
    {
      'UserAgent': 'Pinterest',
      'Disallow': ['/checkout', '/confirm', '/cart', '/wholesale', '/shop'],
      'Allow': '/',
      'CrawlDelay': process.env.CRAWL_DELAY
    },
    {
      'UserAgent': 'Pinterest/0.2',
      'Disallow': ['/checkout', '/confirm', '/cart', '/wholesale', '/shop'],
      'Allow': '/',
      'CrawlDelay': process.env.CRAWL_DELAY
    },
    {
      'UserAgent': 'Pinterestbot',
      'Disallow': ['/checkout', '/confirm', '/cart', '/wholesale', '/shop'],
      'Allow': '/',
      'CrawlDelay': process.env.CRAWL_DELAY
    }
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL
  },
  serverMiddleware: [
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production'
    })
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: '/_nuxt/1.0.0/',
    filenames: {
      chunk: ({ isDev }) => isDev ? '[name].js' : '[chunkhash].js'
    },
    extend(config, ctx) {
      config.performance.hints = false
      config.performance.maxEntrypointSize = 512000
      config.performance.maxAssetSize = 512000
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  }
}
