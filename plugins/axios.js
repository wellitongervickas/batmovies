export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create()

  api.setBaseURL(process.env.appApiUrl)

  api.onRequest((config) => {
    config.params = {
      ...config.params,
      api_key: process.env.appApiKey,
    }

    return config
  })

  // Inject to context as $api
  inject('api', api)
}
