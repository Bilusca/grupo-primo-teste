<template>
  <div class="flex flex-col gap-12 flex-1">
    <div class="flex flex-col">
      <h2 class="mb-6 font-semibold text-xl text-[2rem]">Em 24 meses você teria</h2>
      <span class="lg:text-[5.5rem] w-full mb-4 font-semibold text-[2rem]">r$ 1.0020,00</span>
      <div class="bg-emerald-400 w-full h-[0.375rem] rounded-md"></div>
    </div>
    <div class="flex flex-col w-full gap-6">
      <Alert>
        <div class="space-x-4">
          <span class="uppercase tracking-[3.2px] font-semibold">Taxa Selic:</span>
          <strong class="text-lg lg:text-2xl font-extrabold">9,25%</strong>
        </div>
      </Alert>
      <Alert>
        <div class="space-x-4">
          <span class="uppercase tracking-[3.2px] font-semibold">Rentabilidade do Arca:</span>
          <strong class="text-lg lg:text-2xl font-extrabold">18% a.a.</strong>
        </div>
      </Alert>
    </div>
    <div class="flex gap-4">
      <Icon class="w-10 h-10"
        name="Help"
        color="#6a6a6a"
        size="24" />

      <div class="flex flex-col gap-6 text-[#6a6a6a] text-sm lg:text-lg font-normal">
        <span>Valores utilizados no simulador de investimentos (referentes à data de última atualização - esses valores
          podem alterar de acordo com o mercado):</span>
        <span>- Data da última atualização: 10/01/2024</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Alert from '@/components/Alert.vue'
import Icon from '@/components/Icon/index.vue'
</script>