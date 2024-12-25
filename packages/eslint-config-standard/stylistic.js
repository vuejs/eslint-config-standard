import stylistic from '@stylistic/eslint-plugin'
import standard from './upstream.js'

const stylisticRulesToReplace = Object.keys(standard.rules)
  .filter((ruleName) => !!stylistic.rules[ruleName])

const rules = {}

stylisticRulesToReplace.forEach((ruleName) => {
  // disable the original rule
  rules[ruleName] = 'off'
  // enable the stylistic verison of the rule
  rules[`@stylistic/${ruleName}`] = standard.rules[ruleName]
})

export default {
  plugins: {
    '@stylistic': stylistic
  },

  rules
}
