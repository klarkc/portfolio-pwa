<template>
  <div v-html="bio"></div>
</template>

<script>
import {getBio} from '@/services/portfolio'

export default {
  name: 'PortBio',
  computed: {
    bio: getBio
  }
}
</script>
