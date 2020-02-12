<template>
  <v-app>
    <Navigation v-if="!isMobile" />
    <v-layout
      column
      fill-height
    >
      <nuxt />
    </v-layout>
  </v-app>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  components: {
    Navigation
  },
  computed: {
    isMobile() {
      return this.$mq === 'xxs' || this.$mq === 'xs'
    }
  }
}
</script>

<style>
.v-application code {
  max-width: 100%;
  color: #0083aa !important;
}
</style>
