<template>
  <v-card :style="{height: '100%'}">
    <v-img
      :src="blogItemImage"
      :lazy-src="blogItemImage"
      :alt="blogItem.title"
      aspect-ratio="1.2"
    />
    <v-divider />
    <v-card-title>
      <h3 class="title">{{ blogItem.title }}</h3>
      <p class="caption">
        {{ blogItem.description }}
      </p>
    </v-card-title>
    <v-card-actions>
      <v-btn
        :to="`post/${blogItem.name}`"
        text
        color="primary"
      >
        Read More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import t from 'vue-types'

export default {
  props: {
    blogItem: t.objectOf({
      name: t.string.def(''),
      title: t.string.def(''),
      year: t.string.def(''),
      color: t.string.def(''),
      id: t.string.def(''),
      description: t.string.def('')
    })
  },
  computed: {
    blogItemImage() {
      return `images/blog/${this.blogItem.name.toLowerCase()}/_thumb.png`
    }
  }
}
</script>
