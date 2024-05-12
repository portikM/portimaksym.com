<template>
  <div class="flex gap-1">
    <Link href="mailto:hello@portimaksym.com" label="Email">
    <Email filled class="stroke-current" />
    </Link>
    <Link href="https://github.com/portikM" label="GitHub">
    <GitHub />
    </Link>
    <Link href="https://www.linkedin.com/in/portik/" label="LinkedIn">
    <LinkedIn />
    </Link>
    <Link href="https://twitter.com/portik_m" label="Twitter (X)">
    <X />
    </Link>
  </div>
</template>

<script setup>
import Link from './Link.vue'
import Email from '~/assets/icons/email.svg'
import GitHub from '~/assets/icons/github.svg'
import LinkedIn from '~/assets/icons/linkedin.svg'
import X from '~/assets/icons/x.svg'
</script>