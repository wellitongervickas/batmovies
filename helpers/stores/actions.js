import { transformPath } from '@/helpers/api/path'

function actionsGenerator(path, options = {}) {
  return {
    actions: {
      async items({ commit }, payload) {
        commit('items/loading', true)

        const { results } = await this.$api.$get(
          transformPath(path, payload),
          payload
        )
        commit('items/results', results)
        commit('items/loading', false)
      },
      async item({ commit }, payload) {
        commit('item/loading', true)

        const result = await this.$api.$get(
          transformPath(path, payload),
          payload
        )

        commit('item/result', result)
        commit('item/loading', false)
      },
      ...options.actions,
    },
  }
}

export default actionsGenerator
