<template>
  <div class="grid__layout">
    <v-container
      fluid
      grid-list-lg
      class="pa-2 follower-container"
      >
      <v-layout row wrap>
        <v-flex
          xs4
          :key="i"
          v-for="(item, i) in home.products">
          <v-card
            @mouseover.native="cardHover"
            @mouseleave.native="cardLeave"
            dark
            ripple
            class="transparent project-card"
            flat
            color="primary"
            exact
            :href="item.link">
            <v-img
              color="secondary"
              :src="item.thumbnail"
              height="200px"
              class="pa-2"
              :class="item.classMedia"
              @contextmenu.prevent="preventRightClick"
              >
              <v-layout
                class="justify-end align-end fill-height grid__layout--text"
                >
                <v-card-text class="fade__gradient--overlay">
                  <p class="mb-2 body-2">
                    <strong v-html="trans(item.category)"></strong>
                  </p>
                  <h3
                    class="font__weight--bold"
                    v-html="trans(item.title)"
                    >
                  </h3>
                </v-card-text>
              </v-layout>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style lang="stylus" scoped>
.left {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  overflow: hidden;
}

.right {
  -moz-transform: scaleX(1);
  -o-transform: scaleX(1);
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  overflow: hidden;
}

#bee {
  transition: transform .1s
  overflow: hidden;
}
</style>

<script>
import store from '@/store'
import ManagementSystem from '@/modules/Innovations/Home/assets/images/ManagementSystem.png'
import eLearning from '@/modules/Innovations/Home/assets/images/ELearning.png'
import MobileApp from '@/modules/Innovations/Home/assets/images/MobileApp.png'

export default {
  store,

  name: 'GridLayoutWeb',

  components: {
  },

  data () {
    return {
      home: {
        products: [
          {
            title: 'Immersive and interactive courses for learners around the world',
            category: 'e-Learning',
            thumbnail: eLearning,
            classMedia: 'second-child',
            link: '/products/e-learning',
          },
          {
            title: 'Customisable platforms for collaborative learning anytime, anywhere',
            category: 'Management Systems',
            thumbnail: ManagementSystem,
            classMedia: 'first-child',
            link: '/products/management-systems',
          },
          {
            title: 'Learning and training made engaging and fun',
            category: 'Mobile Apps',
            thumbnail: MobileApp,
            classMedia: 'third-child',
            link: '/products/mobile-apps',
          }
        ]
      }
    }
  },

  mounted () {
    this.preventRightClick()
    // this.followMouse()
  },

  methods: {
    cardHover () {
      let invisible = document.querySelector('.hide-on-hover')
      invisible.classList.add('hide-on-hover--active')
    },

    cardLeave () {
      let invisible = document.querySelector('.hide-on-hover')
      invisible.classList.remove('hide-on-hover--active')
    },

    preventRightClick () {
      return false
    },

    followMouse () {
      /*eslint-disable*/
      var bee = document.getElementById("bee");
      document.addEventListener("mousemove", getMouse);

      bee.style.position = "absolute"; //css
      var beepos = {x:0, y:0};

      setInterval(followMouse, 30);

      var mouse = {x:0, y:0}; //mouse.x, mouse.y

      var dir = "right";
      function getMouse(e){
        mouse.x = e.pageX;
        mouse.y = e.pageY;
        //Checking directional change
        if(mouse.x > beepos.x){
          dir = "right";
        }
      }

      function followMouse(){
        //1. find distance X , distance Y
        var distX = mouse.x - beepos.x;
        var distY = mouse.y - beepos.y;
        //Easing motion
         //Progressive reduction of distance
        beepos.x += distX/5;
        beepos.y += distY/2;

        bee.style.left = beepos.x + "px";
        bee.style.top = beepos.y + "px";

        //Apply css class
        if (dir == "right"){
          bee.setAttribute("class", "right");
        } else {
          bee.setAttribute("class", "left");
        }
      }
    }
  },
}
</script>
