<template>
  <v-app id="inspire">
    <!-- Right Drawer -->

    <documentation-toc-links
      :subtitles="subtitles"
      :drawer-right="drawerRight"
    />

    <!-- /Right Drawer -->

    <!-- navbar -->
    <v-app-bar
      app
      clipped-right
      clipped-left
      dark
      class="text-center"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Gridsome Starter Blog Vuetify</v-toolbar-title>
      <v-btn
        dark
        icon
        router
        exact
        :to="$url('/')"
        title="Home"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        icon
        router
        exact
        :to="$url('/docs/installation')"
        title="Docs"
      >
        <v-icon>mdi-book-open-page-variant</v-icon>
      </v-btn>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight" />
    </v-app-bar>
    <!-- /navbar -->

    <!-- left drawer -->
    <v-navigation-drawer
      v-model="drawer"
      clipped
      left
      app
      class=""
    >
      <v-list dense>
        <v-list-item-content>
          <v-list-item-title>Documentation</v-list-item-title>
        </v-list-item-content>
      </v-list>
      <document-drawer-links />
      <template v-slot:append>
        <v-divider />
        <div class="px-4 py-2 d-flex">
          <v-spacer />
          <base-theme-toggle />
        </div>
      </template>
    </v-navigation-drawer>
    <!-- /left drawer -->

    <!-- Main content -->
    <v-content>
      <v-container
        id="container"
        class="fill-height"
        fluid
      >
        <slot />
      </v-container>
    </v-content>
    <!-- /Main content -->

    <v-footer
      app
      color="blue-grey"
      class="white--text"
    >
      <span>David Couronné</span>
      <v-spacer />
      <span>&copy; 2020-Present</span>
    </v-footer>
  </v-app>
</template>

<script>
  import DocumentDrawerLinks from '@/components/documentation/DrawerLinks.vue'
  import DocumentationTocLinks from '@/components/documentation/TocLinks.vue'
  export default {
    components: { DocumentDrawerLinks, DocumentationTocLinks },
    props: {
      source: { type: String, default: '' },
      subtitles: { type: Array, default: () => [] },
      links: { type: Array, default: () => [] },
      path: { type: String, default: () => '/docs/' },
    },
    data: () => ({
      drawer: null,
      drawerRight: null,
      right: false,
      left: false,
      activeIndex: 0,
      currentOffset: 0,
      internalToc: [],
      tocTimeout: 0,
    }),
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
