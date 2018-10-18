<template>
  <section>
      <v-card flat class="transparent hidden-sm-and-down">
    <div class="text-xs-center">
        <div class="iframe__container">
          <iframe
          class="web"
          src="/frames/about/web/About-Us-H(Version2).html"
          frameborder="0"
          >
        </iframe>
        </div>
    </div>
      </v-card>

    <v-card flat class="transparent hidden-md-and-up">
      <carousel
        paginationActiveColor="black"
        paginationColor="grey"
        :perPage="1"
        class="transparent"
        >
        <template
          v-for="(item, i) in carousel.items"
          >
          <slide :key="i">
            <v-card flat class="transparent">
              <v-responsive>
                <v-img :src="item.thumbnail"></v-img>
              </v-responsive>
              <v-card-text>
                <h1 class="display-1 secondary--text">
                  <strong v-html="item.name"></strong>
                </h1>
                <p class="white--text"><strong v-html="item.role"></strong></p>
                <p class="white--text" v-html="item.body"></p>
              </v-card-text>
            </v-card>
          </slide>
        </template>
      </carousel>
    </v-card>
  </section>
</template>

<style>
  iframe {
    width: 100% !important;
  }
  .iframe__container .web {
  width: 100%;
  height: 84vh !important;
}
</style>

<script>
import store from '@/store'
import { Carousel, Slide } from 'vue-carousel'
import aby from '@/modules/Innovations/About/assets/images/team/aby.png'
import ak from '@/modules/Innovations/About/assets/images/team/ak.png'
import chad from '@/modules/Innovations/About/assets/images/team/chad.png'
import john from '@/modules/Innovations/About/assets/images/team/john.png'
import sandy from '@/modules/Innovations/About/assets/images/team/sandy.png'
import cess from '@/modules/Innovations/About/assets/images/team/cess.png'
import lora from '@/modules/Innovations/About/assets/images/team/lora.png'
import pau from '@/modules/Innovations/About/assets/images/team/pau.png'

export default {
  store,
  name: 'Banner',

  components: {
    Carousel,
    Slide,
    aby,
    ak,
    chad,
    john,
    sandy,
    cess,
    lora,
    pau,
  },

  data () {
    return {
      carousel: {
        items: [
          {
            thumbnail: aby,
            name: 'Abigail Ang',
            role: 'Senior Lead of Innovations',
            body: 'Aby, First of Her Name, Queen of the Experience Design, of the Creative Content, and of the Digital Solutions, Breaker of Strategies and Gantt Charts, and Mother of Reports.',
          },
          {
            thumbnail: ak,
            name: 'Anna Kristina Castillo',
            role: 'Senior Content Producer',
            body: 'A huge amount of AK\'s time is dedicated to understanding weird information, coaxing them to be converted into scripts, timelines for deadlines, or slides the bosses need. She travels vicariously from chapters to episodes, trying to find the most colorful, comforting, or thought-provoking stories - mostly from cracked.com.',
          },
          {
            thumbnail: chad,
            name: 'Chad Aranzaso',
            role: 'Content Producer',
            body: 'Chad is our resident alchemist, integrating our creations into one whole interactive output. He also makes sure that each spawn has fresh, unique, and engaging content for our audience. He only has two points on his will 1.) He wants his remains spread out at his home and 2.) He does not want to be cremated.',
          },
          {
            thumbnail: john,
            name: 'John Lioneil Dionisio',
            role: 'Senior Software and Web Developer',
            body: 'Fresh from the Android Factory, John is packed with the latest multicore processors that allow him to create complex management systems and intricate websites for your pleasure at the cost of his sleep. His hobbies include reading (comic) books, not finishing his drawings, and letting his friends down. He is currently looking for new hobbies.',
          },
          {
            thumbnail: sandy,
            name: 'Sandy Duaso',
            role: 'Software and Web Developer',
            body: 'Sandy is responsible for coding backend logic written in PHP, and writing web applications and APIs. An extreme health buff, he plays basketball vicariously in his spare time to stay fit. His thumb workout routine includes savagely murdering noobs online. His diet also consists of various balls he can put in his mouth, from fishballs to squidballs.',
          },
          {
            thumbnail: cess,
            name: 'Princess Alto',
            role: 'Software and Web Developer',
            body: 'Cess translates design mock ups into web-speak or interprets designers\' visions into workable code, from color schemes and headings to typographies and page integrations. Her inspirational quote is, "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."',
          },
          {
            thumbnail: lora,
            name: 'Lora Renomeron',
            role: 'Multimedia Designer',
            body: 'Lora likes to make everyone move, shoving and bossing people all around. She is very scary. That\'s why her 2D and 3D character models bend to her every will, and her animations mimic her bubbly spirit. She also enjoys hanging out in cafes, drawing out her imagination, and dancing till her heart’s content.',
          },
          {
            thumbnail: pau,
            name: 'Pauline Hannah Kuizon',
            role: 'Multimedia Designer',
            body: 'Hannah creates gorgeous environments and layouts even larger than her height. She has this terrifying power of choosing which illustrations will breathe into life (*hint* GIFs) and which will remain static forever. When she’s not busy eating assets for lunch, she’s on a constant hunt for the perfect rule of thirds, all the while adoring mother nature and Gudetama.',
          },
        ]
      }
    }
  }
}
</script>
