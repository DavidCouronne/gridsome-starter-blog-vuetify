<template>
  <HeroLayout>
    <v-container>
      <div class="posts">
        <v-row dense>
          <post-card
            v-for="edge in $page.posts.edges"
            :key="edge.node.id"
            :post="edge.node"
          />
        </v-row>
      </div>
    </v-container>
  </HeroLayout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image
        path
        author
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
// import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    // Author,
    PostCard
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
