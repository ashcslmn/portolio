<script setup>
import { ArrowTopRightOnSquareIcon, ChevronDoubleRightIcon } from '@heroicons/vue/24/solid';

const { public: config } = useRuntimeConfig();

const getImageUrl = (image)  => {
  return new URL(image, config.outsoar.assets_url).href;
}

const props = defineProps([
  'hover',
  'title',
  '_path',
  'description',
  'stacks',
  'photoThumb',
  'website',
]);

const { hover, title, _path, description, stacks, photoThumb, website } = toRefs(props);

defineExpose({
  hover,
  title,
  _path,
  description,
  stacks,
  photoThumb,
  website,
  ArrowTopRightOnSquareIcon,
  ChevronDoubleRightIcon,
});
</script>

<template>
  <div class="md:w-[500px] w-[350px]">
    <div class="relative">
      <div class="absolute top-0 right-0 z-20 mt-2 ml-auto mr-2" :class="{ hidden: !hover }">
        <a :href="website" target="_black" class="hover:amber-500">
          <ArrowTopRightOnSquareIcon class="w-5 h-5 text-amber-400" />
        </a>
      </div>
      <div
        v-if="photoThumb"
        :class="{ 'grayscale-0': hover }"
        class="mx-auto md:w-[500px] h-[200px] overflow-hidden grayscale"
      >
        <img
          :src="getImageUrl(photoThumb)"
          :alt="title"
          class="object-fill w-full md:w-[500px]"
          width="500px"
          height="200px"
        />
      </div>
      <div class="absolute inset-0 ring-0 ring-inset ring-black/10" />
    </div>
    <div class="flex flex-col p-4 space-y-2">
      <atom-link :to="_path">
        <span class="text-xl font-extrabold leading highlight">
          <span class="relative line-clamp-1">{{ title }}</span>
        </span>
      </atom-link>
      <p class="line-clamp-2">{{ description }}</p>

      <div class="flex flex-row items-center mt-auto -space-x-3">
        <template v-if="stacks">
          <div
            v-for="(stack, i) in stacks"
            :key="i"
            class="w-10 h-10 p-2 border rounded-full bg-zinc-50"
          >
            <stack-icon :stack="stack" />
          </div>
        </template>
        <div class="flex flex-1">
          <slot name="cta">
            <atom-link
              :to="_path"
              class="flex items-center ml-auto space-x-1 font-extrabold tracking-wide uppercase hover:text-amber-400 text-amber-500"
            >
              <span>Discover</span> <ChevronDoubleRightIcon class="w-4 h-4" />
            </atom-link>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
