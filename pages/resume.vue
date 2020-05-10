<template>
  <div class="pt-10 container mx-auto">
    <pdf :src="require('~/static/Maksym_Portianoi_Resume.pdf')"></pdf>
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
  }
}
</script>
