<template>
  <v-container grid-list-lg>
    <v-layout row wrap justify-center align-center>
      <v-flex lg10 md12 xs12>
        <v-card flat class="my-3">
          <v-card-text class="pt-5 text-xs-center">
            <div class="my-5 text-xs-center">
              <h1 class="primary--text mb-3">
                {{ trans('Our Clients') }}
              </h1>
            </div>
            <v-layout row wrap align-center justify-center>
              <template v-for="(item, i) in items">
                <v-flex
                  :key="i"
                  md3 xs12
                  >
                  <!-- <div class="mr-4"> -->
                    <div class="ma-3">
                      <img :width="item.width" :src="item.thumbnail" alt="">
                    </div>
                  <!-- </div> -->
                </v-flex>
              </template>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import store from '@/store'
import AOS from 'aos'
import 'aos/dist/aos.css'
import dole from '@/modules/Innovations/About/assets/images/clients/dole.png'
import pjs from '@/modules/Innovations/About/assets/images/clients/pjs.png'
import iloflag from '@/modules/Innovations/About/assets/images/clients/flag_yellow_high.jpg'
import ilo from '@/modules/Innovations/About/assets/images/clients/ilo.png'

export default {
  store,
  name: 'Clients',

  data () {
    return {
      items: [
        {
          thumbnail: dole,
          width: '50%',
        },
        {
          thumbnail: pjs,
          width: '100%',
        },
        {
          thumbnail: iloflag,
          width: '60%',
        },
        {
          thumbnail: ilo,
          width: '100%',
        },
      ]
    }
  },

  components: {
    AOS
  },

  mounted () {
    this.preventRightClick()

    setTimeout(function () {
      AOS.init({
        once: true,
      })
    }, 400)
  },

  methods: {
    preventRightClick () {
      return false
    }
  }
}
</script>
