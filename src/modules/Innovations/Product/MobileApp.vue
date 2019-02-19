<template>
  <section>
    <v-card dark class="gradient__withAnimation">
      <particles>
        <home-toolbar></home-toolbar>
        <product-banner :item="banner"></product-banner>
      </particles>
    </v-card>

    <product-content :item="content"></product-content>

    <footer-component></footer-component>
  </section>
</template>

<script>
import store from '@/store'
import ProductBanner from './template/Banner'
import ProductContent from './template/Content'
import MobileAppBanner from '@/modules/Innovations/Product/assets/images/MobileAppBanner.svg'
import iconOne from './assets/icons/MobileApp/1.svg'
import iconTwo from './assets/icons/MobileApp/2.svg'
import iconThree from './assets/icons/MobileApp/3.svg'
import iconFour from './assets/icons/MobileApp/4.svg'
import video from './assets/videos/MobileApp.mp4'

export default {
  store,
  name: 'Ripples',

  components: {
    ProductBanner,
    ProductContent,
  },

  data () {
    return {
      banner: {
        thumbnail: MobileAppBanner,
        title: 'Gamified Learning in the Palm of Your Hand',
        description: 'Forged from the depths of our innovative minds, we offer cutting edge apps for the modern learner.',
        button: 'Discover',
      },

      content: {
        heading: 'Function better in a technological-driven society',
        iconOne: iconOne,
        titleOne: 'Real-life simulations',
        descriptionOne: 'Familiarise with everyday hustles, without the worries of committing real errors',

        iconTwo: iconTwo,
        titleTwo: 'Integrated gamification',
        descriptionTwo: 'Acquiring knowledge can still be fun',

        iconThree: iconThree,
        titleThree: 'Life-centric applications',
        descriptionThree: 'Equip yourself with essential life skills and knowledge for your professional growth',

        iconFour: iconFour,
        titleFour: 'Digitised lifestyle toolkits',
        descriptionFour: 'Instantly available solutions whenever you need them',

        video: video,
        endTitle: 'Try the future now!',
        buttonTitle: 'Play Me',
      }
    }
  },
}
</script>
