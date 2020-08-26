import { mount, createLocalVue } from '@vue/test-utils'

import SearchBar from '@/components/Search/Bar'
import FormButton from '@/components/Form/Button'
import FormInput from '@/components/Form/Input'

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
    const label = 'Search'
    const placeholder = 'Search a movie'

    const wrapper = mount(SearchBar, {
      propsData: {
        title: label,
        placeholder,
      },
    })

    const fieldElement = wrapper.findComponent(FormInput)

    expect(fieldElement.find('label').html()).toContain(label)
    expect(fieldElement.find('input').attributes('placeholder')).toContain(
      placeholder
    )

    expect(wrapper.props().title).toBe(label)
    expect(wrapper.props().placeholder).toBe(placeholder)
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
