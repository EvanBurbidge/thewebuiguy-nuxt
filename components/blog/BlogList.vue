<template>
  <div>
    <SectionHeading
      title="Blog"
      subtitle="Thoughts, musings, some work i've done"
    />
    <v-row
      align-space-around
      justify-center
      fill-height
    >
      <v-col
        pa-1
        md="4"
        sm="6"
        xs="12"
        cols="12"
        v-for="(blog, idx) in blogs"
        :key="idx">
        <blog-list-card
          :blog-item="blog"
        />
      </v-col>
    </v-row>
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
