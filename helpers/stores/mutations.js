import statesGenerator from './states'

const mutationsGenerator = () => ({
  items: (state, payload) => ({
    error: () => {
      state.items.error = payload
    },
    loading: () => {
      state.items.loading = payload
    },
    results: () => {
      state.items.results = payload
    },
  }),
  item: (state, payload) => ({
    error: () => {
      state.item.error = payload
    },
    loading: () => {
      state.item.loading = payload
    },
    result: () => {
      state.item.result = payload
    },
  }),
  clear: (state) => {
    state = { ...statesGenerator() }
  },
})

export default mutationsGenerator
