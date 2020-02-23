<template>
  <v-app id="inspire">
    <!-- Right Drawer -->
    <v-navigation-drawer
      v-model="drawerRight"
      app
      clipped
      right
      class="text-center"
    >
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>TOC</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- /Right Drawer -->

    <!-- navbar -->
    <v-app-bar
      app
      clipped-right
      clipped-left
      dark
      class="yellow darken-2 text-center"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-btn color="accent" icon router exact :to="$url('/')" title="Home">
        <v-icon>mdi-home-city-outline</v-icon>
      </v-btn>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight" />
    </v-app-bar>
    <!-- /navbar -->

    <!-- left drawer -->
    <v-navigation-drawer v-model="drawer" clipped left app class="">
      <v-list dense>
        <v-list-item-content>
          <v-list-item-title>Documentation</v-list-item-title>
        </v-list-item-content>
      </v-list>
      <DocumentDrawerLinks />
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
      <v-container class="fill-height" fluid>
        <slot />
      </v-container>
    </v-content>
    <!-- /Main content -->

    <v-footer app color="blue-grey" class="white--text">
      <span>David Couronné</span>
      <v-spacer />
      <span>&copy; 2020-Present</span>
    </v-footer>
  </v-app>
</template>

<script>
import DocumentDrawerLinks from '@/components/documentation/DrawerLinks.vue'
export default {
  components: { DocumentDrawerLinks },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    left: false
  })
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
