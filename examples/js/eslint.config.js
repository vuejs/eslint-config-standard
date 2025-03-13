import { defineConfig, globalIgnores } from 'eslint/config'

import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'

import standard from '@vue/eslint-config-standard'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}']
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  ...pluginVue.configs['flat/essential'],
  ...standard,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*']
  }
])
