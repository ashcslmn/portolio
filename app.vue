<script setup>
const layout = ref("default");
</script>
<template>
  <NuxtLayout :name="layout">
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
