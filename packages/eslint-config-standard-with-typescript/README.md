ESLint [Shareable Configs](https://eslint.org/docs/latest/extend/shareable-configs) for [JavaScript Standard Style](http://standardjs.com) in [Vue.js](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/) Projects

This config is specifically designed to be used by `create-vue` setups
and is not meant for outside use (it can be used but some adaptations
on the user side might be needed - for details see the config file).

A part of its design is that this config may implicitly depend on
other parts of `create-vue` setups, such as `eslint-plugin-vue` being
extended in the same resulting config.

> [!NOTE]
> The current version doesn't support the legacy `.eslintrc*` configuration format. For that you need to use version 13 or earlier. See the [corresponding README](https://www.npmjs.com/package/@vue/eslint-config-standard-with-typescript/v/legacy-eslintrc) for more usage instructions.

## Installation

Please use this package alongside [`@vue/eslint-config-typescript`](https://github.com/vuejs/eslint-config-typescript).

To use `eslint.config.ts` as the configuration file, you also need to install `jiti`.

```sh
npm add --dev jiti @vue/eslint-config-typescript @vue/eslint-config-standard-with-typescript
```

## Usage

An example `eslint.config.ts`:

```ts
import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import standard from '@vue/eslint-config-standard-with-typescript'

export default defineConfigWithVueTs(
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  vueTsConfigs.stylistic,
  standard,
)
```

If you need more comprehensive linting rules, including those that require type information, you can use the `recommendedTypeChecked` config:

```ts
import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import { standardTypeChecked } from '@vue/eslint-config-standard-with-typescript'

export default defineConfigWithVueTs(
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommendedTypeChecked,
  vueTsConfigs.stylisticTypeChecked,
  standardTypeChecked
)
```

## Aliases

This ruleset automatically reads the [TypeScript path mappings](https://www.typescriptlang.org/tsconfig#paths) from `**/tsconfig.json` and `**/tsconfig.*.json` files in the project. You don't need any additional configuration to set up aliases.
