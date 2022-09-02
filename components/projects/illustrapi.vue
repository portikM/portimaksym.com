<template>
  <div class="flex flex-col w-full max-w-4xl sm:flex-row">
    <div class="w-full h-64 mb-8 rounded-lg shadow-lg sm:mr-8 sm:mb-0 sm:w-2/5">
      <img
        src="~/assets/images/illustrapi.png"
        alt=""
        class="object-cover w-full h-full mb-4 rounded-lg"
      />
    </div>
    <div class="flex flex-col justify-center flex-1">
      <div class="flex justify-between mb-4">
        <h3>Illustrapi</h3>
        <div class="inline-flex items-center">
          <NuxtJS class="w-5 h-5 mr-2 text-gray-500 fill-current" />
          <Tailwind class="w-5 h-5 text-gray-500 fill-current" />
        </div>
      </div>
      <p class="mb-6 text-sm">
        Illustrapi is an idea for vector illustration library with API. Demo
        illustrations are borrowed from amazing
        <a
          class="text-gray-500 border-b border-gray-400 hover:text-gray-600"
          href="https://undraw.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          unDraw</a
        >.<br /><br />Idea for Illustrapi was inspired while working with
        <a
          class="text-gray-500 border-b border-gray-400 hover:text-gray-600"
          href="https://unsplash.com/developers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash API</a
        >
        - I wanted to create something similar to empower vector illustration on
        the web.
      </p>
      <div class="inline-flex items-center">
        <a
          href="https://github.com/portikM/illustrapi"
          target="_blank"
          aria-label="github"
          rel="noopener noreferrer"
          @click="$ga.event('Portfolio - Illustrapi', 'click', 'github')"
          class="hover:text-gray-700 focus:outline-none"
        >
          <GitHub class="w-5 h-5 mr-2 fill-current" />
        </a>
        <a
          href="https://dribbble.com/shots/14714554-Illustrapi-vector-illustration-library-with-API"
          target="_blank"
          aria-label="github"
          rel="noopener noreferrer"
          @click="$ga.event('Portfolio - Illustrapi', 'click', 'dribbble')"
          class="hover:text-gray-700 focus:outline-none"
        >
          <Dribbble class="w-5 h-5 mr-2 fill-current" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import NuxtJS from '~/assets/images/nuxtjs.svg?inline'
import Tailwind from '~/assets/images/tailwindcss.svg?inline'
import GitHub from '~/assets/images/github.svg?inline'
import Dribbble from '~/assets/images/dribbble.svg?inline'

export default {
  components: {
    NuxtJS,
    Tailwind,
    GitHub,
    Dribbble
  }
}
</script>
