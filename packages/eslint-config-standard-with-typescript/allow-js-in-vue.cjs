const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // In the `-with-typescript` ruleset,
        // some rules are turned off because TypeScript can handle those case (e.g. `no-undef`).
        // But these rules won't apply to `<script>` blocks in `.vue` files (because they are parsed by `espree`).
        // So if we allow `<script>` blocks in `.vue` files, we need to re-enable these rules.

        // Luckily, for `standard`, it's only `no-undef`. There are quite some of such rules when using `eslint-recommended`.
        'no-undef': 'error',

        // Allow `<script>` & `<script lang="ts">`, but not other langs.
        'vue/block-lang': [
          'error', {
            script: {
              lang: 'ts',
              allowNoLang: true
            }
          }
        ]
      }
    }
  ]
})
