<template>
  <main class="container mx-auto mt-10 pt-1 px-2 overflow-x-hidden">
    <div v-if="!pending">
      <nuxt-link to="/"
        class="text-gray-500 hover:text-gray-600 text-sm px-2 py-1 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-pink-500">
        &#8592; Back to home
      </nuxt-link>
      <div class="mt-4">
        <ContentBannerTitle :title="title" :image="image" :published="published" />
        <slot />
      </div>
      <ArticleLike :article-slug="articleSlug" :article-about="articleAbout" />
      <Footer />
    </div>
  </main>
</template>

<script setup>
import ContentBannerTitle from '~/components/content/BannerTitle.vue'

const router = useRouter()

const { path: articlePath } = router.currentRoute.value
const articleSlug = articlePath.substring(1)

const { pending, data } = await useAsyncData(`articles${articlePath}`, () => 
  queryContent('articles')
  .where({ _path: { $eq: `/articles${articlePath}` } })
  .findOne())

const { title, description, about: articleAbout, image, published } = data.value
  
useHead({
  titleTemplate: () => `${title} (3-5 min read)`,
  meta: [
    {
      property: 'og:type',
      content: 'article'
    },
    {
      name: 'description',
      content: description
    },
    {
      property: 'og:title',
      content: `${title} (3-5 min read)`
    },
    {
      property: 'og:description',
      content: description
    },
    {
      property: 'og:image',
      content: `https://portimaksym.com/images/${image}`
    },
    {
      name: 'twitter:title',
      content: `${title} (3-5 min read)`
    },
    {
      name: 'twitter:description',
      content: description
    },
    {
      name: 'twitter:image',
      content: `https://portimaksym.com/images/${image}`
    }
  ]
})
</script>
 