import { mount } from '@vue/test-utils'
import LayoutContainer from '@/components/Layout/Container'

describe('Layout Container', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LayoutContainer)
    expect(wrapper.vm).toBeTruthy()
  })

  test('have text in badget item', () => {
    const ChildComponent = {
      name: 'ChildComponent',
      template: '<div>hello world</div>',
    }

    const wrapper = mount(LayoutContainer, {
      slots: {
        default: ChildComponent,
      },
    })

    expect(wrapper.findComponent(ChildComponent)).toBeTruthy()
    expect(wrapper.html()).toContain('hello world')
  })
})
