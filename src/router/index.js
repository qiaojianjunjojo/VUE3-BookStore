import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    redirect: { name: 'home' },
  },
  {
    path: '/home',
    name: 'home',
    meta: { title: '首页' },
    component: Home,
  },
  {
    path: '/category/:id',
    name: 'category',
    meta: { title: '分类图书' },
    component: () => import('../views/Books.vue'),
  },
  {
    path: '/search',
    name: 'search',
    meta: { title: '搜索结果' },
    component: () => import('../views/Books.vue'),
  },
  {
    path: '/newBooks',
    name: 'newBooks',
    meta: { title: '新书上市' },
    component: () => import('../components/BooksNew.vue'),
  },
  {
    path: '/book/:id',
    name: 'book',
    meta: { title: '图书' },
    component: () => import('../views/Book.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    meta: { title: '购物车' },
    component: () => import('../views/ShoppingCart.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: { title: '注册' },
    component: () => import('../components/UserRegister.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import('../components/UserLogin.vue'),
  },
  {
    path: '/check',
    name: 'check',
    meta: { title: '结算', requireAuth: true },
    component: () => import('../views/Checkout.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(to =>{
  if(to.matched.some(record =>record.meta.requireAuth)){
    if(store.state.user.user){
      return true
    }else{
      return {
        path : '/login',
        query:{
          redirect:to.fullPath
        }
      }
    }
  }else{
    return true
  }
})

router.afterEach((to) => {
  document.title = to.meta.title
})

export default router
