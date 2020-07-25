import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const Home = () => import('views/home/Home');
const Cart = () => import('views/cart/Cart.vue');
const Category = () => import('views/category/Category');
const Profile = () => import('views/profile/Profile');

//安装插件
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
]
//创建router
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;

/*
export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/Category',
      component: Category
    },
    {
      path: '/profile',
      component: Profile
    },
  ],
  mode: 'history'
})
*/
