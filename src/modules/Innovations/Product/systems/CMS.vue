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
import cmsBanner from './assets/images/cmsBanner.svg'
import iconOne from './assets/icons/cms/1.svg'
import iconTwo from './assets/icons/cms/2.svg'
import iconThree from './assets/icons/cms/3.svg'
import iconFour from './assets/icons/cms/4.svg'
// import video from './assets/videos/cms.mp4'

export default {
  store,
  name: 'CMS',

  components: {
    ProductBanner,
    ProductContent,
  },

  data () {
    return {
      banner: {
        thumbnail: cmsBanner,
        title: 'Why Pluma?',
        subtitle: 'It\'s the mother of all management systems',
        description: 'Pluma acts as a framework to create various digital ideas. And we all know that every awesome idea starts with a blank canvas and a flexible tool that follows your lead.  Say you have A LOT of ideas, how can you successfully manage them all? Well, Pluma is one extensible platform! We designed it to give you that creative freedom we all honestly need because we only want what best represents us, right?',
        button: 'Learn More',
      },

      content: {
        hasVideo: false,
        heading: 'Take control of your digital creations',
        iconOne: iconOne,
        titleOne: 'Dynamic Design Tool',
        descriptionOne: 'From newsletters to blog sites, easily build pages the way you want them',

        iconTwo: iconTwo,
        titleTwo: 'Detailed Analytics and Trackability',
        descriptionTwo: 'See what\'s working and not through user activities logged in the system',

        iconThree: iconThree,
        titleThree: 'SEO-Friendly Content Repository',
        descriptionThree: 'You have the control to categorise and append tags to your content',

        iconFour: iconFour,
        titleFour: 'Choose Your Own Style',
        descriptionFour: 'Personalise the look of your applications through unique integrated themes',

        // video: video,
        endTitle: 'Ready to bring your brainchild into existence?',
        // endLink: 'https://www.rippl3s.com/',
        buttonTitle: 'Create Now',
      }
    }
  },
}
</script>
