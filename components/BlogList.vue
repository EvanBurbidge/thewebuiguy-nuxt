<template>
  <div>
    <SectionHeading
      title="Blog"
      subtitle="Thoughts, musings, some work i've done"
    />
    <ul>
      <li v-for="(blog, idx) in blogs" :key="idx">
        <pre> {{ blog }} </pre>
      </li>
    </ul>
  </div>
</template>

<script>
import t from 'vue-types'
import SectionHeading from './common/SectionHeading.vue'

export default {
  components: {
    SectionHeading
  },
  props: {
    blogs: t.array.def([])
  }
}
</script>
