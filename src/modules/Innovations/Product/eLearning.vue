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
import eLearningBanner from '@/modules/Innovations/Product/assets/images/eLearningBanner.png'
import iconOne from './assets/icons/eLearning/1.svg'
import iconTwo from './assets/icons/eLearning/2.svg'
import iconThree from './assets/icons/eLearning/3.svg'
import iconFour from './assets/icons/eLearning/4.svg'
// import video from './assets/videos/eLearning.mp4'

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
        thumbnail: eLearningBanner,
        title: 'Let\'s Be Learning Partners',
        description: 'As advocates of lifelong career progressions, our aim is to help anyone with the same purpose. For you who constantly seek to enhance efficiency and value, we will help fix performance gaps through relevant e-Learning programmes suited to meet the demands of today\'s economy.',
        button: 'Learn More'
      },

      content: {
        heading: 'We design educational courses as interactive experiences',
        iconOne: iconOne,
        titleOne: 'Captivating storylines',
        descriptionOne: 'Our coursewares are paired with intriguing scenarios relatable to a diverse audience.',

        iconTwo: iconTwo,
        titleTwo: 'Wide scope of curriculum',
        descriptionTwo: 'Choose from a variety of relevant topics formed by SSA Academy’s league of trainers and subject matter experts.',

        iconThree: iconThree,
        titleThree: 'Adaptive degree of complexity',
        descriptionThree: 'Our courses can cater to different capacities and levels of readiness, from operational all the way to the managerial level.',

        iconFour: iconFour,
        titleFour: 'In depth evaluations',
        descriptionFour: 'Validate your knowledge retention through comprehensive assessments and quizzes.',

        video: video,
        endTitle: 'What would you like to learn today?',
        buttonTitle: 'View Courses',
      }
    }
  },
}
</script>
