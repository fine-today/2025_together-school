export const callApi = (path, opts = {}) => {
    const config = useRuntimeConfig()
    return $fetch(config.public.apiBase + path, opts)
}
