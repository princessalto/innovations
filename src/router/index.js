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
  // If the route is guarded -- via meta.authenticatable.
  if (to.matched.some(record => record.meta.authenticatable === true)) {
    let fromname = from.name || 'login.show'
    // Check the remote api provider
    // if the sessionStorage values
    // actually exists on their side
    authenticated()
      // If so then login the user
      .then(tokenExists => {
        if (tokenExists) {
          // Success, user is still logged in
          // If user:token value from sessionStorage
          // exists then redirect to the guarded admin page
          next()
        } else {
          // else, access the guarded admin page, anyway. NOT!
          next({name: fromname}) // stay in the login page
        }
      })
      .catch(() => {
        // Any error we catch just redirect in the login.show
        next({name: 'login.show'})
      })
  // Else just proceed
  } else {
    next()
  }
})

export default router
