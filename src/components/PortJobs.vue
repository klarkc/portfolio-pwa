<template>
  <div>
    <PortJob v-for="job in jobs" :key="job.title"></PortJob>
  </div>
</template>

<script>
import {getJobs} from '@/services/portfolio'
import PortJob from './PortJob'

export default {
  name: 'PortJobs',
  components: {
    PortJob
  },
  computed: {
    jobs: getJobs
  }
}
</script>
