export const state = () => ({
  loading: false,
})

export const mutations = {
  loading: (state, payload) => {
    state.loading = payload
  },
}

export const actions = {
  account({ commit }, params) {
    this.$api
      .$get('/account', { params })
      .then((user) => {
        this.$auth.setUser({
          ...params,
          ...user,
        })
      })
      .finally(() => {
        commit('loading', false)
      })
  },
  session({ commit, dispatch }, payload) {
    commit('loading', true)
    this.$api
      .$post(`/authentication/session/new`, payload)
      .then(({ session_id: sessionId }) => {
        const user = {
          session_id: sessionId,
          request_token: payload.request_token,
        }

        dispatch('account', user)
      })
      .catch(() => {
        commit('loading', false)
      })
  },
  login({ commit, dispatch }, credentials) {
    commit('loading', true)
    this.$api
      .$post(`authentication/token/validate_with_login`, credentials)
      .then(() => {
        dispatch('session', {
          request_token: credentials.request_token,
        })
      })
      .catch(() => {
        commit('loading', false)
      })
  },
  guest({ commit }) {
    commit('loading', true)
    this.$api
      .$get('/authentication/guest_session/new')
      .then((response) => {
        this.$auth.setUser({
          ...response,
        })
      })
      .finally(() => {
        commit('loading', false)
      })
  },
  authenticate({ commit, dispatch }, credentials) {
    commit('loading', true)

    this.$api
      .$get('/authentication/token/new')
      .then(({ request_token: requestToken }) => {
        dispatch('login', {
          ...credentials,
          request_token: requestToken,
        })
      })
      .catch(() => {
        commit('loading', false)
      })
  },
}
