<template>
  <v-card flat class="py-5 text-xs-center">
    <v-layout justify-center align-center row wrap>
      <v-flex xl8 lg9 md10 xs12>
        <v-layout row wrap>
          <v-flex md3 xs12>
            <v-card-text class="mb-4">
              <h1 class="primary--text mb-3">
                {{ trans('Our Core Values') }}
              </h1>
            </v-card-text>
          </v-flex>

          <v-flex md9 xs12>
            <v-layout row wrap>
              <v-flex sm4 xs6>
                <v-card
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  flat
                  class="py-3">
                  <core-values-one-icon class="mb-3" width="50" height="50"></core-values-one-icon>
                  <p>
                    <strong v-html="trans('Creativity')"></strong>
                  </p>
                  <p>{{ trans('"Think outside the box"') }}</p>
                </v-card>
              </v-flex>

              <v-flex sm4 xs6>
                <v-card
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  flat
                  class="py-3">
                  <core-values-two-icon class="mb-3" width="50" height="50"></core-values-two-icon>
                  <p>
                    <strong v-html="trans('Teamwork')"></strong>
                  </p>
                  <p>{{ trans('"No \'I\' in Team"') }}</p>
                </v-card>
              </v-flex>

              <v-flex sm4 xs6>
                <v-card
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  flat
                  class="py-3">
                  <core-values-three-icon class="mb-3" width="50" height="50"></core-values-three-icon>
                  <p>
                    <strong v-html="trans('Fun')"></strong>
                  </p>
                  <p>{{ trans('"Don\'t 4get to fun"') }}</p>
                </v-card>
              </v-flex>

              <v-flex sm4 xs6>
                <v-card
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  flat
                  class="py-3">
                  <core-values-four-icon class="mb-3" width="50" height="50"></core-values-four-icon>
                  <p>
                    <strong v-html="trans('Communication')"></strong>
                  </p>
                  <p>{{ trans('"Reach out"') }}</p>
                </v-card>
              </v-flex>

              <v-flex sm4 xs6>
                <v-card
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  flat
                  class="py-3">
                  <core-values-five-icon class="mb-3" width="50" height="50"></core-values-five-icon>
                  <p>
                    <strong v-html="trans('Quality')"></strong>
                  </p>
                  <p>{{ trans('"Be an 11"') }}</p>
                </v-card>
              </v-flex>

              <v-flex sm4 xs6>
                <v-card
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  flat
                  class="py-3">
                  <core-values-six-icon class="mb-3" width="50" height="50"></core-values-six-icon>
                  <p>
                    <strong v-html="trans('Mutual Respect')"></strong>
                  </p>
                  <p>{{ trans('Listening > Hearing"') }}</p>
                </v-card>
              </v-flex>

              <v-flex sm4 xs6>
                <v-card
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  flat
                  class="py-3">
                  <core-values-seven-icon class="mb-3" width="50" height="50"></core-values-seven-icon>
                  <p>
                    <strong v-html="trans('Mutual Trust')"></strong>
                  </p>
                  <p>{{ trans('"U Got Dis"') }}</p>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import store from '@/store'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  store,
  name: 'CoreValues',

  components: {
    AOS
  },

  mounted () {
    setTimeout(function () {
      AOS.init({
        once: true,
      })
    }, 400)
  },
}
</script>
