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
import ProductBanner from '../template/Banner'
import ProductContent from '../template/Content'
import cmsBanner from './assets/images/tmsBanner.svg'
import iconOne from './assets/icons/tms/1.svg'
import iconTwo from './assets/icons/tms/2.svg'
import iconThree from './assets/icons/tms/3.svg'
import iconFour from './assets/icons/tms/4.svg'

export default {
  store,
  name: 'TMS',

  components: {
    ProductBanner,
    ProductContent,
  },

  data () {
    return {
      banner: {
        thumbnail: cmsBanner,
        title: 'Why Pebbl3s?',
        subtitle: 'It\'s an efficient and centralised way in organising your training needs!',
        description: 'Pebbl3s allows your organisation to save time and money by streamlining all integral training operations, such as scheduling of classes, online course bookings, and management of financials, all in one convenient platform.',
        button: 'Learn More',
        bannerBtn: false,
      },

      content: {
        hasVideo: false,
        heading: 'Training, simplified',
        iconOne: iconOne,
        titleOne: 'Optimised Scheduling',
        descriptionOne: 'Allow trainers to build a cohesive training schedules with specialised management tools',

        iconTwo: iconTwo,
        titleTwo: 'Organised Resource Management',
        descriptionTwo: 'Easily track all important resources and documents, from sign-in sheets to feedback forms',

        iconThree: iconThree,
        titleThree: 'Convenient Online Booking',
        descriptionThree: 'Streamline integral processes such as registration, course enrollment, and course payment',

        iconFour: iconFour,
        titleFour: 'Real-time analytics',
        descriptionFour: 'View insights and reports, monitor registrations, and update events according to your training needs',

        // video: video,
        endTitle: 'Ready to bring your brainchild into existence?',
        // endLink: 'https://www.rippl3s.com/',
        buttonTitle: 'Create Now',

        cta: false,
      }
    }
  },
}
</script>
