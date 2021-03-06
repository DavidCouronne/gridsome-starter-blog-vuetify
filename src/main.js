// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Vuetify
import Vuetify from 'vuetify'
import { vuetifyConfig } from './vuetify.config.js'

import './plugins'

// Custom Styles
import './assets/style/index.scss'

// Layouts
import HeroLayout from '~/layouts/Hero.vue'
import BlogLayout from '~/layouts/Blog.vue'
import TagLayout from '~/layouts/Tag.vue'
import DocsLayout from '~/layouts/DocsLayout.vue'

export default function (Vue, { head, appOptions }) {
  // Headers
  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
  // })

  // Vuetify
  const vuetifyOpts = vuetifyConfig()
  Vue.use(Vuetify)
  appOptions.vuetify = new Vuetify(vuetifyOpts)

  // Set layout as a global component
  Vue.component('HeroLayout', HeroLayout)
  Vue.component('BlogLayout', BlogLayout)
  Vue.component('TagLayout', TagLayout)
  Vue.component('DocsLayout', DocsLayout)
}
