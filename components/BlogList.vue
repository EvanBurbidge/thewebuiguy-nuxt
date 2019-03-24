<template>
  <div>
    <ul>
      <li v-for="(blog, idx) in blogs" :key="idx">
        <pre> {{ blog }} </pre>
      </li>
    </ul>
  </div>
</template>

<script>
import t from 'vue-types'

export default {
  props: {
    blogs: t.array.def([])
  }
}
</script>
