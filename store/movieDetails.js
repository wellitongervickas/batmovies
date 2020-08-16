const initialState = {
  loading: false,
  movie: null,
}

export const state = () => ({
  ...initialState,
})

export const mutations = {
  clear: (state) => {
    state = { ...initialState }
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
    const movie = await this.$axios.$get(
      `movie/${id}?api_key=${process.env.appApiKey}`
    )

    commit('movie', movie)
    commit('loading', false)
  },
}
