<template>
  <div v-if="!articles.length">
    <p class="text-gray-500">Nothing here yet, sorry 🤷‍♂️</p>
  </div>
  <div v-else>
    <nav>
      <ul>
        <li v-for="article in articles" :key="article.slug">
          <router-link :to="{ path: article.slug }" class="min-h-32 p-3 md:pl-12 flex items-center gap-5 mb-10 rounded-lg transition-colors group hover:bg-violet-500 outline-none focus-visible:ring-2 focus-visible:ring-pink-500 relative">
            <div class="flex flex-col w-1/2">
              <span class="text-xl sm:text-2xl font-bold mb-1 leading-6 group-hover:text-white">{{ article.title }}</span>
              <span class="text-sm text-gray-400 group-hover:text-gray-100">Published on {{ article.published }}</span>
            </div>
            <div class="w-40 h-28 rounded-lg absolute right-0 scale-125 md:right-[20%] -rotate-3 shadow-lg">
              <img :src="`/images/${article.image}`" alt="" class="object-cover object-center w-full h-full rounded-lg" />
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
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
  .find()
)

const articles = data.value.map(entry => ({
  title: entry.title,
  published: entry.published,
  slug: entry._path.replace('/articles/', ''),
  image: entry.image,
}))
</script>