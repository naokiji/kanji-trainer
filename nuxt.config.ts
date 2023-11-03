// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    ssr: false,
    generate: {
        nojekyll: true,
        fallback: '404.html',
    },
    target: "static",
    app: {
        baseURL: "/naokiji/"
    }
})
