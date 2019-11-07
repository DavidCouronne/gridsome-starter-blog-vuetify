import { injectGlobal } from 'vue-styled-components'

const COLORS = {
  white: '#f0f0f0',
  black: '#22222f'
}

const lables = [
  { lang: 'html', tag: 'html', bg: '#61dafb' },
  { lang: 'vue', tag: 'vue', bg: '#61dafb' },
  { lang: 'javascript', tag: 'js', bg: '#f7df1e' },
  { lang: 'typescript', tag: 'ts', bg: '#007ACC', color: '#fff' },
  { lang: 'css', tag: 'css', bg: '#ff9800' },
  { lang: 'scss', tag: 'scss', bg: '#ff9800' },
  { lang: 'jsx', tag: 'jsx', bg: '#61dafb' },
  { lang: 'bash', tag: 'sh' },
  { lang: 'json', tag: 'json', bg: '#8bc34a' },
  { lang: 'yaml', tag: 'yaml', bg: '#8bc34a' },
  { lang: 'toml', tag: 'toml', bg: '#8bc34a' },
  { lang: 'diff', tag: 'diff', bg: '#e6ffed' },
  { lang: 'markdown', tag: 'md', bg: 'white' },
  { lang: 'graphql', tag: 'GraphQL', bg: '#e10098', color: '#fff' }
]

const lablesStyles = lables
  .map(
    ({ lang, tag, bg = COLORS.white, color = COLORS.black }) =>
      `.gridsome-highlight[data-language="${lang}"]::before {
        content: '${tag}';
        ${bg && `background: ${bg};`}
        ${color && `color: ${color};`}
      }`
  )
  .join(`\n`)

injectGlobal`

    ${lablesStyles}
  `
