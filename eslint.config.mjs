import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    plugins: ['prettier'],
    rules: {
      indent: [0, 2],
      semi: 0,
    },
  },
]
