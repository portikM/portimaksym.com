<template>
  <div
    class="h-screen flex flex-col justify-center items-center text-center container mx-auto"
  >
    <img
      class="w-64 mx-auto"
      :src="errorImage"
      alt="Help! He talks code to me against my will!"
    />
    <h1 class="pb-4" v-if="error.statusCode === 404">Sorry, page not found</h1>
    <h1 class="pb-4" v-else>Ooops, an error occurred</h1>
    <nuxt-link class="py-2 px-6 anchor z-50 inline-flex items-center" to="/">
      <!-- prettier-ignore -->
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current mr-1">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      Home page
    </nuxt-link>
  </div>
</template>

<script>
import notFoundImg from '~/assets/images/404.png'
import errorImg from '~/assets/images/Error.png'

export default {
  props: ['error'],
  data() {
    return {
      notFoundImg,
      errorImg
    }
  },
  computed: {
    errorImage() {
      return this.error.statusCode === 404 ? notFoundImg : errorImg
    }
  }
}
</script>
