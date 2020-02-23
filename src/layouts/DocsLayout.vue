<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawerRight"
      app
      clipped
      right
      class="purple darken-2 text-center"
    >
      <v-list dense>
        <v-list-item @click.stop="right = !right">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>First Drawer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
    <v-navigation-drawer
      v-model="drawer"
      clipped
      left
      app
      class="green darken-2 text-center"
    >
      <v-list dense>
        <v-list-item @click.stop="left = !left">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- /left drawer -->
    <!-- left temporary drawer -->
    <v-navigation-drawer
      v-model="left"
      fixed
      temporary
      class="orange darken-2 text-center"
    />
    <!-- /left temporary drawer -->
    <!-- Main content -->
    <v-content>
      <v-container class="fill-height" fluid>
        <slot />
      </v-container>
    </v-content>
    <!-- /Main content -->

    <v-navigation-drawer v-model="right" fixed right temporary />

    <v-footer app color="blue-grey" class="white--text">
      <span>Vuetify</span>
      <base-theme-toggle />
      <v-spacer />
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  components: {},
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
