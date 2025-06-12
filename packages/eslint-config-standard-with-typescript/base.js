import standard from '@vue/eslint-config-standard'
// eslint-disable-next-line no-unused-vars
import tsEslintPlugin from '@typescript-eslint/eslint-plugin'

import { createNextImportResolver } from 'eslint-import-resolver-next'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import eslintPluginImportX from 'eslint-plugin-import-x'
const { createNodeResolver } = eslintPluginImportX

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...standard,

  {
    settings: {
      'import-x/resolver-next': [
        createNodeResolver(),
        createNextImportResolver(),
        createTypeScriptImportResolver()
      ]
    }
  },

  {
    name: '@vue/typescript/standard',
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    plugins: {
      // Conflict with the configuration of typescript-eslint/base
      // '@typescript-eslint': tsEslintPlugin
    },

    rules: {
      // The code problem checked by these ESLint rules
      // are automatically checked by the TypeScript compiler.
      'no-undef': 'off',
      'no-dupe-class-members': 'off',
      'no-redeclare': 'off',

      // This rule has `typescript-eslint` equivalent but that require type information.
      // So only disable the JS version of the rule here to avoid false positives.
      // To turn on it please use the `type-checked` config.
      'no-unused-vars': 'off',
      // Other similar rules in `type-checked` do not incur false positives in the JS version,
      // only false negatives. So they are not turned off here.

      // Rules that need to be extended to the `typescript-eslint` equivalents
      'no-array-constructor': 'off',
      '@typescript-eslint/no-array-constructor': 'error',

      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'error',

      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',

      camelcase: 'off',
      // Though there's an equivalent version of `camelcase` in TS,
      // it's deprecated in favor of `@typescript-eslint/naming-convention`
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variableLike',
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE']
        }
      ],

      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
          classes: false,
          variables: false,

          // These are unique options in the typescript-eslint version of the rule
          enums: false,
          typedefs: false
        }
      ]
    }
  }
]
