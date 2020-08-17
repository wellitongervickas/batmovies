export const state = () => ({
  loading: false,
})

export const mutations = {
  clear: (state) => {
    state.loading = false
  },
  loading: (state, bool) => {
    state.loading = bool
  },
}

export const actions = {
  authenticate({ commit }, map) {
    return new Promise((resolve, reject) => {
      commit('loading', true)

      this.$axios
        .$get(`/authentication/token/new?api_key=${process.env.appApiKey}`)
        .then(({ request_token: requestToken }) => {
          this.$axios
            .$post(
              `authentication/token/validate_with_login?api_key=${process.env.appApiKey}`,
              { ...map, request_token: requestToken }
            )
            .then(() => {
              this.$axios
                .$post(
                  `/authentication/session/new?api_key=${process.env.appApiKey}`,
                  { request_token: requestToken }
                )
                .then(({ session_id: sessionId }) => {
                  const user = {
                    session_id: sessionId,
                    request_token: requestToken,
                  }

                  this.$auth.setUser(user)
                  resolve()
                })
                .catch((err) => {
                  reject(err)
                })
                .finally(() => {
                  commit('loading', false)
                })
            })
        })
    })
  },
}
