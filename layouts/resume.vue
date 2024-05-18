<template>
  <main class="container mx-auto mt-10 pt-1 px-2 overflow-x-hidden">
    <div class="flex justify-between gap-3">
      <nuxt-link to="/"
        class="text-gray-500 hover:text-gray-600 text-sm px-2 py-1 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-pink-500">
        &#8592; Back to home
      </nuxt-link>
      <nuxt-link to="/Maksym_Portianoi_Resume.pdf" external target="_blank"
        class="flex gap-2 items-center text-gray-500 hover:text-gray-600 text-sm px-2 py-1 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-pink-500">
        <Download filled class="stroke-current" />
        Download PDF
      </nuxt-link>
    </div>
    <div class="mt-4">
      <slot />
    </div>
    <Footer :show-resume-link="false" />
  </main>
</template>

<script setup>
import Download from '~/assets/icons/download.svg'
</script>
