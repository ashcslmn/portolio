<script setup>
    const { public: config } = useRuntimeConfig();
</script>
<template>
    <nuxt-link to="/">
        {{ config.site.name }}
    </nuxt-link>
</template>