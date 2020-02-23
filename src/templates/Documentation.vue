<template>
  <DocsLayout>
    <h1>{{ $page.documentation.title }}</h1>
    <p class="intro">{{ $page.documentation.description }}</p>
    <VueRemarkContent />
  </DocsLayout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Documentation ($id: ID!) {
  documentation(id: $id) {
    title
    description
  }
}
</page-query>

<style lang="scss"> 
img {
  max-width: 100%;
}

.markdown {
  padding: 1rem;
}
</style>
