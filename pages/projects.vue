<script setup>
const { $outsoar } = useNuxtApp();
const { public: config } = useRuntimeConfig();
  
const fetchData = async () => {
  try {
    const response = await $outsoar('/api/projects', {
        params: {
            authors: [ 'Ashley Solomon' ]
        }
    })
    return response;
  } catch (error) {
    // console.error(error);
  }
};

const { data: projects } = await fetchData();

const getImageUrl = (image)  => {
  return new URL(image, config.outsoar.assets_url).href;
}

</script>

<template>
<h1 class="flex flex-col my-10 text-3xl font-bold text-center"><span class="text-base font-normal">Projects</span>Explore my Recent Development Journey</h1>
<div class="max-w-6xl mx-auto prose md:prose-lg">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div v-for="(project, i) in projects" :key="i" class="grid grid-cols-1 border gap-y-4">
          <div class="relative flex md:col-span-2 not-prose h-[300px]">
            <div class="absolute inset-0 z-0 p-0 bg-teal-900 opacity-70" />
            <div class="z-10 flex flex-col m-auto">
              <h2 class="px-4 text-3xl font-extrabold text-center text-white leading">{{project.title}}</h2>
            </div>
            <template v-if="project.photos">
              <nuxt-img :src="getImageUrl(project.photos[0])" align="center" class="absolute inset-0 object-cover w-full h-full mx-auto shadow-none -z-10 grayscale hover:grayscale-0 blur-[2px]" width="600" height="300" />
            </template>
          </div>
          <div class="flex flex-col p-4 space-y-8">
            <div class="flex flex-row items-center space-x-4">
              <div class="w-6 h-6" v-for="stack in project.stacks" :key="stack">
                  <stack-icon :stack="stack" />
              </div>
            </div>
            <div class="line-clamp-3">
              {{ project.description }}
            </div>
            <button class="ml-auto font-bold text-teal-700 uppercase">Discover</button>
          </div>
      </div>
    </div>
</div>
</template>