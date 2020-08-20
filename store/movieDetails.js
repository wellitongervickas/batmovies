export const state = () => ({
  loading: false,
  movie: null,
})

export const mutations = {
  clear: (state) => {
    state.loading = false
    state.movie = null
  },
  loading: (state, bool) => {
    state.loading = bool
  },
  movie: (state, movie) => {
    state.movie = movie
  },
}

export const actions = {
  async movie({ commit }, id) {
    commit('loading', true)
    const movie = await this.$api.$get(`movie/${id}`)

    commit('movie', movie)
    commit('loading', false)
  },
}
