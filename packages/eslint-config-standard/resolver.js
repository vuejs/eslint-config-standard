import { createNextImportResolver } from 'eslint-import-resolver-next'

import eslintPluginImportX from 'eslint-plugin-import-x'
const { createNodeResolver } = eslintPluginImportX

export default {
  settings: {
    'import-x/resolver-next': [
      createNodeResolver(),
      createNextImportResolver()
    ]
  }
}
