import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import store from "@/store";
import TypeNav from '@/components/TypeNav'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import './icons'
Vue.config.productionTip = false
Vue.use(Element)
Vue.component(TypeNav.name,TypeNav)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
