export default [
  {
    path: '/products',
    name: 'products',
    component: () => import('@/components/Layouts/Public.vue'),
    meta: {
      title: 'Products',
      sort: 5,
      withSubmenu: true,
      external: true,
      excludeFromRoot: true,
      authenticatable: false,
      icon: 'mdi-book-multiple-variant',
    },
    children: [
      {
        path: 'e-learning',
        name: 'products.elearning',
        component: () => import('../eLearning.vue'),
        meta: {
          title: 'e-Learning',
          sort: 5,
          external: true,
          excludeFromRoot: true,
          authenticatable: false,
          icon: 'mdi-book-multiple-variant',
        },
      },
      {
        path: 'rippl3s',
        name: 'products.ripples',
        component: () => import('../Rippl3s.vue'),
        meta: {
          title: 'Rippl3s',
          sort: 5,
          external: true,
          excludeFromRoot: true,
          authenticatable: false,
          icon: 'mdi-book-multiple-variant',
        },
      },
      {
        path: 'mobile-apps',
        name: 'products.application',
        component: () => import('../MobileApp.vue'),
        meta: {
          title: 'Mobile Apps',
          sort: 5,
          external: true,
          excludeFromRoot: true,
          authenticatable: false,
          icon: 'mdi-book-multiple-variant',
        },
      },
      {
        path: 'mobile-apps',
        name: 'products.application',
        component: () => import('../MobileApp.vue'),
        meta: {
          title: 'Mobile Apps',
          sort: 5,
          external: true,
          excludeFromRoot: true,
          authenticatable: false,
          icon: 'mdi-book-multiple-variant',
        },
      },
    ]
  },
]
