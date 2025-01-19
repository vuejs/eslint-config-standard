# @vue/eslint-config-standard-with-typescript

## 9.0.0

### Major Changes

- [#33](https://github.com/vuejs/eslint-config-standard/pull/33) [`07f63fd`](https://github.com/vuejs/eslint-config-standard/commit/07f63fd143d075df55b681fb3f847d88ceb04281)
  - Updated `@vue/eslint-config-standard` to v9.x, introducing stricter linting rules:
  - Stylistic rules now also apply to expressions in `<template>` blocks.
  - This package should be used alongside [`@vue/eslint-config-typescript`](https://github.com/vuejs/eslint-config-typescript).
  - This package is now a thin wrapper around `@vue/eslint-config-standard` with TypeScript support. It no longer extends from [`eslint-config-standard-with-typescript`](https://www.npmjs.com/package/eslint-config-standard-with-typescript), which has been repurposed as [`eslint-config-love`](https://www.npmjs.com/package/eslint-config-love) and is now more opinionated. As a result, we:
    - Removed most [`typescript-eslint`-specific rules in the previous version](https://unpkg.com/browse/eslint-config-standard-with-typescript@22.0.0/lib/index.js#L65) as they are not part of the standard style guide.
    - For stricter rules, please refer to [`typescript-eslint` shared configs](https://typescript-eslint.io/users/configs/#recommended-configurations).
  - Removed the `createAliasSetting` helper for unconventional TSConfig locations due to low usage and high maintenance.

## 8.0.0

### Major Changes

- aec0749: #### A Standalone `@vue/eslint-config-standard-with-typescript`

  When using the Standard Style in a TypeScript project, you no longer need to install both `@vue/eslint-config-standard` and `@vue/eslint-config-typescript`.
  You can just use the `@vue/eslint-config-standard-with-typescript` package. It also provides stricter rules for TypeScript.

  #### Better integration with `@rushstack/eslint-patch`

  All the eslint plugins used here are listed as `dependencies`, rather than `peerDependencies`.
  So when using these configs with `@rushstack/eslint-patch`, you no longer have to install the plugins separately.
