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

      this.$api
        .$get(`/authentication/token/new`)
        .then(({ request_token: requestToken }) => {
          this.$api
            .$post(`authentication/token/validate_with_login`, {
              ...map,
              request_token: requestToken,
            })
            .then(() => {
              this.$api
                .$post(`/authentication/session/new`, {
                  request_token: requestToken,
                })
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
            .catch((err) => {
              reject(err)
            })
            .finally(() => {
              commit('loading', false)
            })
        })
        .catch((err) => {
          reject(err)
        })
        .finally(() => {
          commit('loading', false)
        })
    })
  },
}
