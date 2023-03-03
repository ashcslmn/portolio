<script setup>
import { capitalize } from "~/utils/lodash";
const slots = useSlots();
const props = defineProps({
  stack: {
    type: String,
    default: "",
  },
});

const { [`si${capitalize(props.stack)}`]: icon } = await import("simple-icons");

defineExpose({
  capitalize,
  icon,
});
</script>

<template>
  <slot name="icon" :icon="icon">
    <i
      v-if="icon"
      v-html="icon?.svg"
      :alt="icon?.title"
      :title="icon?.title"
      :style="{
        fill: `#${icon?.hex}`,
      }"
    />
  </slot>
  <template v-if="slots.label">
    <slot name="label" :icon="icon" />
  </template>
</template>
