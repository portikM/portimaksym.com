<template>
  <div>
    <div
      v-show="loading"
      class="flex items-center justify-center h-screen text-center"
    >
      <p class="ellipsis-loading">Loading</p>
    </div>
    <div v-show="!loading" class="container pt-24 mx-auto sm:pt-10">
      <pdf
        :src="require('~/static/Maksym_Portianoi_Resume.pdf')"
        @loaded="loading = false"
      ></pdf>
    </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  head() {
    return {
      title: 'Maksym Portianoi - software engineer',
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Maksym Portianoi - software engineer'
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: 'Maksym Portianoi - software engineer'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Maksym Portianoi - software engineer, front-end developer and UI/UX enthusiast from Canada.'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Maksym Portianoi - software engineer, front-end developer and UI/UX enthusiast from Canada.'
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
      ]
    }
  },
  components: {
    pdf
  },
  data() {
    return {
      loading: true
    }
  }
}
</script>
