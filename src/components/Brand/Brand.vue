<template>
  <v-avatar tile :size="size">
    <img :src="app.logo" :alt="app.title">
  </v-avatar>
</template>

<script>
import app from '@/config/app'

export default {
  name: 'Brand',

  props: {
    size: [String],
    default: '80px',
  },

  data () {
    return {
      app,
    }
  }
}
</script>
