<template>
  <v-layout row wrap align-center justify-center>
    <v-flex lg6 md10 xs12>
      <v-card flat class="text-xs-center py-5">
        <v-layout row wrap fill-height align-center justify-center>
          <v-flex md10 xs12>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              >
              <img
                @contextmenu.prevent="preventRightClick"
                width="100%"
                :src="require('@/modules/Innovations/About/assets/images/our-approach--infographics.svg')"
                alt=""
                >
            </div>
          </v-flex>
        </v-layout>
      </v-card>

      <v-card flat class="py-5">
        <v-card-text class="text-xs-center mb-4">
          <h1 class="primary--text mb-3">
            {{ trans('Our Approach') }}
          </h1>
        </v-card-text>

        <p>
          <strong>{{ trans('Unrestricted:') }}</strong>
          {{ trans('We ensure that our solutions can be accessed by individuals and communities globally.') }}
        </p>
        <p>
          <strong>{{ trans('Future-proofed:') }}</strong>
          {{ trans('We utilise state-of-the-art technologies and up-to-date ideologies for our clients to get the most bang for their buck.') }}
        </p>
        <p>
          <strong>{{ trans('Human-centric:') }}</strong>
          {{ trans('We create learning paths where every stakeholder is at the centre of the experience, tailored specifically to suit each need.') }}
        </p>
        <p>
          <strong>{{ trans('Engagement value:') }}</strong>
          {{ trans('We want to help address life\'s complexities by crafting gamified experiences.') }}
        </p>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Approach',
}
</script>
