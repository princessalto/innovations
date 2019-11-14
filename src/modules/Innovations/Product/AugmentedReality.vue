<template>
  <section>
    <v-card dark class="gradient__withAnimation">
      <particles>
        <home-toolbar></home-toolbar>
        <!-- Banner -->
        <div class="py-5">
          <v-layout align-center justify-center row fill-height>
            <v-flex xl6 lg6 md10 xs12>
              <v-card
                flat
                class="pt-4 transparent text-xs-center"
                data-aos="fade-right"
                data-aos-delay="200"
                >
                <v-card-text>
                  <h1 class="display-1 mb-3">
                    <strong v-html="banner.title"></strong>
                  </h1>
                  <h3 class="mb-3" v-html="banner.subtitle"></h3>
                  <p class="font__weight--bold mb-3">
                    {{ __('SSARapp lets you create an engaging AR experience with us by bringing our print materials to life. Use this app to scan our') }}
                    <v-menu open-on-hover offset-y bottom max-width="500px">
                      <span class="tooltip-text" slot="activator">
                        {{ __('marker images') }}
                      </span>
                      <v-card>
                        <v-card-text>
                          <span>
                            {{ __('Recognition-based Augmented Reality uses a camera to identify visual markers called Marker Images. These marker images contain unique “anchor points” that the AR app latches on to and considers the “frame” of the AR content. Though Marker Images do not necessarily have to be printed, the stability of the augmented reality content depends on how clear the Marker Images are. As such, it is recommended that marker images be either be digitally displayed on a screen or printed on a paper with a size no less that the size of A4 paper.') }}
                          </span>
                        </v-card-text>
                      </v-card>
                    </v-menu>
                    below and unlock hidden content, virtually learning more about our organisation <br> - the interactive way
                  </p>
                  <v-btn
                    large
                    color="secondary"
                    :href="banner.link"
                    target="__blank"
                    v-html="banner.button">
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </div>
        <!-- Banner -->
      </particles>
    </v-card>

    <poster :item="poster"></poster>

    <footer-component></footer-component>
  </section>
</template>

<script>
import store from '@/store'
import ProductBanner from './template/Banner'
import Poster from './template/Poster'
import posterOne from './assets/posters/poster-1-QR.png'
import posterTwo from './assets/posters/poster-2-about.png'
import posterThree from './assets/posters/poster-3-culinary.png'
import posterFour from './assets/posters/poster-4-academy.png'
import cardImg from './assets/posters/bcard.png'
import handwash from './assets/posters/handwash.png'

export default {
  store,
  name: 'AugmentedReality',

  components: {
    ProductBanner,
    Poster,
  },

  data () {
    return {
      banner: {
        title: 'Take a glimpse of SSA Group through <br> Augmented Reality',
        button: 'Download SSARAPP',
        link: 'http://l.ead.me/bb6DSk',
      },
      poster: {
        heading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat atque eveniet aspernatur odit, accusamus cum vel, numquam magnam, fuga cupiditate officiis. Sit molestiae deserunt quo accusantium explicabo facilis officia sapiente.',
        handwashTitle: 'Be informed!',
        handwashImg: handwash,
        cardTitle: 'Here\'s our card!',
        cardImg: cardImg,
        items: [
          {
            thumbnail: posterOne,
            title: 'Recognition-based AR Technology',
          },
          {
            thumbnail: posterTwo,
            title: 'Building capabilities',
          },
          {
            thumbnail: posterThree,
            title: 'Let\'s get baking!',
          },
          {
            thumbnail: posterFour,
            title: 'Nurturing talents for the future economy',
          },
        ]
      },
    }
  },
}
</script>
