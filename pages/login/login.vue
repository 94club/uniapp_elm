<template>
  <view class="login_page">
    <view class="">
      <input v-model="loginObj.username" class="uni-input" focus placeholder="用户名" />
    </view>
    <view class="">
      <input v-model="loginObj.password" class="uni-input"  placeholder="密码" />
    </view>
    <view class="">
      <input v-model="loginObj.captchaCode" class="uni-input"  placeholder="验证码" />
    </view>
    <view>
      <image class="img" v-show="captchaCodeImg" :src="captchaCodeImg"></image>
    </view>
    <view class="img">
      <button @click="goLogin">登录</button>
    </view>
  </view>
</template>

<script>
  import md5 from 'js-md5'
  import urls from '../../config/urls.js'
  export default {
    data() {
      return {
        loginObj: {
          captchaCode: '',
          username: 'test',
          password: '123456',
          uuid: ''
        },
        captchaCodeImg: '',
        uuid: ''
      };
    },
    onReady() {
    	this.getCaptchaCode()
    },
    methods: {
      getCaptchaCode () {
        this.$flyio.post(urls.captcha).then((res) => {
          this.captchaCodeImg = res.data.baseImg
          this.loginObj.uuid = res.data.uuid
        })
      },
      goLogin () {
        this.$flyio.post(urls.userLogin, this.loginObj).then((res) => {
          uni.setStorageSync('token', res.data)
          this.getUserInfo()
        })
      },
      getUserInfo () {
        this.$flyio.get(urls.userInfo).then((res) => {
          console.log(res.data)
          this.$store.commit('updateUserInfo', res.data)
          uni.redirectTo({
            url: '/pages/index/index'
          })
        })
      }
    }
  }
</script>

<style>
.img {
  width: 200upx;
  height: 80upx;
}
</style>
