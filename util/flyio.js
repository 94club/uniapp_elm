// 目前没有针对uni的Fly版本，使用wx版本没有问题
import store from '@/store'

// #ifdef H5
import Fly from 'flyio/dist/npm/fly'
// #endif

// #ifndef H5
import Fly from 'flyio/dist/npm/wx'
// #endif

const flyInstance = new Fly()
if(process.env.NODE_ENV === 'development'){
  flyInstance.config.baseURL="http://localhost:8001/"
}else{
  flyInstance.config.baseURL="http://jiaxiu.club:8001/"
}

flyInstance.interceptors.request.use((config) => {
  const token = uni.getStorageSync('token')
  if (token) {
    //给所有请求添加自定义header
    config.headers["Authorization"] = 'Bearer ' + token
  }
  // 防止缓存
  if (config.method === 'POST' && config.headers['Content-Type'] !== 'multipart/form-data') {
    config.body = {
      ...config.body,
      _t: Date.parse(new Date()) / 1000
    }
  } else if (config.method === 'GET') {
    config.params = {
      _t: Date.parse(new Date()) / 1000,
      ...config.params
    }
  }
  return config
})
flyInstance.interceptors.response.use(function (response) {
  return response
  }, function (error) {
  return Promise.reject(error.message) // 返回接口返回的错误信息
})
const ajaxMethod = ['get', 'post']
const request = {}
ajaxMethod.forEach((method) => {
  request[method] = function (uri, data, config) {
    return new Promise(function (resolve, reject) {
      flyInstance[method](uri, data, config).then((response) => {
        if (response.data.status === 401) {
          store.dispatch('updateUserInfo', '')
          uni.showToast({
            title: '登录信息失效',
            icon: 'none'
          })
          uni.removeStorage({
          	key:'token'
          })
          uni.redirectTo({
          	url: '/page/home/home'
          })
        } else if (response.data.status === 0 || response.data.status === 404) {
          uni.showToast({
            title: response.data.message,
            icon: 'none'
          })
        } else if (response.data.status === 200) {
          resolve(response.data)
        }
      }).catch(function (err) {
        console.log("error-interceptor:" + JSON.stringify(err))
        let errmsg = err.message
        switch (err.status) {
          case 0:
            errmsg = "网络连接错误"
            break
          case 401:
            errmsg = '请登录后操作'
            // store.dispatch('logout')
            // uni.redirectTo({
            //   url: '/pages/auth/login'
            // })
            break
        }
        uni.showToast({
          title: errmsg || '网络故障，请稍后重试',
          icon: 'none'
        })
      })
    })
  }
})

export default request
