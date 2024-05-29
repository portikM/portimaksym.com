<template>
  <div class="alert w-full flex gap-2 p-4 text-base rounded-lg shadow-lg mb-4" :class="type">
    <Smile v-if="type === 'success'" filled class="stroke-current mt-1 shrink-0" />
    <AlertTriangle v-else-if="type === 'warning'" filled class="stroke-current mt-1 shrink-0" />
    <AlertCircle v-else-if="type === 'danger'" filled class="stroke-current mt-1 shrink-0" />
    <Info v-else filled class="stroke-current mt-1 shrink-0" />
    <slot />
  </div>
</template>

<script setup>
import Info from '~/assets/icons/info.svg'
import Smile from '~/assets/icons/smile.svg'
import AlertTriangle from '~/assets/icons/alert-triangle.svg'
import AlertCircle from '~/assets/icons/alert-circle.svg'

defineProps({
  type: String,
  default: 'info'
})
</script>

<style lang="scss">
.alert {
  // info type is default
  @apply text-blue-600 bg-blue-100/75;

  p {
    @apply mb-0 text-blue-600;
  }

  &.success {
    @apply text-emerald-600 bg-emerald-100/75;

    p {
      @apply text-emerald-600;
    }
  }

  &.warning {
    @apply text-amber-600 bg-amber-100/75;

    p {
      @apply text-amber-600;
    }
  }

  &.danger {
    @apply text-red-600 bg-red-100/75;

    p {
      @apply text-red-600;
    }
  }
}
</style>