<template>
  <div class="relative">
    <a
      class="fixed top-0 right-0 mt-16 mr-8 py-2 px-6 anchor z-50"
      href="mailto:maxim7port@gmail.com"
      target="_blank"
    >
      Contact
    </a>
    <nuxt />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'Circular Std';
  src: url('~assets/fonts/CircularStd-Book.eot'),
    url('~assets/fonts/CircularStd-Book.ttf') format('ttf'),
    url('~assets/fonts/CircularStd-Book.woff') format('woff'),
    url('~assets/fonts/CircularStd-Book.woff2') format('woff2');
  font-weight: normal;
}

@font-face {
  font-family: 'Circular Std';
  src: url('~assets/fonts/CircularStd-BookItalic.eot'),
    url('~assets/fonts/CircularStd-BookItalic.ttf') format('ttf'),
    url('~assets/fonts/CircularStd-BookItalic.woff') format('woff'),
    url('~assets/fonts/CircularStd-BookItalic.woff2') format('woff2');
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: 'Circular Std';
  src: url('~assets/fonts/CircularStd-Medium.eot'),
    url('~assets/fonts/CircularStd-Medium.ttf') format('ttf'),
    url('~assets/fonts/CircularStd-Medium.woff') format('woff'),
    url('~assets/fonts/CircularStd-Medium.woff2') format('woff2');
  font-weight: 600;
}

@font-face {
  font-family: 'Circular Std';
  src: url('~assets/fonts/CircularStd-MediumItalic.eot'),
    url('~assets/fonts/CircularStd-MediumItalic.ttf') format('ttf'),
    url('~assets/fonts/CircularStd-MediumItalic.woff') format('woff');
  font-weight: 600;
  font-style: italic;
}

@font-face {
  font-family: 'Circular Std';
  src: url('~assets/fonts/CircularStd-Bold.eot'),
    url('~assets/fonts/CircularStd-Bold.ttf') format('ttf'),
    url('~assets/fonts/CircularStd-Bold.woff') format('woff'),
    url('~assets/fonts/CircularStd-Bold.woff2') format('woff2');
  font-weight: bold;
}

@font-face {
  font-family: 'Circular Std';
  src: url('~assets/fonts/CircularStd-BoldItalic.eot'),
    url('~assets/fonts/CircularStd-BoldItalic.ttf') format('ttf'),
    url('~assets/fonts/CircularStd-BoldItalic.woff') format('woff'),
    url('~assets/fonts/CircularStd-BoldItalic.woff2') format('woff2');
  font-weight: bold;
  font-style: italic;
}

@font-face {
  font-family: 'Circular Std';
  src: url('~assets/fonts/CircularStd-Black.eot'),
    url('~assets/fonts/CircularStd-Black.ttf') format('ttf'),
    url('~assets/fonts/CircularStd-Black.woff') format('woff'),
    url('~assets/fonts/CircularStd-Black.woff2') format('woff2');
  font-weight: 900;
}

@font-face {
  font-family: 'Circular Std';
  src: url('~assets/fonts/CircularStd-BlackItalic.eot'),
    url('~assets/fonts/CircularStd-BlackItalic.ttf') format('ttf'),
    url('~assets/fonts/CircularStd-BlackItalic.woff') format('woff'),
    url('~assets/fonts/CircularStd-BlackItalic.woff2') format('woff2');
  font-weight: 900;
  font-style: italic;
}

html {
  font-family: 'Circular Std', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

// extending tailwind

.text-porti-black {
  color: #0c0c0c;
}

.bg-porti-black {
  background-color: #0c0c0c;
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
</style>
