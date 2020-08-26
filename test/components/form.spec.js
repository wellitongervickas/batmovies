import {
  mount,
  shallowMount,
  createLocalVue,
  RouterLinkStub,
} from '@vue/test-utils'

import Form from '@/components/Form/Form'
import FormButton from '@/components/Form/Button'
import FormInput from '@/components/Form/Input'

// Add Library Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)
library.add(faArrowRight)

const localVue = createLocalVue()

localVue.component('font-awesome-icon', FontAwesomeIcon)

describe('Form', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Form)
    expect(wrapper.vm).toBeTruthy()
  })

  test('should submit without fields', async () => {
    const wrapper = mount(Form)

    const buttonElement = wrapper.find('button')
    buttonElement.trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('submit')).toBeTruthy()
  })

  test('should create a form with fields and submit values', async () => {
    const section = [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
      },
      {
        id: 'last_name',
        label: 'Last name',
        type: 'text',
      },
    ]

    const wrapper = mount(Form, {
      propsData: {
        section,
      },
    })

    const nameField = wrapper.find('#name')
    const lastNameField = wrapper.find('#last_name')
    nameField.setValue('welliton')
    lastNameField.setValue('gervickas')

    const buttonElement = wrapper.find('button')
    buttonElement.trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('submit')).toBeTruthy()
    expect(wrapper.emitted('submit')[0]).toEqual([
      {
        name: 'welliton',
        last_name: 'gervickas',
      },
    ])
  })

  test('should create a form with empty and dont submit while have an error', async () => {
    const section = [
      {
        id: 'empty',
        label: 'Empty',
        type: 'text',
        validations: [
          {
            type: 'blank',
          },
        ],
      },
    ]

    const wrapper = mount(Form, {
      propsData: {
        section,
      },
    })

    const buttonElement = wrapper.find('button')
    buttonElement.trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('submit')).toBeFalsy()
  })
})

describe('Form Button', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FormButton)
    expect(wrapper.vm).toBeTruthy()
  })

  test('have been submited action click', async () => {
    const wrapper = mount(FormButton)

    const buttonElement = wrapper.find('button')
    buttonElement.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('click')).toBeTruthy()
  })

  test('should create button with icon', () => {
    const wrapper = mount(FormButton, {
      propsData: {
        icon: 'plus',
      },
    })

    const iconElement = wrapper.find('svg')

    expect(wrapper.props().icon).toBe('plus')
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

  test('should create a button like a link with nuxt link', async () => {
    const to = '/welcome'

    const wrapper = shallowMount(FormButton, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      propsData: {
        asLink: true,
        to,
      },
    })

    const linkElement = wrapper.findComponent(RouterLinkStub)
    linkElement.trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.props().asLink).toBeTruthy()
    expect(wrapper.props().to).toBe(to)
  })
})

describe('Form Input', () => {
  const field = {
    id: 'field',
  }

  test('is a Vue instance', () => {
    const wrapper = mount(FormInput, {
      propsData: {
        field: { ...field },
      },
    })

    const wrapperWithoutProps = mount(FormInput)

    expect(wrapper.vm).toBeTruthy()
    expect(wrapperWithoutProps.vm).toBeTruthy()
  })

  test('should have a input text, placeholder and label', () => {
    const currentField = {
      label: 'Name',
      placeholder: 'Type you name',
      type: 'text',
    }

    const wrapper = mount(FormInput, {
      propsData: {
        field: {
          ...currentField,
          ...field,
        },
      },
    })

    const inputElement = wrapper.find('input')

    expect(inputElement.attributes('type')).toBe(currentField.type)
    expect(wrapper.props().field.label).toBe(currentField.label)
    expect(wrapper.props().field.placeholder).toBe(currentField.placeholder)
  })

  test('should have emitted events wrapper', async () => {
    const currentField = {
      label: 'Name',
      placeholder: 'Type you name',
      type: 'text',
    }

    const wrapper = mount(FormInput, {
      propsData: {
        field: {
          ...currentField,
          ...field,
        },
      },
    })

    const inputElement = wrapper.find('input')
    inputElement.setValue('welliton gervickas')

    inputElement.trigger('input')
    inputElement.trigger('blur')

    await wrapper.vm.$nextTick()

    expect(inputElement.element.value).toBe('welliton gervickas')
    expect(wrapper.emitted('input')).toBeTruthy()
    expect(wrapper.emitted('change')).toBeTruthy()
    expect(wrapper.emitted('error')).toBeFalsy()

    expect(wrapper.emitted('input')[0]).toEqual(['welliton gervickas'])
    expect(wrapper.emitted('change')[0]).toEqual(['welliton gervickas'])
  })

  test('should print field error when is required', async () => {
    const currentField = {
      label: 'Name',
      placeholder: 'Type you name',
      type: 'text',
      validations: [
        {
          type: 'blank',
        },
      ],
    }

    const wrapper = mount(FormInput, {
      propsData: {
        field: {
          ...currentField,
          ...field,
        },
      },
    })
    const requiredElement = wrapper.find('span')

    const inputElement = wrapper.find('input')
    inputElement.setValue('')
    inputElement.trigger('blur')

    await wrapper.vm.$nextTick()

    const errorElement = wrapper.find('.form-input-error')

    expect(errorElement.html()).toContain('Is required')
    expect(requiredElement.html()).toContain('*')

    expect(wrapper.emitted('change')).toBeTruthy()
    expect(wrapper.emitted('error')[0]).toEqual(['Is required'])
  })
})
