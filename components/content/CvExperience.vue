<script setup>
 const $slots = useSlots();
</script>
<template>
  <div class="flex flex-col md:flex-row md:items-center">
    <div class="flex flex-col">
      <ContentSlot :use="$slots.company" unwrap="p" />
    </div>
    <div class="md:ml-auto">
      <ContentSlot :use="$slots.range" unwrap="p" />
    </div>
  </div>
</template>
