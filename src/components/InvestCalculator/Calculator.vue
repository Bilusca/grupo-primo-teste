<template>
  <div class="flex flex-col gap-[5.375rem] flex-1">
    <RangeInput name="initialAmount"
      :min="100"
      :max="5000"
      :step="100"
      title="Quanto gostaria de investir?" />
    <RangeInput name="investedAmount"
      :min="100"
      :max="5000"
      :step="100"
      title="Por mês, quanto investiria?" />
    <RangeInput name="periodInvested"
      :min="12"
      :max="120"
      :step="1"
      title="Quanto tempo deixaria seu dinheiro investido?"
      :is-month="true" />
  </div>
</template>
<script setup lang="ts">
import RangeInput from '@/components/RangeInput.vue';
</script>