<script setup>
import { ArrowUturnLeftIcon } from '@heroicons/vue/24/solid';
const { $outsoar } = useNuxtApp();
const { public: config } = useRuntimeConfig();
const route = useRoute();
const fetchData = async () => {
  try {
    let response = await $outsoar("/api/project", {
      params: {
        _path: route.query._path,
      },
    });

    response.data.body.children = response.data.body.children.filter(
      (i) => i.tag != "suggested-projects-widget"
    );
    console.log(response.data.body)
    return response;
  } catch (error) {
    // console.error(error);
  }
};

const { data: project } = await fetchData();

const getImageUrl = (image) => {
  return new URL(image, config.outsoar.assets_url).href;
};
</script>

<template>
  <article class="mx-auto prose md:prose-lg">
    <div class="py-10">
      <nuxt-link to="/projects" class="flex flex-row items-center space-x-2"> <ArrowUturnLeftIcon class="w-6 h-6" /> <span>Return to projects</span> </nuxt-link>
    </div>
    <ContentRenderer :value="project">
      <ContentRendererMarkdown :value="project" />
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
  </article>
</template>
