<template>
  <v-app>
    <div>
      <v-app-bar app>
        <v-btn color="accent" icon router exact :to="$url('/')">
          <v-icon>mdi-home-city-outline</v-icon>
        </v-btn>
        <v-toolbar-title>{{ $static.metadata.siteName }}</v-toolbar-title>
        <v-spacer />

        <v-speed-dial v-model="fab" direction="bottom">
          <template v-slot:activator>
            <v-btn text icon rounded dark>
              <v-avatar>
                <g-image
                  alt="Author image"
                  class="author__image"
                  src="~/assets/images/author.jpg"
                  width="180"
                  height="180"
                  blur="5"
                />
              </v-avatar>
            </v-btn>
          </template>
          <v-btn fab dark small color="green">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn fab dark small color="indigo">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn fab dark small color="red">
            <v-icon>mdi-delete</v-icon>
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
