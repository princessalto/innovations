<template>
  <v-card color="grey lighten-4" class="py-5">
    <v-container grid-list-lg>
      <v-layout row wrap justify-center align-center>
        <v-flex xl7 lg8 md9 xs12>
          <v-layout row wrap>
            <template v-for="(item, i) in recommended.items">
              <v-flex sm4 xs12 :key="i">
                  <v-card hover>
                      <v-img :src="item.thumbnail" height="100"></v-img>
                    <v-tooltip bottom>
                      <v-card-text slot="activator">
                        <p
                          class="body-2 mb-2 grey--text">
                          <span class="body-1">{{ trans('More from ') }}</span>
                          <strong class="body-2" v-html="trans(item.category)"></strong>
                        </p>
                        <h3
                          slot="activator"
                          class="body-1 font__weight--bold title__text--ellipsis"
                          v-html="trans(item.title)"
                          >
                        </h3>
                        <v-rating
                          background-color="grey"
                          color="orange"
                          dense
                          half-increments
                          hover
                          readonly
                          size="16"
                          v-model="item.rating"
                        ></v-rating>
                      </v-card-text>
                      <span v-html="trans(item.title)"></span>
                    </v-tooltip>
                    <!-- author -->
                    <v-list>
                      <v-list-tile avatar>
                        <v-list-tile-avatar>
                          <img :src="item.avatar">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                          <v-list-tile-title v-html="item.author"></v-list-tile-title>
                          <v-list-tile-sub-title v-html="item.timestamp"></v-list-tile-sub-title>
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
            </template>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'Recommended',

  data () {
    return {
      recommended: {
        items: [
          {
            thumbnail: '//images.unsplash.com/photo-1523958359188-26c5f0d234ab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d69506281c09af1fc68886c28d35f0c0&auto=format&fit=crop&w=957&q=80',
            category: 'Random',
            title: 'On 9/11, All My Plans Went Up in Smoke',
            timestamp: '2 hours ago',
            author: 'Princess Alto',
            avatar: '//cdn.dribbble.com/users/1391772/screenshots/4173353/psd.jpg',
            rating: 3,
          },
          {
            thumbnail: '//images.unsplash.com/photo-1521510024457-e4a37f8abd33?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ea42eaa8f2c00f644fff2c9d29da9bc4&auto=format&fit=crop&w=1051&q=80',
            category: 'Random',
            title: 'What Do We Really Mean by ‘Quality Journalism’?',
            timestamp: '2 hours ago',
            author: 'Princess Alto',
            avatar: '//cdn.dribbble.com/users/1391772/screenshots/4173353/psd.jpg',
            rating: 4.5,
          },
          {
            thumbnail: '//images.unsplash.com/photo-1519377483941-d4c7ea7ae521?ixlib=rb-0.3.5&s=56987893d5b34445b86aaec9e484efde&auto=format&fit=crop&w=844&q=80',
            category: 'Random',
            title: 'Why Willpower Is Powerless When It Comes to Dieting',
            timestamp: '2 hours ago',
            author: 'Princess Alto',
            avatar: '//cdn.dribbble.com/users/1391772/screenshots/4173353/psd.jpg',
            rating: 4,
          },
        ]
      }
    }
  }
}
</script>
