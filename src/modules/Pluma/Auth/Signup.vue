<template>
  <section>
    <v-container fluid fill-height>
      <v-layout row wrap fill-height align-center justify-center>
        <v-flex xs12 sm7 md5 fill-height align-center justify-center>

          <span>
            <brand size="40px"></brand>
            <strong>{{ app.title }}</strong>
          </span>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo aspernatur id consectetur modi voluptatum numquam doloribus facilis aut eveniet unde obcaecati, hic, recusandae, dolorem quos consequuntur aperiam! Perspiciatis, fuga, dolorum.

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
