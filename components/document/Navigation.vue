<template>
  <nav v-if="headings.length" class="border-l border-gray-300 h-fit pl-5 py-2">
    <span class="font-bold block mb-2">On this page</span>
    <ul>
      <li v-for="heading in headings" :key="`${heading.props.id}-nav-item`" class="mb-2 max-w-64 truncate" :class="getItemOffsetClass(heading.tag)">
        <nuxt-link :to="`#${heading.props.id}`" class="text-gray-600 hover:text-gray-700 p-1 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-pink-500">
          {{ heading.children[0].value }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  nodes: {
    type: Array,
    required: true
  },
})

let headings = []

const _nodes = JSON.parse(JSON.stringify(props.nodes))

headings = _nodes.filter(node => ['h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tag)) // filter out only headings of levels 2-6

const getItemOffsetClass = (tag) => {
  switch (tag) {
    case 'h3':
      return 'ml-2'
    case 'h4':
      return 'ml-3'
    case 'h5':
      return 'ml-4'
    case 'h6':
      return 'ml-5'
    default:
      return ''
  }
}
</script>