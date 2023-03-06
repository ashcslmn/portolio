<script setup>
import { CommandLineIcon } from '@heroicons/vue/24/solid';

const { stacks } = defineProps({
  stacks: {
    type: Array,
    default: [],
  },
});

defineExpose({
  stacks,
  CommandLineIcon,
});
</script>
<template>
  <div class="not-prose">
    <h3 class="flex flex-row items-center space-x-2">
      <CommandLineIcon class="w-6 h-6 text-zinc-400" /><span>Techologies</span>
    </h3>
    <div class="grid grid-cols-3 gap-3 mt-2 ml-5">
      <div v-for="(s, i) in stacks" :key="i" class="flex flex-row items-center space-x-2">
        <div class="flex flex-row items-center space-x-2">
          <stack-icon :stack="s" :aria-label="s" class="w-4 h-4 md:h-6 md:w-6">
            <template #icon="{ icon }">
              <i
                class="w-4 h-4 md:h-6 md:w-6"
                v-if="icon"
                v-html="icon?.svg"
                :alt="icon?.title"
                :title="icon?.title"
                :style="{
                  fill: `#${icon?.hex}`,
                }"
              />
            </template>
            <template #label="{ icon }">
              <span class="text-zinc-600">{{ icon.title }}</span>
            </template>
          </stack-icon>
        </div>
      </div>
    </div>
  </div>
</template>
