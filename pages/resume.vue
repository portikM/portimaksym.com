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
