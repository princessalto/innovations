import a from './admin'
import p from './public'
import w from './web'
import e from './error'

const routes = []
  // Order is important:
  // 1. admin
  // 2. web - static routes outside the admin namespace, e.g. login, register, etc.
  // 3. public - will catch all pages from storage including 404s
  .concat([a], w, [p], e)

export default routes
