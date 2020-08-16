export const state = () => ({
  loading: false,
  results: [],
})

export const mutations = {
  clear: (state) => {
    state.results = []
    state.loading = false
  },
  loading: (state, bool) => {
    state.loading = bool
  },
  results: (state, results) => {
    state.results = results
  },
}

export const actions = {
  async search({ commit }, query) {
    commit('loading', true)

    const { results } = await this.$axios.$get(
      `search/movie?query=${query}&api_key=${process.env.appApiKey}`
    )

    commit('results', results)
    commit('loading', false)
  },
}
