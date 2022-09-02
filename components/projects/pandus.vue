<template>
  <div class="flex flex-col w-full max-w-4xl sm:flex-row">
    <div class="w-full h-64 mb-8 rounded-lg shadow-lg sm:mr-8 sm:mb-0 sm:w-2/5">
      <iframe
        class="w-full h-full mb-4 rounded-lg"
        src="https://www.youtube.com/embed/Mf_1jUu-fMQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="flex flex-col justify-center flex-1">
      <div class="flex justify-between mb-4">
        <h3>Pandus</h3>
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
        <a
          href="https://pandus.app/"
          target="_blank"
          aria-label="website"
          rel="noopener noreferrer"
          @click="$ga.event('Portfolio - Pandus', 'click', 'website')"
          class="hover:text-gray-700 focus:outline-none"
        >
          <ExternalLink class="w-5 h-5 mr-2 stroke-current" />
        </a>
        <a
          href="#"
          target="_blank"
          aria-label="github"
          rel="noopener noreferrer"
          @click="$ga.event('Portfolio - Pandus', 'click', 'dribbble')"
          class="hover:text-gray-700 focus:outline-none"
        >
          <Dribbble class="w-5 h-5 mr-2 fill-current" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from '~/assets/images/firebase.svg?inline'
import NuxtJS from '~/assets/images/nuxtjs.svg?inline'
import GitHub from '~/assets/images/github.svg?inline'
import Dribbble from '~/assets/images/dribbble.svg?inline'
import ExternalLink from '~/assets/images/external-link.svg?inline'

export default {
  components: {
    Firebase,
    NuxtJS,
    GitHub,
    Dribbble,
    ExternalLink
  }
}
</script>
