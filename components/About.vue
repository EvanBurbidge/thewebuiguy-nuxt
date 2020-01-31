<template>
  <div>
    <SectionHeading
      title="About Me"
      subtitle="A little bit about myself"
      class="web-section"
    />
    <v-layout
      align-center
      justify-space-around
      row
      wrap
      fill-height
    >
      <v-flex
        md3
        sm12
        xs12
        xxs12
      >
        <v-img
          :src="aboutMeImg"
          alt="an image of me in ibiza"
          aspect-ratio="1"
          class="primary about-me-img"
          width="100%"
        />
      </v-flex>
      <v-flex
        md8
        pa-2
        offset-md-1
        sm12
        xs12
      >
        <div v-html="about.html"></div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import aboutMeImg from '../static/aboutme.jpg'
import data from '../data/about/AboutMe.md'
import SectionHeading from './common/SectionHeading.vue'

export default {
  components: {
    SectionHeading
  },
  data: () => ({
    aboutMeImg,
    about: data
  })
}
</script>

<style scoped>
  .about-me-img {
    border-radius: 50%;
    border: 3px solid transparent;
  }
</style>
