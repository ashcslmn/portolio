<script setup>
const { $outsoar } = useNuxtApp();
const { public: config } = useRuntimeConfig();
  
const fetchData = async () => {
  try {
    const response = await $outsoar('/api/author', {
        params: {
            _path: '/authors/ashley-solomon/cv'
        }
    })
  
    response.data.body.children = response.data.body.children.filter(
      (i) => i.tag != "author-card"
    );
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
  <ContentRenderer :value="author">
    <ContentRendererMarkdown :value="author" />
    <template #empty>
      <p>No content found.</p>
    </template>
  </ContentRenderer>
</article>
</template>