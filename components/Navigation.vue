
<script setup>
    const { public: config } = useRuntimeConfig();
</script>

<template>
<nav class="hidden ml-auto md:block">
    <ul class="flex space-x-4">
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/about">CV</nuxt-link></li>
    </ul>
</nav>   
</template>
