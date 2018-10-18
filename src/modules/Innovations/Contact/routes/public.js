export default [
  {
    path: 'contact-us',
    name: 'contact-us',
    component: () => import('../Contact.vue'),
    meta: {
      title: 'Contact',
      sort: 7,
      external: true,
      excludeFromRoot: true,
      authenticatable: false,
      icon: 'mdi-book-multiple-variant',
    },
  },
]
