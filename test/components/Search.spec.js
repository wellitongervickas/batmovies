import { mount, createLocalVue } from '@vue/test-utils'

import SearchBar from '@/components/Search/Bar'
import FormButton from '@/components/Form/Button'

// Add Library Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch)

const localVue = createLocalVue()

localVue.component('font-awesome-icon', FontAwesomeIcon)

describe('Badgets Item', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SearchBar)
    expect(wrapper.vm).toBeTruthy()
  })

  test('have labels with props', () => {
    const wrapper = mount(SearchBar, {
      propsData: {
        title: 'Search',
        placeholder: 'Search a movie',
      },
    })

    expect(wrapper.props().title).toBe('Search')
    expect(wrapper.props().placeholder).toBe('Search a movie')
  })

  test('have text on input', () => {
    const wrapper = mount(SearchBar)
    const inputElement = wrapper.find('input')

    inputElement.setValue('Im the best')
    inputElement.trigger('input')

    expect(inputElement.element.value).toBe('Im the best')
  })

  test('have been submited a seach', () => {
    const wrapper = mount(SearchBar, {
      data: () => ({
        query: 'search query',
      }),
    })

    const buttonElement = wrapper.findComponent(FormButton)
    buttonElement.vm.$emit('click')

    expect(wrapper.emitted('submit')).toBeTruthy()
    expect(wrapper.emitted('submit')[0]).toEqual(['search query'])
  })
})
