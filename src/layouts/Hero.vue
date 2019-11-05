<template>
  <v-app>
    <div>
      <v-app-bar app>
        <v-btn color="accent" icon router exact :to="$url('/')">
          <v-icon>mdi-home-city-outline</v-icon>
        </v-btn>
        <v-toolbar-title>{{ $static.metadata.siteName }}</v-toolbar-title>
        <v-spacer />
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
