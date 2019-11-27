<template>
  <div class="intro-tile-wrapper">
    <div class="intro-tile-text">
      <h2 class="display-2">
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
  </div>
</template>

<script>
import logo from '../static/thewebuiguy-logo.jpg'
export default {
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
      .logo {
        width: 100%;
        border: 2px solid #0083aa;
      }
    }
    &-wrapper {
      background: #FFFFFF;
      width: calc(100% + 48px);
      height: 100vh;
      margin: -24px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
</style>
