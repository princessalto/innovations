<template>
  <div>
    <v-tooltip bottom class="mx-2">
      <v-btn color="secondary" slot="activator" icon>
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <span>{{ trans('Facebook') }}</span>
    </v-tooltip>

    <v-tooltip bottom class="mx-2">
      <v-btn color="secondary" slot="activator" icon>
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <span>{{ trans('Twitter') }}</span>
    </v-tooltip>

    <v-tooltip bottom class="mx-2">
      <v-btn color="secondary" slot="activator" icon>
        <v-icon>mdi-bookmark-outline</v-icon>
      </v-btn>
      <span>{{ trans('Bookmark this story to read later') }}</span>
    </v-tooltip>

    <v-tooltip bottom class="mx-2">
      <v-menu offset-y slot="activator">
        <v-btn color="secondary" icon slot="activator">
          <v-icon>more_horiz</v-icon>
        </v-btn>
        <v-list desnse>
          <v-list-tile @click="item.link">
            <v-list-tile-content>
              <v-list-tile-title>{{ trans('Report Story') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
      <span>{{ trans('More Actions') }}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: 'Socials',

  data () {
    return {
      item: {
        link: false,
      }
    }
  }
}
</script>
