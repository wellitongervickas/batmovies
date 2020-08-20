function statesGenerator(options = {}) {
  return {
    state() {
      return {
        items: {
          loading: false,
          results: null,
        },
        item: {
          loading: false,
          result: null,
        },
        ...options.state,
      }
    },
  }
}
export default statesGenerator
