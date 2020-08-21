import storesGenerator from '../helpers/stores'

export default {
  ...storesGenerator('account/:account_id/favorite/movies', {
    actions: {
      async favoriteMovie({ commit }, payload) {
        //
      },
    },
  }),
}
