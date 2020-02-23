<template>
  <DocsLayout>
    <v-card
      v-for="doc in $page.docs.edges"
      :key="doc.id"
      class="mx-auto"
      max-width="344"
    >
      <v-card-text>
        <p class="display-1 text--primary">
          {{ doc.node.title }}
        </p>

        <div class="text--primary">
          {{ doc.node.description }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn dark color="primary" :to="doc.node.path">
          Read More
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- end post -->
  </DocsLayout> 
</template>

<page-query>
query Documentation {
  docs: allDocumentation (sortBy: "date", order: DESC) {
    edges {
      node {
        id
        path
        title
        description
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Docs'
  }
}
</script>
