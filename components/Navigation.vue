<template>
  <v-toolbar color="transparent" fixed>
    <v-toolbar-title>
      <nuxt-link to="/">
        <img
          :src="logo"
          alt="the main webuiguy logo"
          class="main-logo"
        >
      </nuxt-link>
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
    logo,
    height: 0,
    scrollPos: 0,
    isTransparent: true
  }),
  created() {
    if (process.browser) {
      this.scrollPos = window.scrollY
      this.height = window.innerHeight - 65
      window.addEventListener('scroll', e => this.getScrollPos(e), false)
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.getScrollPos)
    }
  },
  methods: {
    getScrollPos() {
      if (process.browser) {
        this.scrollPos = window.scrollY
        console.warn(this.height)
        console.warn(this.scrollPos)
        // if (this.scrollPos > this.height) {
        //   this.isTransparent = false
        // } else {
        //   this.isTransparent = true
        // }
      }
    }
  }
}
</script>

<style scoped>
  img.main-logo {
    width: 50%;
  }
</style>
