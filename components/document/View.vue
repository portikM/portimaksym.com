<template>
  <ContentDoc v-slot="{ doc }" :path="article ? `articles${$route.path}` : $route.path">
    <div class="flex gap-5">
      <article>
        <ContentRenderer :value="doc" class="document" />
      </article>
      <DocumentNavigation :nodes="doc?.body?.children" class="mt-8 hidden md:block" />
    </div>
  </ContentDoc>
</template>

<script setup>
defineProps({
  article: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
.document {
  h1 {
    @apply mb-6;
  }

  h2, ul {
    @apply mb-4;
  }

  h3, h4 {
    @apply mb-2;
  }

  p {
    @apply mb-2;
  }

  ul {
    @apply list-disc pl-5;
  }

  pre {
    @apply p-2 bg-gray-700 rounded-lg shadow-md mb-4;

    code {
      span.line {
        &::before {
          @apply text-gray-400 mr-3;
          content: attr(line);
        }
      }
    }
  }
}
</style>