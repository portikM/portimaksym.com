<template>
  <main class="container mx-auto mt-10 pt-1 px-2 overflow-x-hidden">
    <nuxt-link to="/"
      class="text-gray-500 hover:text-gray-600 text-sm px-2 py-1 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-pink-500">
      &#8592; Back to home
    </nuxt-link>
    <div class="mt-4">
      <slot />
    </div>
    <ArticleLike :article-about="articleAbout" />
    <Footer />
  </main>
</template>

<script setup>
const route = useRoute()

const articleAbout = ref('')

const { data } = await useAsyncData(`articles${route.path}`, () => 
  queryContent('articles')
  .where({ _path: { $eq: `/articles${route.path}` } })
  .findOne())

if (data.value) {
  const { title, description, about, image } = data.value

  articleAbout.value = about
  
  useHead({
    titleTemplate: () => title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: title
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: description
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: `https://portimaksym.com/images/${image}`
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `https://portimaksym.com/images/${image}`
      }
    ]
  })
}
</script>
 