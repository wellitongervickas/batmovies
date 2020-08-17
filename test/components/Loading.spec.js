import { mount } from '@vue/test-utils'
import LoadingSpinner from '@/components/Loadings/Spinner.vue'

describe('Loading Spinner', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LoadingSpinner)
    expect(wrapper.vm).toBeTruthy()
  })
})
