export default [
  {
    code: 'pages',
    name: 'pages',
    meta: {
      title: 'Pages',
      icon: 'mdi-book-open-page-variant',
      authenticatable: true,
      sort: 4,
    },
    children: [
      // Admin Pages
      {
        code: 'pages.index',
        name: 'pages.index',
        meta: {
          title: 'All Pages',
          icon: 'mdi-book-open-page-variant',
          authenticatable: true,
          sort: 5,
        },
      },

      // Create
      {
        code: 'pages.create',
        name: 'pages.create',
        meta: {
          title: 'Create Page',
          icon: 'mdi-book-plus',
          authenticatable: true,
          sort: 6,
        },
      },

      // Divider
      {
        code: 'divider:pages/create.trashed',
        name: 'divider:pages/create.trashed',
        meta: {
          divider: true,
          sort: 7,
        },
      },

      // Archived
      {
        code: 'pages.archived',
        name: 'pages.archived',
        meta: {
          title: 'Archived Pages',
          icon: 'mdi-delete-empty',
          authenticatable: true,
          sort: 8,
        },
      },
    ],
  }
]
