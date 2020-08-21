import statesGenerator from './states'

export const mutationGenerator = (prefix, sufix) => ({
  [`${prefix}/${sufix}`](state, payload) {
    state[prefix][sufix] = payload
  },
})

function mutationsGenerator(options = {}) {
  return {
    mutations: {
      ...mutationGenerator('items', 'loading'),
      ...mutationGenerator('items', 'results'),
      ...mutationGenerator('item', 'loading'),
      ...mutationGenerator('item', 'result'),

      clear: (state) => {
        const newState = statesGenerator().state()

        Object.keys(newState).forEach((key) => {
          state[key] = newState[key]
        })
      },

      ...options.mutations,
    },
  }
}

export default mutationsGenerator
