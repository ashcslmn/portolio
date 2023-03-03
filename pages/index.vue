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
 <Hero>
    <nuxt-img :src="getImageUrl(author.image)" alt="Ashley Solomomon" align="right" class="my-4 w-[12.5rem] h-[12.5rem] rounded-full shadow-sm inset-1" height="200" width="200" /> 
    <span class="text-gray-600">Kumusta!</span>
    <h1 class="text-5xl font-bold leading">Ashley Solomon</h1>
    <p class="text-lg">Fullstack Developer, I specialize in working with the JavaScript and PHP ecosystems.</p>
    <social :social="author.social"/>
 </Hero>

</template>