<script setup>
    const { public: config } = useRuntimeConfig();
</script>

<template>
<Header>
    <template #nav><navigation class="ml-auto" /></template>
    <template #logo><Logo /></template>
</Header>
<div class="relative flex flex-col min-h-screen overflow-x-hidden antialiased">
    <main class="flex-1 px-4 md:px-0">
        <slot />
    </main>
</div>
</template>