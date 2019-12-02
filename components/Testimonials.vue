<template>
  <div>
    <pre>{{ testimonials }}</pre>
  </div>
<!--  <v-carousel :hide-delimiters="true" class="wuig-carousel">-->
<!--    <v-carousel-item>-->
<!--      test-->
<!--    </v-carousel-item>-->
<!--  </v-carousel>-->
</template>

<script>
import TestimonialData from '../data/testimonials'

export default {
  data: () => ({
    testimonialTitles: TestimonialData,
    testimonials: []
  }),
  created() {
    this.getTestimonialsData()
  },
  methods: {
    getTestimonialsData() {
      async function asyncImport(tName) {
        const wholeMD = await import(`../data/testimonials/${tName}.md`)
        return wholeMD.attributes
      }
      return Promise.all(
        this.testimonialTitles.map(t => asyncImport(t))
      ).then((res) => {
        this.testimonials = res
      })
    }
  },
  computed: {
    formattedTestimonials() {
      return this.testimonials.filter(t => t.attributes.published === true)
    }
  }
}
</script>

<style lang="scss" scoped>
  .wuig-carousel {
    box-shadow: none;
    background: #FFFFFF;
  }
</style>
