<template>
  <div class="py-48 max-w-4xl mx-auto">
    <p class="text-lg">
      <img
        class="pb-16 w-56 mx-auto"
        :src="duck"
        alt="Help! He talks code to me against my will!"
      />
      Dear Team,<br /><br />
      I am writing to express my interest in Full-Stack Developer position at
      tailwind UI. I have learned about this opportunity from tailwind website
      which I visit on a daily basis.<br /><br />
      Currently I work as a full-stack developer (front-end first) at
      <a
        class="text-gray-500 border-b border-gray-400 hover:text-gray-600"
        href="https://rumie.org/"
        target="_blank"
        rel="noopener"
      >
        The Rumie Initiative</a
      >. Rumie is a non-profit technology-driven startup where our mission is to
      make learning free and accessible for everyone everywhere. Past few months
      we’ve been actively developing our real-time collaborative tool for
      creating unique microlearning experiences we call Bytes. Our tech team is
      pretty small but extremely efficient (we rolled out a set of three complex
      products in just under 8 months). In my opinion this is due to the fact
      that we all wear many hats, set the priorities right and constantly
      communicate.<br /><br />
      I was first introduced to Tailwind by my coworker about 10 months ago and
      I used it actively for work and personal projects ever since. My favourite
      stack is Vue.js (Nuxt) and Node, however I have experience working with
      Laravel and for complex back-end projects I would rather prefer using
      Laravel over Node.<br /><br />
      I would describe myself as a dreamer who is passionate about doing things
      right. I love being creative and seeking for challenges. Apart from that I
      am very outgoing person, if you were to ask my friends I’m sure they would
      describe me with one of my phrases: “I am always down for any adventure
      except for a hunger strike”.<br /><br />
      I am particularly excited about this opportunity because I am deeply
      passionate about UI and the future of front-end development in general. To
      give you some idea about the things I like to work on in my free time,
      please check out the
      <a
        class="text-gray-500 border-b border-gray-400 hover:text-gray-600"
        href="https://www.figma.com/proto/cJbbJQwKtcO5Zq1pHF2AZB/site?node-id=1%3A2&viewport=320%2C521%2C0.1712782084941864&scaling=min-zoom"
        target="_blank"
        rel="noopener"
      >
        prototypes</a
      >
      of a website I designed for vector illustration library I was planning on
      rolling out later this year. I had an idea to create a vector illustration
      library with API after I realized none of the existing libraries had API
      features with search and filtering (note that illustrations used in
      prototype are just placeholders, but I do have some demo illustrations
      drawn by illustrator I got interested in helping me with this project). As
      of now this project is frozen because I figured it would be hard to find
      resources to fund this project during the recession (especially
      considering the fact that I have no experience of that kind). Let me know
      if you want to see the repo of the project. Please check out my personal
      site
      <a
        class="text-gray-500 border-b border-gray-400 hover:text-gray-600"
        href="https://portimaksym.com/"
        target="_blank"
        rel="noopener"
      >
        here</a
      >. You can also find my resume
      <a
        class="text-gray-500 border-b border-gray-400 hover:text-gray-600"
        href="https://portimaksym.com/resume/"
        target="_blank"
        rel="noopener"
      >
        here</a
      >.<br /><br />
      Looking forward to hearing from you!<br /><br />
      Best regards,<br />
      Maksym Portianoi
    </p>
  </div>
</template>

<script>
import duck from '~/assets/images/Duck.png'

export default {
  head() {
    return {
      title: 'Maksym Portianoi - creative front-end developer'
    }
  },
  data() {
    return {
      duck
    }
  }
}
</script>
