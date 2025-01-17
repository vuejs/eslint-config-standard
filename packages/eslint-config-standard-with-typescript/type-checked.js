import baseConfig from './base.js'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...baseConfig,

  {
    name: '@vue/typescript/standard/type-checked',
    files: ['*.ts', '*.tsx', '*.vue'],
    rules: {
      'dot-notation': 'off',
      '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

      'no-implied-eval': 'off',
      '@typescript-eslint/no-implied-eval': 'error',

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          vars: 'all'
        }
      ],

      'prefer-promise-reject-errors': 'off',
      '@typescript-eslint/prefer-promise-reject-errors': 'error'
    }
  }
]
