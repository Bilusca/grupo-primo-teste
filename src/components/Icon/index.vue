<template>
  <component :is="COMPONENTS[name]"
    v-bind="$props" />
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { GenericComponentsObject } from '@/types/genericComponent'

import Help from './Help.vue'

type IconName = 'Help'

type IconProps = {
  name: IconName
}

const COMPONENTS: GenericComponentsObject = {
  Help
}

defineProps<IconProps>()
</script>
