<template>
  <div>
    <!-- projects - expanded -->
    <div class="mt-12 mb-20">
      <Transition :name="swipeAnimationName" mode="out-in">
        <!-- pandus - expanded -->
        <Pandus v-if="currentProject === 'pandus'" key="pandus" />

        <!-- outil - expanded -->
        <Outil v-else-if="currentProject === 'outil'" key="outil" />
      </Transition>
    </div>

    <!-- thumbnails -->
    <div class="flex-row hidden mb-20 md:flex">
      <!-- pandus - thumbnail -->
      <div class="flex justify-center ml-8 transform -rotate-12">
        <div class="group outline-none" @click="setCurrentProject('pandus')"
          @keydown.enter="setCurrentProject('pandus')" @keydown.space.prevent="setCurrentProject('pandus')"
          role="button" tabindex="0" aria-label="View Pandus project">
          <div class="w-48 p-2 rounded-lg group-content group-focus-visible:ring-2 group-focus-visible:ring-green-500"
            :class="{
        'active bg-green-500': currentProject === 'pandus'
      }">
            <div class="w-full h-full mb-4 rounded-lg shadow-lg">
              <img src="/images/pandus.png" alt="Pandus logo thumbnail" class="object-cover rounded-lg"
                loading="lazy" />
            </div>
            <div class="flex justify-between px-4">
              <h4>Pandus</h4>
              <div class="inline-flex items-center">
                <Firebase class="w-4 h-4 mr-2 text-gray-500 fill-current stack-icon" />
                <NuxtJS class="w-4 h-4 mr-2 text-gray-500 fill-current stack-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- outil - thumbnail -->
      <div class="flex justify-center ml-8 transform -rotate-12">
        <div class="group outline-none" @click="setCurrentProject('outil')"
          @keydown.enter="setCurrentProject('outil')" @keydown.space.prevent="setCurrentProject('outil')"
          role="button" tabindex="0" aria-label="View Outil project">
          <div class="w-48 p-2 rounded-lg group-content group-focus-visible:ring-2 group-focus-visible:ring-purple-500"
            :class="{
        'active bg-purple-500': currentProject === 'outil'
      }">
            <div class="w-full h-full mb-4 rounded-lg shadow-lg">
              <img src="/images/outil.png" alt="Outil UI design thumbnail" class="object-cover rounded-lg"
                loading="lazy" />
            </div>
            <div class="flex justify-between px-4">
              <h4>Outil</h4>
              <div class="inline-flex items-center">
                <Typescript class="w-4 h-4 mr-2 text-gray-500 fill-current stack-icon" />
                <AWS class="w-4 h-4 mr-2 text-gray-500 fill-current stack-icon" />
                <Serverless class="w-4 h-4 text-gray-500 fill-current stack-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- mobile widget navigation -->
  <div class="flex justify-center -mt-10 align-center md:hidden">
    <button @click="swipeRight" aria-label="Previous project" class="w-8 h-8 mr-4 text-gray-500 hover:text-gray-700 flex justify-center items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-pink-500">
      <ArrowLeft filled class="stroke-current" />
    </button>
    <button @click="swipeLeft" aria-label="Next project" class="w-8 h-8 text-gray-500 hover:text-gray-700 flex justify-center items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-pink-500">
      <ArrowRight filled class="stroke-current" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Pandus from './Pandus.vue'
import Outil from './Outil.vue'
import Firebase from '~/assets/icons/firebase.svg'
import Typescript from '~/assets/icons/typescript.svg'
import AWS from '~/assets/icons/aws.svg'
import Serverless from '~/assets/icons/serverless.svg'
import NuxtJS from '~/assets/icons/nuxtjs.svg'
import ArrowLeft from '~/assets/icons/arrow-left.svg'
import ArrowRight from '~/assets/icons/arrow-right.svg'

const currentProject = ref('pandus')
const swipeAnimationName = ref('swipe-left')

const projectsOrder = ['pandus', 'outil']

const setCurrentProject = (project, ) => {
  currentProject.value = project
}

const swipeRight = () => {
  swipeAnimationName.value = 'swipe-left'
  swipeHandler('left')
}

const swipeLeft = () => {
  swipeAnimationName.value = 'swipe-right'
  swipeHandler('right')
}

const swipeHandler = (direction) => {
  const currentProjectIndex = projectsOrder.indexOf(currentProject.value)
  if (direction === 'right' && currentProjectIndex === projectsOrder.length - 1) {
    setCurrentProject(projectsOrder[0])
  } else if (direction === 'left' && currentProjectIndex === 0) {
    setCurrentProject(projectsOrder[projectsOrder.length - 1])
  } else {
    const newIndex = direction === 'left' ? currentProjectIndex - 1 : currentProjectIndex + 1
    setCurrentProject(projectsOrder[newIndex])
  }
}
</script>


<style lang="scss" scoped>
.group {
  .group-content {
    transition: all 0.2s ease-in-out;
  }

  &:hover, &:focus-visible {
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