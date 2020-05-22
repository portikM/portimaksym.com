<template>
  <div>
    <div
      v-show="loading"
      class="h-screen flex justify-center items-center text-center"
    >
      <p class="ellipsis-loading">Loading</p>
    </div>
    <div v-show="!loading" class="pt-24 sm:pt-10 container mx-auto">
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
      title: 'Maksym Portianoi - resume'
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
