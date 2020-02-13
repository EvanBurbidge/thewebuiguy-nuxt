<template>
  <v-app>
    <Navigation />
    <v-layout
      column
      fill-height
    >
      <nuxt />
    </v-layout>
  </v-app>
</template>

<script>
const Navigation = () => import('../components/BlogNavigation.vue')

export default {
  components: {
    Navigation
  }
}
</script>

<style>
  .v-application code {
    max-width: 100%;
    color: #0083aa !important;
  }
</style>
