<template>
  <v-card flat class="">
    <v-card-text class="py-5 text-xs-center">
      <div class="my-5 text-xs-center">
        <h1 class="primary--text mb-3">
          {{ trans('How We Work') }}
        </h1>
      </div>
      <p
        class="mb-3"
        v-html="trans('We go the extra mile to provide our clients with top notch creative services, by intertwining art with technology, <br/> mixing anchor points with css codes, and converting text manuals into interactive instructional designs.')"
        >
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import store from '@/store'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  store,
  name: 'HowWeWork',

  components: {
    AOS
  },

  mounted () {
    this.preventRightClick()

    setTimeout(function () {
      AOS.init({
        once: true,
      })
    }, 400)
  },

  methods: {
    preventRightClick () {
      return false
    }
  }
}
</script>
