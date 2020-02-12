<template>
  <div class="text-center">
    <v-img
      :src="blog.image"
      :lazy-src="blog.image"
      :alt="blog.attributes.title"
      aspect-ratio="1.6"
    />
    <v-list class="text-capitalize">
      <v-list-item>
        <h1 class="title">
          {{ blog.attributes.title }}
        </h1>
      </v-list-item>
      <v-list-item>
        <fa :icon="['fas', 'user']" class="meta-icon"></fa>
        <h5 class="subtitle-1">
          {{ blog.attributes.author }}
        </h5>
      </v-list-item>
      <v-list-item>
        <fa :icon="['fas', 'calendar']" class="meta-icon"></fa>
        <h5 class="subtitle-1">
          {{ blog.attributes.year }}
        </h5>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.meta-icon {
  margin-right: 10px;
  color: #0083aa;
}
</style>
