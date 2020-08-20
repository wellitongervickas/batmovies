import { compile } from 'path-to-regexp'

function actionsGenerator(path, options = {}) {
  const toPath = compile(path, { encode: encodeURIComponent })

  return {
    actions: {
      async items({ commit }, payload) {
        commit('items/loading', true)

        const { results } = await this.$api.$get(toPath(payload), payload)
        commit('items/results', results)
        commit('items/loading', false)
      },
      async item({ commit }, payload) {
        commit('item/loading', true)

        const result = await this.$api.$get(toPath(payload), payload)

        commit('item/result', result)
        commit('item/loading', false)
      },
      ...options.actions,
    },
  }
}

export default actionsGenerator
