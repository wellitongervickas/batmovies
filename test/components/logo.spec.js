import { mount } from '@vue/test-utils'
import LogoMain from '@/components/Logo/Main.vue'
import Icon from '@/components/Logo/Icon.vue'

describe('Logo Main', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LogoMain)
    expect(wrapper.vm).toBeTruthy()
  })

  test('have logo text', () => {
    const wrapper = mount(LogoMain)
    expect(wrapper.text()).toContain('Bat')
    expect(wrapper.text()).toContain('Movies')
    expect(wrapper.text()).toContain('A better way to watch your movies')
  })

  test('have logo icon', () => {
    const wrapper = mount(LogoMain)
    const icon = wrapper.findComponent(Icon)
    expect(icon.exists()).toBe(true)
  })
})

describe('Logo Icon', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Icon)
    expect(wrapper.vm).toBeTruthy()
  })

  test('have an icon logo without params', () => {
    const wrapper = mount(Icon)
    const imgElement = wrapper.find('img')
    expect(imgElement).toBeTruthy()
    expect(imgElement.attributes('alt')).toContain('bat')
  })

  test('have an icon logo with params', () => {
    const defaultValue = '62'

    const wrapper = mount(Icon, {
      propsData: {
        width: defaultValue,
        height: defaultValue,
      },
    })

    const imgElement = wrapper.find('img')

    expect(wrapper.props().width).toBe(defaultValue)
    expect(wrapper.props().height).toBe(defaultValue)

    expect(imgElement.attributes('width')).toBe(defaultValue)
    expect(imgElement.attributes('height')).toBe(defaultValue)
  })
})
