<template>
  <main class="container mx-auto py-24 flex justify-between gap-36">
    <Calculator />
    <Result />
  </main>
</template>
<script setup lang="ts">
import Calculator from './Calculator.vue';
import Result from './Result.vue';
</script>