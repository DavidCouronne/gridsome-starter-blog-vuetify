<template>
  <v-app :dark="darkTheme">
    <v-app-bar
      app
      dark
      shrink-on-scroll
      prominent
      elevate-on-scroll
      fade-img-on-scroll
      :src="post.cover_image"
    >
      <v-btn dark icon router exact :to="$url('/')" title="Home">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-toolbar-title>{{ post.title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-title>Posted {{ post.date }}.</v-toolbar-title>

      <!-- Theme Switcher -->
      <v-btn icon @click="switchTheme()" title="Switch Theme">
        <v-icon v-if="darkTheme">mdi-white-balance-sunny</v-icon>
        <v-icon v-else>mdi-moon-waxing-crescent</v-icon>
      </v-btn>
      <!-- Theme Switcher -->
    </v-app-bar>
    <v-content>
      <v-container>
        <v-card>
          <slot />
        </v-card>
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
      type: Object,
      default: null
    }
  },
  data() {
    return {
      darkTheme: false,
      theme: ''
    }
  },
  mounted() {
    this.theme = localStorage.getItem('theme') || 'theme-light'
    this.darkTheme = this.theme === 'theme-dark' ? true : false
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    switchTheme() {
      const newTheme =
        this.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
      localStorage.setItem('theme', newTheme)
      this.theme = newTheme
      this.darkTheme = !this.darkTheme

      if (this.theme == 'theme-dark') {
        return (this.$vuetify.theme.dark = true)
      } else {
        return (this.$vuetify.theme.dark = false)
      }
    }
  }
}
</script>
