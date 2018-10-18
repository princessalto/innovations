<template>
  <v-list
    :dense="dataset.dense"
    :dark="dataset.dark"
    :class="dataset.listClass"
    >
    <v-subheader
      :class="dataset.subheaderClass"
      v-if="dataset.header"
      v-html="dataset.headerTitle"
      :key="dataset.index"
      >
    </v-subheader>
    <template v-for="(item, i) in dataset.items">
      <v-list-tile
        :key="i"
        @click="dataset.link"
        avatar
        ripple
        >
        <v-list-tile-avatar
          v-if="dataset.avatar">
          <img :src="item.avatar">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title
            v-html="item.title"
            >
          </v-list-tile-title>
          <v-list-tile-sub-title
            v-if="dataset.subtitle"
            v-html="item.subtitle"
            >
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  store,
  name: 'List',

  computed: {
    ...mapGetters({
      list: 'list/list'
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
    this.dataset = Object.assign({}, this.list, this.items)
  },
}
</script>
