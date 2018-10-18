<template>
  <v-card flat>
    <!-- <v-textarea tag="div" box label="Description" ref="base-editor"></v-textarea> -->
    <!-- <div class="wysiwyg-editor__label"><label>{{ __(label) }}</label></div> -->
    <v-editor v-model="value" label="Editor"></v-editor>

    <v-fade-transition>
      <v-card light flat color="yellow lighten-4" v-if="!hideHints && data.hintVisibility">
        <v-footer light class="pa-2 mt-2" color="transparent" height="auto">
          <div class="caption">
            <v-tooltip bottom>
              <span slot="activator">
                <v-icon @click="shuffleHints" small color="black">mdi-lightbulb-on</v-icon>
                <strong class="black--text">{{ __('Hint:') }}&nbsp;</strong>
              </span>
              {{ __('Tap icon for more tips') }}
            </v-tooltip>
            <v-fade-transition mode="out-in">
              <span v-show="data.hint" v-html="data.hint"></span>
            </v-fade-transition>
          </div>
          <v-spacer></v-spacer>
          <v-btn light small icon @click="closeHints"><v-icon small>close</v-icon></v-btn>
        </v-footer>
      </v-card>
    </v-fade-transition>
  </v-card>
</template>

<script>
import hints from './data/hints'
import store from './store'
import VEditor from './VEditor'

export default {
  store,

  name: 'WysiwygEditor',

  model: {
    prop: 'value',
  },

  props: {
    hideHints: {
      type: [Boolean],
      default: false,
    },

    label: {
      type: [String],
      default: 'Description',
    },

    toolbar: {
      type: [Object, String],
      default: null,
    },

    value: {
      type: [String],
      default: '',
    },
  },

  components: {
    VEditor,
  },

  data () {
    return {
      data: {
        hint: '',
        hintVisibility: true,
      },
    }
  },

  methods: {
    // Misc
    shuffleHints () {
      let h = Math.floor(Math.random() * hints.length)
      this.data.hint = hints[h]
    },
    closeHints () {
      this.data.hintVisibility = false
    },
  },

  mounted () {
    this.shuffleHints()
  },
}
</script>
