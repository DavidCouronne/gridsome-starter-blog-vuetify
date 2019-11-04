// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from "vuetify";
import "./assets/style/index.scss";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { appOptions }) {
  // Set default layout as a global component

  const opts = {
    icons: {
      iconfont: "mdi"
    }
  }; // opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify);

  appOptions.vuetify = new Vuetify(opts);
  Vue.component("Layout", DefaultLayout);
}
