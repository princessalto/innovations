<template>
  <v-slide-y-transition>
    <v-data-iterator
      :items="dataset.items"
      :pagination.sync="dataset.pagination"
      :rows-per-page-items="dataset.rowsPerPageItems"
      content-tag="v-layout"
      row
      wrap
      :search="dataset.search"
      >
      <v-flex
        :lg2="dataset.lg2"
        :lg3="dataset.lg3"
        :md2="dataset.md2"
        :md4="dataset.md4"
        :sm6="dataset.sm6"
        :xs12="dataset.xs12"
        slot-scope="props"
        slot="item"
        >
        <v-card
          :class="dataset.cardClass"
          :height="dataset.cardHeight"
          :hover="dataset.hover"
          :href="dataset.hover ? dataset.cardLink : ''"
          data-aos-easing="ease-in-out"
          >
          <v-tooltip bottom>
            <v-img
              :class="dataset.cardMediaClass"
              :height="dataset.cardMediaHeight"
              :src="props.item.thumbnail"
              slot="activator"
              >
              <v-layout
                align-end
                class="ma-2"
                justify-end
                v-if="dataset.chip"
                >
                <v-chip
                  class="elevation-2"
                  color="success"
                  dark
                  text-color="white"
                  v-if="props.item.status"
                  >
                  {{ props.item.status }}
                </v-chip>
              </v-layout>
            </v-img>
            <span v-html="trans(props.item.title)"></span>
          </v-tooltip>

          <!-- media-title -->
          <v-toolbar
            :class="dataset.toolbarClass"
            :flat="dataset.toolbarFlat"
            v-if="dataset.showToolbar"
            >
            <v-toolbar-title>
              <v-tooltip
                bottom
                >
                <span
                  :class="dataset.toolbarTitleClass"
                  slot="activator"
                  v-html="trans(props.item.title)"
                  >
                </span>
                <span v-html="trans(props.item.title)"></span>
              </v-tooltip>

              <div
                :class="dataset.fileSizeClass"
                v-html="props.item.size"
                >
              </div>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <v-menu
                bottom
                left
                slot="activator"
                >
                <v-btn
                  slot="activator"
                  icon
                  ripple
                  >
                  <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list dense>
                  <v-list-tile
                    ripple
                    >
                    <v-list-tile-avatar>
                      <v-icon color="warning">delete</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ trans('Move to Trash') }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile
                    ripple
                    >
                    <v-list-tile-avatar>
                      <v-icon color="error">delete_forever</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ trans('Delete Permanently') }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-menu>
              <span>{{ trans('More Actions') }}</span>
            </v-tooltip>
          </v-toolbar>
          <!-- media-title -->

          <!-- card-text -->
          <v-card-text
            v-if="dataset.showCardText"
            >
            <p
              class="body-2 mb-2 primary--text text--lighten-2">
              <strong v-html="trans(props.item.category)"></strong>
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
                v-html="trans(props.item.description)"
                >
              </span>
            </p>
          </v-card-text>
          <!-- card-text -->

          <!-- author -->
          <v-list two-line>
            <v-list-tile>
              <v-list-tile-avatar>
                <img :src="props.item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title
                  class="mini__title"
                  v-html="props.item.author">
                </v-list-tile-title>
                <v-list-tile-sub-title
                  v-html="props.item.timestamp"
                  >
                </v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-tooltip bottom>
                  <v-icon slot="activator">mdi-bookmark-outline</v-icon>
                  <span>{{ trans('Bookmark this story to read later') }}</span>
                </v-tooltip>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
          <!-- author -->
        </v-card>
      </v-flex>
    </v-data-iterator>
  </v-slide-y-transition>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  store,
  name: 'DataIterator',

  components: {
    AOS,
  },

  created () {
    AOS.init()
  },

  computed: {
    ...mapGetters({
      dataiterator: 'dataiterator/dataiterator'
    })
  },

  props: {
    items: {
      type: [Object, Array],
      default: () => {
        return {}
      }
    }
  },

  data () {
    return {
      dataset: {}
    }
  },

  mounted () {
    this.dataset = Object.assign({}, this.dataiterator, this.items)
  },
}
</script>
