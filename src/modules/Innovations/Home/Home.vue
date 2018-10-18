<template>
  <div>
    <particles class="home-gradient">
      <home-toolbar></home-toolbar>

      <div class="content text-xs-center hide-on-hover">
        <v-container grid-list-lg>
          <div data-aos="zoom-in" data-aos-easing="ease">
          <p class="title font__weight--bold">
            {{ trans('Ready to move forward?') }}
          </p>
          <h2 v-html="trans('Explore our accessible and engaging innovations <br/> for learning and living.')"></h2>
          </div>
        </v-container>
      </div>

      <div class="hidden-sm-and-down">
        <grid-layout-web></grid-layout-web>
      </div>
      <div class="hidden-md-and-up">
        <grid-layout-mobile></grid-layout-mobile>
      </div>
    </particles>

    <!-- <div id="bee" class="hidden-sm-and-down">
      <v-btn fab color="secondary" medium class="elevation-3">
        <v-icon>add</v-icon>
      </v-btn>
    </div> -->
  </div>
</template>

<script>
import store from '@/store'
import LogoIcon from '@/components/Icons/LogoIcon'
import GridLayoutWeb from './partials/GridLayoutWeb'
import GridLayoutMobile from './partials/GridLayoutMobile'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  store,

  name: 'Home',

  components: {
    LogoIcon,
    GridLayoutWeb,
    GridLayoutMobile,
    AOS,
  },

  mounted () {
    setTimeout(function () {
      AOS.init()
    }, 400)
  }
}
</script>

<style lang="stylus" scoped>
.hide-on-hover {
  transition: all 0.3s ease-in-out;

  &--active {
    opacity: 0;
  }
}
</style>
