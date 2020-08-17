export const state = () => ({
  loading: false,
  authenticated: null,
})

export const mutations = {
  clear: (state) => {
    state.loading = false
    state.authenticated = null
  },
  loading: (state, bool) => {
    state.loading = bool
  },
  authenticated: (state, authenticated) => {
    state.authenticated = authenticated
  },
}

export const actions = {
  authenticate({ commit }, map) {
    return new Promise((resolve, reject) => {
      commit('loading', true)

      this.$axios
        .$get(`/authentication/token/new?api_key=${process.env.appApiKey}`)
        .then(({ request_token: requestToken }) => {
          const params = {
            ...map,
            request_token: requestToken,
          }

          this.$axios
            .$post(
              `authentication/token/validate_with_login?api_key=${process.env.appApiKey}`,
              params
            )
            .then((authResponse) => {
              // this.$auth.$storage.setCookie('auth', authResponse, true)
              commit('authenticated', authResponse)
              resolve()
            })
            .catch((err) => {
              reject(err)
            })
            .finally(() => {
              commit('loading', false)
            })
        })
        .catch((err) => {
          commit('loading', false)
          reject(err)
        })
    })
  },
}
