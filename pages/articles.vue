<template>
  <div class="container mx-auto mt-10 pt-1 px-2 articles-nav-container">
    <nuxt-link to="/" class="text-gray-500 hover:text-gray-600 text-sm px-2 py-1 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-pink-500">
      &#8592; Back to home
    </nuxt-link>
    <div class="mt-8">
      <ArticlesNav />
    </div>
  </div>
</template>
  
<script setup>
useHead({
  titleTemplate: () => 'Maksym Portianoi - Articles',
})
</script>

<style lang="scss" scoped>
.articles-nav-container {
  min-height: calc(100vh - 210px);
}
</style>