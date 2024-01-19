<template>
  <div class="flex flex-col w-full">
    <label :for="props.name"
      class="mb-4 lg:mb-6 text-xl lg:text-[2rem] font-semibold w-full">{{ props.title }}</label>
    <input :ref="props.name"
      class="slider"
      type="range"
      :name="props.name"
      :id="props.name"
      :min="props.min"
      :max="props.max"
      :step="props.step"
      v-model="inputVal"
      @input="handleChangeValue" />
    <div class="w-full text-center">
      <strong class="font-bold text-2xl lg:text-5xl">{{ isMonth ? inputVal : formatCurrency(inputVal) }} {{ isMonth ?
        'meses' : '' }}</strong>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, defineEmits } from 'vue';
import { formatCurrency } from '@/utils/formatCurrency'

type InputRangeProps = {
  title: string
  name: string,
  min: number
  max: number
  step: number
  isMonth?: boolean
}

type InputRangeEmits = {
  changeValue: [value: Record<string, number>]
}

const props = withDefaults(defineProps<InputRangeProps>(), {
  isMonth: false
})

const inputVal = ref(props.min)

const emits = defineEmits<InputRangeEmits>()

function handleChangeValue() {
  emits('changeValue', { [props.name]: inputVal.value })
}

onMounted(() => {
  const slider = document.querySelector<HTMLInputElement>(`#${props.name}`);

  if (slider) {
    slider.oninput = function () {
      const percentage = (Number(slider.value) - Number(slider.min)) / (Number(slider.max) - Number(slider.min)) * 100;
      inputVal.value = Number(slider.value)
      slider.style.background = `linear-gradient(to right, #54d4a0 0%, #54d4a0 ${percentage}%, #f0f0f0 ${percentage}%, #f0f0f0 100%)`;
    }
  }
})


</script>
<style scoped>
.slider {
  -webkit-appearance: none;
  width: 100%;
  border-radius: 5px;
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  background-color: #f0f0f0;
  @apply h-3 mb-6;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  border-radius: 50%;
  cursor: pointer;
  @apply bg-app-green h-10 w-10;
}

.slider::-moz-range-thumb {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  @apply bg-app-green;
}
</style>