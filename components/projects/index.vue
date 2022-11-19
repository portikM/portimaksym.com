<template>
  <div>
    <div v-touch:swipe.left="swipeLeft" v-touch:swipe.right="swipeRight">
      <!-- projects - expanded -->
      <div class="mt-12 mb-20">
        <transition :name="swipeAnimationName" mode="out-in">
          <!-- pandus - expanded -->
          <Pandus v-if="currentProject === 'pandus'" key="pandus" />

          <!-- outil - expanded -->
          <Outil v-if="currentProject === 'outil'" key="outil" />

          <!-- illustrapi - expanded -->
          <Illustrapi v-if="currentProject === 'illustrapi'" key="illustrapi" />
        </transition>
      </div>
      <!-- thumbnails -->
      <div class="flex-row hidden mb-20 md:flex">
        <!-- pandus - thumbnail -->
        <div class="flex justify-center ml-8 transform -rotate-12">
          <div class="group" @click="setCurrentProject('pandus')" role="button">
            <div
              class="w-48 p-2 rounded-lg group-content"
              :class="{
                'active bg-green-500': currentProject === 'pandus'
              }"
            >
              <div class="w-full h-full mb-4 rounded-lg shadow-lg">
                <img
                  src="~/assets/images/pandus.png"
                  alt="Pandus logo thumbnail"
                  class="object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <div class="flex justify-between px-4">
                <h4>Pandus</h4>
                <div class="inline-flex items-center">
                  <Firebase
                    class="w-4 h-4 mr-2 text-gray-500 fill-current stack-icon"
                  />
                  <NuxtJS
                    class="w-4 h-4 mr-2 text-gray-500 fill-current stack-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- outil - thumbnail -->
        <div class="flex justify-center ml-8 transform -rotate-12">
          <div class="group" @click="setCurrentProject('outil')" role="button">
            <div
              class="w-48 p-2 rounded-lg group-content"
              :class="{
                'active bg-purple-500': currentProject === 'outil'
              }"
            >
              <div class="w-full h-full mb-4 rounded-lg shadow-lg">
                <img
                  src="~/assets/images/outil.png"
                  alt="Outil UI design thumbnail"
                  class="object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <div class="flex justify-between px-4">
                <h4>Outil</h4>
                <div class="inline-flex items-center">
                  <Typescript
                    class="w-4 h-4 mr-2 text-gray-500 fill-current stack-icon"
                  />
                  <AWS
                    class="w-4 h-4 mr-2 text-gray-500 fill-current stack-icon"
                  />
                  <Serverless
                    class="w-4 h-4 text-gray-500 fill-current stack-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- illustrapi - thumbnail -->
        <div class="flex justify-center ml-8 transform -rotate-12">
          <div
            class="group"
            @click="setCurrentProject('illustrapi')"
            role="button"
          >
            <div
              class="w-48 p-2 rounded-lg group-content"
              :class="{
                'active bg-teal-500': currentProject === 'illustrapi'
              }"
            >
              <div class="w-full h-full mb-4 rounded-lg shadow-lg">
                <img
                  src="~/assets/images/illustrapi.png"
                  alt="Illustrapi site design thumbnail"
                  class="object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <div class="flex justify-between px-4">
                <h4>Illustrapi</h4>
                <div class="inline-flex items-center">
                  <NuxtJS
                    class="w-4 h-4 mr-2 text-gray-500 fill-current stack-icon"
                  />
                  <Tailwind
                    class="w-4 h-4 text-gray-500 fill-current stack-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center -mt-10 align-center md:hidden">
      <span
        class="w-2 h-2 mr-1 bg-gray-400 rounded-full"
        :class="{
          'bg-gray-500': currentProject === 'pandus'
        }"
      ></span>
      <span
        class="w-2 h-2 mr-1 bg-gray-400 rounded-full"
        :class="{
          'bg-gray-500': currentProject === 'outil'
        }"
      ></span>
      <span
        class="w-2 h-2 bg-gray-400 rounded-full"
        :class="{
          'bg-gray-500': currentProject === 'illustrapi'
        }"
      ></span>
    </div>
  </div>
</template>

<script>
import Pandus from '~/components/projects/pandus'
import Outil from '~/components/projects/outil'
import Illustrapi from '~/components/projects/illustrapi'
import Firebase from '~/assets/images/firebase.svg?inline'
import Typescript from '~/assets/images/typescript.svg?inline'
import AWS from '~/assets/images/aws.svg?inline'
import Serverless from '~/assets/images/serverless.svg?inline'
import NuxtJS from '~/assets/images/nuxtjs.svg?inline'
import Tailwind from '~/assets/images/tailwindcss.svg?inline'
import GitHub from '~/assets/images/github.svg?inline'
import Dribbble from '~/assets/images/dribbble.svg?inline'

export default {
  components: {
    Pandus,
    Outil,
    Illustrapi,
    Firebase,
    Typescript,
    AWS,
    Serverless,
    NuxtJS,
    Tailwind,
    GitHub,
    Dribbble
  },
  data() {
    return {
      currentProject: 'pandus',
      swipeAnimationName: 'swipe-left',
      swipeInterval: null,
      autoSwipe: !this.$screen.md
    }
  },
  mounted() {
    if (this.autoSwipe) {
      this.swipeInterval = setInterval(() => {
        this.swipeLeft(false)
      }, 5000)
    }
  },
  methods: {
    setCurrentProject(project, userAction = true) {
      this.currentProject = project
      if (userAction) {
        this.$ga.event('Portfolio - Expand', 'click', project)
      }
    },
    swipeRight() {
      this.autoSwipe = false
      this.swipeAnimationName = 'swipe-left'
      this.swipeHandler('left')
    },
    swipeLeft(userAction = true) {
      if (userAction) {
        this.autoSwipe = false
      }
      this.swipeAnimationName = 'swipe-right'
      this.swipeHandler('right', userAction)
    },
    swipeHandler(direction, userAction = true) {
      const projectsOrder = ['pandus', 'outil', 'illustrapi']
      const currentProjectIndex = projectsOrder.indexOf(this.currentProject)
      if (
        currentProjectIndex === projectsOrder.length - 1 &&
        direction === 'right'
      ) {
        this.setCurrentProject(projectsOrder[0], userAction)
      } else if (currentProjectIndex === 0 && direction === 'left') {
        this.setCurrentProject(
          projectsOrder[projectsOrder.length - 1],
          userAction
        )
      } else {
        const currentProject =
          direction === 'left'
            ? projectsOrder[currentProjectIndex - 1]
            : projectsOrder[currentProjectIndex + 1]
        this.setCurrentProject(currentProject, userAction)
      }
    }
  },
  watch: {
    autoSwipe() {
      clearInterval(this.swipeInterval)
    }
  }
}
</script>

<style lang="scss" scoped>
.group {
  .group-content {
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    .group-content {
      transform: scale(1.1);
    }
  }

  .active.group-content {
    h4 {
      @apply text-white;
    }
    .stack-icon {
      @apply text-gray-100;
    }
  }
}
</style>
