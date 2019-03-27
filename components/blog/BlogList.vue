<template>
  <div>
    <SectionHeading
      title="Blog"
      subtitle="Thoughts, musings, some work i've done"
    />

    <v-layout
      align-space-around
      justify-center
      row
      fill-height
    >
      <v-flex
        pa-1
        v-for="(blog, idx) in blogs"
        md4
        :key="idx">
        <blog-list-card
          :blog-item="blog"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import t from 'vue-types'

const BlogListCard = () => import('./BlogListCard.vue')

const SectionHeading = () => import('../common/SectionHeading.vue')

export default {
  components: {
    SectionHeading,
    BlogListCard
  },
  props: {
    blogs: t.array.def([])
  }
}
</script>
