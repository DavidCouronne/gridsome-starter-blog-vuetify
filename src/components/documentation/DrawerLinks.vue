<template>
  <v-list class="pt-0 pb-7" dense expand nav>
    <template v-for="(item, i) in items">
      <v-subheader
        v-if="item.header"
        :key="`subheader-${i}`"
        v-text="item.header"
      />

      <v-divider v-else-if="item.divider" :key="`divider-${i}`" />

      <base-group v-else-if="item.group" :key="`group-${i}`" :item="item" />

      <v-list-item v-else :key="`item-${i}`" :to="item.to" exact>
        <v-list-item-content>
          <v-list-item-title>
            <span v-text="item.text" />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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
export default {
  name: 'DocumentationDrawerLinks',
  data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
    items: [
      { text: 'All docs', to: '/docs/' },
      { header: 'First section' },
      {
        text: 'bienvenue',
        to: '/docs/introduction'
      },
      {
        text: 'second document',
        to: '/docs/latex'
      },
      { divider: true }
    ]
  })
}
</script>

<style></style>
