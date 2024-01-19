<template>
  <main class="container mx-auto py-24 flex flex-col lg:flex-row justify-between gap-[4.75rem] lg:gap-36 px-8 lg:px-0">
    <Calculator />
    <Result />
  </main>
</template>
<script setup lang="ts">
import Calculator from './Calculator.vue';
import Result from './Result.vue';

</script>