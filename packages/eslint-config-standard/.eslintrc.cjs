const { DEFAULT_RESOLVER_SETTING } = require('./createAliasSetting.cjs')

module.exports = {
  extends: [
    require.resolve('eslint-config-standard')
  ],
  settings: {
    'import/resolver': DEFAULT_RESOLVER_SETTING,

    // A list of file extensions that will be parsed as modules and inspected for exports.
    // Not actually needed, as none of the `import/*` rules that `standard` used requires this setting.
    // Added for easier customization.
    'import/extensions': [
      '.mjs',
      '.js',
      '.jsx'
    ]
  }
}
