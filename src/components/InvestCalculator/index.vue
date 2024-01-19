<template>
  <main class="container mx-auto py-24 flex flex-col lg:flex-row justify-between gap-[4.75rem] lg:gap-36 px-8 lg:px-0">
    <Calculator @cahnge-state="handleFurtherInvestiment" />
    <Result :amount="furtherInvestiment" />
  </main>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Calculator from './Calculator.vue';
import Result from './Result.vue';

type Event = {
  initialAmount: number
  investedAmount: number
  periodInvested: number
}

const furtherInvestiment = ref<number>(0)

function calculateInvestiment(amount: number, tax: number, period: number) {
  const totalAmount = amount * Math.pow(1 + tax / 100, (period * 21) / 252)
  return totalAmount
}

function handleFurtherInvestiment(event: Event) {
  const { initialAmount, investedAmount, periodInvested } = event
  const amount = initialAmount + (investedAmount * periodInvested)
  const arcaValue = calculateInvestiment(amount, 18.8, periodInvested)

  furtherInvestiment.value = arcaValue
}


onMounted(() => {
  const amount = 100 + (100 * 12)
  furtherInvestiment.value = calculateInvestiment(amount, 18.8, 12)
})
</script>