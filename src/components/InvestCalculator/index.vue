<template>
  <main class="container mx-auto py-24 flex flex-col lg:flex-row justify-between gap-[4.75rem] lg:gap-36 px-8 lg:px-0">
    <Calculator @cahnge-state="handleFurtherInvestiment" />
    <Result :selic-amount="state.selicAmount"
      :arca-amount="state.arcaAmount"
      :period-invested="state.periodInvested" />
  </main>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

import { TAX } from '@/constants/tax'
import Calculator from './Calculator.vue';
import Result from './Result.vue';

const INITIAL_AMOUT = 100;
const INVESTED_AMOUNT = 100;
const PERIOD_INVESTED = 12;

type Event = {
  initialAmount: number
  investedAmount: number
  periodInvested: number
}

const state = reactive<{ arcaAmount: number, selicAmount: number, periodInvested: number }>({
  arcaAmount: calculateInvestiment(INITIAL_AMOUT, INVESTED_AMOUNT, TAX.ARCA, PERIOD_INVESTED),
  selicAmount: calculateInvestiment(INITIAL_AMOUT, INVESTED_AMOUNT, TAX.SELIC, PERIOD_INVESTED),
  periodInvested: PERIOD_INVESTED
})

function calculateInvestiment(amount: number, investedOnMonth: number, tax: number, period: number) {
  const UTIL_DAYS_ON_YEAR = 252;
  const UTIL_DAYS_ON_MONTH = 21
  const PERCENT_VALUE = tax / 100;

  let amountOnPeriod = amount + investedOnMonth

  for (let i = 1; i <= period; i++) {
    amountOnPeriod = (amountOnPeriod + investedOnMonth) * Math.pow(1 + PERCENT_VALUE, UTIL_DAYS_ON_MONTH / UTIL_DAYS_ON_YEAR)
  }

  return amountOnPeriod
}

function handleFurtherInvestiment(event: Event) {
  const { initialAmount, investedAmount, periodInvested } = event
  const selicValue = calculateInvestiment(initialAmount, investedAmount, 9.25, periodInvested)
  const arcaValue = calculateInvestiment(initialAmount, investedAmount, 18, periodInvested)

  state.selicAmount = selicValue
  state.arcaAmount = arcaValue
  state.periodInvested = periodInvested
}
</script>