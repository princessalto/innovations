import focus from './focus.js'
import hover from './hover.js'
import sticky from './sticky.js'
import title from './title.js'
import Vue from 'vue'

const directives = {
  install (Vue) {
    Vue.directive(focus.name, focus)
    Vue.directive(hover.name, hover)
    Vue.directive(sticky.name, sticky)
    Vue.directive(title.name, title)
  }
}

Vue.use(directives)
