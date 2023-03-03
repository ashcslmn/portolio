<script setup>
const { $outsoar } = useNuxtApp();
const { public: config } = useRuntimeConfig();
  
const fetchData = async () => {
  try {
    const response = await $outsoar('/api/author', {
        params: {
            _path: '/authors/ashley-solomon'
        }
    })
    return response;
  } catch (error) {
    // console.error(error);
  }
};

const { data: author } = await fetchData();

const getImageUrl = (image)  => {
  return new URL(image, config.outsoar.assets_url).href;
}
</script>

<template>
<article class="mx-auto prose md:prose-lg">
   
</article>
</template>