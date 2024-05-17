<template>
  <component
    :is="tag"
    :class="classNames"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  classNames: {
    type: String,
    default: ''
  }
})
</script>