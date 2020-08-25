export default function ({ $axios, ...rest }, inject) {
  // Create a custom axios instance
  const api = $axios.create()

  api.setBaseURL(process.env.appApiUrl)

  api.onRequest((config) => {
    config.params = {
      ...config.params,
      api_key: process.env.appApiKey,
    }

    if (rest.app.$auth.$state.user) {
      config.params.session_id = rest.app.$auth.$state.user.session_id
    }

    return config
  })

  api.onResponseError((err) => {
    throw err.response.data.status_message
  })

  // Inject to context as $api
  inject('api', api)
}
