const { defineConfig } = require('eslint-define-config')
const createAliasSetting = require('./createAliasSetting.cjs')

const upstreamConfig = require('eslint-config-standard-with-typescript')
const tsOverrides = upstreamConfig.overrides.find((override) =>
  override.files.includes('*.ts')
)
const tsStandardRules = tsOverrides.rules

const config = defineConfig({
  extends: [require.resolve('eslint-config-standard-with-typescript')],

  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),

    project: ['**/tsconfig.json', '**/tsconfig.*.json'],

    // Must be set globally.
    // As far as I've tested, it won't work if set in `overrides`.
    extraFileExtensions: ['.vue']
  },

  settings: {
    ...createAliasSetting(),

    // A list of file extensions that will be parsed as modules and inspected for exports.
    // Not actually needed, as none of the `import/*` rules that `standard` used requires this setting.
    // Added for easier customization.
    'import/extensions': ['.mjs', '.js', '.jsx', '.mts', '.ts', '.tsx'],

    'import/external-module-folders': ['node_modules', 'node_modules/@types'],

    'import/parsers': {
      '@typescript-eslint/parser': ['.mts', '.ts', '.tsx']
    }
  },

  rules: {
    // Cannot omit `.vue` extensions.
    // This should be enforced all across the Vue.js ecosystem.
    // FIXME: disabled because something's wrong when using alias + unknown extensions (e.g. `@/assets/main.css`)
    // 'import/extensions': [
    //   'error', {
    //     vue: 'always'
    //   }
    // ],

    // TypeScript compilation already ensures that named imports exist in the referenced module
    'import/named': 'off'
  },

  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'vue/block-lang': [
          'error',
          {
            script: {
              // Only `<script lang="ts">` is allowed.
              // `<script>` needs to be opted-in via the `allow-js-in-vue` ruleset.
              // `<script lang="jsx">` and `<script lang="tsx">` need to be opted-in via the `allow-jsx-in-vue` ruleset.
              // See the reasoning in the corresponding files.
              lang: 'ts',
              allowNoLang: false
            }
          }
        ],

        // apply the overrides of `.ts` to `.vue`, too
        ...tsStandardRules
      }
    },

    // Some config files can only be written in JS.
    // But this config is expected to be used in a TypeScript-only environment by default.
    // We don't expect these JS config files to be included in any TypeScript projects (i.e. `tsconfig.json`s).
    // So we add the following rule,
    // to avoid the error "The file must be included in at least one of the projects provided",
    {
      files: ['.eslintrc.*js', 'babel.config.*js', 'vue.config.*js'],
      parser: 'espree',
      env: {
        node: true
      }
    },

    // These are necessary triple-slash directives
    {
      files: ['cypress/support/commands.ts', 'env.d.ts'],
      rules: {
        '@typescript-eslint/triple-slash-reference': [
          'error',
          {
            types: 'always'
          }
        ]
      }
    }
  ]
})

module.exports = config
