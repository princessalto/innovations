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
import hrmsBanner from './assets/images/hrmsBanner.svg'
import iconOne from './assets/icons/hrms/1.svg'
import iconTwo from './assets/icons/hrms/2.svg'
import iconThree from './assets/icons/hrms/3.svg'
import iconFour from './assets/icons/hrms/4.svg'
import video from './assets/videos/hrms.mp4'

export default {
  store,
  name: 'HRMS',

  components: {
    ProductBanner,
    ProductContent,
  },

  data () {
    return {
      banner: {
        thumbnail: hrmsBanner,
        title: 'Why Ponos?',
        subtitle: 'It\'s a tailored-fit digital solution for a more efficient HR management',
        description: 'Ponos is designed to make relevant information accessible for both the employees and the management, from timely processing to proper monitoring of HR processes. Yes, in other words, Ponos will do all the hard labor and toil while you sit back, relax, and enjoy your coffee.',
        button: 'Learn More',
      },

      content: {
        hasVideo: false,
        heading: 'Managing your employees just got easier',
        iconOne: iconOne,
        titleOne: 'Real-Time Monitoring',
        descriptionOne: 'Track employee leave applications, working time, and other crucial analytics',

        iconTwo: iconTwo,
        titleTwo: 'Configurable Employee Database',
        descriptionTwo: 'Manage employee information, assessment for regularisation, and salary history',

        iconThree: iconThree,
        titleThree: 'Secure Data Repository',
        descriptionThree: 'Safely store company assets and relevant resources',

        iconFour: iconFour,
        titleFour: 'Mobile Compatible',
        descriptionFour: 'Access online wherever you are',

        video: video,
        endTitle: 'Your time is precious.',
        // endLink: 'https://www.rippl3s.com/',
        buttonTitle: 'Get Started',
      }
    }
  },
}
</script>
