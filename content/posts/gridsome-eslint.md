---
title: "Gridsome and Eslint: a complete guide."
date: 2019-11-07
published: true
author: "David Couronné"
tags: ['Gridsome', 'ESLint']
canonical_url: false
description: "A step-by-step guide to install and configure Eslint and Prettier with Grisome"
cover_image: https://res.cloudinary.com/dpw19qolx/image/upload/t_cover-image/v1572706812/khachik-simonian-nXOB-wh4Oyc-unsplash.jpg
avatar: "davidcouronne.jpg"
---

While VueJS has the great [Vue Cli](https://cli.vuejs.org/guide/) tool, Gridsome has "not yet" the equivalent.

To install and configure Eslint, we must install our dependencies by hand.

## Install dev dependencies

This article assumes that you already have a Gridsome project installed. If not, you can consult the list of starters on this page: [Gridsome Starters](https://gridsome.org/starters/).

As Gridsome is based on Vuejs, we will use the same recommended tools:

+ [eslint](https://eslint.org/)
+ [prettier](https://prettier.io/)
+ [@vue/cli-service](https://cli.vuejs.org/guide/cli-service.html)
+ [@vue/cli-plugin-eslint](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint)
+ [@vue/eslint-config-prettier](https://github.com/vuejs/eslint-config-prettier)
+ [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
+ [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
+ [babel-eslint](https://github.com/babel/babel-eslint)

```shell
yarn add eslint prettier @vue/cli-service @vue/cli-plugin-eslint @vue/eslint-config-prettier eslint-plugin-vue eslint-plugin-prettier babel-eslint -D
```

You have time to have a coffee during the installation !

## Configurations files

In your root directory, create two files: `.prettierrc.js` and `.eslintrc.js`

```js{codeTitle: ".prettierrc.js"}
module.exports = {
  singleQuote: true,
  semi: false
}
```

And:

```js{codeTitle: ".eslintrc.js"}
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    '@vue/prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
```

Now, you have to add a script in your `package.json` file:

```json{5}{codeTitle = "package.json"}
"scripts": {
    "build": "gridsome build",
    "develop": "gridsome develop",
    "explore": "gridsome explore",
    "lint": "vue-cli-service lint"
  },
```

And just run:

```shell
yarn lint
```

Happy coding !

