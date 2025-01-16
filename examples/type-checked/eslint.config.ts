import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import { standardTypeChecked } from '@vue/eslint-config-standard-with-typescript'
import pluginVitest from '@vitest/eslint-plugin'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}']
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**']
  },

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommendedTypeChecked,
  standardTypeChecked,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*']
  }
)
