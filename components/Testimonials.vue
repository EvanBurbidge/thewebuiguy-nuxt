<template>
  <v-carousel
    :hide-delimiters="true"
    :height="100"
    class="wuig-carousel"
  >
    <v-carousel-item
      v-for="(testimonial, idx) in formattedTestimonials"
      :key="idx"
      class="wuig-carousel-item"
    >
      <p class="subtitle">
        {{ testimonial.testimonial }}
      </p>
      <v-divider class="wuig-carousel-divider" />
      <small class="overview wuig-carousel-title font-italic">
        {{ testimonial.title }}
      </small>
    </v-carousel-item>
  </v-carousel>
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
