<script setup>
import { Skeletor } from "vue-skeletor";
const { $outsoar } = useNuxtApp();
const { public: config } = useRuntimeConfig();
const pending = ref(true);
const author = ref([]);

const fetchData = async () => {
  let res = [];
  try {
    res = await $outsoar("/api/author", {
      params: {
        _path: "/authors/ashley-solomon",
      },
    });
  } catch (error) {
    console.error(error);
  }

  pending.value = false;
  return res;
};

const getImageUrl = (image) => {
  return new URL(image, config.outsoar.assets_url).href;
};

onMounted(async () => {
  const { data } = await fetchData();
  author.value = data;
});
</script>

<template>
  <div class="py-10 mx-auto prose md:prose-lg"></div>
  <article class="py-10 mx-auto prose md:prose-lg">
    <Skeletor v-if="pending" class="w-96 md:w-[730px]" />
    <Skeletor v-if="pending" class="w-96 md:w-[730px]" />
    <Skeletor v-if="pending" class="w-96 md:w-[710px]" />
    <Skeletor v-if="pending" class="w-96 md:w-[720px]" />
    <Skeletor v-if="pending" class="w-96 md:w-[705px]" />
    <div v-else>
      Hi there! <b>I'm Ash</b>, a full-stack web developer with a passion for
      creating innovative and effective solutions for businesses and individuals
      alike. With <b><yoe :since="2013" /> of experience</b> in the field, I
      have honed my skills in PHP and JavaScript to become a versatile and
      dynamic developer. As a full-stack developer, I have a deep understanding
      of both front-end and back-end development, allowing me to bring a unique
      perspective to each project. My expertise in PHP and JavaScript allows me
      to create custom, scalable, and secure web applications that meet the
      specific needs of my clients.
    </div>
  </article>
</template>
