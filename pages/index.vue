<template>
  <div>
    <section
      class="px-12"
      style="background: linear-gradient(to bottom, #EDF2F7, white);"
    >
      <div class="relative flex items-center h-screen max-w-6xl">
        <h1 class="z-20 pr-2 text-3xl sm:text-4xl md:text-5xl">
          Hello, my name is
          <br />
          Maksym Portianoi
        </h1>
        <img
          class="absolute right-0 z-10 w-3/4 sm:w-1/2 md:w-1/3 md:static"
          :src="flyingDude"
          alt="Flying Dude Picture"
        />
        <div class="absolute bottom-0 inline-flex mb-12">
          <!-- github -->
          <a
            class="inline-flex items-center p-2 mr-1 rounded-full hover:shadow-inner focus:outline-none focus:shadow-inner"
            href="https://github.com/portikM"
            target="_blank"
            aria-label="github"
            rel="noopener"
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
            rel="noopener"
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
            rel="noopener"
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
            rel="noopener"
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
      </div>
    </section>
    <section class="px-12 pb-8">
      <div class="max-w-3xl pt-10 pb-20 text-lg leading-loose">
        <p>
          I am a detail-oriented software engineer and UI designer aspiring to
          be an entrepreneur. While my passion and primary area of focus is
          designing and building awesome user interfaces, I have extensive
          skills that go far beyond that.
        </p>
        <br />
        <p>
          Outside of work I am a music addict who likes outdoor activities,
          board games and books. My life’s ambition is to travel the world,
          exploring new cultures and places.
        </p>
        <br />
        <p>
          I was born and raised in Ukraine 🇺🇦 and I currently reside in Toronto,
          Canada.
        </p>
      </div>
      <div
        class="flex grid max-w-5xl grid-cols-1 gap-10 pb-10 text-lg lg:grid-cols-2"
      >
        <div>
          <h2 class="pb-12 text-center sm:text-left">Main skills</h2>
          <!-- developer -->
          <div
            class="flex flex-col items-center mb-10 text-center sm:flex-row sm:items-start sm:text-left"
          >
            <object class="w-24 mr-4" :data="codeIcon" type="image/svg+xml">
              Code icon
            </object>
            <div>
              <h3 class="pb-1">The code</h3>
              <p class="max-w-md text-gray-500">
                I position myself as front-end developer but I can be flexable.
                See
                <a
                  class="text-gray-500 border-b border-gray-400 hover:text-gray-600"
                  href="https://stackshare.io/portik/stack"
                  target="_blank"
                  rel="noopener"
                  @click="$ga.event('Social Media', 'click', 'stackshare')"
                >
                  my stack</a
                >.
              </p>
            </div>
          </div>
          <!-- designer -->
          <div
            class="flex flex-col items-center mb-10 text-center sm:flex-row sm:items-start sm:text-left"
          >
            <object class="w-24 mr-4" :data="layoutIcon" type="image/svg+xml">
              Design icon
            </object>
            <div>
              <h3 class="pb-1">The look</h3>
              <p class="max-w-md text-gray-500">
                Websites, applications, experiences. Big and small.
              </p>
            </div>
          </div>
          <!-- branding -->
          <div
            class="flex flex-col items-center mb-10 text-center sm:flex-row sm:items-start sm:text-left"
          >
            <object class="w-24 mr-4" :data="editIcon" type="image/svg+xml">
              Edit icon
            </object>
            <div>
              <h3 class="pb-1">The feel</h3>
              <p class="max-w-md text-gray-500">
                I have a combination of product leader and engineer skills.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 class="pb-12 text-center sm:text-left">Key values</h2>
          <!-- tools -->
          <div
            class="flex flex-col items-center mb-10 text-center sm:flex-row sm:items-start sm:text-left"
          >
            <object class="w-24 mr-4" :data="gearIcon" type="image/svg+xml">
              Gear icon
            </object>
            <div>
              <h3 class="pb-1">Prioritizing is underrated</h3>
              <p class="max-w-md text-gray-500">
                Setting the right priorities is crucial for project success.
              </p>
            </div>
          </div>
          <!-- details -->
          <div
            class="flex flex-col items-center mb-10 text-center sm:flex-row sm:items-start sm:text-left"
          >
            <object class="w-24 mr-4" :data="eyeIcon" type="image/svg+xml">
              Eye icon
            </object>
            <div>
              <h3 class="pb-1">Details matter</h3>
              <p class="max-w-md text-gray-500">
                Small things added together, lead to complete experiences.
              </p>
            </div>
          </div>
          <!-- learning -->
          <div
            class="flex flex-col items-center mb-10 text-center sm:flex-row sm:items-start sm:text-left"
          >
            <object class="w-24 mr-4" :data="bookIcon" type="image/svg+xml">
              Book icon
            </object>
            <div>
              <h3 class="pb-1">Never stop learning</h3>
              <p class="max-w-md text-gray-500">
                Keep an open mind, strive for growth and improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import flyingDude from '~/assets/images/Flying_Dude.png'
import codeIcon from '~/assets/images/code_icon.svg'
import layoutIcon from '~/assets/images/layout_icon.svg'
import editIcon from '~/assets/images/edit_icon.svg'
import gearIcon from '~/assets/images/gear_icon.svg'
import eyeIcon from '~/assets/images/eye_icon.svg'
import bookIcon from '~/assets/images/book_icon.svg'

export default {
  head() {
    return {
      title: 'Maksym Portianoi - software engineer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'I am software engineer, UI designer and want-to-be entrepreneur.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'software, web, developer, designer, user interface, toronto'
        }
      ]
    }
  },
  data() {
    return {
      flyingDude,
      codeIcon,
      layoutIcon,
      editIcon,
      gearIcon,
      eyeIcon,
      bookIcon
    }
  }
}
</script>

<style lang="scss"></style>
