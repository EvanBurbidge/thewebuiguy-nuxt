<template>
  <v-layout
    align-start
    justify-space-around
    row
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
      md9
      sm12
      xs12
    >
      <p>
        About me
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
import aboutMeImg from '../static/aboutme.jpg'

export default {
  data: () => ({
    aboutMeImg
  })
}
</script>

<style scoped>
  .about-me-img {
    border-radius: 50%;
    border: 3px solid transparent;
  }
</style>
