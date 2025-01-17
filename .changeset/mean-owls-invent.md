---
"@vue/eslint-config-standard-with-typescript": major
---

* Updated `@vue/eslint-config-standard` to v9.*, introducing stricter linting rules:
  * Stylistic rules now also apply to expressions in `<template>` blocks.
* This package should be used alongside [`@vue/eslint-config-typescript`](https://github.com/vuejs/eslint-config-typescript).
* This package is now a thin wrapper around `@vue/eslint-config-standard` with TypeScript support. It no longer extends from [`eslint-config-standard-with-typescript`](https://www.npmjs.com/package/eslint-config-standard-with-typescript), which has been repurposed as [`eslint-config-love`](https://www.npmjs.com/package/eslint-config-love) and is now more opinionated:
  * Removed most [`typescript-eslint`-specific rules in the previous version](https://unpkg.com/browse/eslint-config-standard-with-typescript@22.0.0/lib/index.js#L65) as they are not part of the standard style guide.
  * For stricter rules, please refer to [`typescript-eslint` shared configs](https://typescript-eslint.io/users/configs/#recommended-configurations).
* Removed the `createAliasSetting` helper for unconventional TSConfig locations due to low usage and high maintenance.
