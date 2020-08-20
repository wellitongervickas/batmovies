import Vuex from 'vuex'

import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Welcome from '@/pages/welcome.vue'
import MoviesItem from '@/components/Movies/Item'

import { moviesWeek } from '@/helpers/mocks/movies'

// Add Library Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faStar, faFire } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)
library.add(faStar)
library.add(faFire)

const localVue = createLocalVue()

localVue.component('font-awesome-icon', FontAwesomeIcon)
localVue.use(Vuex)

describe('Pages Welcome', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Welcome, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      store: {
        commit: jest.fn(),
        dispatch: jest.fn(),
        state: {
          trendingMovies: {
            items: {
              results: [...moviesWeek.results],
            },
          },
        },
      },
      localVue,
    })
    expect(wrapper.vm).toBeTruthy()

    const movieElement = wrapper.findAllComponents(MoviesItem).at(0)
    expect(movieElement.exists()).toBeTruthy()
    expect(movieElement.html()).toContain('Project Power')

    const moviesElements = wrapper.findAllComponents(MoviesItem)
    expect(moviesElements).toHaveLength(20)
  })
})
