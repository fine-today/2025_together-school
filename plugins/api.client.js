export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    nuxtApp.provide('api', (path, opts = {}) => {
        return $fetch(config.public.apiBase + path, opts)
    })
})