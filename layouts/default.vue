<template>
  <div>
    <navigation-bar />
    <nuxt />
  </div>
</template>

<script>
import NavigationBar from '../components/navigation/NavigationBar.vue'

export default {
  components: {
    NavigationBar
  },
  computed: {
    isMobile() {
      return this.$mq === 'xxs' || this.$mq === 'xs'
    }
  }
}
</script>

<style>
body {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}
</style>
