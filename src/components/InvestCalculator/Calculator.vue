<template>
  <div class="flex flex-col gap-[5.375rem] flex-1">
    <RangeInput @change-value="handleChanges"
      name="initialAmount"
      :min="100"
      :max="5000"
      :step="100"
      title="Quanto gostaria de investir?" />
    <RangeInput @change-value="handleChanges"
      name="investedAmount"
      :min="100"
      :max="5000"
      :step="100"
      title="Por mês, quanto investiria?" />
    <RangeInput @change-value="handleChanges"
      name="periodInvested"
      :min="12"
      :max="120"
      :step="1"
      title="Quanto tempo deixaria seu dinheiro investido?"
      :is-month="true" />
  </div>
</template>
<script setup lang="ts">
import RangeInput from '@/components/RangeInput.vue';
import { reactive, defineEmits } from 'vue';

type CalculatorState = {
  initialAmount: number
  investedAmount: number
  periodInvested: number
}

type CalculatorEmits = {
  cahngeState: [value: CalculatorState]
}

const state = reactive<CalculatorState>({
  initialAmount: 100,
  investedAmount: 100,
  periodInvested: 12
})

const emits = defineEmits<CalculatorEmits>()

type Event = {
  [key: string]: number
}

function handleChanges(event: Event) {
  const key = Object.keys(event)[0] as keyof CalculatorState
  const { [key]: value } = event
  state[key] = Number(value)
  emits('cahngeState', state)
}
</script>