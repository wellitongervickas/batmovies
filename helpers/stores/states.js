function statesGenerator(options = {}) {
  return {
    state: {
      items: {
        loading: false,
        error: null,
        results: null,
      },
      item: {
        loading: false,
        error: null,
        result: null,
      },
      ...options.state,
    },
  }
}
export default statesGenerator
