import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('../views/BlogPosts.vue')
  },
  {
    path: '/blogposts',
    name: 'blogposts',
    component: () => import('../views/BlogPosts.vue')
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import('../views/singlePost.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/addpost',
    name: 'addpost',
    component: () => import('../views/AddPost.vue')
  },
  {
    path: '/editpost/:id',
    name: 'editpost',
    component: () => import('../views/EditPost.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
