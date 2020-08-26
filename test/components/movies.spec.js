import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import MoviesList from '@/components/Movies/List'
import MoviesItem from '@/components/Movies/Item'
import Spinner from '@/components/Loadings/Spinner'

// Add Library Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)

const localVue = createLocalVue()
localVue.component('font-awesome-icon', FontAwesomeIcon)

describe('Movies List', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MoviesList)
    expect(wrapper.vm).toBeTruthy()
  })

  test('should return empty message list', () => {
    const wrapper = mount(MoviesList)
    expect(wrapper.html()).toContain('No movies to show yet!')
  })

  test('should return a spinner when loading', () => {
    const wrapper = mount(MoviesList, {
      propsData: {
        loading: true,
      },
    })
    const spinner = wrapper.findComponent(Spinner)
    expect(spinner.vm).toBeTruthy()
  })

  test('should return a list of movies', () => {
    const wrapper = mount(MoviesList, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      propsData: {
        movies: [
          {
            id: 605116,
            title: 'Project Power',
            vote_average: 8.5,
            poster_path: '/fjCezXiQWfGuNf4t7LruKky7kwV.jpg',
          },
        ],
      },
    })

    const movieItem = wrapper.findComponent(MoviesItem)
    expect(movieItem.vm).toBeTruthy()
  })
})

describe('Movies Item', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MoviesItem, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      propsData: {
        movie: {},
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('is a Vue instance without params', () => {
    const wrapper = mount(MoviesItem, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('should return a movie item', () => {
    const wrapper = mount(MoviesItem, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      propsData: {
        movie: {
          id: 605116,
          title: 'Project Power',
          vote_average: 8.5,
          poster_path: '/fjCezXiQWfGuNf4t7LruKky7kwV.jpg',
        },
      },
    })

    const movieItem = wrapper.findComponent(MoviesItem)
    const imgElement = movieItem.find('img')

    expect(movieItem.html()).toContain('Project Power')

    expect(imgElement.attributes('src')).toContain(
      'fjCezXiQWfGuNf4t7LruKky7kwV.jpg'
    )
  })

  test('should return a movie item without poster path', () => {
    const wrapper = mount(MoviesItem, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      propsData: {
        movie: {
          id: 605116,
          title: 'Project Power',
          vote_average: 8.5,
          backdrop_path: '/fjCezXiQWfGuNf4t7LruKky7kwV.jpg',
        },
      },
    })

    const movieItem = wrapper.findComponent(MoviesItem)
    const imgElement = movieItem.find('img')

    expect(imgElement.attributes('src')).toContain(
      'fjCezXiQWfGuNf4t7LruKky7kwV.jpg'
    )
  })
})
