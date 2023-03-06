<script setup>

const { public: config } = useRuntimeConfig();

const getImageUrl = (image)  => {
  return new URL(image, config.outsoar.assets_url).href;
}

const { photos, alt } = defineProps({
  photos: {
    type: Array,
    default: [],
  },
  alt: {
    type: String,
    default: "I am an image",
  },
});

const [, desktopImage, mobileImage] = photos;

defineExpose({
  alt,
  desktopImage,
  mobileImage,
});
</script>
<template>
  <div class="flex flex-col gap-10 px-2 md:flex-row not-prose">
    <div v-if="desktopImage">
      <img :src="getImageUrl(desktopImage)" :alt="alt" />
    </div>
    <div v-if="mobileImage">
      <img
        v-if="mobileImage"
        :src="getImageUrl(mobileImage)"
        :alt="alt"
      />
    </div>
  </div>
</template>
