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
    commit('loading', true)
    const { results } = await this.$axios.$get(
      `trending/movies/week?api_key=${process.env.appApiKey}`
    )

    commit('movies', results)
    commit('loading', false)
  },
}
