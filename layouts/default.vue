<template>
  <v-app>
    <Navigation />
    <v-container fluid>
      <nuxt />
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
