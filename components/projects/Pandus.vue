<template>
  <div class="flex flex-col w-full max-w-4xl sm:flex-row">
    <div class="w-full mb-8 sm:mr-8 sm:mb-0 sm:w-2/5">
      <video class="object-cover w-full h-64 rounded-lg shadow-lg" controls>
        <source src="https://portik-portfolio-public.s3.ca-central-1.amazonaws.com/Pandus.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="flex flex-col justify-center flex-1">
      <div class="flex justify-between mb-4">
        <h2>Pandus</h2>
        <div class="inline-flex items-center">
          <Firebase class="w-5 h-5 mr-2 text-gray-500 fill-current" />
          <NuxtJS class="w-5 h-5 mr-2 text-gray-500 fill-current" />
        </div>
      </div>
      <p class="mb-6 text-sm">
        In my previous role I was working on a rich text-editor (tiptap, built
        on top of ProseMirror) for a microlearning course authoring platform and
        learned that I love working on complex user-facing platforms that serve
        a purpose to unlock creativity mode in users. I started Pandus in
        pursuit of my desire to create a cool platform to help teams share
        knowledge and insights.
      </p>
      <div class="inline-flex items-center">
        <a href="https://pandus.co/" target="_blank" aria-label="website" rel="noopener"
          class="hover:text-gray-700 p-1 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-green-500">
          <ExternalLink filled class="w-5 h-5 stroke-current" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import Firebase from '~/assets/icons/firebase.svg'
import NuxtJS from '~/assets/icons/nuxtjs.svg'
import ExternalLink from '~/assets/icons/external-link.svg'
</script>