---
"@vue/eslint-config-standard": major
---

* Added support for ESLint ^9.10, Node.js ^18.18.0 || ^20.9.0 || >=21.1.0. Dropped support for older versions.
* Switched to ESLint Flat Config, dropping legacy `.eslintrc*` format.
* Applied stylistic rules to expressions in `<template>` blocks.
* Removed `createAliasSetting` helper; path aliases are now auto-detected in `jsconfig.json` and `tsconfig.json`.
* Removed Vue CLI project setup examples.

Internal Changes:

* Dropped `eslint-config-standard` dependency; now maintaining rules internally.
* Replaced `eslint-plugin-import` with `eslint-plugin-import-x`.
* Using stylistic rules from `@stylistic/eslint-plugin`.
* Updated other dependencies.
