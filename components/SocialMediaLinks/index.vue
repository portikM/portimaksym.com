<template>
  <div class="flex gap-1">
    <Link href="https://github.com/portikM" label="GitHub">
      <GitHub />
    </Link>
    <Link href="https://twitter.com/portik_m" label="Twitter (X)">
      <X />
    </Link>
    <Link href="https://www.linkedin.com/in/portik/" label="LinkedIn">
      <LinkedIn />
    </Link>
    <nuxt-link v-if="showResumeLink" to="/resume" class="flex items-center justify-center h-10 p-2 rounded-full text-porti-black hover:text-gray-700 outline-none focus-visible:ring-2 focus-visible:ring-pink-500 text-md font-bold">
      Resume
    </nuxt-link>
  </div>
</template>

<script setup>
import Link from './Link.vue'
import GitHub from '~/assets/icons/github.svg'
import LinkedIn from '~/assets/icons/linkedin.svg'
import X from '~/assets/icons/x.svg'

defineProps({
  showResumeLink: {
    type: Boolean,
    default: true
  },
})
</script>