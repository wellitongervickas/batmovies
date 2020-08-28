import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Index from '@/pages/index.vue'

// Add Library Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserNinja, faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faUserNinja)
library.add(faArrowRight)

const localVue = createLocalVue()
localVue.component('font-awesome-icon', FontAwesomeIcon)

describe('Pages Index', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Index, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      localVue,
    })

    expect(wrapper.vm).toBeTruthy()
  })
})
