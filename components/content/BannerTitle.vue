<template>
  <div class="h-72 rounded-lg shadow-lg relative mb-8">
    <div class="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-black/50 rounded-lg px-4 text-center">
      <h1 class="text-white">{{ title }}</h1>
      <span class="text-sm text-white font-medium mt-2">Last updated: {{ published }}</span>
    </div>
    <img :src="src" alt="" class="w-full h-full object-cover rounded-lg" />
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  published: {
    type: String,
    required: false
  },
})

const src = computed(() => `/images/${props.image}`)
</script>