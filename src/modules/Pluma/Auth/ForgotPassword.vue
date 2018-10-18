<template>
  <section>
    <v-container fluid fill-height>
      <v-layout row wrap fill-height align-center justify-center>
        <v-flex xs12 sm7 md5 fill-height align-center justify-center>

          <span>
            <brand size="40px"></brand>
            <strong>{{ app.title }}</strong>
          </span>

          <v-slide-x-transition mode="out-in">
            <component :is="component" v-model="component"></component>
          </v-slide-x-transition>

        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import app from '@/config/app'

export default {
  name: 'ForgotPassword',

  data () {
    return {
      app,
      component: () => import('./partials/ForgotPasswordForm.vue')
    }
  },
}
</script>
