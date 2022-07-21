<script setup>
import JsxInVueVue from '../components/JsxInVue.vue'
import FooComp from '../components/FooComp'
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <JsxInVueVue />
    <FooComp />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
