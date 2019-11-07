// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'A sample site for Gridsome plugins',
  siteUrl: 'https://gridsome-plugin-demo.netlify.com',

  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },
  plugins: [
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
            create: true
          }
        }
      }
    }
  ],
  transformers: {
    // Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        [
          'gridsome-plugin-remark-prismjs-all',
          {
            aliases: {
              js: 'javascript',
              sh: 'bash'
            },
            languageExtensions: [
              {
                language: 'vue',
                extend: 'html',
                definition: {
                  vue_types: /(Vue)/
                },
                insertBefore: {
                  function: {
                    vue_keywords: /(v-if|v-for)/
                  }
                }
              },
              {
                language: 'toml',
                extend: 'yaml',
                definition: {
                  toml_types: /(Toml)/
                },
                insertBefore: {
                  function: {
                    toml_keywords: /(build|header)/
                  }
                }
              }
            ]
          }
        ]
      ]
    }
  }
}
