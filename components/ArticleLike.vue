<template>
  <div class="p-[1.35rem] rounded-lg shadow-lg bg-pink-50 flex flex-col lg:flex-row gap-2 items-center justify-center border-2 border-pink-300 mt-10">
    If you enjoyed reading this article, please consider
    <button class="font-bold flex gap-2 items-center px-2 py-1 rounded-lg hover:text-gray-600 outline-none focus-visible:ring-2 focus-visible:ring-pink-500 border border-pink-300 border-dashed relative" :class="{ 'text-gray-500 pointer-events-none': likedArticle }" :disabled="likedArticle" @click="onLike">
      <Heart class="text-pink-500" :class="{ '!text-pink-300': likedArticle }" />
      liking
      <span class="absolute -top-4 -left-5 -rotate-6">
        <Transition name="slide-up">
          <span v-if="likedArticle" class="flex items-center gap-1 font-normal text-xs text-pink-500 whitespace-nowrap">
            <Check filled class="stroke-current" /> Thank you!
          </span>
        </Transition>
      </span>
    </button>
    it<ClientOnly><span v-if="!isSupported" class="-ml-2 contents">.</span></ClientOnly>
    <ClientOnly>
      <span v-if="isSupported" class="contents">
        and
        <button class="font-bold flex gap-2 items-center px-2 py-1 rounded-lg hover:text-gray-600 outline-none focus-visible:ring-2 focus-visible:ring-pink-500 border border-pink-300 border-dashed relative" @click="onShare">
          sharing
          <Transition name="slide-up" mode="in-out">
            <span v-if="displayClipboardMessage" class="font-normal text-xs text-pink-500 whitespace-nowrap absolute -top-4 lg:-top-5 -right-3/4">Copied the link to your clipboard!</span>
          </Transition>
        </button>
        it with your friends.
      </span>
    </ClientOnly>
  </div>
</template>

<script setup>
import Heart from '~/assets/icons/heart.svg'
import Check from '~/assets/icons/check.svg'
import { useClipboard } from '@vueuse/core'

const route = useRoute()
const copyText = `I just finished reading this cool article:\nhttps://portimaksym.com${route.path}`

const { isSupported, copy } = useClipboard({ copyText })

const localStorageItem = 'portimaksym-liked-articles'
const articleSlug = route.path.substring(1)

const likedArticles = ref([])
const justLikedArticle = ref(false)
const displayClipboardMessage = ref(false)

const previouslyLikedArticle = computed(() => likedArticles.value.includes(articleSlug))
const likedArticle = computed(() => previouslyLikedArticle.value || justLikedArticle.value)

const onLike = () => {
  justLikedArticle.value = true

  likeArticle()
  // TODO: ga event
}

const likeArticle = () => {
  if (localStorage) {
    try {
      localStorage.setItem(localStorageItem, [...likedArticles.value, articleSlug].join(','))
    } catch {
      // no error handling needed
    }
  }
}

const onShare = () => {
  copy(copyText)

  displayClipboardMessage.value = true
  // TODO: ga event
}

const getLikedArticles = () => {
  if (localStorage) {
    const storageItem = localStorage.getItem(localStorageItem)

    if (typeof storageItem === 'string') {
      try {
        likedArticles.value = storageItem.split(',')
      } catch {
        // no error handling needed
      }
    }
  }
}

watch(displayClipboardMessage, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      displayClipboardMessage.value = false
    }, 5000)
  }
})

onMounted(() => {
  getLikedArticles()
})
</script> 