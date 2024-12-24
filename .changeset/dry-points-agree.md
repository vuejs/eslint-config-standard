---
"@vue/eslint-config-standard": major
---

* Supports ESLint 9, Node.js ^18.18.0 || ^20.9.0 || >=21.1.0, drops support for older versions.
* Supports ESLint Flat Config, drops support for legacy `.eslintrc*` configuration format.
* Removed `createAliasSetting` helper function, as we now automatically detects path aliases in `jsconfig.json` and `tsconfig.json` files.
* Removed examples of Vue CLI project setups.
* Stylistic rules also apply to expressions in `<template>` blocks.

Internal Changes:

* Drops `eslint-config-standard` as a dependency as it never released the latest code that would support Flat Config; we have to maintain the rules ourselves.
* Moved from `eslint-plugin-import` to `eslint-plugin-import-x`.
* Use stylistic rules from `@stylistic/eslint-plugin` instead of the ESLint built-in ones.
* Other dependency updates.
