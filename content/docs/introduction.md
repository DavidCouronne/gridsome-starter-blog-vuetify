---
title: test
author: david
description: test file
date: 2020-02-22
---

```js{9-10}{codeTitle: "gridsome.config.js"}
{
  use: '@gridsome/vue-remark',
  options: {
    typeName: 'Documentation', // Required
    baseDir: './content/docs', // Where .md files are located
    pathPrefix: '/docs', // Add route prefix. Optional
    template: './src/templates/Documentation.vue', // Optional
    plugins: [
      'gridsome-plugin-remark-prismjs-all',
      'gridsome-plugin-remark-container'
      ],
    remark: {}
  }
},
```

:::tip
This is a Tip
:::

<v-alert type="success">
      I'm a success alert.
</v-alert>

<v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 5"
      :key="i"
    >
      <v-expansion-panel-header>Item</v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

A new static site generator baby is born. It's highly inspired by Gatsby.js (React based) but built on top of Vue.js. We have been working on it for a year and will have a beta ready soon. You can expect this baby to grow up fast!

We think **Gridsome** is a missing piece to the Vue.js ecosystem. What Gatsby.js does for React.js is a game changer in how we build websites. React.js is excellent, but we think Vue.js is more approachable for most web designers and devs getting started with JAMstack. Gridsome is the Vue.js alternative to Gatsby.

With **Gridsome** you get a **universal GraphQL layer** for all your connected data sources. It's like a single source of truth for your website data ready to be used in any page or components. Connect to any CMS or APIs like Google Spreadsheet, Airtable, Instagram Feed, local markdown files, etc...

Here is an example on how to query posts from the GraphQL layer in a page:

```jsx{2}{codeTitle: test}
const
var
let
```
