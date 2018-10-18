<template>
  <div>
    <div id="particles-js"></div>
    <slot></slot>
  </div>
</template>

<script>
import options from './json/options.json'
import 'particles.js'

export default {
  name: 'Particles',

  methods: {
    initParticlesJS () {
      /* eslint-disable */
      particlesJS('particles-js', options)
    },
  },

  mounted () {
    setTimeout(this.initParticlesJS, 500)
  },
}
</script>
