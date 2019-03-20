<template>
  <v-layout
    align-start
    justify-space-around
    row
  >
    <v-flex
      md6
      sm12
      xs12
      xxs12
    >
      <v-img
        :src="aboutMeImg"
        alt="an image of me in ibiza"
        aspect-ratio="1"
        class="grey lighten-2"
        width="100%"
      />
    </v-flex>
    <v-flex
      md6
      sm12
      xs12
      pa-1
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
  img.about-me-img {
    border-radius: 50%;
  }
</style>
