import Vue from 'vue'
import App from './App'
import store from '@/store/index'
import flyio from '@/util/flyio'

Vue.config.productionTip = false

App.mpType = 'app'
//挂载全局对象
Vue.prototype.$store = store
Vue.prototype.$flyio = flyio

const app = new Vue({
    store,
    flyio,
    ...App
})
app.$mount()
