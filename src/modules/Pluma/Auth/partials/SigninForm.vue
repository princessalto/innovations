<template>
  <div>
    <v-form lazy-validation v-model="resource.form.model" method="POST" autocomplete="off" @keyup.enter="login" @submit.prevent="login">

      <input type="hidden" v-model="resource.item._token" name="_token">

      <v-text-field
        :data-vv-as="trans('Username or Email')"
        :error-messages="errors.collect('username')"
        :label="trans('Username or Email')"
        autocomplete="off"
        box
        name="username"
        v-focus
        v-model="resource.item.username"
        v-validate="'required'"
        >
      </v-text-field>

      <v-text-field
        @click:append="() => (resource.item.passwordVisible = !resource.item.passwordVisible)"
        :append-icon="resource.item.passwordVisible ? 'visibility' : 'visibility_off'"
        :data-vv-as="trans('Password')"
        :error-messages="errors.collect('password')"
        :label="trans('Password')"
        :type="resource.item.passwordVisible ? 'text': 'password'"
        autocomplete="off"
        box
        name="password"
        v-model="resource.item.password"
        v-validate="'required'"
        >
      </v-text-field>

      <v-btn
        :loading="resource.form.loading"
        @click.prevent="login(resource.item)"
        block
        class="mx-0 mb-4"
        color="primary"
        large
        ripple
        type="submit"
        >
        {{ 'Login' }}
      </v-btn>

      <v-checkbox
        :label="trans('Remember me')"
        color="primary"
        hide-details
        name="remember"
        v-model="resource.item.remember"
        >
      </v-checkbox>
    </v-form>
  </div>
</template>

<script>
import { errorbag } from '@/utils/errorbag'

export default {
  $_veeValidate: {
    validator: 'new'
  },

  name: 'Signin',

  data () {
    return {
      resource: {
        form: {
          loading: false,
          model: false,
        },
        item: {
          remember: true,
          username: '',
          password: '',
        },
      },
    }
  },

  methods: {
    login (credentials) {
      this.resource.form.loading = true
      this.$validator.reset()
      this.$validator.validateAll()
        .then(ok => {
          if (ok) {
            this.$store.dispatch('authentication/login', credentials)
              .then((response) => {
                this.$router.push({name: 'admin'})
                this.$store.dispatch('sidebar/toggle', {model: true})
                this.$store.dispatch('utilitybar/toggle', {model: true})
                this.$store.dispatch('breadcrumbs/toggle', {model: true})
              })
              .catch((err) => {
                errorbag(err.response, this.errors)
              })
          }

          this.resource.form.loading = false
        })
    },

    validate () {
      //
    }
  }
}
</script>
