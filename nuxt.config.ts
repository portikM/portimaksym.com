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
          hid: 'description',
          name: 'description',
          content: 'I am a software engineer with a passion for UX and a grain of curiosity'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Maksym Portianoi'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'I am a software engineer with a passion for UX and a grain of curiosity'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://portimaksym.com/og_image.png'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Maksym Portianoi'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'I am a software engineer with a passion for UX and a grain of curiosity'
        },
        {
          hid: 'twitter:image',
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
  devtools: { enabled: true },
  css: ['~/assets/styles/main.css'],
  typescript: {
    typeCheck: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    'nuxt-gtag',
  ],
  gtag: {
    id: 'G-F434T4Q2TC'
  }
})