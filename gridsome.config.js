// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const postcssPlugins = [tailwind()]
if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

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
          autolinkHeadings: {
            content: {
              type: 'text',
              value: '#',
            },
          },
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
