<template>
  <HeroLayout>
    <v-container>
      <div class="posts">
        <v-row dense>
          <post-card v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
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
        avatar
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
 metaInfo() {
    return {
      meta: [
        { name: 'description', "A blog starter with Gridsome and Vuetify" },

        // Some Open Graph Tags
        { property: 'og:title', content: this.$static.metadata.siteName },
        { property: 'og:description', "A blog starter with Gridsome and Vuetify" },
        { property: 'og:image', 'gridsome-starter-blog-vuetify.jpg' },
        {
          property: 'og:url',
          content: this.$static.metadata.siteUrl
        },

        // Some Twitter Cards Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: this.$static.metadata.siteName },
        { name: 'twitter:image', 'gridsome-starter-blog-vuetify.jpg' },
        { name: 'twitter:description', content: "A blog starter with Gridsome and Vuetify" }
      ],
      // Some ld+json tags
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            description: "A blog starter with Gridsome and Vuetify",
            headline: this.$static.metadata.siteName,
            image: 'gridsome-starter-blog-vuetify.jpg'
          }
        }
      ]
    }
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>
