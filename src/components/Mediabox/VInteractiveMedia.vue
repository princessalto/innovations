<template>
  <v-card flat role="button" tabindex="0" @click.native="open" @keyup.enter.native="open">
    <v-input
      class="v-interactive-media-field v-text-field--outline"
      hide-details
    >
      <div class="v-interactive-media-field__slot">
        <label class="v-label">{{ __(label) }}</label>
        <!-- Interactive -->
        <div class="py-4 px-2">
          <mediabox
            :no-media-text="trans('Select Media')"
            hide-toolbar
            color="transparent"
            v-model="value"
          ></mediabox>
        </div>
        <!-- Interactive -->
      </div>
    </v-input>
  </v-card>
</template>

<script>
export default {
  name: 'VInteractiveMedia',

  model: {
    prop: 'value',
  },

  props: {
    label: {
      type: [String],
      default: 'Interactive Media',
    },
  },

  data () {
    return {
      value: '',
    }
  },

  methods: {
    open () {
      // alert('sd')
    },
  },
}
</script>

<style lang="stylus" scoped>
.v-interactive-media-field {
  &__slot {
    width: 100%;
    .wysiwyg-interactive-media {
      .ck-content.ck-interactive-media__editable {
        padding-top: 1rem;
      }
    }
  }

  .v-label {
    position: absolute;
    top: 10px;
    left: 10px;
    right: auto;
  }
}
</style>
