class TailwindExtractor {
    static extract (content) {
      return content.match(/[A-z0-9-:\\/]+/g)
    }
  }

  module.exports = {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md',
      './docs/**/*.md',
      './blog/**/*.md',
    ],
whitelistPatterns: [/^v-*/, /^theme-*/, /^application--*/],
whitelistPatternsChildren: [/^v-*/, /^theme-*/, /^application--*/],

    whitelist: [
      'body',
      'html',
      'img',
      'a',
      'g-image',
      'g-image--lazy',
      'g-image--loaded',
      'active', 'spacer', 'primary', 'secondary', 'accent', 'error', 'warning', 'info', 'success',
    ],
    extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug'],
      },
    ],
  }
