<template>
  <v-app>
    <div>
      <v-app-bar app >
        <v-btn icon router exact :to="$url('/')">
          <v-icon>mdi-home-city-outline</v-icon>
        </v-btn>
        <v-toolbar-title>
          {{ $static.metadata.siteName }}
        </v-toolbar-title>
        <v-spacer />
        <v-btn :to="$url('/')">
          Home
        </v-btn>
        <v-btn :to="$url('/about')">
          About
        </v-btn>
        <v-speed-dial
      v-model="fab"
      
      direction="bottom"
      
      
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
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
