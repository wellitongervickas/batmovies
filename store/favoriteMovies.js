import { transformPath } from '@/helpers/api/path'

import storesGenerator from '../helpers/stores'
import { mutationGenerator } from '../helpers/stores/mutations'

export default {
  ...storesGenerator('account/:account_id/favorite/movies', {
    state: {
      favorite: {
        loading: false,
      },
    },
    mutations: {
      ...mutationGenerator('favorite', 'loading'),
    },
    actions: {
      async favorite({ commit }, payload) {
        commit('favorite/loading', true)

        const url = transformPath(
          'account/:account_id/favorite\\?session_id=:session_id',
          payload
        )

        await this.$api.$post(url, payload)

        commit('favorite/loading', false)
      },
    },
  }),
}
