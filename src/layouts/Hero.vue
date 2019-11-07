<template>
  <v-app :dark="darkTheme">
    <v-card>
      <v-app-bar
        app
        dark
        shrink-on-scroll
        prominent
        elevate-on-scroll
        fade-img-on-scroll
        src="https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      >
        <v-btn dark icon router exact :to="$url('/')" title="Home">
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-toolbar-title>My Blog</v-toolbar-title>

        <v-spacer></v-spacer>
        <!-- Theme Switcher -->
        <v-btn icon @click="switchTheme()" title="Switch Theme">
          <v-icon v-if="darkTheme">mdi-white-balance-sunny</v-icon>
          <v-icon v-else>mdi-moon-waxing-crescent</v-icon>
        </v-btn>
        <!-- Theme Switcher -->

        <!-- Author links -->

        <v-speed-dial v-model="fab" direction="bottom">
          <template v-slot:activator>
            <v-btn text icon rounded dark title="Author links">
              <v-avatar>
                <g-image
                  alt="Author image"
                  class="author__image"
                  src="~/assets/images/davidcouronne.jpg"
                  width="180"
                  height="180"
                  blur="5"
                />
              </v-avatar>
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

      <v-card class="mx-auto my-4" max-width="800" flat>
        <v-content>
          <v-parallax
            dark
            src="https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          >
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-thin mb-4">
                  Welcome to my Blog !
                </h1>
                <h4 class="subheading">Start reading today!</h4>
              </v-col>
            </v-row>
          </v-parallax>
          <v-card style="margin-top: -100px;" max-width="700" class="mx-auto">
            <slot />
          </v-card>
        </v-content>
      </v-card>
    </v-card>
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
