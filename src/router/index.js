import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { authenticated } from '@/utils/authenticated'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authenticatable === true)) {
    // next()
    if (authenticated()) {
      next()
    } else {
      next({ name: 'login.show' })
    }
  } else {
    next()
  }
})

export default router
