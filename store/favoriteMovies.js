export const state = () => ({
  loading: false,
  movies: [],
})

export const mutations = {
  clear: (state) => {
    state.loading = false
    state.movies = []
  },
  loading: (state, bool) => {
    state.loading = bool
  },
  movies: (state, movies) => {
    state.movies = movies
  },
}

export const actions = {
  async movies({ commit }) {
    const { session_id: sessionId } = this.$auth.user
    commit('loading', true)
    const { results } = await this.$axios.$get(
      `account/{account_id}/favorite/movies?api_key=${process.env.appApiKey}&session_id=${sessionId}`
    )
    commit('movies', results)
    commit('loading', false)
  },
}
