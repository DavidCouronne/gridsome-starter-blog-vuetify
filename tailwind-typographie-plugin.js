const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  config: {
    theme: {
      typography: {
        h1: {
          fontSize: defaultTheme.fontSize['4xl'],
          fontWeight: defaultTheme.fontWeight.bold,

          lineHeight: defaultTheme.lineHeight.none,
        },
        'h1 + *': {
          marginTop: defaultTheme.spacing[8],
        },
        h2: {
          fontSize: defaultTheme.fontSize['2xl'],
          fontWeight: defaultTheme.fontWeight.bold,

          lineHeight: defaultTheme.lineHeight.tight,
        },
        '* + h2': {
          marginTop: defaultTheme.spacing[8],
        },
        'h2 + *': {
          marginTop: defaultTheme.spacing[4],
        },
        h3: {
          fontSize: defaultTheme.fontSize.xl,
          fontWeight: defaultTheme.fontWeight.bold,

          lineHeight: defaultTheme.lineHeight.tight,
        },
        '* + h3': {
          marginTop: defaultTheme.spacing[6],
        },
        'h2 + h3': {
          marginTop: defaultTheme.spacing[4],
        },
        'h3 + *': {
          marginTop: defaultTheme.spacing[2],
        },
        h4: {
          fontSize: defaultTheme.fontSize.base,
          fontWeight: defaultTheme.fontWeight.bold,

          lineHeight: defaultTheme.lineHeight.normal,
        },
        '* + h4': {
          marginTop: defaultTheme.spacing[6],
        },
        'h3 + h4': {
          marginTop: defaultTheme.spacing[2],
        },
        'h4 + *': {
          marginTop: defaultTheme.spacing[2],
        },
        p: {
          fontSize: defaultTheme.fontSize.base,
          fontWeight: defaultTheme.fontWeight.normal,

          lineHeight: defaultTheme.lineHeight.relaxed,
        },
        'p + p': {
          marginTop: defaultTheme.spacing[4],
        },
        strong: {
          fontWeight: defaultTheme.fontWeight.bold,
        },
        a: {
          fontWeight: defaultTheme.fontWeight.medium,
        },
        'a:hover': {
          textDecoration: 'underline',
        },

        img: {
          marginTop: defaultTheme.spacing[8],
          marginBottom: defaultTheme.spacing[8],
        },
        ol: {
          listStyleType: 'decimal',
          paddingLeft: defaultTheme.spacing[5],
        },
        '* + ol': {
          marginTop: defaultTheme.spacing[4],
        },
        'ol + *': {
          marginTop: defaultTheme.spacing[4],
        },
        'li ol': {
          marginTop: defaultTheme.spacing[2],
        },
        ul: {
          listStyleType: 'disc',
          paddingLeft: defaultTheme.spacing[5],
        },
        '* + ul': {
          marginTop: defaultTheme.spacing[4],
        },
        'ul + *': {
          marginTop: defaultTheme.spacing[4],
        },
        'li ul': {
          marginTop: defaultTheme.spacing[2],
        },
        li: {
          fontSize: defaultTheme.fontSize.base,
          fontWeight: defaultTheme.fontWeight.normal,

          lineHeight: defaultTheme.lineHeight.relaxed,
        },
        'li + li': {
          marginTop: defaultTheme.spacing[2],
        },
        'li p': {
          marginTop: defaultTheme.spacing[4],
        },
        'li p + p': {
          marginTop: defaultTheme.spacing[2],
        },
        'li:first-child p:first-child': {
          marginTop: defaultTheme.spacing[2],
        },
        blockquote: {
          fontStyle: 'italic',
          borderLeftWidth: defaultTheme.borderWidth[4],
          borderLeftStyle: 'solid',

          paddingLeft: defaultTheme.spacing[4],
        },
        '* + blockquote': {
          marginTop: defaultTheme.spacing[4],
        },
        'blockquote + *': {
          marginTop: defaultTheme.spacing[4],
        },
        pre: {
          paddingTop: defaultTheme.spacing[3],
          paddingRight: defaultTheme.spacing[4],
          paddingBottom: defaultTheme.spacing[3],
          paddingLeft: defaultTheme.spacing[4],
        },
        '* + pre': {
          marginTop: defaultTheme.spacing[4],
        },
        'pre + *': {
          marginTop: defaultTheme.spacing[4],
        },
        'pre code': {
          fontSize: defaultTheme.fontSize.sm,
          padding: 0,
        },
      },
    },
  },
  handler: function ({ addComponents, theme }) {
    addComponents({
      '.rich-text': theme('typography'),
    })
  },
}
