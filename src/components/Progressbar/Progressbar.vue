<template>
  <v-slide-x-transition mode="out-in">
    <v-progress-linear v-if="progressbar.visible" class="main-progress" :value="progressbar.value" :height="progressbar.height"></v-progress-linear>
  </v-slide-x-transition>
</template>

<script>
import store from '@/store'
import { mapGetters, mapActions } from 'vuex'

export default {
  store,

  name: 'Progressbar',

  computed: {
    ...mapGetters({
      progressbar: 'progressbar/progressbar',
    }),
  },

  created () {
    this.$router.beforeEach((to, from, next) => {
      this.start(20)
      next()
    })

    this.$router.afterEach((to, from) => {
      // this.done()
    })
  },

  methods: {
    ...mapActions({
      start: 'progressbar/start',
      done: 'progressbar/done',
    }),
  },
}
</script>

<style lang="stylus">
.main-progress,
.main-progress.v-progress-linear {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  z-index: 9999;
}
</style>
