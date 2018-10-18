export default [
  {
    path: '/admin/pages',
    component: () => import('@/App.vue'),
    meta: {
      title: 'Pages',
      sort: 5,
      authenticatable: true,
      icon: 'mdi-book-open-page-variant',
    },
    children: [
      {
        path: '',
        name: 'pages.index',
        component: () => import('../Index.vue'),
        meta: {
          title: 'All Pages',
          authenticatable: true,
          icon: 'mdi-book-open-page-variant',
        },
      },
      {
        path: 'create',
        name: 'pages.create',
        component: () => import('../Create.vue'),
        meta: {
          title: 'Create Page',
          authenticatable: true,
          icon: 'mdi-file-plus',
        },
      },
      {
        path: 'archived',
        name: 'pages.archived',
        component: () => import('../Trashed.vue'),
        meta: {
          title: 'Trashed Pages',
          authenticatable: true,
          icon: 'mdi-delete-empty',
        },
      },
    ],
  }
]
