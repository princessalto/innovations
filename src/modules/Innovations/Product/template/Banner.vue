<template>
  <v-container grid-list-lg>
    <v-layout row wrap justify-center align-center>
      <v-flex md5 xs12 order-md1 order-sm2 order-xs2>
        <v-layout align-center justify-center row fill-height>
          <v-card
            flat
            class="pt-4 transparent"
            data-aos="fade-right"
            data-aos-delay="200"
            >
            <v-card-text>
              <h1 class="display-1 mb-3">
                <strong v-html="item.title"></strong>
              </h1>
              <h3 class="mb-3" v-html="item.subtitle"></h3>
              <p class="font__weight--bold mb-3" v-html="item.description"></p>
              <v-btn
                large
                color="secondary"
                v-show="item.bannerBtn"
                :href="item.link"
                target="__blank"
                v-html="item.button">
              </v-btn>
            </v-card-text>
          </v-card>
        </v-layout>
      </v-flex>

      <v-flex md6 offset-md1 xs12 order-md2 order-sm1 order-xs1>
        <v-card
          flat
          class="transparent mb-4"
          data-aos="fade-left"
          data-aos-delay="200"
          >
          <img
            @contextmenu.prevent="preventRightClick"
            :src="item.thumbnail"
            alt=""
            width="100%"
          >
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import store from '@/store'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  store,
  name: 'ProductBanner',

  props: {
    item: {
      type: [Object, Array],
      default: () => {
        return {}
      }
    }
  },

  components: {
    AOS,
  },

  mounted () {
    this.preventRightClick()
    setTimeout(function () {
      AOS.init()
    }, 400)
  },

  methods: {
    preventRightClick () {
      return false
    }
  }
}
</script>
