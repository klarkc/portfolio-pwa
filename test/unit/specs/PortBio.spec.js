import Vue from 'vue'
import PortBio from '@/components/PortBio'
import {getBio} from '@/services/portfolio'

describe('PortBio.vue', () => {
  let Constructor, vm

  beforeEach(() => {
    Constructor = Vue.extend(PortBio)
  })

  it('should instance the component', () => {
    vm = new Constructor().$mount()
    expect(vm.$options.name).to.equal('PortBio')
  })

  it('should render the biography', () => {
    vm = new Constructor().$mount()
    expect(vm.$el.innerHTML).to.equal(getBio())
  })
})
