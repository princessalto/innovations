<template>
  <v-card flat color="transparent">
    <v-card-title class="display-2">{{ __('Instructions sent.') }}</v-card-title>
    <v-card-text>
      <p>{{ __(`We have sent an email with further instructions regarding password recovery.`) }}</p>
      <p>{{ __(`Check your spam folder if no email was received in your inbox.`) }}</p>
      <p>{{ __(`The email will expire within an hour. You may resend another request `) }} <a @click="back">{{ __('here') }} {{ __('or by clicking the button below') }}.</a></p>
      <v-btn class="ma-0" @click="back">{{ __('Send Another Request') }}</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ForgotPasswordSent',

  methods: {
    back () {
      this.$emit('input', () => import('./ForgotPasswordForm.vue'))
    },
  },
}
</script>
