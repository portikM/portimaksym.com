<template>
  <main class="container mx-auto mt-10 pt-1 px-2 overflow-x-hidden">
    <nuxt-link to="/"
      class="text-gray-500 hover:text-gray-600 text-sm px-2 py-1 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-pink-500">
      &#8592; Back to home
    </nuxt-link>
    <div class="mt-4">
      <slot />
    </div>
    <ArticleLike />
    <Footer />
  </main>
</template>

<script setup>
useHead({
  // TODO: fetch article data dynamically
  titleTemplate: () => 'Things I learned while building design system at Kong',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'I refactored our entire open-source UI component library. Here are a few lessons I learned.'
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: 'I refactored our entire open-source UI component library. Here are a few lessons I learned.'
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: 'I refactored our entire open-source UI component library. Here are a few lessons I learned.'
    },
  ]
})
</script>
 