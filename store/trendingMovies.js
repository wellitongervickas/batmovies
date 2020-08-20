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
    const { results } = await this.$api.$get(`trending/movies/week`)

    commit('movies', results)
    commit('loading', false)
  },
}
