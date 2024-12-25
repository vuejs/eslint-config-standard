import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import standardTypeChecked from '@vue/eslint-config-standard-with-typescript/type-checked'
import pluginVitest from '@vitest/eslint-plugin'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}']
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**']
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig({
    extends: ['recommendedTypeChecked']
  }),
  ...standardTypeChecked,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*']
  }
]
