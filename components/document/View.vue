<template>
  <ContentDoc v-slot="{ doc }">
    <div class="flex gap-5">
      <article>
        <ContentRenderer :value="doc" class="document" />
      </article>
      <DocumentNavigation :nodes="doc?.body?.children" class="mt-8 hidden md:block" />
    </div>
  </ContentDoc>
</template>

<style lang="scss">
.document {
  h1, h2, h3, h4, h5, h6, ul {
    @apply mb-4;
  }

  p {
    @apply mb-2;
  }

  ul {
    @apply list-disc pl-5;
  }
}
</style>