<template>
  <v-btn icon :small="small" @click="toggle">
    <v-tooltip bottom v-if="value">
      <v-icon slot="activator" :small="small">{{ negativeIcon }}</v-icon>
      <span>{{ __(negativeText) }}</span>
    </v-tooltip>
    <v-tooltip bottom v-else>
      <v-icon slot="activator" :small="small">{{ positiveIcon }}</v-icon>
      <span>{{ __(positiveText) }}</span>
    </v-tooltip>
  </v-btn>
</template>

<script>
export default {
  name: 'ToggleButton',

  model: {
    prop: 'value',
  },

  props: {
    value: {
      type: [Boolean],
      default: true,
    },
    small: {
      type: [Boolean],
      default: true,
    },
    positiveIcon: {
      type: [String],
      default: 'mdi-arrow-expand',
    },
    negativeIcon: {
      type: [String],
      default: 'mdi-arrow-collapse',
    },
    positiveText: {
      type: [String],
      default: 'Expand All',
    },
    negativeText: {
      type: [String],
      default: 'Shrink All',
    },
  },

  methods: {
    toggle () {
      this.$emit('input', !this.value)
    },
  },
}
</script>
