<template>
  <v-fade-transition>
    <v-card light flat color="light-blue lighten-4" v-if="visible">
      <v-footer light class="pa-2 mt-2" color="transparent" height="auto">
        <div class="caption">
          <v-tooltip bottom>
            <span slot="activator">
              <v-icon @click="shuffle" small color="black">mdi-lightbulb-on</v-icon>
              <strong class="black--text">{{ __('Hint:') }}&nbsp;</strong>
            </span>
            {{ __('Tap icon for more tips') }}
          </v-tooltip>
          <v-fade-transition mode="out-in">
            <span v-show="hint" v-html="hint"></span>
          </v-fade-transition>
        </div>
        <v-spacer></v-spacer>
      </v-footer>
    </v-card>
  </v-fade-transition>
</template>

<script>
import _hints from './data/hints'

export default {
  name: 'Hints',

  props: {
    hide: [Boolean],
    default: false,
  },

  computed: {
    visible () {
      return !this.hide
    },
  },

  data () {
    return {
      hint: this.shuffle()
    }
  },

  methods: {
    shuffle () {
      // hints
      let h = Math.floor(Math.random() * _hints.length)

      this.hint = _hints[h]
    },
  },

  mounted () {
    this.shuffle()
  },
}
</script>
