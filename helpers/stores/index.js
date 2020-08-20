import statesGenerator from './states'
import mutationsGenerator from './mutations'
import actionsGenerator from './actions'

function storesGenerator(path, options = {}) {
  return {
    ...mutationsGenerator(options),
    ...statesGenerator(options),
    ...actionsGenerator(path, options),
  }
}

export default storesGenerator
