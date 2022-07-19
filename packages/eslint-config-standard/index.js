// https://github.com/benmosher/eslint-plugin-import/issues/1396
const resolver = {
  [require.resolve('eslint-import-resolver-node')]: {},
}

// TODO: API for custom aliases

module.exports = {
  extends: [
    require.resolve('eslint-config-standard')
  ],
  settings: {
    'import/resolver': resolver,
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
    ],
  },
}
