<template>
  <v-container grid-list-lg>
    <v-layout row wrap justify-center align-center>
      <v-flex xl8 lg9 md12 xs12>
        <v-layout row wrap>
          <v-flex xs12>
            <template>
              <div class="py-5">
                <!-- <div>
                  <iframe src="https://rippl3s.com/business-card" height="500" width="600"></iframe>
                </div> -->
                <div
                  v-for="(poster, i) in item.items"
                  :key="i"
                  >
                  <v-layout align-center justify-center row fill-height>
                    <v-flex xs12>
                      <div class="mb-2 text-xs-center">
                        <h1 class="display-1 secondary--text font-weight-bold"
                          v-html="poster.title"></h1>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout align-center justify-center row fill-height>
                    <v-flex md8 xs12>
                      <v-card>
                        <v-img :src="poster.thumbnail"></v-img>
                      </v-card>
                      <v-card flat height="150"></v-card>
                    </v-flex>
                  </v-layout>
                </div>
              </div>

              <!-- handwash technique -->
              <v-layout row wrap>
                <v-flex xs12>
                  <div class="mb-2 text-xs-center">
                    <h1 class="display-1 secondary--text font-weight-bold"
                      v-html="item.handwashTitle"></h1>
                  </div>
                </v-flex>
              </v-layout>
              <div class="py-5">
                <v-layout align-center justify-center row fill-height>
                  <v-flex md8 xs12>
                    <v-card>
                      <v-img :src="item.handwashImg"></v-img>
                    </v-card>
                    <v-card flat height="150"></v-card>
                  </v-flex>
                </v-layout>
              </div>
              <!-- handwash technique -->

              <!-- business card -->
              <div class="py-5">
                <v-layout row wrap>
                  <v-flex xs12>
                    <div class="mb-2 text-xs-center">
                      <h1 class="display-1 secondary--text font-weight-bold"
                        v-html="item.cardTitle"></h1>
                    </div>
                  </v-flex>
                </v-layout>
                <v-layout align-center justify-center row fill-height>
                  <v-flex md8 xs12>
                    <v-card>
                      <v-img :src="item.cardImg"></v-img>
                    </v-card>
                    <v-card flat height="150"></v-card>
                  </v-flex>
                </v-layout>
              </div>
              <!-- business card -->
            </template>
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
  name: 'Poster',

  components: {
    AOS,
  },

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
