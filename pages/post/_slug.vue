<template>
    <v-layout row align-start pa-2>
        <v-flex pa-3 xs12 sm3 md3 lg2>
            <v-card style="padding: 20px">
                <blog-meta :blog="blog"/>
            </v-card>
        </v-flex>
        <v-flex xs12 sm9 md9 lg10 pa-3>
            <v-card style="padding: 20px">
                <div v-html="blog.html"></div>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
const BlogMeta = () => import('../../components/blog/BlogMeta.vue')

export default {
  components: {
    BlogMeta
  },
  async asyncData({ params }) {
    const blog = await import(`../../data/blog/${params.slug}/readme.md`)
    const blogImage = `../../images/blog/${params.slug.toLowerCase()}/_thumb.png`
    return {
      blog: {
        ...blog,
        image: blogImage
      }
    }
  }
}
</script>
