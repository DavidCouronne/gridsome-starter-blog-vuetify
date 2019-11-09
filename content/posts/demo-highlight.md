---
title: Demo gridsome-plugin-remark-prismjs-all
date: 2019-10-28
published: true
author: "David Couronné"
tags: ['Gridsome', 'PrismJS']
canonical_url: false
description: "Demo file for syntax highlighting"
cover_image: https://res.cloudinary.com/dpw19qolx/image/upload/t_cover-image/v1561731158/shahadat-shemul-gnyA8vd3Otc-unsplash.jpg
---

## Basic usage

``````markdown{codeTitle: "In a markdown file"}
```js
const myvar = "some value";
```
``````

Result:

```js
const myvar = "some value";
```

## Code Title

To add a title your code, you can use the `codeTitle` option:

``````md
```js{codeTitle: "In src/main.js"}
require("prismjs/themes/prism-solarizedlight.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("prismjs/plugins/command-line/prism-command-line.css")
```
``````

Result:

```js{codeTitle: "In src/main.js"}
require("prismjs/themes/prism-solarizedlight.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("prismjs/plugins/command-line/prism-command-line.css")
```

## Lines Numbers

To see the line numbers alongside your code, you can use the `numberLines` option:

`````md
```html{numberLines: true}
<template>
  <Layout>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.allWordPressPost.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li>
    </ul>
  </Layout>
</template>
```
``````

Result:

```html{numberLines: true}
<template>
  <Layout>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.allWordPressPost.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li>
    </ul>
  </Layout>
</template>
```

You can also start numbering at any index you wish (here, numbering
will start at index 21):

`````md
```html{numberLines: 21}
<template>
  <Layout>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.allWordPressPost.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li>
    </ul>
  </Layout>
</template>
```
``````

Result:

```html{numberLines: 21}
<template>
  <Layout>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.allWordPressPost.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li>
    </ul>
  </Layout>
</template>
```

## Lines Highlighting

You can also add line highlighting. It adds a span around lines of code with a
special class `.gridsome-highlight-code-line` that you can target with styles.

You can specify the highlighted lines outside of the code block.
In the following code snippet, lines 3 and 5 through 7 will get the line
highlighting. The line range parsing is done with
[https://www.npmjs.com/package/parse-numeric-range](https://www.npmjs.com/package/parse-numeric-range).

`````md
```html{3,5-7}
<template>
  <Layout>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.allWordPressPost.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li>
    </ul>
  </Layout>
</template>
```
``````

Result:

```html{3,5-7}
<template>
  <Layout>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.allWordPressPost.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li>
    </ul>
  </Layout>
</template>
```

## All Together

`````md
```html{3,5-7}{numberLines: 21}{codeTitle: "In src/pages/Index.vue"}
<template>
  <Layout>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.allWordPressPost.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li>
    </ul>
  </Layout>
</template>
```
``````

Result

```html{3,5-7}{numberLines: 21}{codeTitle: "In src/pages/Index.vue"}
<template>
  <Layout>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.allWordPressPost.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li>
    </ul>
  </Layout>
</template>
```




## Options

```js{codeTitle: "In gridsome.config.js"}

remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        ['gridsome-plugin-remark-prismjs-all',{
            // Class prefix for <pre> tags containing syntax highlighting;
            // defaults to 'language-' (eg <pre class="language-js">).
            // If your site loads Prism into the browser at runtime,
            // (eg for use with libraries like react-live),
            // you may use this to prevent Prism from re-processing syntax.
            // This is an uncommon use-case though;
            // If you're unsure, it's best to use the default value.
            classPrefix: "language-",
            // This lets you set up language aliases.  For example,
            // setting this to '{ sh: "bash" }' will let you use
            // the language "sh" which will highlight using the
            // bash highlighter.
            aliases: {},
            // This toggles the display of line numbers globally alongside the code.
            // To use it, add the following line in src/layouts/index.js
            // right after importing the prism color scheme:
            //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
            // Defaults to false.
            // If you wish to only show line numbers on certain code blocks,
            // leave false and use the {numberLines: true} syntax below
            showLineNumbers: false,
            // If setting this to true, the parser won't handle and highlight inline
            // code used in markdown i.e. single backtick code like `this`.
            noInlineHighlight: false,
            // This adds a new language definition to Prism or extend an already
            // existing language definition. More details on this option can be
            // found under the header "Add new language definition or extend an
            // existing language" below.
            languageExtensions: [
              {
                language: "superscript",
                extend: "javascript",
                definition: {
                  superscript_types: /(SuperType)/,
                },
                insertBefore: {
                  function: {
                    superscript_keywords: /(superif|superelse)/,
                  },
                },
              },
            ],
            // Customize the prompt used in shell output
            // Values below are default
            prompt: {
              user: "root",
              host: "localhost",
              global: false,
            },

        }],
        
        
      ]
    }
```

