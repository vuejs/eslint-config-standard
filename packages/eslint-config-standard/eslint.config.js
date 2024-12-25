import pluginVue from 'eslint-plugin-vue'
import standard from './index.js'

export default [
  {
    name: 'files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}']
  },

  // As `vue/*` rules are included, it's a requirement.
  // TODO: find a better way to handle this.
  { plugins: { vue: pluginVue } },

  ...standard,

  {
    rules: {
      'import-x/extensions': ['error', 'ignorePackages']
    }
  }
]
