<template>
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
</template>

<script>
export default {
    name: 'DocumentationDrawer',
data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    left: false
  })
}
</script>

<style>

</style>