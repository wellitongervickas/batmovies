function actionsGenerator(path, options = {}) {
  return {
    actions: {
      async items({ commit }, payload) {
        commit('items/loading', true)
        const { results } = await this.$api.$get(path, payload)
        commit('items/results', results)
        commit('items/loading', false)
      },
      async item({ commit }, payload) {
        commit('item/loading', true)
        const result = await this.$api.$get(path, payload)
        commit('item/result', result)
        commit('item/loading', false)
      },
      ...options.actions,
    },
  }
}

export default actionsGenerator
