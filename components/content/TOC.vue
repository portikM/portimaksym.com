<template>
  <nav v-if="headers.length" class="border-l border-gray-300 h-fit pl-4 py-2">
    <span class="font-bold block mb-1.5 ml-2 whitespace-nowrap">On this page</span>
    <ul>
      <li v-for="heading in headers" :key="`${heading.props.id}-nav-item`" class="p-1.5 mb-1 w-64 truncate" :class="getItemOffsetClass(heading.tag)">
        <nuxt-link :to="`#${heading.props.id}`" class="text-gray-600 hover:text-gray-700 p-0.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-pink-500">
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

const filterHeaders = (nodes) => {
  // Define the tags to filter
  const headerTags = ['h2', 'h3', 'h4', 'h5', 'h6']

  // Function to recursively find and collect header elements
  const findHeaders = (elements, headers) => {
    elements.forEach(element => {
      if (element.type === 'element') {
        if (headerTags.includes(element.tag)) {
          headers.push(element)
        }

        if (element.children) {
          findHeaders(element.children, headers)
        }
      }
    })
  }

  const headers = []
  findHeaders(nodes, headers)
  return headers
}

let headers = []

const _nodes = JSON.parse(JSON.stringify(props.nodes))

headers = filterHeaders(_nodes)

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