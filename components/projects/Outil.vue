<template>
  <div class="flex flex-col w-full max-w-4xl sm:flex-row">
    <div class="w-full h-64 mb-8 rounded-lg shadow-lg sm:mr-8 sm:mb-0 sm:w-2/5">
      <img src="/images/outil.png" alt="Outil UI design" class="object-cover w-full h-full mb-4 rounded-lg" />
    </div>
    <div class="flex flex-col justify-center flex-1">
      <div class="flex justify-between mb-4">
        <h3>Outil</h3>
        <div class="inline-flex items-center">
          <Typescript class="w-5 h-5 mr-2 text-gray-500 fill-current" />
          <AWS class="w-5 h-5 mr-2 text-gray-500 fill-current" />
          <Serverless class="w-5 h-5 text-gray-500 fill-current" />
        </div>
      </div>
      <p class="mb-6 text-sm">
        One day I was chatting with my friend and she told me how she had to
        redo the voiceover for her presentation 5 times over. I thought it would
        be cool to have an online recording tool that would allow users to undo
        last few seconds of recording and resume from there. That's what I tried
        to achieve with Outil.<br /><br />All heavy lifting is done on the
        server side, which allows for great flexability on the client side.
      </p>
      <div class="inline-flex items-center">
        <a href="https://github.com/portikM/outil" target="_blank" aria-label="github" rel="noopener"
          class="hover:text-gray-700 p-1 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-purple-500">
          <GitHub class="w-5 h-5 fill-current" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import Typescript from '~/assets/icons/typescript.svg'
import AWS from '~/assets/icons/aws.svg'
import Serverless from '~/assets/icons/serverless.svg'
import GitHub from '~/assets/icons/github.svg'
</script>