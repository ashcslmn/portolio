<script setup>
const { since } = defineProps({
  since: Number,
});

const yoe = computed(() => {
  return new Date().getFullYear() - since;
});
</script>
<template>
  <span>{{ yoe }}</span>
</template>
