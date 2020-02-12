<template>
  <div>
    <template v-for="test in testimonials">
      {{  test.title }}
    </template>
  </div>
</template>

<script>
import TestimonialData from '../data/testimonials'

export default {
  data: () => ({
    testimonialTitles: TestimonialData,
    testimonials: []
  }),
  computed: {
    formattedTestimonials() {
      return this.testimonials.filter(t => !!t.published)
    }
  },
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
  }
}
</script>

<style lang="scss" scoped>
  .wuig-carousel {
    color: #FFFFFF;
    box-shadow: none;
    text-align: center;
    background: #0083aa;
    &-title {
      margin-bottom: 20px;
    }
    &-divider {
      width: 50%;
      margin: 0 25% 20px 25%;
    }
  }
</style>
