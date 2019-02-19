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
import lmsBanner from './assets/images/lmsBanner.svg'
import iconOne from './assets/icons/lms/1.svg'
import iconTwo from './assets/icons/lms/2.svg'
import iconThree from './assets/icons/lms/3.svg'
import iconFour from './assets/icons/lms/4.svg'
import video from './assets/videos/lms.mp4'

export default {
  store,
  name: 'LMS',

  components: {
    ProductBanner,
    ProductContent,
  },

  data () {
    return {
      banner: {
        thumbnail: lmsBanner,
        title: 'Why Rippl3s?',
        subtitle: 'It’s an engaging learning experience right at your fingertips',
        description: 'Through our focused responsive portal where technology and curriculum work seamlessly together, we deliver convenience on different devices, thus cutting down your learning time and keeping track of your milestones without having to leave the comforts of your home.',
        button: 'Try Now',
        link: 'https://www.rippl3s.com/',
      },

      content: {
        heading: 'Interactive learning anytime, anywhere',
        iconOne: iconOne,
        titleOne: 'Organised course content and analytics tools',
        descriptionOne: 'Easily keep track of your progress and milestones with just a click of a button',

        iconTwo: iconTwo,
        titleTwo: 'Collaborative and social learning',
        descriptionTwo: 'Share videos and links, and even chat with classmates and trainers',

        iconThree: iconThree,
        titleThree: 'Learner-centric platform',
        descriptionThree: 'Assess understanding with interactive online exams, quizzes, and simulations',

        iconFour: iconFour,
        titleFour: 'Portable and convenient',
        descriptionFour: 'Learn at your own pace on any electronic device of your choice',

        video: video,
        endTitle: 'Make every Ripple count today',
        endLink: 'https://www.rippl3s.com/',
        buttonTitle: 'Let\'s Start',
      }
    }
  },
}
</script>
