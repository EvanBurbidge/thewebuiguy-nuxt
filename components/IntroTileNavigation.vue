<template>
  <transition>
    <v-toolbar
      :flat="true"
      class="navigation-bar"
      color="transparent"
    >
      <v-toolbar-title>
        <nuxt-link to="/">
          <img
            src="../static/logo-white-only.png"
            alt="the main webuiguy logo"
            class="main-logo"
          >
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn
          v-scroll-to="'#home-section'"
          :dark="true"
          text
        >
          Home
        </v-btn>
        <v-btn
          v-scroll-to="'#about-section'"
          :dark="true"
          text
        >
          About
        </v-btn>
        <v-btn
          v-scroll-to="'#blog-section'"
          :dark="true"
          text
        >
          Blog
        </v-btn>
        <v-btn
          v-scroll-to="'#contact-section'"
          :dark="true"
          text
        >
          Contact Me
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </transition>
</template>

<script>
import logo from '../static/logo.png'

export default {
  data: () => ({
    logo
  })
}
</script>

<style scoped lang="scss">
  .navigation-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transition: top 1s linear;
    border-bottom: 1px solid #0083aa;
    z-index: 2;
  }

  img.main-logo {
    width: 50%;
  }
</style>
