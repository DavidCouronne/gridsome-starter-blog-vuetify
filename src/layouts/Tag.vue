<template>
  <v-app :dark="darkTheme">
    <v-app-bar
      app
      dark
      elevate-on-scroll
    >
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

      <v-spacer />

      <!-- Theme Switcher -->
      <v-btn
        icon
        title="Switch Theme"
        @click="switchTheme()"
      >
        <v-icon v-if="darkTheme">
          mdi-white-balance-sunny
        </v-icon>
        <v-icon v-else>
          mdi-moon-waxing-crescent
        </v-icon>
      </v-btn>
      <!-- Theme Switcher -->

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
        default: null,
      },
    },
    data () {
      return {
        darkTheme: false,
        theme: '',
      }
    },
    mounted () {
      this.theme = localStorage.getItem('theme') || 'theme-light'
      this.darkTheme = this.theme === 'theme-dark'
    },
    methods: {
      toggle () {
        this.isOpen = !this.isOpen
      },
      switchTheme () {
        const newTheme =
          this.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
        localStorage.setItem('theme', newTheme)
        this.theme = newTheme
        this.darkTheme = !this.darkTheme

        if (this.theme === 'theme-dark') {
          return (this.$vuetify.theme.dark = true)
        } else {
          return (this.$vuetify.theme.dark = false)
        }
      },
    },
  }
</script>
