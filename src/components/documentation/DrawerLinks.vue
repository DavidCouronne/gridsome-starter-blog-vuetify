<template>
  <v-list
    class="pt-0 pb-7"
    dense
    expand
    nav
  >
    <template v-for="(item, i) in items">
      <v-subheader
        v-if="item.header"
        :key="`subheader-${i}`"
        v-text="item.header"
      />

      <v-divider
        v-else-if="item.divider"
        :key="`divider-${i}`"
      />

      <base-group
        v-else-if="item.group"
        :key="`group-${i}`"
        :item="item"
      />

      <base-item
        v-else
        :key="`item-${i}`"
        :chip="genChip(item)"
        :icon="item.icon"
        :subtext="item.subtext"
        :text="item.text"
        :to="item.to"
      />
    </template>
  </v-list>
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
  import links from '@/data/sidebar.yaml'
  import { genChip } from '@/util/helpers'

  export default {
    name: 'DocumentationDrawerLinks',
    data: () => ({
      drawer: null,
      drawerRight: null,
      right: false,
      left: false,
    }),
    computed: {
      items () {
        return links
      },
    },
    methods: {
      genChip,
    },
  }
</script>

<style></style>
