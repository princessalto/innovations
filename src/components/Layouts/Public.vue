<template>
  <v-app v-cloak toolbar footer :dark="app.dark">
    <!-- Main Content -->
    <v-content>
      <!-- Main -->
      <v-slide-y-transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </v-slide-y-transition>
      <!-- Main -->
    </v-content>
    <!-- Main Content -->
    <progressbar></progressbar>
  </v-app>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  store,

  computed: {
    ...mapGetters({
      app: 'app/app',
    }),
  },

  mounted () {
    window.addEventListener('load', function (event) {
      document.getElementById('loader').style.display = 'none'
    })
  }
}
</script>
