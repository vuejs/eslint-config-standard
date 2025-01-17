import pluginVue from 'eslint-plugin-vue'
import standard from './index.js'

export default [
  {
    name: 'files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}']
  },

  // As `vue/*` rules are included, it's required to configure the `vue` plugin.
  ...pluginVue.configs['flat/essential'],

  ...standard,

  {
    rules: {
      'import-x/extensions': ['error', 'ignorePackages']
    }
  }
]
