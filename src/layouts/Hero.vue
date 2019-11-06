<template>
  <v-app :dark="setTheme">
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
        <v-btn dark icon router exact to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-toolbar-title>My Blog</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="goDark = !goDark">
          <v-icon v-if="goDark">
            mdi-white-balance-sunny
          </v-icon>
          <v-icon v-else>
            mdi-moon-waxing-crescent
          </v-icon>
        </v-btn>
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
