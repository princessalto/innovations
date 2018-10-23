export default [
  {
    path: 'tests',
    name: 'tests',
    component: () => import('../Test.vue'),
    meta: {
      title: 'Test',
      sort: 7,
      external: true,
      excludeFromRoot: true,
      authenticatable: false,
      icon: 'mdi-book-multiple-variant',
    },
  },
]
