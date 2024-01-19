<template>
  <div class="flex flex-col gap-[5.375rem] flex-1">
    <RangeInput name="initialAmount"
      title="Quanto gostaria de investir?" />
    <RangeInput name="investedAmount"
      title="Por mês, quanto investiria?" />
    <RangeInput name="periodInvested"
      title="Quanto tempo deixaria seu dinheiro investido?" />
  </div>
</template>
<script setup lang="ts">
import RangeInput from '@/components/RangeInput.vue';
</script>