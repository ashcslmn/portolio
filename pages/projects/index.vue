<script setup>
import { Skeletor } from "vue-skeletor";
const { $outsoar } = useNuxtApp();
const { public: config } = useRuntimeConfig();
const pending = ref(true);
const projects = ref([]);

const fetchData = async () => {
  let res = [];
  try {
    res = await $outsoar('/api/projects', {
        params: {
            author: 'Ashley Solomon'
        }
    });
  } catch (error) {
    console.error(error);
  }
  
  pending.value = false;
  return res
};

const getImageUrl = (image)  => {
  return new URL(image, config.outsoar.assets_url).href;
}

onMounted(async () => {
  const { data } = await fetchData();
  projects.value = data;
});

</script>

<template>
<h1 class="flex flex-col my-10 text-3xl font-bold text-center"><span class="text-base font-normal">Projects</span>Explore my Recent Development Journey</h1>
<div class="max-w-6xl mx-auto prose md:prose-lg">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      
      <template v-if ="!pending">
        <div v-for="(project, i) in projects" :key="i" class="grid grid-cols-1 border gap-y-4">
            <div class="relative flex md:col-span-2 not-prose h-[300px]">
              <div class="absolute inset-0 z-0 p-0 bg-teal-900 opacity-70" />
              <div class="z-10 flex flex-col m-auto">
                <h2 class="px-4 text-3xl font-extrabold text-center text-white leading">{{project.title}}</h2>
              </div>
              <template v-if="project.photos">
                <!-- <Skeletor v-if="pending" width="600" height="300" class="absolute inset-0 object-cover w-full h-full mx-auto shadow-none -z-10 grayscale hover:grayscale-0 blur-[2px]" /> -->
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
              <nuxt-link :to="{ path: `/projects/${project.slug}`, query: { _path: project._path }}" class="ml-auto font-bold text-teal-700 uppercase">Discover</nuxt-link>
            </div>
        </div>
      </template>
      <template v-else>
       <div v-for="i in 6" :key="i" class="grid grid-cols-1 border gap-y-4">
            <div class="relative flex md:col-span-2 not-prose h-[300px]">
              <div class="absolute inset-0 z-0 p-0 bg-zinc-300 opacity-70" />
            </div>
            <div class="flex flex-col p-4 space-y-8">
              <div class="flex flex-row items-center space-x-4">
                <div class="w-6 h-6" v-for="stack in 3" :key="stack">
                    <Skeletor circle class="w-6 h-6"/>
                </div>
              </div>
              <div class="line-clamp-3">
                 <Skeletor class="w-20 " />
                 <Skeletor class="w-42 " />
              </div>
            </div> 
      </div>
      </template>
    </div>
</div>
</template>