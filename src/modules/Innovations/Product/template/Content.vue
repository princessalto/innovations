<template>
  <v-container grid-list-lg>
    <v-layout row wrap justify-center align-center>
      <v-flex xl8 lg9 md12 xs12>
        <v-layout row wrap>
          <v-flex xs12>
            <div class="py-5">
              <v-layout row wrap>
                <v-flex sm3 xs12>
                  <h1
                    data-aos="fade-up"
                    class="primary--text"
                    v-html="trans(item.heading)">
                  </h1>
                </v-flex>
                <v-flex sm4 offset-sm1 xs12>
                  <v-card
                    data-aos="fade-up"
                    flat
                    class="py-3"
                    >
                    <div><img class="mb-3" width="50" :src="item.iconOne" alt=""></div>
                    <p class="mb-3">
                      <strong v-html="trans(item.titleOne)"></strong>
                    </p>
                    <p>{{ trans(item.descriptionOne) }}</p>
                  </v-card>
                </v-flex>
                <v-flex sm4 xs12>
                  <v-card
                    data-aos="fade-up"
                    flat
                    class="py-3"
                    >
                    <img class="mb-3" width="50" :src="item.iconTwo" alt="">
                    <p class="mb-3">
                      <strong v-html="trans(item.titleTwo)"></strong>
                    </p>
                    <p>{{ trans(item.descriptionTwo) }}</p>
                  </v-card>
                </v-flex>
                <v-flex offset-sm4 sm4 xs12>
                  <v-card
                    data-aos="fade-up"
                    flat
                    class="py-3"
                    >
                    <img class="mb-3" width="50" :src="item.iconThree" alt="">
                    <p class="mb-3">
                      <strong v-html="trans(item.titleThree)"></strong>
                    </p>
                    <p>{{ trans(item.descriptionThree) }}</p>
                  </v-card>
                </v-flex>
                <v-flex sm4 xs12>
                  <v-card
                    data-aos="fade-up"
                    flat
                    class="py-3"
                    >
                    <img class="mb-3" width="50" :src="item.iconFour" alt="">
                    <p class="mb-3">
                      <strong v-html="trans(item.titleFour)"></strong>
                    </p>
                    <p>{{ trans(item.descriptionFour) }}</p>
                  </v-card>
                </v-flex>
              </v-layout>
            </div>

            <!-- video -->
            <template v-if="item.hasVideo">
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card
                    data-aos="fade-up"
                    flat
                    class="text-xs-center py-5 transparent"
                    >
                    <video loop width="100%" height="auto" controls>
                      <source :src="(item.video)" type="video/mp4">
                      {{ trans('Your browser does not support HTML5 video.') }}
                    </video>
                  </v-card>
                </v-flex>
              </v-layout>
            </template>
            <template v-else>{{ __('') }}</template>
            <!-- video -->

            <v-layout row wrap v-show="item.cta">
              <v-flex xs12>
                <v-card
                  flat
                  class="py-5 text-xs-center"
                  >
                  <h1 class="mb-3">{{ trans(item.endTitle) }}</h1>
                  <v-btn
                    large
                    color="secondary"
                    target="__blank"
                    :href="item.endLink"
                    >
                    {{ trans(item.buttonTitle) }}
                  </v-btn>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
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
  name: 'ProductContent',

  components: {
    AOS,
  },

  // data () {
  //   return {
  //     dataset: {
  //       hasVideo: true,
  //     }
  //   }
  // },

  mounted () {
    setTimeout(function () {
      AOS.init({
        once: true,
      })
    }, 400)
  },

  props: {
    item: {
      type: [Object, Array],
      default: () => {
        return {}
      }
    }
  },
}
</script>
