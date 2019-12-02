<template>
  <div class="intro-tile-wrapper">
    <div class="intro-tile-text">
      <h2 class="">
        Hello There I'm
      </h2>
    </div>
    <div class="intro-tile-image">
      <v-img
        :src="logo"
        :lazy-src="logo"
        alt="main-logo"
        aspect-ratio="1"
        class="logo"
      />
    </div>
    <div class="intro-tile-text">
      <h2 class="">
        Welcome to my site
      </h2>
    </div>
    <div class="intro-tile-text">
      <DownArrow />
    </div>
  </div>
</template>

<script>
import logo from '../static/thewebuiguy-logo.jpg'
import DownArrow from './DownArrow.vue'

export default {
  components: {
    DownArrow
  },
  data: () => ({
    logo
  })
}
</script>

<style lang="scss" scoped>
  .intro-tile {
    &-image {
      width: 15%;
      border-radius: 50%;
      overflow: hidden;
      padding: 20px;
      @media screen and (max-width: 768px) {
        width: 50%;
      }
      .logo {
        width: 100%;
        border: 2px solid #0083aa;
      }
    }
    &-wrapper {
      width: calc(100% + 48px);
      background: #FFFFFF;
      height: 100vh;
      margin: -24px;
      padding-top: 24px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      @media screen and (max-width: 768px) {
        text-align: center;
        width: calc(100% + 48px);

      }
    }
  }
</style>
