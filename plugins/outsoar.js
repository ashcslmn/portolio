import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  const { public: config } = useRuntimeConfig();

  return {
    provide: {
      outsoar: axios.create({
        baseURL: config.outsoar.api_base_url
      }),
    },
  };
});
