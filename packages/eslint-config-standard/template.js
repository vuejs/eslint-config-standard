// Apply the style rules in standard to expressions in `<template>` too.

import upstream from './upstream.js'
import pluginVue from 'eslint-plugin-vue'

// Most extension rules in `eslint-plugin-vue` are only wrapped core ESLint rules
// Except for `max-len` and `no-irregular-whitespace`, which are replacements.
const ruleNamesToReplace = ['max-len', 'no-irregular-whitespace']

// `no-unused-vars` share the same name as the core ESLint rule,
// but it actually serves a different purpose.
// So it can't be replaced or extended, but should be configured separately.
const ruleNamesToIgnore = ['no-unused-vars']

const ruleNamesToExtend = Object.keys(upstream.rules)
  .filter((ruleName) => !!pluginVue.rules[ruleName])
  .filter((ruleName) => !ruleNamesToReplace.includes(ruleName))
  .filter((ruleName) => !ruleNamesToIgnore.includes(ruleName))

const rules = {}
ruleNamesToExtend.forEach((ruleName) => {
  rules[`vue/${ruleName}`] = upstream.rules[ruleName]
})
ruleNamesToReplace.forEach((ruleName) => {
  if (upstream.rules[ruleName]) {
    // disable the original rule
    rules[ruleName] = 'off'
    // disable the stylistic verison of the rule
    rules[`@stylistic/${ruleName}`] = 'off'

    // enable the Vue version
    rules[`vue/${ruleName}`] = upstream.rules[ruleName]
  }
})

// `plugins: { vue: pluginVue }` isn't configured here,
// Because in `pluginVue.configs['flat/base']`, the `vue` plugin is already defined
// as a getter.
// The getter doesn't have object equality with the actual plugin object.
// Therefore, redefining it here would result in `Cannot redefine plugin` error.
// So, here we introduced an implicit dependency on `pluginVue.configs['flat/base']`.
export default { rules }
