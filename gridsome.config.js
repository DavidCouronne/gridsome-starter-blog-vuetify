// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const postcssPlugins = [tailwind()]
//if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'Gridsome Starter Blog Vuetify',
  siteDescription: 'A sample starter with Gridsome and Vuetify',
  siteUrl: 'https://gridsome-vuetify-blog-starter.netlify.com/',

  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Documentation', // Required
        baseDir: './content/docs', // Where .md files are located
        pathPrefix: '/docs', // Add route prefix. Optional
        template: './src/templates/Documentation.vue', // Optional
        plugins: [
          'gridsome-plugin-remark-prismjs-all',
          'gridsome-plugin-remark-container',
        ],
        remark: {
          // autolinkHeadings: {
          //    content: {
          //     type: 'text',
          //     value: '<svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>',
          //   },
          // },
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      },
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      },
    },
  ],
  transformers: {
    // Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        'gridsome-plugin-remark-container',
        [
          'gridsome-plugin-remark-prismjs-all',
          {
            aliases: {
              js: 'javascript',
              sh: 'bash',
            },
            languageExtensions: [
              {
                language: 'vue',
                extend: 'html',
                definition: {
                  vue_types: /(Vue)/,
                },
                insertBefore: {
                  function: {
                    vue_keywords: /(v-if|v-for)/,
                  },
                },
              },
              {
                language: 'toml',
                extend: 'yaml',
                definition: {
                  toml_types: /(Toml)/,
                },
                insertBefore: {
                  function: {
                    toml_keywords: /(build|header)/,
                  },
                },
              },
            ],
          },
        ],
      ],
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
