<!-- TODO: remove this component once useNuxtImage error is resolved -->
<template>
  <img
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
  />
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  }
})
</script>