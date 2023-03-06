<script setup>
const { title, layout, resource } = defineProps({
  title: {
    type: String,
    default: "Default title",
  },
  layout: {
    type: String,
    default: "left",
  },
  resource: {
    type: String,
  },
});

const resourceCount = ref(0);

if (resource == "projects") {
  resourceCount.value = useProjectsCount().value;
}
</script>
<template>
  <div class="pt-2 md:pt-6">
    <h2
      class="flex flex-col mb-6 space-y-2 text-2xl font-bold md:mb-4 highlight"
      :class="[layout]"
    >
      <span
        class="relative mb-1 text-lg font-normal font-bold tracking-wide text-zinc-600"
        >{{ title }}</span
      >
      <slot />
    </h2>
  </div>
</template>
