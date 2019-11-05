<template>
  <v-app :dark="setTheme">
    <v-app-bar
      app
      dark
      shrink-on-scroll
      prominent
      elevate-on-scroll
      fade-img-on-scroll
      :src="post.cover_image"
    >
      <v-btn dark icon router exact to="/" >
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-toolbar-title>{{ post.title }} </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-title>Posted {{ post.date }}. </v-toolbar-title>

      <v-btn icon @click="goDark = !goDark" >
        <v-icon v-if="goDark">mdi-white-balance-sunny</v-icon>
        <v-icon v-else>mdi-moon-waxing-crescent</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <slot />
      </v-container>
    </v-content>
  </v-app>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
export default {
  props: {
    post: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      goDark: false
    };
  },
  computed: {
    setTheme() {
      if (this.goDark == true) {
        return (this.$vuetify.theme.dark = true);
      } else {
        return (this.$vuetify.theme.dark = false);
      }
    },
    setGoDark() {
      return this.goDark === !this.goDark;
    }
  }
};
</script>
