// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-graphql-client", "@nuxtjs/proxy"],
  //   runtimeConfig: {
  //     public: {
  //       GQL_HOST: "http://127.0.0.1:8080/graphql/",
  //     },
  //   },
  "graphql-client": {
    clients: {
      default: {
        host: "http://127.0.0.1:8080/graphql/",
        schema: "./schema.json",
      },
    },
  },
});
