<template>
  <div
    class="container flex flex-col items-center justify-center h-screen mx-auto text-center"
  >
    <img
      class="w-64 mx-auto"
      :src="eggplant"
      alt="Help! He talks code to me against my will!"
    />
    <h1 class="pb-4" v-if="error.statusCode === 404">Sorry, page not found</h1>
    <h1 class="pb-4" v-else>Ooops, an error occurred</h1>
    <nuxt-link class="z-50 inline-flex items-center px-6 py-2 anchor" to="/">
      <!-- prettier-ignore -->
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1 stroke-current">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      Home page
    </nuxt-link>
  </div>
</template>

<script>
import eggplant from '~/assets/images/eggplant.png'

export default {
  props: ['error'],
  data() {
    return {
      eggplant
    }
  }
}
</script>
