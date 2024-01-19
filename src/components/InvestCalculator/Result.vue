<template>
  <div class="flex flex-col gap-12 flex-1">
    <div class="flex flex-col">
      <h2 class="mb-6">Em 24 meses você teria</h2>
      <span class="text-[5.5rem] w-full mb-4">r$ 1.0020,00</span>
      <div class="bg-emerald-400 w-full h-[0.375rem] rounded-md"></div>
    </div>
    <div class="flex flex-col w-full gap-6">
      <Alert>
        <div class="space-x-4">
          <span>Taxa Selic:</span>
          <strong>9,25%</strong>
        </div>
      </Alert>
      <Alert>
        <div class="space-x-4">
          <span>Taxa Selic:</span>
          <strong>9,25%</strong>
        </div>
      </Alert>
    </div>
    <div class="flex gap-4">
      <Icon name="Help"
        color="#0e0e0e" />

      <div class="flex flex-col gap-6">
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