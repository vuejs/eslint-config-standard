import pluginVue from 'eslint-plugin-vue'
import standard from '@vue/eslint-config-standard'

export default [
  {
    name: 'files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}']
  },

  // `@vue/eslint-config-standard` requires the vue plugin to be configured.
  ...pluginVue.configs['flat/essential'],
  ...standard,

  {
    rules: {
      'import-x/extensions': ['error', 'ignorePackages']
    }
  }
]
