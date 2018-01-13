import {shallow} from 'vue-test-utils'
import PortJobs from '@/components/PortJobs'
import PortJob from '@/components/PortJob'
import { getJobs } from '@/services/portfolio'

describe('PortJobs.vue', () => {
  const wrapper = shallow(PortJobs)

  it('should instance the component', () => {
    expect(wrapper.name()).to.equal('PortJobs')
  })

  it('should render a list of jobs', () => {
    const jobs = getJobs()
    const portJobs = wrapper.findAll(PortJob)
    expect(portJobs).to.have.lengthOf(jobs.length)
  })

  it.skip('should have pass right properties to each job', () => {
    // TODO: Implement test
  })
})
