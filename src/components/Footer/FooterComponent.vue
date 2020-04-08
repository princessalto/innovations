<template>
  <div id="footer">
    <v-container grid-list-lg>
      <v-card flat class="transparent pt-4">
        <v-layout row wrap>
          <v-flex md4 xs12>
            <v-layout align-start row fill-height>
              <v-flex>
                <!-- <h3 class="subheading mb-3 white--text font__weight--bold">
                  {{ trans('SIGN UP TO OUR NEWSLETTER') }}
                </h3>
                <v-text-field
                  label="Email Address"
                  dark
                  append-icon="alternate_email"
                  box
                  clearable
                  clear-icon="cancel"
                  hide-details
                ></v-text-field> -->
                <div class="mt-2 mb-3">
                  <a href="/">
                    <img width="40" :src="require('@/assets/logo-white.png')" alt="">
                  </a>
                </div>

                <div>
                  <!-- <v-btn target="_blank" href="/contact-us" class="secondary">
                    {{ __('Get in touch') }}
                  </v-btn> -->
                  <p class="white--text"><strong>{{ __('SSA Innovations') }}</strong> {{ __("provides accessible and engaging applications that positively impact people's way of learning and living. Email us at innovations@ssagroup.com to know more!") }}</p>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex offset-md2 md3 xs12>
            <div class="mb-3">
              <p class="white--text t__d--n">
                <strong>Sitemap</strong>
              </p>
            </div>
            <div class="mb-3">
              <a class="white--text t__d--n" href="/">{{ trans('Home') }}</a>
            </div>
            <div class="mb-3">
              <a class="white--text t__d--n" href="/about-us">{{ trans('About') }}</a>
            </div>
            <div class="mb-3">
              <a class="white--text t__d--n" href="/enterprise">{{ trans('Enterprise') }}</a>
            </div>
            <div class="mb-3">
              <a class="white--text t__d--n" href="/contact-us">{{ trans('Contact') }}</a>
            </div>
          </v-flex>
          <v-flex md3 xs12>
            <div class="mb-3">
              <p class="white--text t__d--n">
                <strong>Services</strong>
              </p>
            </div>
            <div class="mb-3">
              <a class="white--text t__d--n" href="/products/augmented-reality">{{ trans('Augmented Reality') }}</a>
            </div>
            <div class="mb-3">
              <a class="white--text t__d--n" href="/products/e-learning">{{ trans('e-Learning') }}</a>
            </div>
            <div class="mb-3">
              <a class="white--text t__d--n" href="/products/mobile-apps">{{ trans('Mobile Application') }}</a>
            </div>
            <div class="mb-3">
              <a class="white--text t__d--n" href="/products/management-systems">{{ trans('Management Systems') }}</a>
            </div>
          </v-flex>
        </v-layout>
        <!-- <v-divider class="grey"></v-divider> -->
        <v-card dark flat class="transparent pt-3">
          <v-card-actions class="justify-center">
            <!-- <v-btn icon small href="https://www.facebook.com/SSAInnovations/" target="_blank">
              <v-icon small>mdi-facebook</v-icon>
            </v-btn> -->
            <!-- <v-btn icon small>
              <v-icon small>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon small>
              <v-icon small>mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon small>
              <v-icon small>mdi-instagram</v-icon>
            </v-btn> -->
            <!-- <v-spacer></v-spacer> -->
            &#169; 2020. All Rights Reserved. SSA Innovations.
          </v-card-actions>
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'FooterComponent',

  props: {
    items: {
      type: [Object, Array],
      default: () => {
        return {}
      }
    }
  },

  data () {
    return {
      dataset: {},
      isEditing: false,
      footer: {

      }
    }
  },

  mounted () {
    this.dataset = Object.assign({}, this.footer, this.items)
  },
}
</script>
