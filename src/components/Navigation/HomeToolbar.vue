<template>
  <div>
    <v-toolbar
      class="pa-3 transparent"
      dark
      flat
      >
      <a
        href="/"
        class="my-3 hidden-sm-and-down"
        @mouseleave="animateLogo($event, false)"
        @mouseover="animateLogo($event, true)">
        <img
          width="46"
          id="brand"
          style="margin-left:25px"
          :src="require('@/assets/logo.png')"
          lt=""
          >
        <img
          id="animated-brand"
          class="hidden"
          width="100"
          :src="require('@/assets/images/innov-logomotion.gif')"
          >
      </a>

      <a href="/" class="hidden-md-and-up">
        <img width="40" :src="require('@/assets/logo.png')" alt="">
      </a>

      <v-spacer></v-spacer>

      <!-- web -->
      <main-menu></main-menu>
      <!-- mobile -->
      <mobile-nav></mobile-nav>
    </v-toolbar>
  </div>
</template>

<script>
import _public from '@/router/public'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeToolbar',

  computed: {
    ...mapGetters({
      mainmenu: 'mainmenu/mainmenu',
    }),
  },

  data () {
    return {
      menus: _public.children
    }
  },

  methods: {
    animateLogo (e, hide = true) {
      if (hide) {
        document.getElementById('brand').classList.add('hidden')
        document.getElementById('animated-brand').classList.remove('hidden')
      } else {
        document.getElementById('brand').classList.remove('hidden')
        document.getElementById('animated-brand').classList.add('hidden')
      }
    }
  }
}
</script>

<style>
.hidden {
  display: none;
  transition: all 0.3s ease-in;
}
</style>
