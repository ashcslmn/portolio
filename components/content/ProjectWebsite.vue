<script setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/solid";

const { website, alt } = defineProps({
  website: {
    type: String,
  },
  alt: {
    type: String,
    default: "website",
  },
});

defineExpose({
  website,
  ArrowTopRightOnSquareIcon,
  alt,
});
</script>
<template>
  <div
    :aria-label="alt"
    class="grid items-center grid-rows-2 gap-x-2 not-prose"
  >
    <span class="flex flex-row items-center space-x-2">
      <ArrowTopRightOnSquareIcon
        :aria-label="alt"
        class="w-6 h-6 text-zinc-400"
      />
      <span class="text-sm uppercase">Website</span>
    </span>
    <a :href="website" target="_blank" class="py-1 pl-8 underline">{{
      website
    }}</a>
  </div>
</template>
