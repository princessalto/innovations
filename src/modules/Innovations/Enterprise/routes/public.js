export default [
  {
    path: 'enterprise',
    name: 'enterprise',
    component: () => import('../Enterprise.vue'),
    meta: {
      title: 'Enterprise',
      sort: 6,
      external: true,
      excludeFromRoot: true,
      authenticatable: false,
      icon: 'mdi-book-multiple-variant',
    },
  },
]
