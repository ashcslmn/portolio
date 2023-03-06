<script setup>
import { MapPinIcon } from "@heroicons/vue/24/solid";

const { country, alt } = defineProps({
  country: {
    type: String,
  },
  alt: {
    type: String,
    default: "Country",
  },
});

defineExpose({
  country,
  MapPinIcon,
  alt,
});
</script>
<template>
  <div
    :aria-label="alt"
    class="grid items-center grid-rows-2 gap-x-2 not-prose"
  >
    <span class="flex flex-row items-center space-x-2">
      <MapPinIcon :aria-label="alt" class="w-6 h-6 text-zinc-400" />
      <span class="text-sm uppercase">Country</span>
    </span>
    <span class="py-1 pl-8">{{ country }}</span>
  </div>
</template>
