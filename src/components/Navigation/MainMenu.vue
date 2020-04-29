<template>
  <v-toolbar-items class="hidden-sm-and-down">
    <template v-for="(menu, i) in menus">
      <template v-if="menu.meta.excludeInMenu"></template>
      <v-menu
        offset-y
        v-else-if="menu.meta.withSubmenu"
        :key="i"
        >
        <v-btn
          slot="activator"
          flat
          large
          :class="current === menu.name ? 'v-list__tile--active' : ''"
          class="mx-1"
          >
          {{ __(menu.meta.title) }}
          <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
        <v-list light>
          <v-list-tile
            class="main-menu__indent"
            :key="j"
            :href="`${menu.path}/${submenu.path}`"
            :class="current === submenu.name ? 'primary--text font-weight-bold v-list__tile--active' : ''"
            v-for="(submenu, j) in menu.children"
            >
            <v-list-tile-content class="testLang" :class="current === submenu.name ? 'font-weight-bold' : ''">
              {{ submenu.meta.title }}
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn
        v-else-if="!menu.name"
        flat
        large
        :href="`${menu.path}`"
        :key="i" :class="current === menu.children[0].name ? 'v-btn--active' : ''"
        class="mx-1"
        >
        {{ __(menu.meta.title) }}
      </v-btn>
      <v-btn
        v-else
        flat
        large
        :href="`/${menu.path}`"
        :key="i"
        class="mx-1"
        :class="current === menu.name ? 'v-btn--active' : ''"
        >
        {{ __(menu.meta.title) }}
      </v-btn>
    </template>

    <!-- <v-menu offset-y>
      <v-btn large flat slot="activator">Our Products <v-icon right>keyboard_arrow_down</v-icon></v-btn>
      <v-list light>
        <v-list-tile href="/products/e-learning">
          <v-list-tile-title>e-Learning</v-list-tile-title>
        </v-list-tile>
        <v-list-tile href="/products/rippl3s">
          <v-list-tile-title>Rippl3s</v-list-tile-title>
        </v-list-tile>
        <v-list-tile href="/products/mobile-apps">
          <v-list-tile-title>Mobile Apps</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <router-link
      tag="v-btn"
      exact
      class="v-btn--flat v-btn--large"
      active-class="v-btn--active"
      to="/enterprise">
      Enterprise
    </router-link> -->
    <!-- <v-btn large flat href="/enterprise">Enterprise</v-btn> -->
    <!-- <v-btn large flat href="/about-us">About Us</v-btn> -->
  </v-toolbar-items>
</template>

<script>
import _public from '@/router/public'

export default {
  name: 'MainMenu',

  data () {
    return {
      current: this.$route.name || this.$route.path,
      menus: _public.children
    }
  },
}
</script>
