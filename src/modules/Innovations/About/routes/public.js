export default [
  {
    path: 'about-us',
    name: 'about-us',
    component: () => import('../About.vue'),
    meta: {
      title: 'About Us',
      sort: 6,
      external: true,
      excludeFromRoot: true,
      authenticatable: false,
      icon: 'mdi-book-multiple-variant',
    },
  },
]
