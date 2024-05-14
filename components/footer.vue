<template>
  <footer class="mt-10 flex flex-col items-center pb-20 sm:flex-row sm:items-baseline sm:justify-between">
    <h2 class="mt-3 mb-3 sm:mb-0">Have a wonderful day!</h2>
    <SocialMediaLinks :show-resume-link="showResumeLink" />
  </footer>
</template>

<script setup>
defineProps({
  showResumeLink: {
    type: Boolean,
    default: true
  },
})
</script>