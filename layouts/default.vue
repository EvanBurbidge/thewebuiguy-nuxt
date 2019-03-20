<template>
  <v-app>
    <Navigation />
    <v-container fluid>
      <v-layout
        column
        fill-height
      >
        <nuxt />
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>
