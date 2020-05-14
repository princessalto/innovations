<template>
  <div class="grid__layout">
    <v-container
      fluid
      grid-list-lg
      class="pa-2 follower-container"
      >
      <v-layout row wrap>
        <v-flex
          xs4
          :key="i"
          v-for="(item, i) in home.products">
          <v-card
            dark
            ripple
            class="transparent"
            flat
            color="primary"
            exact
            :href="item.link">
            <v-img
              color="secondary"
              :src="item.thumbnail"
              height="200px"
              class="pa-2"
              :class="item.classMedia"
              @contextmenu.prevent="preventRightClick"
              >
              <v-layout
                fill-height
                justify-end
                align-end
                >
                <v-btn
                  small
                  dark
                  color="secondary"
                  icon
                  >
                  <v-icon small>add</v-icon>
                </v-btn>
              </v-layout>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import store from '@/store'
import ManagementSystem from '@/modules/Innovations/Home/assets/images/ManagementSystem.png'
import eLearning from '@/modules/Innovations/Home/assets/images/ELearning.png'
import MobileApp from '@/modules/Innovations/Home/assets/images/MobileApp.png'
export default {
  store,

  name: 'GridLayoutMobile',

  components: {
  },

  data () {
    return {
      home: {
        products: [
          {
            title: 'Immersive and interactive courses for the modern student',
            thumbnail: eLearning,
            classMedia: 'second-child',
            link: '/products/e-learning',
          },
          {
            title: 'Customisable platform for collaborative learning anytime, anywhere',
            thumbnail: ManagementSystem,
            classMedia: 'first-child',
            link: '/products/management-systems',
          },
          {
            title: 'Learning and training made engaging and fun',
            thumbnail: MobileApp,
            classMedia: 'third-child',
            link: '/products/mobile-apps',
          }
        ]
      }
    }
  },

  mounted () {
    this.preventRightClick()
  },

  methods: {
    preventRightClick () {
      return false
    }
  }
}
</script>
