export default [
  {
    path: '',
    name: 'home',
    component: () => import('../Home.vue'),
    meta: {
      title: 'Home',
      sort: 0,
      excludeInMenu: true,
    },
  },
]
