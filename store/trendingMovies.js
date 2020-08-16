const initialState = {
  loading: false,
  list: [],
}

export const state = () => ({ ...initialState })

export const mutations = {
  clear: (state) => {
    state = { ...initialState }
  },
  loading: (state, bool) => {
    state.loading = bool
  },
  list: (state, list) => {
    state.list = list
  },
}

export const actions = {
  async list({ commit }) {
    commit('loading', true)
    const { results } = await this.$axios.$get(
      `trending/movies/week?api_key=${process.env.appApiKey}`
    )

    commit('list', results)
    commit('loading', false)
  },
}
