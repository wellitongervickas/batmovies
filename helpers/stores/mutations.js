import statesGenerator from './states'

function mutationsGenerator(options = {}) {
  return {
    mutations: {
      'items/error'(state, payload) {
        state.items.error = payload
      },
      'items/loading'(state, payload) {
        state.items.loading = payload
      },
      'items/results'(state, payload) {
        state.items.results = payload
      },

      'item/error'(state, payload) {
        state.item.error = payload
      },
      'item/loading'(state, payload) {
        state.item.loading = payload
      },
      'item/result'(state, payload) {
        state.item.result = payload
      },

      clear: (state) => {
        state = { ...statesGenerator() }
      },
      ...options.mutations,
    },
  }
}

export default mutationsGenerator
