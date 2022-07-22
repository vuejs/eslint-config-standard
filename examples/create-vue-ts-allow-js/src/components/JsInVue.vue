<script setup>
// There's no `lang="ts"` here, so this error can only be detected by ESLint.
const foo = someFunction()
</script>

<template>
  <div>{{ foo }}</div>
</template>
