<template>
  <div class="container mx-auto px-2">
    <section class="pt-10">
      <div class="top-0 w-full px-6 py-4 bg-indigo-200 rounded-lg shadow-lg">
        <a class="text-sm font-bold text-porti-black banner-link outline-none" href="https://savelife.in.ua/en/donate-en/#donate-army-card-monthly" target="_block"
          rel="noopener">
          Stand with Ukraine 🇺🇦
        </a>
      </div>
      <div class="relative flex items-center max-w-6xl h-fullpage">
        <h1 class="-mt-20 pr-2 text-3xl sm:text-4xl md:text-5xl">
          Hello, my name is
          <br />
          Maksym Portianoi
        </h1>
        <div class="absolute bottom-40 sm:bottom-12 inline-flex">
          <SocialMediaLinks />
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-3xl sm:pt-10 pb-20 text-lg leading-loose">
        <p>
          I am a software engineer with a passion for UX and a grain of
          curiosity. Self-starter with an eye for details and a creative
          approach to problem-solving. Outside of work I am a music addict who
          likes outdoor activities, board games and books.
        </p>
        <br />
        <p>
          I was born and raised in Ukraine 🇺🇦 and I currently reside in Toronto,
          Canada.
        </p>
      </div>
      <div class="grid max-w-5xl grid-cols-1 gap-10 pb-10 text-lg lg:grid-cols-2">
        <div>
          <h2 class="pb-12 text-center sm:text-left">Main skills</h2>
          <!-- code -->
          <div class="flex flex-col items-center mb-10 text-center sm:flex-row sm:items-start sm:text-left">
            <img class="w-24 mr-4" src="/images/code_icon.svg" alt="Code icon" />
            <div>
              <h3 class="pb-1">The code</h3>
              <p class="max-w-md text-gray-500">
                I am full-stack developer, but I am stronger in front-end.
              </p>
            </div>
          </div>
          <!-- layout -->
          <div class="flex flex-col items-center mb-10 text-center sm:flex-row sm:items-start sm:text-left">
            <img class="w-24 mr-4" src="/images/layout_icon.svg" alt="Layout icon" />
            <div>
              <h3 class="pb-1">The look</h3>
              <p class="max-w-md text-gray-500">
                Websites, applications, experiences. Big and small.
              </p>
            </div>
          </div>
          <!-- edit -->
          <div class="flex flex-col items-center mb-10 text-center sm:flex-row sm:items-start sm:text-left">
            <img class="w-24 mr-4" src="/images/edit_icon.svg" alt="Edit icon" />
            <div>
              <h3 class="pb-1">The feel</h3>
              <p class="max-w-md text-gray-500">
                I've been doing UX/software engineering for over 5 years now. I like it.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 class="pb-12 text-center sm:text-left">Key values</h2>
          <!-- eye -->
          <div class="flex flex-col items-center mb-10 text-center sm:flex-row sm:items-start sm:text-left">
            <img class="w-24 mr-4" src="/images/eye_icon.svg" alt="Eye icon" />
            <div>
              <h3 class="pb-1">Details matter</h3>
              <p class="max-w-md text-gray-500">
                Small things added together, lead to complete experiences.
              </p>
            </div>
          </div>
          <!-- gear -->
          <div class="flex flex-col items-center mb-10 text-center sm:flex-row sm:items-start sm:text-left">
            <img class="w-24 mr-4" src="/images/gear_icon.svg" alt="Gear icon" />
            <div>
              <h3 class="pb-1">Commit to quality</h3>
              <p class="max-w-md text-gray-500">
                Always aiming for top-notch results, ensuring high-quality outcomes.
              </p>
            </div>
          </div>
          <!-- book -->
          <div class="flex flex-col items-center mb-10 text-center sm:flex-row sm:items-start sm:text-left">
            <img class="w-24 mr-4" src="/images/book_icon.svg" alt="Book icon" />
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
    <section>
      <h2 class="text-center lg:text-left">Relevant projects</h2>
      <Projects />
    </section>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: () => 'Maksym Portianoi',
})
</script>