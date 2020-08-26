import { mount, createLocalVue } from '@vue/test-utils'

import FormButton from '@/components/Form/Button'

// Add Library Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faPlus)

const localVue = createLocalVue()

localVue.component('font-awesome-icon', FontAwesomeIcon)

describe('Form Button', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FormButton)
    expect(wrapper.vm).toBeTruthy()
  })

  test('have been submited action click', () => {
    const wrapper = mount(FormButton)

    const buttonElement = wrapper.find('button')
    buttonElement.trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })

  test('should create button with icon', () => {
    const wrapper = mount(FormButton, {
      propsData: {
        icon: 'plus',
      },
    })

    const iconElement = wrapper.find('svg')
    expect(iconElement.attributes('data-icon')).toBe('plus')
  })

  test('should create button with slot', () => {
    const wrapper = mount(FormButton, {
      slots: {
        default: 'Hello world',
      },
    })

    expect(wrapper.html()).toContain('Hello world')
  })
})
