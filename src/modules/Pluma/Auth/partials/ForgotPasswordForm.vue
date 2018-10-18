<template>
  <v-card flat color="transparent">
    <v-card-title class="display-2">{{ __('Having troubling signing in?') }}</v-card-title>
    <v-card-text>
      <p>{{ __("Don't worry. Resetting your password is easy.") }}</p>
      <p>{{ __("Just tell us the email address you registered with us and we'll send you a message for further instructions.") }}</p>

      <v-form @submit.prevent="submit">
        <v-card flat color="transparent" class="mb-3">
          <h2 class="headline">{{ __('Forgot Password') }}</h2>
          <v-text-field
            :label="trans('Email')"
            :placeholder="trans(`The email you've provided`)"
          ></v-text-field>
          <v-card-actions class="pa-0">
            <v-btn
              large
              type="submit"
            >{{ __('Continue ') }}</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-form>

    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ForgotPasswordForm',

  methods: {
    submit () {
      this.$emit('input', () => import('./ForgotPasswordSent.vue'))
      // this.$router.go({name: 'password.sent'})
    },
  },
}
</script>
