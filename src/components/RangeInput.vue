<template>
  <div class="flex flex-col">
    <label :for="props.name">{{ props.title }}</label>
    <input type="range"
      :name="props.name"
      :id="props.name" />
    <div class="w-full">
      <strong>R$ 100,00</strong>
    </div>
  </div>
</template>
<script setup lang="ts">
type InputRangeProps = {
  title: string
  name: string
}

const props = defineProps<InputRangeProps>()
</script>