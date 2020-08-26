import { mount } from '@vue/test-utils'
import LoadingSpinner from '@/components/Loadings/Spinner.vue'

describe('Loadings Spinner', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LoadingSpinner)
    expect(wrapper.vm).toBeTruthy()
  })

  test('have loading with text', () => {
    const defaultValue = 'Loading...'

    const wrapper = mount(LoadingSpinner, {
      propsData: {
        text: defaultValue,
      },
    })

    expect(wrapper.props().text).toBe(defaultValue)
    expect(wrapper.html()).toContain(defaultValue)
  })
})
