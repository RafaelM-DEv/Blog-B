
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'dash', component: () => import('pages/Dashboard.vue') },
      { path: 'post', component: () => import('pages/posts/PostList.vue') },
      { path: 'postcreate', component: () => import('pages/posts/PostCreate.vue') },
      { path: 'postview', component: () => import('pages/posts/PostShow.vue') }
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
