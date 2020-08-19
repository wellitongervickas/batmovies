import statesGenerator from './states'
import mutationsGenerator from './mutations'
import actionsGenerator from './actions'

const storesGenerator = () => {
  const state = statesGenerator()
  const mutations = mutationsGenerator()
  const actions = actionsGenerator()

  return {
    state,
    mutations,
    actions,
  }
}

export default storesGenerator
