---
title: Customization
author: David Couronné
description: Customization of gridsome blog vuetify
date: 2020-02-24
---

## Vuetify theme

By default, Vuetify has a standard theme applied for all components. This can be easily changed. Simply pass a theme property to the Vuetify constructor. You can choose to modify all or only some of the theme properties, with the remaining inheriting from the default.

You can configure this in `/src/vuetify.config.js`:

```js{codeTitle: "/src/vuetify.config.js"}
export function vuetifyConfig() {
  return {
    rtl: false,
    icons: {
      iconfont: "mdi"
    },
    theme: {
      themes: {
        dark: {
          primary: "#21CFF3",
          accent: "#FF4081",
          secondary: "#ffe18d",
          success: "#4CAF50",
          info: "#2196F3",
          warning: "#FB8C00",
          error: "#FF5252",
          anchor: "#BDBDFF"
        },
        light: {
          primary: "#1976D2",
          accent: "#e91e63",
          secondary: "#30b1dc",
          success: "#4CAF50",
          info: "#2196F3",
          warning: "#FB8C00",
          error: "#FF5252",
          anchor: "#2424FF"
        }
      }
    }
  };
}
```

## Sidebar

You can customize the links in `src/data/sidebar.yaml`:

```yaml{codeTitle: "src/data/sidebar.yaml"}
---
- group: getting-started
  text: gettingStarted
  icon: mdi-speedometer
  children:
    - text: Installation
      to: /docs/installation
- divider: true
- group: customization
  text: customization
  icon: mdi-cogs
  children:
    - text: theme
      to: /docs/customize
```

## Components folder

> Create your regular and base components here

This folder is for organizing your project's components. It is structured to support the official Vue [**style-guide**](https://vuejs.org/v2/style-guide/#Component-files-strongly-recommended).
Below are _examples_ of various project structures for **components**.

### Custom

A custom component is one that is used in more than one place but is not generic enough to used as a _base_ component.

```bash
.
└── components
    ├── CustomComponent.vue
    └── CustomComponentTwo.vue
```

### Base

[**Base components**](https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended) are global components that should always be in the root of the `/base` folder. These components will be automatically bootstrapped into Vue via the **base.js** plugin.

```bash
.
└── src
    ├── components
    │   ├── CustomComponent.vue
    │   └── base
    │       └── Btn.vue
    └── plugins
        ├── base.js # Bootstraps *.vue in `src/components/base`
        ├── index.js
        └── vuetify.js
```

**Example usage**
This is an example of how to use **base components**; global components that can be used in any other component.

```html{codeTitle:"In Template"}
<template>
  <div>
    <base-btn>...</base-btn>
  </div>
</template>
```

```html{codeTitle: "src/components/base/Btn.vue"}
<template>
  <v-btn :color="color" v-bind="$attrs" v-on="$listeners"> <slot />> </v-btn>
</template>

<script>
export default {
  name: "Btn",

  props: {
    color: {
      type: String,
      default: "primary"
    }
  }
};
</script>
```

> The component name is automatically prefixed with `Base`. `Btn` would yield `BaseBtn` and `MyComponent` would yield `BaseMyComponent`

### Views

Views that utilize proprietary components—ones that only exist within or for that page—should keep them _scoped_ to the container view.

```bash
.
└── views
    └── home
        ├── Index.vue
        ├── Section.vue
        └── components
            ├── CustomComponent.vue
            └── CustomComponentTwo.vue
```

**Example usage**
This is an example of what importing a custom component for a **View** might look like.

```html{codeTitle: "src/views/home/Index.vue"}
<script>
export default {
  components: {
    CustomComponent: () => import("./components/CustomComponent"),
    CustomComponentTwo: () => import("./components/CustomComponentTwo")
  }
};
</script>
```
