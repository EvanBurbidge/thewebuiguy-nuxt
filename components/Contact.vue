<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col>
        <SectionHeading
          title="Contact Me"
          subtitle="Get in touch and lets chat"
        />
      </v-col>
    </v-row>
    <v-row justify="space-around" align="center" class="text-center">
      <v-col>
        <a href="https://www.linkedin.com/in/evan-burbidge-a0823361/" target="_blank">
          <fa :icon="['fab', 'linkedin']" class="social-icon" />
        </a>
        <a href="https://www.twitter.com/thewebuiguy" target="_blank">
          <fa :icon="['fab', 'twitter']" class="social-icon" />
        </a>
        <a href="https://www.facebook.com/TheWebUiGuy/" target="_blank">
          <fa :icon="['fab', 'facebook']" class="social-icon" />
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const SectionHeading = () => import('./common/SectionHeading.vue')

export default {
  components: {
    SectionHeading
  }
}
</script>

<style lang="scss" scoped>
 .footer {
   background: #3d3d3d;
 }
.social-icon {
  color: #0083aa;
  font-size: 28px;
  margin-right: 20px;
}
</style>
