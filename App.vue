<script>
//#ifdef APP-PLUS
import autoUpdater from './common/autoUpdate.js'
//#endif
export default {
	onLaunch: function () {
		//#ifdef APP-PLUS
    var server = "https://www.example.com/update"; //检查更新地址
    var req = { // 升级检测数据
        "appid": plus.runtime.appid,
        "version": plus.runtime.version
    };
    // uni.request({
		// 	url: server,
		// 	data: req,
		// 	success: (res) => {
		// 		if (res.statusCode == 200 && res.data.status === 1) {
		// 			uni.showModal({ //提醒用户更新
		// 					title: "更新提示",
		// 					content: res.data.note,
		// 					success: (res) => {
		// 						if (res.confirm) {
		// 							plus.runtime.openURL(res.data.url);
		// 						}
		// 					}
		// 			})
		// 		}
		// 	}
		// })
		// autoUpdater.init({
		// 	packageUrl: 'https://bw.calongheiyou.com/furious.e010.master.apk',
		// 	content: '更新内容:\n.修复上传房源时图片重复错乱问题\n.修复启动app时启动图变形问题\n.优化部分性能问题\n.新增功能1.新增功能2.新增功能3.新增功能3.新增功能3.新增功能3.新增功能3.新增功能3.新增功能3',
		// 	contentAlign: 'left',
		// 	cancel:'取消该版本',
		// 	cancelColor:'#007fff'
		// })
		// autoUpdater.show();
    //#endif
	},
	onLoad() {
		console.log('App load')
	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	},
	methods: {
		show() {
			autoUpdater.show();
		}
	}
}
</script>

<style>
	/* 这是页面的公用css */
	/* @import 'components/teaset/teaset.css'; */
  @font-face {
    font-family: 'iconfont';  /* project id 1049816 */
    src: url('https://at.alicdn.com/t/font_1049816_jdm8e4l2hma.eot');
    src: url('https://at.alicdn.com/t/font_1049816_jdm8e4l2hma.eot?#iefix') format('embedded-opentype'),
    url('https://at.alicdn.com/t/font_1049816_jdm8e4l2hma.woff2') format('woff2'),
    url('https://at.alicdn.com/t/font_1049816_jdm8e4l2hma.woff') format('woff'),
    url('https://at.alicdn.com/t/font_1049816_jdm8e4l2hma.ttf') format('truetype'),
    url('https://at.alicdn.com/t/font_1049816_jdm8e4l2hma.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family: iconfont;
  }
	page {
		font-size: 28upx;
	}
	page {
		min-height: 100%;
	}
</style>
