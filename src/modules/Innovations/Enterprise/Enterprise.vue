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
        <v-flex xl8 lg9 md12 xs12>
          <v-layout row wrap>
            <v-flex xs12>
              <div class="py-5 text-xs-center">
                <h2>{{ trans('Pioneering digital transformation and enterprise sustainability') }}</h2>
              </div>
              <div class="py-5">
                <v-layout row wrap>
                  <template v-for="(item, i) in content.items">
                    <v-flex md4 xs12 :key="i">
                      <v-card
                        data-aos="fade-up"
                        :data-aos-duration="item.aosDuration"
                        flat
                        class="py-3"
                        >
                        <div class="mb-3">
                          <img
                            @contextmenu.prevent="preventRightClick"
                            width="300"
                            :src="item.thumbnail"
                            alt=""
                          >
                        </div>
                        <p class="mb-3">
                          <strong v-html="trans(item.title)"></strong>
                        </p>
                        <p>{{ trans(item.description) }}</p>
                      </v-card>
                    </v-flex>
                  </template>
                </v-layout>
              </div>

              <v-layout row wrap>
                <v-flex xs12>
                  <v-card
                    flat
                    class="py-5 text-xs-center"
                    >
                    <h1 class="mb-3">{{ trans('Explore the infinite possibilities today.') }}</h1>
                    <v-btn
                      large
                      color="secondary"
                      href="mailto:abigail.ssagroup.com"
                      >
                      {{ trans('Email Us') }}
                    </v-btn>
                  </v-card>
                </v-flex>
              </v-layout>
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
import EnterpriseBanner from '@/modules/Innovations/Enterprise/assets/images/EnterpriseBanner.png'
import EnterpriseELearning from '@/modules/Innovations/Enterprise/assets/images/enterprise-eLearning.png'
import EnterpriseRippl3s from '@/modules/Innovations/Enterprise/assets/images/enterprise-rippl3s.png'
import EnterpriseMobileApps from '@/modules/Innovations/Enterprise/assets/images/enterprise-mobileapp.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  store,
  name: 'Enterprise',

  components: {
    AOS
  },

  data () {
    return {
      bannerSubtitle: true,
      item: {
        thumbnail: EnterpriseBanner,
        bannerTitle: 'Is your business ready for the future?',
        bannerSubtitle: 'It’s an engaging learning experience right at your fingertips',
        bannerDescription: 'From streamlining business processes, automating tedious tasks, and enhancing employee performance through mobile productivity, we provide accessible and custom-built support to help drive organisations towards survival in the 21st century.',
        bannerButton: 'Try Now'
      },
      content: {
        items: [
          {
            aosDuration: '400',
            thumbnail: EnterpriseELearning,
            title: 'Large scale workforce training',
            description: 'We provide customised workplace learning on demand and we help design platforms that would allow organisations to maximise their fullest human capital potential.'
          },
          {
            aosDuration: '500',
            thumbnail: EnterpriseRippl3s,
            title: 'Effective performance tracking',
            description: 'Through a  combined dashboard channel, access valuable metrics on employee performance, revenue growth, production, and distribution.'
          },
          {
            aosDuration: '600',
            thumbnail: EnterpriseMobileApps,
            title: 'Accessible digital solutions',
            description: 'Connect with various networks and utilise systems for collaboration as we innovate everyday operations, from content management to billing systems.'
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
