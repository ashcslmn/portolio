import VueSkeletor from 'vue-skeletor';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueSkeletor, {
        shimmer: false
    })
});
