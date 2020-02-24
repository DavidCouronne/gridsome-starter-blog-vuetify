// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import './assets/style/index.scss'
// import './assets/style/primjs-languages.js'

import HeroLayout from '~/layouts/Hero.vue'
import BlogLayout from '~/layouts/Blog.vue'
import TagLayout from '~/layouts/Tag.vue'
import DocsLayout from '~/layouts/DocsLayout.vue'

// Base Components
import BaseThemeToggle from '@/components/base/ThemeToggle.vue'
import BaseItem from '@/components/base/Item.vue'
import BaseGroup from '@/components/base/Group.vue'

import { vuetifyConfig } from './vuetify.config.js'

export default function (Vue, { head, appOptions }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
  })

  const vuetifyOpts = vuetifyConfig()

  Vue.use(Vuetify)

  appOptions.vuetify = new Vuetify(vuetifyOpts)
  // Set layout as a global component
  Vue.component('HeroLayout', HeroLayout)
  Vue.component('BlogLayout', BlogLayout)
  Vue.component('TagLayout', TagLayout)
  Vue.component('DocsLayout', DocsLayout)

  // Set base components
  Vue.component('BaseThemeToggle', BaseThemeToggle)
  Vue.component('BaseItem', BaseItem)
  Vue.component('BaseGroup', BaseGroup)
}
