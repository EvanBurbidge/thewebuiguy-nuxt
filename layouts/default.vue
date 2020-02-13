<template>
  <v-app>
    <Navigation  />
    <first-navigation v-if="$mq === 'md' || $mq === 'lg' || $mq === 'xl'" />
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
import FirstNavigation from '../components/IntroTileNavigation.vue'

export default {
  components: {
    Navigation,
    FirstNavigation
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
