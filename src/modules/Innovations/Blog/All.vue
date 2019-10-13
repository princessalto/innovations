<template>
  <section>
    <main-toolbar></main-toolbar>

    <v-container grid-list-lg>
      <v-layout row wrap justify-center align-center>
        <v-flex xl10 lg10 xs12>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card flat>
                <v-card-text class="px-0 py-4">
                  <h1>{{ trans('What\'s Brewing') }}</h1>
                  <p>{{ trans('Read some musings from our geniuses while caffeine is still kicking through their veins.') }}</p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-center align-center>
        <v-flex xl10 lg10 xs12>
          <v-layout row wrap>
            <v-flex md3 xs12 order-md1 order-sm2 order-xs2>
              <list :items="archives"></list>
              <list :items="categories"></list>
            </v-flex>

            <v-flex md9 xs12 order-md2 order-sm1 order-xs1>
              <v-data-iterator
                v-bind:items="resource.items"
                :pagination.sync="resource.pagination"
                :rows-per-page-items="resource.rowsPerPageItems"
                content-tag="v-layout"
                row
                wrap
                :search="resource.search"
                >
                <v-flex
                  md4 sm6 xs12
                  slot-scope="props"
                  slot="item"
                  >
                  <v-card
                    height="100%"
                    hover
                    exact
                    :to="{
                      name: 'blog.single',
                      params: {
                        code: props.item.code,
                        meta: { item: props.item }
                      },
                    }"
                    data-aos-easing="ease-in-out"
                    >
                    <v-tooltip bottom>
                      <v-img
                        height="160"
                        :src="props.item.avatar"
                        slot="activator"
                        >
                      </v-img>
                      <span v-html="trans(props.item.title)"></span>
                    </v-tooltip>

                    <v-card-text>
                      <p
                        class="body-2 mb-2 primary--text text--lighten-2">
                        <strong v-html="trans(props.item.categoryname)"></strong>
                      </p>
                      <v-tooltip bottom>
                        <h3
                          slot="activator"
                          class="subheading font__weight--bold title__text--ellipsis"
                          v-html="trans(props.item.title)"
                          >
                        </h3>
                        <span v-html="trans(props.item.title)"></span>
                      </v-tooltip>
                      <v-rating
                        background-color="grey"
                        class="mb-3"
                        color="orange"
                        dense
                        half-increments
                        hover
                        readonly
                        size="16"
                        v-model="props.item.rating"
                      ></v-rating>
                      <p>
                        <span
                          class="text--ellipsis"
                          >
                          {{ trans(props.item.excerpt) }}
                        </span>
                      </p>
                    </v-card-text>

                    <v-list two-line>
                      <v-list-tile>
                        <v-list-tile-avatar>
                          <img :src="props.item.staffavatar">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                          <v-list-tile-title
                            class="mini__title"
                            v-html="props.item.author">
                          </v-list-tile-title>
                          <v-list-tile-sub-title
                            v-html="props.item.created"
                            >
                          </v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-flex>
              </v-data-iterator>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <v-card height="100"></v-card>

    <footer-component></footer-component>
  </section>
</template>

<script>
import store from '@/store'
import axios from 'axios'

export default {
  store,
  name: 'All',

  mounted () {
    /*eslint-disable*/
    axios.get('/api/v1/blogs').then(response => {
      this.resource.items = response.data.data
    })
  },

  data () {
    return {
      resource: {
        rowsPerPageItems: [3, 6, 9, 12, 'All'],
        pagination: {
          rowsPerPage: 3,
        },
        search: '',
        selected: [],
        items: [],
        data: null,
      },
      archives: {
        dense: true,
        subheaderClass: 'secondary--text grey lighten-4',
        link: 'archives',
        headerTitle: 'Archives',
        items: [
          {
            title: 'November 2019'
          },
          {
            title: 'October 2019'
          },
          {
            title: 'September 2019'
          }
        ]
      },
      categories: {
        dense: true,
        subheaderClass: 'secondary--text grey lighten-4',
        link: 'categories',
        headerTitle: 'Categories',
        items: [
          {
            title: 'E-Learning'
          },
          {
            title: 'Mobile Application'
          },
          {
            title: 'Web Design and Animation'
          }
        ]
      }
    }
  }
}
</script>
