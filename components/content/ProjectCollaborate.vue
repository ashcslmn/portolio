<script setup>
import { UsersIcon } from "@heroicons/vue/24/solid";

const { collaborate, alt } = defineProps({
  collaborate: {
    type: String,
  },
  client: {
    type: String,
  },
  alt: {
    type: String,
    default: "collaborate",
  },
});

defineExpose({
  collaborate,
  UsersIcon,
  alt,
});
</script>
<template>
  <div
    :aria-label="alt"
    class="grid items-center grid-rows-2 gap-x-2 not-prose"
  >
    <span class="flex flex-row items-center space-x-2">
      <UsersIcon :aria-label="alt" class="w-6 h-6 text-zinc-400" />
      <span class="text-sm uppercase">Collaboration</span>
    </span>
    <span v-if="collaborate == 'White Labeled'" class="py-1 pl-8"
      >{{ collaborate }} with {{ client }}</span
    >
    <span v-else class="py-1 pl-8">{{ collaborate }}</span>
  </div>
</template>
