import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'MLN-event | event-агентство организации праздников | Москва',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'MLN-event - лучшее, что могло случиться с миром ивента! Корпоративы, свадьбы, взрослые и детские мероприятия и праздники в Москве'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css'
      }
    ],

    script: [{
        src: "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js",
        type: "text/javascript"
      },

      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js",
        type: "text/javascript"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff',
    height: '4px',
    duration: 5000
  },

  /*
   ** Global CSS
   */
  css: [
    '~assets/styles/transition.css',
    '~assets/styles/styles.css',
    '~assets/styles/form.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-fontawesome',
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */

    extend(config, ctx) {}
  },
  env: {
    fbURL: 'https://mln-event-2ce70.firebaseio.com',
    fbAPIKey: 'AIzaSyAlJJv1YvOf5DjtKTHEjZMJ3PDXhjuRBRo'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
