import { getArticlesRoutes } from './utils/getArticlesRoutes'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Maksym Portianoi',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        },
        {
          name: 'robots',
          content: 'index, follow'
        },
        {
          name: 'description',
          content: 'I am a software engineer with a passion for UX and a grain of curiosity'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:title',
          content: 'Maksym Portianoi'
        },
        {
          property: 'og:description',
          content: 'I am a software engineer with a passion for UX and a grain of curiosity'
        },
        {
          property: 'og:image',
          content: 'https://portimaksym.com/og_image.png'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: 'Maksym Portianoi'
        },
        {
          name: 'twitter:description',
          content: 'I am a software engineer with a passion for UX and a grain of curiosity'
        },
        {
          name: 'twitter:image',
          content: 'https://portimaksym.com/og_image.png'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://portimaksym.com' }
      ]
    },
  },
  hooks: {
    // add a route for each article
    'pages:extend'(pages) {
      getArticlesRoutes().forEach((article) => pages.push(article))
    }
  },
  devtools: { enabled: true },
  css: [
    '~/assets/styles/main.css',
    '~/assets/styles/styles.scss'
  ],
  typescript: {
    // TODO: enable type checking
    // typeCheck: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    'nuxt-gtag',
    '@nuxt/content',
    '@vueuse/nuxt'
  ],
  gtag: {
    id: 'G-F434T4Q2TC'
  },
  content: {
    highlight: {
      theme: 'github-dark'
    }
  },
})