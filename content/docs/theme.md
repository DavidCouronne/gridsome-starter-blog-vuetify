---
title: Customization
author: David Couronné
description: Customization of gridsome blog vuetify
date: 2020-02-24
---

## Vuetify theme

You can configure the basics colors in `/src/vuetify.config.js`:

```js{codeTitle: "/src/vuetify.config.js"}
export function vuetifyConfig () {
  return {
    rtl: false,
    icons: {
      iconfont: 'mdi',
    },
    theme: {
      themes: {
        dark: {
          primary: '#21CFF3',
          accent: '#FF4081',
          secondary: '#ffe18d',
          success: '#4CAF50',
          info: '#2196F3',
          warning: '#FB8C00',
          error: '#FF5252',
          anchor: '#BDBDFF',
        },
        light: {
          primary: '#1976D2',
          accent: '#e91e63',
          secondary: '#30b1dc',
          success: '#4CAF50',
          info: '#2196F3',
          warning: '#FB8C00',
          error: '#FF5252',
          anchor: '#2424FF',
        },
      },
    },
  }
}
```

## Sidebar

You can customize the links in `src/data/sidebar.yaml`:

```yaml{codeTitle: "src/data/sidebar.yaml"}

```
