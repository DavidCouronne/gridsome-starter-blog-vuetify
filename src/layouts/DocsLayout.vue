<template>
  <v-app id="inspire">
    <!-- Right Drawer -->

    <documentation-toc-links
      :drawer-right="drawerRight"
      :subtitles="subtitles"
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
      <base-theme-toggle />
      <!-- Author links -->

      <v-speed-dial
        v-model="fab"
        direction="bottom"
      >
        <template v-slot:activator>
          <v-btn
            icon
            rounded
            dark
            title="Author links"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-btn
          title="Github"
          fab
          dark
          small
          color="dark"
          href="https://github.com/DavidCouronne/gridsome-starter-blog-vuetify"
        >
          <v-icon>mdi-github-circle</v-icon>
        </v-btn>
        <v-btn
          title="Twitter"
          fab
          dark
          small
          color="blue"
          href="https://twitter.com/nollan94"
        >
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
      </v-speed-dial>
      <!-- Author links -->
      <v-app-bar-nav-icon
        title="Toggle Table Of Contents"
        @click.stop="drawerRight = !drawerRight"
      />
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
      <v-responsive
        class="mx-auto overflow-visible"
        max-width="1024"
      >
        <v-container
          id="container"
        >
          <v-responsive
            class="overflow-visible"
            min-height="90vh"
          >
            <slot />
          </v-responsive>
        </v-container>
      </v-responsive>
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
