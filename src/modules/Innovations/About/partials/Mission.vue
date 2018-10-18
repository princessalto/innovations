<template>
  <section>
    <v-card height="100" flat class="transparent"></v-card>
    <v-card color="primary" dark>
      <v-img height="300" :src="banner">
        <v-layout row wrap justify-end fill-height align-center>
          <v-flex md3 sm6 xs12>
            <v-card-text>
              <h3 class="mb-3">{{ trans('Our Mission') }}</h3>
              <p>{{ trans('To provide accessible and engaging innovations that will positively impact people’s way of learning and living') }}</p>
            </v-card-text>
          </v-flex>
          <v-flex md1 xs12></v-flex>
        </v-layout>
      </v-img>
    </v-card>
    <v-card height="100" flat class="transparent"></v-card>
  </section>
</template>

<script>
import banner from '@/modules/Innovations/About/assets/images/mission-banner.png'

export default {
  name: 'Mission',

  components: {
    banner
  },

  data () {
    return {
      banner: banner,
    }
  }
}
</script>
