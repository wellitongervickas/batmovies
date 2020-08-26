import { mount, createLocalVue } from '@vue/test-utils'

import Heading from '@/components/Typography/Heading'
import SubHeading from '@/components/Typography/SubHeading'

// Add Library Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)

const localVue = createLocalVue()
localVue.component('font-awesome-icon', FontAwesomeIcon)

describe('Typography', () => {
  test('is Vue instance', () => {
    const wrapperHeading = mount(Heading)
    const wrapperSubHeading = mount(SubHeading)

    expect(wrapperHeading.vm).toBeTruthy()
    expect(wrapperSubHeading.vm).toBeTruthy()
  })

  test('should render a Heading component with text', () => {
    const wrapper = mount(Heading, {
      slots: {
        default: 'Im h1 title',
      },
    })

    expect(wrapper.find('h1')).toBeTruthy()
    expect(wrapper.html()).toContain('Im h1 title')
  })

  test('should render a Sub Heading component with text', () => {
    const wrapper = mount(Heading, {
      slots: {
        default: 'Im h2 title',
      },
    })

    expect(wrapper.find('h2')).toBeTruthy()
    expect(wrapper.html()).toContain('Im h2 title')
  })

  test('should render Heading with a icon', () => {
    const wrapper = mount(Heading, {
      propsData: {
        icon: 'plus',
      },
    })

    const iconElement = wrapper.find('svg')
    expect(iconElement.attributes('data-icon')).toBe('plus')
  })

  test('should render Sub Heading with a icon', () => {
    const wrapper = mount(SubHeading, {
      propsData: {
        icon: 'plus',
      },
    })

    const iconElement = wrapper.find('svg')
    expect(iconElement.attributes('data-icon')).toBe('plus')
  })
})
