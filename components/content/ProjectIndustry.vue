<script setup>
import { BuildingLibraryIcon } from "@heroicons/vue/24/solid";

const { industry, alt } = defineProps({
  industry: {
    type: String,
  },
  alt: {
    type: String,
    default: "Industry",
  },
});

defineExpose({
  industry,
  BuildingLibraryIcon,
  alt,
});
</script>
<template>
  <div
    :aria-label="alt"
    class="grid items-center grid-rows-2 gap-x-2 not-prose"
  >
    <span class="flex flex-row items-center space-x-2">
      <BuildingLibraryIcon :aria-label="alt" class="w-6 h-6 text-zinc-400" />
      <span class="text-sm uppercase">Industry</span>
    </span>
    <span class="py-1 pl-8">{{ industry }}</span>
  </div>
</template>
