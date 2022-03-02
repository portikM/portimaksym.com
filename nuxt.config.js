
export default {
  generate: {
    fallback: true
  },
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Maksym Portianoi',
    meta: [
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Maksym Portianoi'
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'Maksym Portianoi'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hello, my name is Maksym Portianoi. I am software engineer, front-end developer and UI/UX enthusiast from Canada.'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Hello, my name is Maksym Portianoi. I am software engineer, front-end developer and UI/UX enthusiast from Canada.'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'portimaksym.com'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://portimaksym.com/'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://portimaksym.com/og_image.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-analytics', {
      id: 'UA-163760319-1'
    }],
    "@nuxtjs/svg",
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(pdf)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
}
