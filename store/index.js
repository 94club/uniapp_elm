import Vue from 'vue'
import Vuex from 'vuex'
// import createLogger from 'vuex/dist/logger'
// import types from './types'
// const debug = true
// const getters = {}
const state = {
  userInfo: '',
  platform: ''
}
const mutations = {
  updateUserInfo : function(state, data){
    state.userInfo = data;
  }
}
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
  },
  state,
  // getters,
  mutations
  // strict: debug, // 设置运行模式
  // plugin: debug ? [createLogger()] : [] //调试模式加入日志插件
})
