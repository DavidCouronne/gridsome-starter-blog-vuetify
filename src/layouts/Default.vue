<template>
  <v-app>
    <div>
      <v-app-bar app>
        <v-btn
          color="accent"
          icon
          router
          exact
          :to="$url('/')"
          title="Home"
        >
          <v-icon>mdi-home-city-outline</v-icon>
        </v-btn>
        <v-btn
          color="accent"
          icon
          router
          exact
          :to="$url('/docs')"
          title="Docs"
        >
          <v-icon>mdi-book-open-page-variant</v-icon>
        </v-btn>
        <v-toolbar-title>{{ $static.metadata.siteName }}</v-toolbar-title>
        <v-spacer />

        <v-speed-dial
          v-model="fab"
          direction="bottom"
        >
          <template v-slot:activator>
            <v-btn
              text
              icon
              rounded
              dark
            >
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
            title="Twitter"
            fab
            dark
            small
            color="blue"
            to="https://twitter.com/nollan94"
          >
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn
            title="Github"
            fab
            dark
            small
            to="https://github.com/DavidCouronne/gridsome-starter-blog-vuetify"
          >
            <v-icon>mdi-github-circle</v-icon>
          </v-btn>
        </v-speed-dial>
      </v-app-bar>
    </div>
    <v-content>
      <slot />
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
