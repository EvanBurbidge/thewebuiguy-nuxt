<template>
  <v-layout
    column
    align-center
    justify-content-center
  >
    <v-flex>
      <h2 class="display-2 text-center capitalise">
        {{ title }}
      </h2>
      <v-divider color="primary" />
      <p class="body-1 text-center capitalise">
        {{ subtitle }}
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
import t from 'vue-types'

export default {
  props: {
    title: t.string.isRequired.def(''),
    subtitle: t.string.def('')
  }
}
</script>

<style scoped>
  .text-center {
    text-align: center;
  }
</style>
