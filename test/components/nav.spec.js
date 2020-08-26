import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'

import Sidebar from '@/components/Nav/Sidebar'

// Add Library Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faSearch,
  faSignOutAlt,
  faStar,
} from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)
library.add(faSignOutAlt)
library.add(faStar)

const localVue = createLocalVue()
localVue.component('font-awesome-icon', FontAwesomeIcon)

describe('Nav Sidebar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Sidebar, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      mocks: {
        $auth: {},
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('should return list of links when user is authenticated', () => {
    const wrapper = mount(Sidebar, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      mocks: {
        $auth: {
          user: {
            id: 12345,
          },
        },
      },
    })

    const welcomeLink = wrapper.findAll('a').wrappers[0]
    const searchLink = wrapper.findAll('a').wrappers[1]
    const favoriteLink = wrapper.findAll('a').wrappers[2]
    const logoutLink = wrapper.findAll('a').wrappers[3]

    expect(welcomeLink.attributes('title')).toBe('Welcome')
    expect(searchLink.attributes('title')).toBe('Search')
    expect(favoriteLink.attributes('title')).toBe('Favorite movies')
    expect(logoutLink.attributes('title')).toBe('Logout')

    expect(welcomeLink.props('to')).toBe('/welcome')
    expect(searchLink.props('to')).toBe('/search')
    expect(favoriteLink.props('to')).toBe('/account/12345')
    expect(logoutLink.props('to')).toBe('/login')
  })

  test('should return list of links when user is not authenticated', () => {
    const wrapper = mount(Sidebar, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      mocks: {
        $auth: {},
      },
    })

    const favoriteLink = wrapper.findAll('a').wrappers[2]

    expect(favoriteLink.attributes('title')).not.toBe('Favorite movies')
    expect(favoriteLink.props('to')).not.toBe('/account/12345')

    expect(favoriteLink.attributes('title')).toBe('Logout')
    expect(favoriteLink.props('to')).toBe('/login')
  })
})
