<template>
  <section>
    <v-toolbar
      flat
      color="transparent"
      >
      <v-icon v-if="page.icon">{{ page.icon }}</v-icon>
      <v-toolbar-title>{{ __(page.title) }}</v-toolbar-title>
    </v-toolbar>
  </section>
</template>

<script>
export default {
  name: 'Create',

  computed: {
    page: function () {
      return this.$route.meta
    },
  },
}
</script>
