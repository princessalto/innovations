<template>
  <section id="public">
    <main-toolbar></main-toolbar>

    <v-container grid-list-lg>
      <v-layout row wrap justify-center align-center>
        <v-flex xl7 lg8 md9 xs12>
          <v-card flat class="pt-4">
            <!-- author -->
            <v-list three-line>
              <v-list-tile>
                <v-list-tile-avatar>
                  <img :src="item.authoravatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title
                    class="mini__title font-weight--bold"
                    v-html="item.author"
                    >
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{ trans('Developer') }}
                  </v-list-tile-sub-title>
                  <v-list-tile-sub-title>
                    {{ trans('Published') }}
                    <span v-html="item.created"></span>
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <!-- author -->

            <!-- featured image -->
            <v-responsive :aspect-ratio="16/9">
              <v-img :src="item.feature"></v-img>
            </v-responsive>
            <!-- featured image -->

            <v-card-text class="px-0">
              <p class="body-2 mb-2 primary--text text--lighten-2">
                <strong v-html="item.categoryname"></strong>
              </p>
              <h1 class="display-2 mb-3">
                <strong v-html="item.title"></strong>
              </h1>
            </v-card-text>
          </v-card>

          <!-- body -->
          <v-card flat class="pb-5">
            <p v-html="item.body"></p>
          </v-card>
          <!-- body -->

          <!-- tags -->
          <v-card flat class="py-3">
            <v-chip label color="grey lighten-3">{{ trans('tags') }}</v-chip>
            <v-chip label color="grey lighten-3">{{ trans('tags') }}</v-chip>
            <v-chip label color="grey lighten-3">{{ trans('tags') }}</v-chip>
          </v-card>
          <!-- tags -->

          <!-- rating and socials-->
          <v-card-actions>
            <v-rating
              background-color="grey"
              class="mb-3"
              color="orange"
              v-model="item.rating"
            ></v-rating>
            <v-spacer></v-spacer>
            <socials></socials>
          </v-card-actions>
          <!-- rating and socials-->
        </v-flex>
      </v-layout>
    </v-container>

    <!-- recommended -->
    <recommended class="mt-4"></recommended>
    <!-- recommended -->

    <footer-component></footer-component>
  </section>
</template>

<script>
import store from '@/store'
import Recommended from './partials/Recommended'
import Socials from './partials/Socials'
import axios from 'axios'

export default {
  store,

  name: 'SingleBlog',

  components: {
    Recommended,
    Socials,
  },

  mounted () {
    /*eslint-disable*/
    axios
      .get('/api/v1/blogs/' + this.$route.params.code)
      .then(response => {
        console.log(response)
        this.item = response.data.data
      })
  },

  data () {
    return {
      item: {}
    }
  },
}
</script>
