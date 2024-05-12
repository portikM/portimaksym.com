<template>
  <a class="flex items-center justify-center w-10 h-10 p-2 rounded-full text-porti-black hover:text-gray-700 outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
    :href="href" target="_blank" :aria-label="label" rel="noopener">
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>