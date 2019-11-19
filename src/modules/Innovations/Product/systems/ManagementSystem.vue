<template>
  <section>
    <v-card dark class="gradient__withAnimation">
      <particles>
        <!-- toolbar -->
        <home-toolbar></home-toolbar>
        <!-- toolbar -->

        <!-- banner -->
        <v-container grid-list-lg>
          <v-layout row wrap justify-center align-center>
            <v-flex md5 xs12 order-md1 order-sm2 order-xs2>
              <v-layout align-center justify-center row fill-height>
                <v-card
                  data-aos="fade-right"
                  data-aos-delay="200"
                  flat
                  class="pt-4 transparent"
                  >
                  <v-card-text>
                    <h1 class="display-1 mb-3">
                      <strong v-html="item.bannerTitle"></strong>
                    </h1>
                    <p class="font_-weight--bold mb-3" v-html="item.bannerDescription"></p>
                  </v-card-text>
                </v-card>
              </v-layout>
            </v-flex>

            <v-flex md6 offset-md1 xs12 order-md2 order-sm1 order-xs1>
              <v-card
                data-aos="fade-left"
                data-aos-delay="200"
                flat
                class="transparent mb-4"
                >
                <img
                  @contextmenu.prevent="preventRightClick"
                  :src="item.thumbnail"
                  alt=""
                  width="100%"
                >
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <!-- banner -->
      </particles>
    </v-card>

    <!-- content -->
    <v-container grid-list-lg>
      <v-layout row wrap justify-center align-center>
        <v-flex lg11 md12 xs12>
          <v-layout row wrap>
            <v-flex xs12>
              <div class="py-5 text-xs-center">
                <h2>{{ trans('Sneak a peek at our efficient and flexible platforms') }}</h2>
              </div>
              <div class="py-5">
                <v-layout row wrap>
                  <template v-for="(item, i) in content.items">
                    <v-flex :offset-md1="true" md4 xs12 :key="i">
                      <v-card
                        hover
                        height="100%"
                        :href="item.link"
                        data-aos="fade-up"
                        :data-aos-duration="item.aosDuration"
                        flat
                        class="py-3"
                        >
                        <div class="px-4">
                          <img
                            @contextmenu.prevent="preventRightClick"
                            width="100%"
                            :src="item.thumbnail"
                            alt=""
                          >
                        </div>
                        <v-card-text class="mb-3 text-xs-center">
                          <h3 class="headline font-weight-bold mb-3 secondary--text" v-html="trans(item.title)"></h3>
                          <p class="title">{{ trans(item.description) }}</p>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </template>
                </v-layout>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- content -->

    <footer-component></footer-component>
  </section>
</template>

<script>
import store from '@/store'
import msBanner from './assets/images/msBanner.svg'
import lms from './assets/images/lmsBanner.svg'
// import cms from './assets/images/cmsBanner.svg'
import hrms from './assets/images/hrmsBanner.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  store,
  name: 'ManagementSystem',

  components: {
    AOS
  },

  data () {
    return {
      bannerSubtitle: true,
      item: {
        thumbnail: msBanner,
        bannerTitle: 'Our Software Solutions',
        bannerDescription: 'Are you looking for a system with detailed customer tracking, real-time updating, or cloud-based operations to access your important data wherever you are? Look no further. We got your back.',
      },
      content: {
        items: [
          {
            aosDuration: '400',
            thumbnail: lms,
            title: 'Rippl3s',
            description: 'Learning Management System',
            link: 'management-systems/lms'
          },
          // {
          //   aosDuration: '500',
          //   thumbnail: cms,
          //   title: 'Pluma',
          //   description: 'Content Management System',
          //   link: 'management-systems/cms'
          // },
          {
            aosDuration: '600',
            thumbnail: hrms,
            title: 'Ponos',
            description: 'Human Resource Management System',
            link: 'management-systems/hrms'
          },
        ]
      }
    }
  },

  mounted () {
    this.preventRightClick()

    AOS.init({
      once: true,
    })
  },

  methods: {
    preventRightClick () {
      return false
    }
  }
}
</script>
