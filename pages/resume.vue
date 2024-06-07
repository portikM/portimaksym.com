<template>
  <ContentView />
</template>

<script setup>
import ContentView from '~/components/content/View.vue'

useHead({
  titleTemplate: () => 'Maksym Portianoi - Resume',
})

definePageMeta({
  layout: 'resume'
})
</script>