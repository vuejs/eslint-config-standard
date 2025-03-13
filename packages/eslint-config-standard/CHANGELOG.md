# @vue/eslint-config-standard

## 9.0.1

### Patch Changes

- [`5f38827`](https://github.com/vuejs/eslint-config-standard/commit/5f388277dac615c359a1cb297761e7d0fcc933ce) Thanks [@haoqunjiang](https://github.com/haoqunjiang)! - Updated dependencies

## 9.0.0

### Major Changes

- [#33](https://github.com/vuejs/eslint-config-standard/pull/33) [`07f63fd`](https://github.com/vuejs/eslint-config-standard/commit/07f63fd143d075df55b681fb3f847d88ceb04281)

  - Added support for ESLint ^9.10, Node.js ^18.18.0 || ^20.9.0 || >=21.1.0. Dropped support for older versions.
  - Switched to ESLint Flat Config, dropping legacy `.eslintrc*` format.
  - Applied stylistic rules to expressions in `<template>` blocks.
  - Removed `createAliasSetting` helper; path aliases are now auto-detected in `jsconfig.json` and `tsconfig.json`.
  - Removed Vue CLI project setup examples.

  Internal Changes:

  - Dropped `eslint-config-standard` dependency; now maintaining rules internally.
  - Replaced `eslint-plugin-import` with `eslint-plugin-import-x`.
  - Using stylistic rules from `@stylistic/eslint-plugin`.
  - Updated other dependencies.

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
