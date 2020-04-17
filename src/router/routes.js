const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'pages', name: 'Dashboard', component: () => import('pages/Dashboard.vue') },
      { path: 'posts', name: 'PostList', component: () => import('pages/posts/PostList.vue') },
      { path: 'posts/PostCreate', name: 'PostNew', component: () => import('pages/posts/PostCreate.vue') },
      { path: 'posts/:id', name: 'PostShow', component: () => import('pages/posts/PostShow.vue') },
      { path: 'posts/PostDelete/:id', name: 'PostDelete', component: () => import('pages/posts/PostDelete.vue') }
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
