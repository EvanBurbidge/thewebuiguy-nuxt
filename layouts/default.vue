<template>
  <div>
    App
  </div>
</template>

<script>


export default {
  computed: {
    isMobile() {
      return this.$mq === 'xxs' || this.$mq === 'xs'
    }
  }
}
</script>
