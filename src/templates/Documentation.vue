<template>
  <DocsLayout :subtitles="subtitles">
    <h1>{{ $page.documentation.title }}</h1>
    <p class="intro">
      {{ $page.documentation.description }}
    </p>
    <div class="rich-text">
      <VueRemarkContent />
    </div>
  </DocsLayout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Documentation ($id: ID!) {
  documentation(id: $id) {
    title
    description
    headings (depth: h1) {
      value
    }
    subtitles: headings {
      depth
      value
      anchor
    }
  }
}
</page-query>
<script>
// import links from '@/data/doc-links.yaml'

  export default {
    computed: {
      // links() {
      //   return links
      // },
      subtitles () {
        // Remove h1, h4, h5, h6 titles
        const subtitles = this.$page.documentation.subtitles.filter(function (
          value,
          index,
          arr,
        ) {
          return [2, 3].includes(value.depth)
        })
        return subtitles
      },
    },
    metaInfo () {
      const { title, headings } = this.$page.documentation

      return {
        title: title || (headings.length ? headings[0].value : undefined),
      }
    },
  }
</script>
<style lang="scss">
img {
  max-width: 100%;
}

.markdown {
  padding: 1rem;
}
</style>
