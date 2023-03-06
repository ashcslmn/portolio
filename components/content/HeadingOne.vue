<script setup>
defineProps({
  title: {
    type: String,
    default: "Default title",
  },
  layout: {
    type: String,
    default: "left",
  },
});
</script>
<template>
  <div class="pt-2 md:pt-4">
    <h1
      class="flex flex-col mb-6 space-y-2 text-2xl font-bold md:mb-4 highlight"
      :class="[layout]"
    >
      <span
        class="relative mb-1 text-lg font-normal font-bold tracking-wide text-zinc-600"
        >{{ title }}</span
      >
      <slot />
    </h1>
  </div>
</template>
