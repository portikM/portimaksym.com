<template>
  <main class="relative overflow-x-hidden">
    <slot />
    <footer class="container flex flex-col items-center px-12 pb-20 sm:items-start">
      <h2 class="mt-3 mb-3 sm:mb-0">Have a wonderful day!</h2>
      <div class="inline-flex sm:absolute sm:bottom-0 sm:right-0 sm:mb-20 sm:mr-8">
        <SocialMediaLinks />
      </div>
    </footer>
  </main>
</template>

<style lang="scss">
.swipe-left-slide {
  height: auto !important;
}

// extending tailwind

.text-porti-black {
  color: #0c0c0c;
}

.bg-porti-black {
  background-color: #0c0c0c;
}

.border-porti-black {
  border-color: #0c0c0c;
}

.gradient {
  background: linear-gradient(to right, #ed64a6, #f687b3);
}

.anchor {
  @apply rounded-full text-xl text-porti-black font-bold;

  &:hover {
    @apply shadow-lg text-white;
    background: linear-gradient(to right, #ed64a6, #f687b3);
  }

  &:focus {
    @apply shadow-lg text-white outline-none;
    background: linear-gradient(to right, #ed64a6, #f687b3);
  }
}

@screen sm {
  .anchor {
    @apply text-2xl;
  }
}

.h-fullpage {
  height: 90vh;
}

// typorgaphy

h1 {
  @apply text-4xl text-porti-black font-black;
}

h2 {
  @apply text-2xl text-porti-black font-bold;
}

h3 {
  @apply text-xl text-porti-black font-bold;
}

h4 {
  @apply text-lg text-porti-black font-bold;
}

.banner-link {
  &:hover, &:focus-visible {
    @apply border-b border-porti-black;
  }
}

// animations

.ellipsis-loading:after {
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  -webkit-animation: ellipsisAnim steps(4, end) 1500ms infinite;
  animation: ellipsisAnim steps(4, end) 1500ms infinite;
  content: '\2026';
  /* ascii code for the ellipsis character */
  width: 0px;
  margin-left: 1px;
}

@keyframes ellipsisAnim {
  to {
    width: 20px;
  }
}

@-webkit-keyframes ellipsisAnim {
  to {
    width: 20px;
  }
}

// swipe left/right

.swipe-left-enter-active,
.swipe-left-leave-active,
.swipe-right-enter-active,
.swipe-right-leave-active {
  @apply transition ease-out duration-200;
  overflow: hidden !important;
}

.swipe-left-enter,
.swipe-right-enter {
  @apply transform opacity-0;
  transition-delay: 100ms;
}

.swipe-left-enter {
  @apply translate-x-20;
}

.swipe-right-enter {
  @apply -translate-x-20;
}

.swipe-left-enter-to,
.swipe-right-enter-to {
  @apply transform opacity-100 translate-x-0;
  transition-delay: 100ms;
}

.swipe-left-leave,
.swipe-right-leave {
  @apply transform opacity-100 translate-x-0;
  transition-delay: 100ms;
}

.swipe-left-leave-to,
.swipe-right-leave-to {
  @apply transform opacity-0;
  transition-delay: 100ms;
}

.swipe-left-leave-to {
  @apply -translate-x-20;
}

.swipe-right-leave-to {
  @apply translate-x-20;
}
</style>
