
<template>
   <header class="sticky top-0 z-10 w-full px-4 py-4 bg-white shadow md:px-0">
        <div id="header-content" class="flex items-center max-w-6xl mx-auto">
            <slot name="logo"/>
            <slot name="nav"/>
        </div>
   </header>
</template>