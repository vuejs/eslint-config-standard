# `@vue/eslint-config-standard`

ESLint [Shareable Configs](https://eslint.org/docs/latest/extend/shareable-configs) for [JavaScript Standard Style](http://standardjs.com) in [Vue.js](https://vuejs.org/) Projects

This config is specifically designed to be used by `create-vue` setups
and is not meant for outside use (it can be used but some adaptations
on the user side might be needed - for details see the config file).

A part of its design is that this config may implicitly depend on
other parts of `create-vue` setups, such as `eslint-plugin-vue` being
extended in the same resulting config.

> [!NOTE]
> The current version doesn't support the legacy `.eslintrc*` configuration format. For that you need to use version 13 or earlier. See the [corresponding README](https://www.npmjs.com/package/@vue/eslint-config-standard/v/legacy-eslintrc) for more usage instructions.

## Installation

```sh
npm add --dev @vue/eslint-config-standard
```

## Usage

An example `eslint.config.js`:

```js
import pluginVue from "eslint-plugin-vue";
import standard from "@vue/eslint-config-standard";

export default [
  ...pluginVue.configs["flat/essential"],
  ...standard,
]
```

## Aliases

By default, none of the built-in rules require you to configure aliases in ESLint.

But if you want to enable some additional rules that need to actually resolve the imported module on the filesystem (e.g. [`import-x/no-unresolved`](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-unresolved.md)) by yourself and need path aliases to be resolved, please make sure configure them in your `jsconfig.json` or `tsconfig.json` file. We use [eslint-import-resolver-next](https://github.com/kuoruan/eslint-import-resolver-next) as the default resolver, which will automatically detect path aliases in these files.
