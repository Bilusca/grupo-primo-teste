<template>
  <div :class="`alert ${props.type}`">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
type AlertProps = {
  type?: 'default' | 'warning' | 'danger' | 'success'
}

const props = withDefaults(
  defineProps<AlertProps>(),
  {
    type: 'default'
  }
)
</script>
<style scoped>
.alert {
  @apply p-8 rounded-2xl;
}

.alert.default {
  @apply bg-neutral-200;
}

.alert.warning {
  @apply bg-yellow-200;
}

.alert.danger {
  @apply bg-red-200;
}

.alert.success {
  @apply bg-emerald-200;
}
</style>