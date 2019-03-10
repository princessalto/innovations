<template>
  <v-container grid-list-lg>
    <v-layout row wrap justify-center align-center>
      <v-flex xl8 lg10 md12 xs12>
        <v-card flat class="my-5">
          <v-card-text class="py-5 text-xs-center">
            <div class="my-5 text-xs-center">
              <h1 class="primary--text mb-3">
                {{ trans('Our Clients') }}
              </h1>
            </div>
            <v-layout row wrap align-center justify-center>
              <template v-for="(item, i) in items">
                <v-flex
                  :key="i"
                  md4 xs12
                  >
                  <img :width="item.width" :src="item.thumbnail" alt="">
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
import ilo from '@/modules/Innovations/About/assets/images/clients/ilo.png'
import pjs from '@/modules/Innovations/About/assets/images/clients/pjs.png'

export default {
  store,
  name: 'Clients',

  data () {
    return {
      items: [
        {
          thumbnail: dole,
          width: '200',
        },
        {
          thumbnail: ilo,
          width: '200',
        },
        {
          thumbnail: pjs,
          width: '300',
        }
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
