---
"@vue/eslint-config-standard-with-typescript": major
---

* Updated `@vue/eslint-config-standard` to v9.*, see its changelog for breaking changes.
* It's now only a thin wrapper around `@vue/eslint-config-standard`. Please use this package in combination with `@vue/eslint-config-typescript`.
* Most of the [`typescript-eslint`-specific rules in the previous version](https://unpkg.com/browse/eslint-config-standard-with-typescript@22.0.0/lib/index.js#L65) are now removed. Please refer to [`typescript-eslint` shared configs](https://typescript-eslint.io/users/configs/#recommended-configurations) for more strict rulesets.
* Removes `createAliasSetting` helper for unconventional TSConfig locations support.
