<script setup>
    const { social } = defineProps(['social'])
</script>
<template>
  <ul class="flex flex-row items-center space-x-4">
    <li v-if="social.github">
        <a :href="social.github" target="_blank">
            <div class="w-6 h-6">
                <stack-icon stack="github" />
            </div>
        </a>
    </li>
    <li v-if="social.linkedin">
        <a :href="social.linkedin" target="_blank">
            <div class="w-6 h-6">
                <stack-icon stack="linkedin" />
            </div>
        </a>
    </li>
        <li v-if="social.linkedin">
        <a href="mailto:ashcslmn@gmail.com" target="_blank">
            <div class="w-6 h-6">
                <stack-icon stack="gmail" />
            </div>
        </a>
    </li>
  </ul>
</template>
