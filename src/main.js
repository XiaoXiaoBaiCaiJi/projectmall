import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(toast)

//解决移动端的300ms延时
FastClick.attach(document.body)

//使用vue-lazyload懒加载
Vue.use(VueLazyLoad)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
