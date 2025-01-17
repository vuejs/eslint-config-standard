import upstream from './upstream.js'
import stylistic from './stylistic.js'
import template from './template.js'
import resolver from './resolver.js'

// Use deep merge to avoid complications in overriding mechanisms.
// But still export as an array for future extensibility.
export default [
  deepMerge(
    {
      name: 'vue-standard'
    },
    upstream,
    stylistic,
    template,
    resolver
  )
]

function deepMerge (target, ...sources) {
  const seen = new WeakMap()

  function merge (target, source) {
    if (source instanceof Object && !Array.isArray(source)) {
      if (seen.has(source)) {
        return seen.get(source)
      }
      seen.set(source, target)

      Object.keys(source).forEach((key) => {
        if (
          source[key] instanceof Object &&
          !Array.isArray(source[key]) &&
          typeof source[key] !== 'function'
        ) {
          if (!target[key]) Object.assign(target, { [key]: {} })
          merge(target[key], source[key])
        } else {
          Object.assign(target, { [key]: source[key] })
        }
      })
    }
    return target
  }

  sources.forEach((source) => merge(target, source))
  return target
}
