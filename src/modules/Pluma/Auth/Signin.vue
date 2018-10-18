<template>

  <v-container fluid fill-height>
    <v-layout row wrap fill-height align-center justify-center>
      <v-flex xs12 sm6 md4 lg3 fill-height align-center justify-center>

        <v-card>
          <v-card-text class="text-xs-center">
            <img class="mb-3" width="80rem" :src="app.meta.logo" :alt="app.meta.title">
            <h4 class="headline" v-html="app.meta.title"></h4>
            <div class="subheading" v-html="app.meta.tagline"></div>
          </v-card-text>

          <v-card-text>

            <!-- Login Form -->
            <v-slide-y-reverse-transition mode="out-in">
              <signin-form></signin-form>
            </v-slide-y-reverse-transition>
            <!-- Login Form -->

          </v-card-text>

          <v-card-actions>
            <router-link
              :to="{name: 'password.forgot'}"
              class="caption text-emphasis--medium"
              exact
              v-html="trans('Forgot password?')"></router-link>
            <v-spacer></v-spacer>
            <router-link class="caption text-emphasis--medium" :to="{name: 'register.show'}" v-html="trans('Create Account')"></router-link>
          </v-card-actions>
        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'
import SigninForm from './partials/SigninForm'

export default {
  store,

  name: 'Login',

  computed: {
    ...mapGetters({
      auth: 'authentication/auth',
      app: 'app/app',
      dialogbox: 'dialogbox/dialogbox',
    }),

    tooManyAttempts () {
      return this.$store.getters['authentication/auth'].attempts >= 3
    }
  },

  components: {
    SigninForm,
  },

  data () {
    return {
      resource: {
        form: {
          model: false,
        },
        item: [],
      },
      alert: {
        model: false,
      },
    }
  },

  mounted () {
    this.$store.dispatch('sidebar/toggle', {model: false})
    this.$store.dispatch('utilitybar/toggle', {model: false})
  }
}
</script>
