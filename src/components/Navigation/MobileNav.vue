<template>
  <div>
    <v-btn
      @click="toggle(!navmodel)"
      icon
      dark
      color="secondary"
      class="hidden-md-and-up"
      >
      <v-icon>more_horiz</v-icon>
    </v-btn>
    <v-dialog
      v-model="navmodel"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      >
      <v-card dark>
        <v-toolbar
          flat
          class="transparent pa-3"
          >
          <a href="/">
            <img width="40" :src="require('@/assets/logo.png')" alt="">
          </a>
          <v-spacer></v-spacer>
          <v-btn
            dark
            icon
            color="secondary"
            @click.native="toggle(!navmodel)"
            >
            <v-icon>remove</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider dark></v-divider>

        <!-- mobile-menu -->
        <v-list two-line>
          <template
            v-for="(menu, i) in menus"
            >
            <template v-if="menu.meta.excludeInMenu"></template>

            <v-list-group
              :key="i"
              no-action
              ripple
              v-else-if="menu.meta.withSubmenu"
              >
              <v-list-tile
                ripple
                slot="activator"
                :class="current === menu.name ? 'primary--text v-list__group__header--active' : ''"
                >
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ __(menu.meta.title) }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile
                :key="j"
                ripple
                :href="`${menu.path}/${submenu.path}`"
                :class="current === submenu.name ? 'primary--text v-list__tile--active' : ''"
                v-for="(submenu, j) in menu.children"
                >
                <v-list-tile-content>
                  <v-list-tile-title
                    >
                    {{ __(submenu.meta.title) }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>

            <v-list-tile
              v-else-if="!menu.name"
              ripple
              :href="`${menu.path}`"
              :key="i" :class="current === menu.children[0].name ? 'primary--text v-list__tile--active' : ''"
              >
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ __(menu.meta.title) }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
              :key="i"
              :class="current === menu.name ? 'primary--text v-list__tile--active' : ''"
              :href="`/${menu.path}`"
              ripple
              v-else
              >
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ __(menu.meta.title) }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
        <!-- mobile-menu -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import _public from '@/router/public'

export default {
  name: 'MobileNav',

  data () {
    return {
      navmodel: false,
      current: this.$route.name || this.$route.path,
      menus: _public.children
    }
  },

  methods: {
    toggle (model) {
      this.navmodel = model
    },
  }
}
</script>
