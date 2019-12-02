<template>
  <v-carousel
    :hide-delimiters="true"
    :height="100"
    class="wuig-carousel"
  >
    <v-carousel-item
      v-for="(testimonial, idx) in testimonials"
      :key="idx"
      class="wuig-carousel-item"
    >
      <h3 class="title wuig-carousel-title">
        {{ testimonial.title }}
      </h3>
      <v-divider class="wuig-carousel-divider" />
      <p class="subtitle">
        {{ testimonial.testimonial }}
      </p>
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
      return this.testimonials.filter(t => t.attributes.published === true)
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
    &-item {
      margin-right: -25px;
      vertical-align: center;
    }
    &-title {
      margin-bottom: 20px;
    }
    &-divider {
      width: 50%;
      margin: 0 25% 20px 25%;
    }
  }
</style>
