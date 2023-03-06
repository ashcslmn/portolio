<script setup>
import { Skeletor } from "vue-skeletor";

const { $outsoar } = useNuxtApp();
const { public: config } = useRuntimeConfig();
const pending = ref(false);

const fetchData = async () => {
  pending.value = true;

  try {
    const response = await $outsoar("/api/author", {
      params: {
        _path: "/authors/ashley-solomon",
      },
    });
    pending.value = false;
    return response;
  } catch (error) {
    console.error(error);
  }
};

const { data: author } = await fetchData();

const getImageUrl = (image) => {
  return new URL(image, config.outsoar.assets_url).href;
};
</script>

<template>
  <Hero>
    <Skeletor v-if="pending" circle size="200" />
    <nuxt-img
      v-else
      :src="getImageUrl(author.image)"
      alt="Ashley Solomomon"
      align="right"
      class="my-4 w-[12.5rem] h-[12.5rem] rounded-full shadow-sm inset-1"
      height="200"
      width="200"
    />

    <Skeletor v-if="pending" class="w-96 md:w-[100px]" />
    <span v-else class="text-gray-600">Kumusta!</span>

    <Skeletor v-if="pending" class="w-96 md:w-[700px]" />
    <h1 v-else class="text-5xl font-bold leading">Ashley Solomon</h1>

    <Skeletor v-if="pending" class="w-96 md:w-[750px]" />
    <p v-else class="text-lg">
      Fullstack Developer, I specialize in working with the JavaScript and PHP
      ecosystems.
    </p>

    <Skeletor v-if="pending" width="w-96 md:w-[80px]" />
    <social v-else :social="author.social" />
  </Hero>
</template>
