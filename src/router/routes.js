const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', redirect: '/posts', component: () => import('pages/Dashboard.vue') },
      { path: 'pages', name: 'Dashboard', component: () => import('pages/Dashboard.vue') },
      { path: 'posts', name: 'PostList', component: () => import('pages/posts/PostList.vue') },
      { path: 'posts/new', name: 'PostCreate', component: () => import('pages/posts/PostNew.vue') },
      { path: 'posts/:id', name: 'PostShow', component: () => import('pages/posts/PostShow.vue') },
      { path: 'posts/:id/edit', name: 'PostEdit', component: () => import('pages/posts/PostEdit.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
