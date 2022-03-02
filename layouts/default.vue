<template>
  <main class="relative overflow-x-hidden">
    <nuxt-link
      v-if="$route.path !== '/'"
      class="fixed top-0 left-0 z-50 inline-flex items-center px-6 py-2 mt-16 ml-8 text-gray-500 hover:text-gray-600"
      to="/"
    >
      <!-- prettier-ignore -->
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 stroke-current">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      Home
    </nuxt-link>
    <a
      v-if="$route.path === '/resume'"
      class="fixed top-0 right-0 z-50 inline-flex items-center px-6 py-2 mt-16 mr-8 anchor"
      :href="require('~/static/Maksym_Portianoi_Resume.pdf')"
      target="_blank"
      @click="$ga.event('Resume', 'download')"
    >
      <!-- prettier-ignore -->
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1 stroke-current">
        <path
          d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
        />
      </svg>
      Download
    </a>
    <nuxt />
    <footer
      class="container flex flex-col items-center px-12 pb-20 sm:items-start"
    >
      <h3 class="mt-3 mb-3 sm:mb-0">Have a wonderful day!</h3>
      <div
        class="inline-flex sm:absolute sm:bottom-0 sm:right-0 sm:mb-20 sm:mr-8"
      >
        <!-- email -->
        <a
          class="inline-flex items-center p-2 mr-1 rounded-full hover:shadow-inner focus:outline-none focus:shadow-inner"
          href="mailto:portimaksym@gmail.com"
          target="_blank"
          aria-label="email"
          rel="noopener noreferrer"
          @click="$ga.event('Contact', 'click')"
        >
          <span class="inline-flex items-center block w-8 h-8">
            <!-- prettier-ignore -->
            <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto fill-current">
                <path d="M11.0001 1.83337C9.59399 1.83331 8.20673 2.15672 6.94563 2.77858C5.68452 3.40043 4.58338 4.30407 3.72738 5.41958C2.87139 6.53509 2.28348 7.83257 2.00916 9.21164C1.73483 10.5907 1.78144 12.0144 2.14536 13.3726C2.50929 14.7308 3.18079 15.987 4.1079 17.0441C5.03502 18.1013 6.1929 18.931 7.49197 19.469C8.79105 20.0071 10.1965 20.2391 11.5996 20.1471C13.0026 20.055 14.3657 19.6415 15.5834 18.9384C15.693 18.8811 15.7898 18.8022 15.8681 18.7065C15.9463 18.6108 16.0044 18.5003 16.0389 18.3815C16.0733 18.2628 16.0834 18.1383 16.0685 18.0156C16.0536 17.8929 16.014 17.7744 15.9521 17.6674C15.8903 17.5604 15.8074 17.4669 15.7085 17.3928C15.6096 17.3186 15.4967 17.2652 15.3766 17.2358C15.2565 17.2064 15.1317 17.2016 15.0097 17.2216C14.8877 17.2417 14.7711 17.2862 14.6667 17.3525C13.2688 18.1597 11.6435 18.483 10.0431 18.2723C8.44265 18.0617 6.95643 17.3288 5.81492 16.1874C4.67341 15.046 3.9404 13.5599 3.72956 11.9595C3.51873 10.3591 3.84185 8.7338 4.64881 7.33573C5.45578 5.93766 6.7015 4.84492 8.19278 4.22697C9.68407 3.60901 11.3376 3.50038 12.8969 3.91791C14.4562 4.33545 15.8342 5.25582 16.8171 6.53629C17.8001 7.81677 18.3331 9.38579 18.3334 11V11.6875C18.3334 12.113 18.1644 12.521 17.8636 12.8219C17.5627 13.1227 17.1547 13.2917 16.7292 13.2917C16.3038 13.2917 15.8958 13.1227 15.5949 12.8219C15.2941 12.521 15.1251 12.113 15.1251 11.6875V7.79171C15.1251 7.54859 15.0285 7.31543 14.8566 7.14353C14.6847 6.97162 14.4515 6.87504 14.2084 6.87504C13.9952 6.8703 13.7871 6.94001 13.6198 7.07219C13.4525 7.20436 13.3365 7.39073 13.2917 7.59921C12.6179 7.13316 11.8194 6.88081 11.0001 6.87504C10.31 6.86679 9.62884 7.03181 9.01905 7.355C8.40925 7.67819 7.89029 8.14922 7.50969 8.72494C7.1291 9.30065 6.89903 9.96266 6.84057 10.6503C6.78211 11.338 6.89713 12.0293 7.17507 12.661C7.45302 13.2927 7.88503 13.8446 8.43151 14.2661C8.978 14.6876 9.62151 14.9652 10.3031 15.0736C10.9847 15.1819 11.6826 15.1176 12.3328 14.8863C12.9831 14.6551 13.5649 14.2644 14.0251 13.75C14.4606 14.3141 15.0611 14.7284 15.743 14.9353C16.425 15.1422 17.1544 15.1315 17.83 14.9047C18.5055 14.6778 19.0936 14.2461 19.5124 13.6695C19.9312 13.0929 20.1599 12.4001 20.1667 11.6875V11C20.1667 9.79626 19.9296 8.60426 19.469 7.49211C19.0083 6.37996 18.3331 5.36943 17.4819 4.51823C16.6307 3.66702 15.6202 2.99181 14.508 2.53114C13.3959 2.07048 12.2039 1.83337 11.0001 1.83337V1.83337ZM11.0001 13.2917C10.5468 13.2917 10.1038 13.1573 9.7269 12.9055C9.35003 12.6537 9.05631 12.2958 8.88285 11.877C8.7094 11.4583 8.66402 10.9975 8.75245 10.553C8.84087 10.1084 9.05913 9.70008 9.37963 9.37959C9.70012 9.05909 10.1085 8.84083 10.553 8.75241C10.9975 8.66398 11.4583 8.70937 11.8771 8.88282C12.2958 9.05627 12.6537 9.35 12.9055 9.72686C13.1573 10.1037 13.2917 10.5468 13.2917 11C13.2917 11.6078 13.0503 12.1907 12.6205 12.6205C12.1908 13.0503 11.6079 13.2917 11.0001 13.2917V13.2917Z"/>
              </svg>
          </span>
        </a>
        <!-- github -->
        <a
          class="inline-flex items-center p-2 mr-1 rounded-full hover:shadow-inner focus:outline-none focus:shadow-inner"
          href="https://github.com/portikM"
          target="_blank"
          aria-label="github"
          rel="noopener noreferrer"
          @click="$ga.event('Social Media', 'click', 'github')"
        >
          <span class="inline-flex items-center block w-8 h-8">
            <!-- prettier-ignore -->
            <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto fill-current">
                <path
                  d="M7.02399 16.104c0 .0827-.09738.1489-.22016.1489-.13972.0124-.2371-.0538-.2371-.1489 0-.0827.09738-.1489.22017-.1489.12701-.0124.23709.0538.23709.1489zm-1.31673-.1861c-.02964.0827.05504.1778.18205.2026.11009.0414.2371 0 .2625-.0827.02541-.0827-.05504-.1778-.18205-.215-.11008-.029-.23286.0124-.2625.0951zm1.87137-.0703c-.12278.0289-.20746.1075-.19476.2026.0127.0827.12278.1365.2498.1075.12278-.0289.20746-.1075.19476-.1902-.0127-.0786-.12702-.1323-.2498-.1199zM10.3645 0C4.49214 0 0 4.35477 0 10.0908c0 4.5864 2.95524 8.5111 7.17641 9.8924.54194.0951.73246-.2316.73246-.5005 0-.2564-.0127-1.6707-.0127-2.5392 0 0-2.96371.6203-3.58609-1.2324 0 0-.48266-1.2035-1.17702-1.5136 0 0-.96955-.6493.06775-.6369 0 0 1.05423.0827 1.63427 1.067.92722 1.5963 2.48105 1.1373 3.08649.8643.09738-.6617.37258-1.1207.67742-1.3937-2.36673-.2564-4.75463-.5914-4.75463-4.56981 0-1.13729.32177-1.708.99919-2.43586-.11008-.26881-.46996-1.37715.11008-2.80806.88488-.26882 2.92137 1.1166 2.92137 1.1166.84677-.23159 1.75706-.35152 2.6589-.35152.9018 0 1.8121.11993 2.6588.35152 0 0 2.0365-1.38955 2.9214-1.1166.5801 1.43504.2202 2.53925.1101 2.80806.6774.732 1.0923 1.30271 1.0923 2.43586 0 3.99081-2.4937 4.30931-4.8605 4.56981.3896.3267.7198.9471.7198 1.9189 0 1.3937-.0127 3.1183-.0127 3.4574 0 .2688.1948.5955.7325.5004C18.1294 18.6019 21 14.6772 21 10.0908 21 4.35477 16.2369 0 10.3645 0zM4.11532 14.2636c-.05504.0414-.04234.1365.02964.2151.06774.0662.16512.0951.22016.0413.05504-.0413.04234-.1364-.02964-.215-.06774-.0662-.16512-.0951-.22016-.0414zm-.45726-.3349c-.02963.0537.01271.1199.09738.1612.06775.0414.15242.029.18206-.0289.02964-.0538-.0127-.1199-.09738-.1613-.08468-.0248-.15242-.0124-.18206.029zm1.37178 1.4722c-.06774.0538-.04234.1779.05504.2564.09738.0951.22016.1076.2752.0414.05504-.0538.02964-.1778-.05504-.2564-.09314-.0951-.22016-.1075-.2752-.0414zm-.48266-.6079c-.06774.0413-.06774.1489 0 .244.06774.0951.18205.1365.23709.0951.06775-.0538.06775-.1613 0-.2564-.05927-.0951-.16935-.1365-.23709-.0827z"
                />
              </svg>
          </span>
        </a>
        <!-- dribbble -->
        <a
          class="inline-flex items-center p-2 mr-1 rounded-full hover:shadow-inner focus:outline-none focus:shadow-inner"
          href="https://dribbble.com/portik"
          target="_blank"
          aria-label="dribbble"
          rel="noopener noreferrer"
          @click="$ga.event('Social Media', 'click', 'dribbble')"
        >
          <span class="inline-flex items-center block w-8 h-8">
            <!-- prettier-ignore -->
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto fill-current">
                <path
                  d="M10 0C4.48597 0 0 4.48597 0 10C0 15.514 4.48597 20 10 20C15.514 20 20 15.514 20 10C20 4.48597 15.514 0 10 0ZM16.6117 4.61153C17.8013 6.065 18.5217 7.91625 18.5405 9.9323C18.2589 9.87274 15.435 9.29996 12.5929 9.65738C12.3609 9.09121 12.142 8.59315 11.8422 7.9794C15.0003 6.69 16.4316 4.85512 16.6117 4.61153ZM15.6621 3.62379C15.5085 3.84262 14.2227 5.57081 11.1855 6.70923C9.78581 4.13762 8.23448 2.02504 7.99839 1.70891C10.7071 1.05597 13.5615 1.76012 15.6621 3.62379ZM6.36859 2.28306C6.59379 2.5919 8.12012 4.7071 9.5354 7.22294C5.53996 8.28395 2.02089 8.26867 1.63887 8.26363C2.19274 5.6131 3.97895 3.4102 6.36859 2.28306ZM1.45847 10.013C1.45847 9.92568 1.4602 9.83875 1.46282 9.75202C1.83653 9.75968 5.97573 9.81302 10.2413 8.53645C10.4858 9.015 10.7194 9.50077 10.9338 9.98601C7.84512 10.856 5.03887 13.354 3.65431 15.7242C2.29008 14.2099 1.45847 12.2069 1.45847 10.013ZM4.75714 16.7515C5.64935 14.9275 8.07077 12.5731 11.5144 11.3984C12.7135 14.5146 13.2095 17.1263 13.3365 17.8757C10.59 19.0456 7.2875 18.7246 4.75714 16.7515ZM14.7725 17.0937C14.6849 16.5742 14.2303 14.0737 13.1131 11.0037C15.7897 10.5752 18.1413 11.2766 18.4335 11.3688C18.0528 13.7455 16.6887 15.798 14.7725 17.0937Z"
                />
              </svg>
          </span>
        </a>
        <!-- linkedin -->
        <a
          class="inline-flex items-center p-2 mr-1 rounded-full hover:shadow-inner focus:outline-none focus:shadow-inner"
          href="https://www.linkedin.com/in/portik/"
          target="_blank"
          aria-label="linkedin"
          rel="noopener noreferrer"
          @click="$ga.event('Social Media', 'click', 'linkedin')"
        >
          <span class="inline-flex items-center block w-8 h-8">
            <!-- prettier-ignore -->
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto fill-current">
                <path
                  d="M4.47679 20H0.330357V6.64702H4.47679V20ZM2.40134 4.82555C1.07545 4.82555 0 3.72732 0 2.40139C9.49017e-09 1.7645 0.252998 1.1537 0.703336 0.703352C1.15367 0.253003 1.76446 0 2.40134 0C3.03821 0 3.649 0.253003 4.09934 0.703352C4.54968 1.1537 4.80268 1.7645 4.80268 2.40139C4.80268 3.72732 3.72679 4.82555 2.40134 4.82555ZM19.9955 20H15.858V13.4999C15.858 11.9507 15.8268 9.96406 13.7022 9.96406C11.5464 9.96406 11.2161 11.6471 11.2161 13.3882V20H7.07411V6.64702H11.0509V8.46849H11.1089C11.6625 7.41936 13.0147 6.31219 15.0321 6.31219C19.2286 6.31219 20 9.07565 20 12.665V20H19.9955Z"
                />
              </svg>
          </span>
        </a>
        <!-- medium -->
        <a
          class="inline-flex items-center p-2 mr-1 rounded-full hover:shadow-inner focus:outline-none focus:shadow-inner"
          href="https://medium.com/@portik"
          target="_blank"
          aria-label="medium"
          rel="noopener noreferrer"
          @click="$ga.event('Social Media', 'click', 'medium')"
        >
          <span class="inline-flex items-center block w-8 h-8">
            <!-- prettier-ignore -->
            <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto fill-current">
                <path
                  d="M3.08001 4.08025C3.11226 3.7728 2.98863 3.46535 2.75212 3.2569L0.327889 0.422095V0H7.86397L13.6907 12.3867L18.8133 0H26V0.422095L23.9252 2.35018C23.7478 2.48046 23.6564 2.69932 23.694 2.91298V17.087C23.6564 17.3007 23.7478 17.5195 23.9252 17.6498L25.9516 19.5779V20H15.7548V19.5779L17.8565 17.6029C18.0608 17.4049 18.0608 17.3424 18.0608 17.0401V5.58624L12.2179 19.9635H11.4277L4.63345 5.58624V15.2215C4.57432 15.6279 4.71408 16.0344 5.00972 16.3262L7.74034 19.5362V19.9583H0V19.5414L2.73062 16.3262C3.02088 16.0344 3.15526 15.6227 3.08001 15.2215V4.08025Z"
                />
              </svg>
          </span>
        </a>
      </div>
    </footer>
  </main>
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

.banner-link {
  &:hover {
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
  content: '\2026'; /* ascii code for the ellipsis character */
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

// swipe

.swipe-enter-active,
.swipe-leave-active {
  @apply transition ease-out duration-200;
  overflow: hidden !important;
}

.swipe-enter {
  @apply transform opacity-0 translate-x-20;
  transition-delay: 100ms;
}

.swipe-enter-to {
  @apply transform opacity-100 translate-x-0;
  transition-delay: 100ms;
}

.swipe-leave {
  @apply transform opacity-100 translate-x-0;
  transition-delay: 100ms;
}

.swipe-leave-to {
  @apply transform opacity-0 -translate-x-20;
  transition-delay: 100ms;
}
</style>
