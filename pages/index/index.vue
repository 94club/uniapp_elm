<template>
  <view class="content">
    <view class="head">
      <view>ele.me</view>
      <view v-if="!userInfo" @click="toLogin">登录|注册</view>
      <view v-else>{{userInfo.username}}</view>
    </view>
  </view>
</template>

<script>
  import urls from '../../config/urls.js'
  import {
      mapState
  } from 'vuex'
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    // 发起网络请求建议使用 uni-app 的 onReady代替 vue 的 mounted。
    // 建议使用 uni-app 的 onLoad 代替 vue 的 created
    onLoad() {
      uni.showLoading({
      	title:'正在加载中...'
      })
      setTimeout(function () {
        uni.hideLoading()
      }, 3000);
      // this.getUserInfo()
      // this.getcities('guess')
      this.getcities('hot')
      this.getcities('group')
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      getUserInfo () {
        this.$flyio.get(urls.userInfo).then((res) => {
          console.log(res)
        })
      },
      getcities (flag) {
        this.$flyio.get(urls.cities + '?type=' + flag).then((res) => {
          console.log(res)
        })
      },
      toLogin () {
        uni.navigateTo({
          url: '/pages/login/login'
        })
      }
    }
  }
</script>

<style lang="scss">
  .content {
    .head {
      display: flex;
      justify-content: space-between;
      width:96%;
      padding:0 2%;
      background:#3190e8;
      color: #FFFFFF;
      height: 88upx;
      line-height: 88upx;
    }
  }
</style>
