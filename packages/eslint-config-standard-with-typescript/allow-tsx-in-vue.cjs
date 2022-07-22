const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  overrides: [
    {
      files: ['*.vue'],
      parserOptions: {
        // Note: only `null` can override the previous config. `undefined` would be ignored.
        project: null,

        // Use `espree` for js/jsx script blocks to get better performance.
        // Note this format can only be used when there's no `project` set.
        parser: {
          js: 'espree',
          jsx: 'espree',

          ts: require.resolve('@typescript-eslint/parser'),
          tsx: require.resolve('@typescript-eslint/parser')

          // Leave the template parser unspecified, so that it could be determined by `<script lang="...">`.
        },
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true
        }
      },

      rules: {
        // Allow `<script lang="ts">` & `<script lang="tsx">`, but not other langs.
        'vue/block-lang': [
          'error', {
            script: {
              lang: ['ts', 'tsx'],
              allowNoLang: false
            }
          }
        ],

        // Don't apply those rules that need type information for `.vue` files.
        // Because it's not supported for `script lang="tsx"` in `.vue` files yet.
        // https://github.com/vuejs/create-vue/issues/123#issuecomment-1189934982
        // That includes (as of v22):
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-throw-literal': 'off',

        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-base-to-string': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-for-in-array': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/prefer-optional-chain': 'off',
        '@typescript-eslint/prefer-readonly': 'off',
        '@typescript-eslint/prefer-reduce-type-parameter': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/require-array-sort-compare': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off'
      }
    }
  ]
})
