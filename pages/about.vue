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
<article class="py-10 mx-auto prose md:prose-lg">
   Hi there! <b>I'm Ash</b>, a full-stack web developer with a passion for creating innovative and effective solutions for businesses and individuals alike. With <b><yoe :since="2013" /> of experience</b> in the field, I have honed my skills in PHP and JavaScript to become a versatile and dynamic developer.
  As a full-stack developer, I have a deep understanding of both front-end and back-end development, allowing me to bring a unique perspective to each project. My expertise in PHP and JavaScript allows me to create custom, scalable, and secure web applications that meet the specific needs of my clients.
</article>
</template>