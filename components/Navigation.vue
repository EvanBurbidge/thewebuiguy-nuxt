<template>
  <v-toolbar color="transparent">
    <v-toolbar-title>
      <img
        :src="logo"
        alt="the main webuiguy logo"
        class="main-logo"
      >
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="hidden-md-and-up">
      <v-toolbar-side-icon
        flat
        color="primary"
      />
    </v-toolbar-items>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        <nuxt-link class="nav-item" to="/dynamic/About">
          About
        </nuxt-link>
      </v-btn>
      <v-btn flat>
        Portfolio
      </v-btn>
      <v-btn flat>
        Testimonials
      </v-btn>
      <v-btn flat>
        Services
      </v-btn>
      <v-btn flat>
        Contact Me
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import logo from '../static/logo.png'

export default {
  data: () => ({
    logo
  })
}
</script>

<style scoped>
  img.main-logo {
    width: 50%;
  }
</style>
