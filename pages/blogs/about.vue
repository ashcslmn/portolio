<script setup>
const { $outsoar } = useNuxtApp();

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

const { data } = await fetchData();

</script>

<template>
  <div>
  
  </div>
</template>