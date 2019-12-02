<template>
  <div class="text-center">
    <v-img
      :src="blog.image"
      :lazy-src="blog.image"
      :alt="blog.attributes.title"
      aspect-ratio="1.6"
    />
    <v-list>
      <v-list-tile>
        <h1 class="title">
          {{ blog.attributes.title }}
        </h1>
      </v-list-tile>
      <v-list-tile>
        <v-icon>
          perm_identity
        </v-icon>
        <h5 class="subtitle-1">
          {{ blog.attributes.author }}
        </h5>
      </v-list-tile>
      <v-list-tile>
        <v-icon>
          calendar_today
        </v-icon>
        <h5 class="subtitle-1">
          {{ blog.attributes.year }}
        </h5>
      </v-list-tile>
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
