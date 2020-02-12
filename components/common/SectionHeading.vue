<template>
  <div class="web-section-heading">
    <v-layout
      column
      align-center
      justify-content-center
    >
      <v-flex>
        <h2 class="display-2 text-center capitalise section-heading">
          {{ title }}
        </h2>
        <v-divider color="primary" />
        <p class="body-1 text-center capitalise">
          {{ subtitle }}
        </p>
      </v-flex>
    </v-layout>
  </div>
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
  .section-heading {
    margin: 20px 0;
  }
  .text-center {
    text-align: center;
  }
  .web-section-heading {
    margin: 24px 0;
  }
</style>
