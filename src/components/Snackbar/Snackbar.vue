<template>
  <v-snackbar
    class="pa-4"
    right
    bottom
    :timeout="snackbar.timeout"
    :vertical="snackbar.mode === 'vertical'"
    v-model="snackbar.model"
    >

    <span
      v-html="snackbar.text"
      >
    </span>

    <v-btn
      v-if="snackbar.button"
      @click="snackbarCallback()"
      icon
      small
      >
      <v-icon small v-if="snackbar.buttonIcon">{{ snackbar.buttonIcon }}</v-icon>
      <template v-else>{{ snackbar.buttonText }}</template>
    </v-btn>
  </v-snackbar>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  store,
  name: 'Snackbar',
  computed: {
    ...mapGetters({
      snackbar: 'snackbar/snackbar'
    })
  },
  methods: {
    close: function (snack, hide) {
      this.$store.dispatch('snackbar/TOGGLE_TOAST', Object.assign(this.snackbar, snack, { model: false }))
    },

    snackbarCallback: function () {
      this.snackbar.buttonCallback()
    }
  }
}
</script>
