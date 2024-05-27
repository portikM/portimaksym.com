<template>
  <div v-if="articles && articles.length">
    <nav>
      <ul class="flex flex-col gap-10">
        <li v-for="article in articles" :key="article.slug">
          <router-link :to="{ path: article.slug }" class="min-h-32 p-3 flex flex-col md:flex-row items-center gap-12 rounded-lg transition-colors group hover:bg-violet-500 outline-none focus-visible:ring-2 focus-visible:ring-pink-500">
            <div class="w-10/12 md:w-40 h-32 md:h-28 rounded-lg scale-125 -rotate-3 shadow-lg shrink-0">
              <img :src="`/images/${article.image}`" alt="" class="object-cover object-center w-full h-full rounded-lg" />
            </div>
            <div class="flex flex-col">
              <span class="text-xl lg:text-2xl font-bold mb-1 leading-6 group-hover:text-white">{{ article.title }}</span>
              <span class="mb-3 text-sm group-hover:text-gray-100">{{ article.description }}</span>
              <span class="text-sm text-gray-400 group-hover:text-gray-100">Published on {{ article.published }}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
  <div v-else>
    <p class="text-gray-500">Nothing here yet, sorry 🤷‍♂️</p>
  </div>
</template>

<script setup>
const props = defineProps({
  /**
   * Slug of the article to ignore
   * e.g.: passing 'my-article' will ignore the article at /articles/my-article
   */
  ignore: {
    type: String,
    default: ''
  },
  limit: {
    type: Number,
    default: 0
  }
})

const ignoreReadmeClause = { $not: '/articles/readme' }

const { data } = await useAsyncData('articles', () => 
  queryContent('articles')
  .where({ _path: props.ignore ? { $and: [ ignoreReadmeClause, { $not: `/articles/${props.ignore}` } ] } : ignoreReadmeClause })
  .sort({ index: -1, $numeric: true })
  .limit(props.limit)
  .find())

if (data.value) {
  const articles = data.value.map(entry => ({
    title: entry.title,
    description: entry.description,
    published: entry.published,
    slug: entry._path.replace('/articles/', ''),
    image: entry.image,
  }))
}
</script>