# @vue/eslint-config-standard

## 8.0.1

### Patch Changes

- Remove the "import/extensions" rule, fixes #23

## 8.0.0

### Major Changes

- aec0749: #### A Standalone `@vue/eslint-config-standard-with-typescript`

  When using the Standard Style in a TypeScript project, you no longer need to install both `@vue/eslint-config-standard` and `@vue/eslint-config-typescript`.
  You can just use the `@vue/eslint-config-standard-with-typescript` package. It also provides stricter rules for TypeScript.

  #### Better integration with `@rushstack/eslint-patch`

  All the eslint plugins used here are listed as `dependencies`, rather than `peerDependencies`.
  So when using these configs with `@rushstack/eslint-patch`, you no longer have to install the plugins separately.
