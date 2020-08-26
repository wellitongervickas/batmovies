import { mount } from '@vue/test-utils'
import BadgetsItem from '@/components/Badgets/Item'

describe('Badgets Item', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BadgetsItem)
    expect(wrapper.vm).toBeTruthy()
  })

  test('have text in badget item', () => {
    const wrapper = mount(BadgetsItem, {
      slots: {
        default: 'Im badget',
      },
    })

    expect(wrapper.text()).toContain('Im badget')
  })
})
