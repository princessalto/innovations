<template>
  <section>
    <v-card class="gradient__withAnimation">
      <home-toolbar></home-toolbar>
      <banner></banner>
    </v-card>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <executives></executives>
          <clients></clients>
          <how-we-work></how-we-work>
        </v-flex>
      </v-layout>
    </v-container>

    <mission></mission>

    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <approach></approach>
          <core-values></core-values>
        </v-flex>
      </v-layout>
    </v-container>

    <footer-component></footer-component>
  </section>
</template>

<script>
import store from '@/store'
import Banner from './partials/Banner'
import Executives from './partials/Executives'
import Clients from './partials/Clients'
import HowWeWork from './partials/HowWeWork'
import Mission from './partials/Mission'
import Approach from './partials/Approach'
import CoreValues from './partials/CoreValues'

export default {
  store,

  name: 'About',

  components: {
    Banner,
    Executives,
    Clients,
    HowWeWork,
    Mission,
    Approach,
    CoreValues,
  },

  data () {
    return {}
  },
}
</script>
