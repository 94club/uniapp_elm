(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"071e":function(t,e,r){"use strict";r.r(e);var i=r("0c2a"),o=r("4eb9");for(var n in o)"default"!==n&&function(t){r.d(e,t,function(){return o[t]})}(n);r("51e3");var s=r("2877"),a=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"6ded61cc",null);a.options.__file="login.vue",e["default"]=a.exports},"0c2a":function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"login_page"},[r("v-uni-view",{},[r("v-uni-input",{staticClass:"uni-input",attrs:{focus:"",placeholder:"用户名"},model:{value:t.loginObj.username,callback:function(e){t.$set(t.loginObj,"username",e)},expression:"loginObj.username"}})],1),r("v-uni-view",{},[r("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"密码"},model:{value:t.loginObj.password,callback:function(e){t.$set(t.loginObj,"password",e)},expression:"loginObj.password"}})],1),r("v-uni-view",{},[r("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"验证码"},model:{value:t.loginObj.captchaCode,callback:function(e){t.$set(t.loginObj,"captchaCode",e)},expression:"loginObj.captchaCode"}})],1),r("v-uni-view",[r("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:t.captchaCodeImg,expression:"captchaCodeImg"}],staticClass:"img",attrs:{src:t.captchaCodeImg}})],1),r("v-uni-view",{staticClass:"img"},[r("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.goLogin(e)}}},[t._v("登录")])],1)],1)},o=[];r.d(e,"a",function(){return i}),r.d(e,"b",function(){return o})},"17be":function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
               * [js-md5]{@link https://github.com/emn178/js-md5}
               *
               * @namespace md5
               * @version 0.7.3
               * @author Chen, Yi-Cyuan [emn178@gmail.com]
               * @copyright Chen, Yi-Cyuan 2014-2017
               * @license MIT
               */
/**
               * [js-md5]{@link https://github.com/emn178/js-md5}
               *
               * @namespace md5
               * @version 0.7.3
               * @author Chen, Yi-Cyuan [emn178@gmail.com]
               * @copyright Chen, Yi-Cyuan 2014-2017
               * @license MIT
               */
(function(){var ERROR="input is invalid type",WINDOW="object"===typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"===typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"===typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&"object"===typeof module&&module.exports,AMD=__webpack_require__("3c35"),ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!==typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"===typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t){return function(e){return new Md5(!0).update(e)[t]()}},createMethod=function(){var t=createOutputMethod("hex");NODE_JS&&(t=nodeWrap(t)),t.create=function(){return new Md5},t.update=function(e){return t.create().update(e)};for(var e=0;e<OUTPUT_TYPES.length;++e){var r=OUTPUT_TYPES[e];t[r]=createOutputMethod(r)}return t},nodeWrap=function nodeWrap(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(t){if("string"===typeof t)return crypto.createHash("md5").update(t,"utf8").digest("hex");if(null===t||void 0===t)throw ERROR;return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash("md5").update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod};function Md5(t){if(t)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(t){if(!this.finalized){var e,r=typeof t;if("string"!==r){if("object"!==r)throw ERROR;if(null===t)throw ERROR;if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw ERROR;e=!0}var i,o,n=0,s=t.length,a=this.blocks,u=this.buffer8;while(n<s){if(this.hashed&&(this.hashed=!1,a[0]=a[16],a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),e)if(ARRAY_BUFFER)for(o=this.start;n<s&&o<64;++n)u[o++]=t[n];else for(o=this.start;n<s&&o<64;++n)a[o>>2]|=t[n]<<SHIFT[3&o++];else if(ARRAY_BUFFER)for(o=this.start;n<s&&o<64;++n)i=t.charCodeAt(n),i<128?u[o++]=i:i<2048?(u[o++]=192|i>>6,u[o++]=128|63&i):i<55296||i>=57344?(u[o++]=224|i>>12,u[o++]=128|i>>6&63,u[o++]=128|63&i):(i=65536+((1023&i)<<10|1023&t.charCodeAt(++n)),u[o++]=240|i>>18,u[o++]=128|i>>12&63,u[o++]=128|i>>6&63,u[o++]=128|63&i);else for(o=this.start;n<s&&o<64;++n)i=t.charCodeAt(n),i<128?a[o>>2]|=i<<SHIFT[3&o++]:i<2048?(a[o>>2]|=(192|i>>6)<<SHIFT[3&o++],a[o>>2]|=(128|63&i)<<SHIFT[3&o++]):i<55296||i>=57344?(a[o>>2]|=(224|i>>12)<<SHIFT[3&o++],a[o>>2]|=(128|i>>6&63)<<SHIFT[3&o++],a[o>>2]|=(128|63&i)<<SHIFT[3&o++]):(i=65536+((1023&i)<<10|1023&t.charCodeAt(++n)),a[o>>2]|=(240|i>>18)<<SHIFT[3&o++],a[o>>2]|=(128|i>>12&63)<<SHIFT[3&o++],a[o>>2]|=(128|i>>6&63)<<SHIFT[3&o++],a[o>>2]|=(128|63&i)<<SHIFT[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=EXTRA[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var t,e,r,i,o,n,s=this.blocks;this.first?(t=s[0]-680876937,t=(t<<7|t>>>25)-271733879<<0,i=(-1732584194^2004318071&t)+s[1]-117830708,i=(i<<12|i>>>20)+t<<0,r=(-271733879^i&(-271733879^t))+s[2]-1126478375,r=(r<<17|r>>>15)+i<<0,e=(t^r&(i^t))+s[3]-1316259209,e=(e<<22|e>>>10)+r<<0):(t=this.h0,e=this.h1,r=this.h2,i=this.h3,t+=(i^e&(r^i))+s[0]-680876936,t=(t<<7|t>>>25)+e<<0,i+=(r^t&(e^r))+s[1]-389564586,i=(i<<12|i>>>20)+t<<0,r+=(e^i&(t^e))+s[2]+606105819,r=(r<<17|r>>>15)+i<<0,e+=(t^r&(i^t))+s[3]-1044525330,e=(e<<22|e>>>10)+r<<0),t+=(i^e&(r^i))+s[4]-176418897,t=(t<<7|t>>>25)+e<<0,i+=(r^t&(e^r))+s[5]+1200080426,i=(i<<12|i>>>20)+t<<0,r+=(e^i&(t^e))+s[6]-1473231341,r=(r<<17|r>>>15)+i<<0,e+=(t^r&(i^t))+s[7]-45705983,e=(e<<22|e>>>10)+r<<0,t+=(i^e&(r^i))+s[8]+1770035416,t=(t<<7|t>>>25)+e<<0,i+=(r^t&(e^r))+s[9]-1958414417,i=(i<<12|i>>>20)+t<<0,r+=(e^i&(t^e))+s[10]-42063,r=(r<<17|r>>>15)+i<<0,e+=(t^r&(i^t))+s[11]-1990404162,e=(e<<22|e>>>10)+r<<0,t+=(i^e&(r^i))+s[12]+1804603682,t=(t<<7|t>>>25)+e<<0,i+=(r^t&(e^r))+s[13]-40341101,i=(i<<12|i>>>20)+t<<0,r+=(e^i&(t^e))+s[14]-1502002290,r=(r<<17|r>>>15)+i<<0,e+=(t^r&(i^t))+s[15]+1236535329,e=(e<<22|e>>>10)+r<<0,t+=(r^i&(e^r))+s[1]-165796510,t=(t<<5|t>>>27)+e<<0,i+=(e^r&(t^e))+s[6]-1069501632,i=(i<<9|i>>>23)+t<<0,r+=(t^e&(i^t))+s[11]+643717713,r=(r<<14|r>>>18)+i<<0,e+=(i^t&(r^i))+s[0]-373897302,e=(e<<20|e>>>12)+r<<0,t+=(r^i&(e^r))+s[5]-701558691,t=(t<<5|t>>>27)+e<<0,i+=(e^r&(t^e))+s[10]+38016083,i=(i<<9|i>>>23)+t<<0,r+=(t^e&(i^t))+s[15]-660478335,r=(r<<14|r>>>18)+i<<0,e+=(i^t&(r^i))+s[4]-405537848,e=(e<<20|e>>>12)+r<<0,t+=(r^i&(e^r))+s[9]+568446438,t=(t<<5|t>>>27)+e<<0,i+=(e^r&(t^e))+s[14]-1019803690,i=(i<<9|i>>>23)+t<<0,r+=(t^e&(i^t))+s[3]-187363961,r=(r<<14|r>>>18)+i<<0,e+=(i^t&(r^i))+s[8]+1163531501,e=(e<<20|e>>>12)+r<<0,t+=(r^i&(e^r))+s[13]-1444681467,t=(t<<5|t>>>27)+e<<0,i+=(e^r&(t^e))+s[2]-51403784,i=(i<<9|i>>>23)+t<<0,r+=(t^e&(i^t))+s[7]+1735328473,r=(r<<14|r>>>18)+i<<0,e+=(i^t&(r^i))+s[12]-1926607734,e=(e<<20|e>>>12)+r<<0,o=e^r,t+=(o^i)+s[5]-378558,t=(t<<4|t>>>28)+e<<0,i+=(o^t)+s[8]-2022574463,i=(i<<11|i>>>21)+t<<0,n=i^t,r+=(n^e)+s[11]+1839030562,r=(r<<16|r>>>16)+i<<0,e+=(n^r)+s[14]-35309556,e=(e<<23|e>>>9)+r<<0,o=e^r,t+=(o^i)+s[1]-1530992060,t=(t<<4|t>>>28)+e<<0,i+=(o^t)+s[4]+1272893353,i=(i<<11|i>>>21)+t<<0,n=i^t,r+=(n^e)+s[7]-155497632,r=(r<<16|r>>>16)+i<<0,e+=(n^r)+s[10]-1094730640,e=(e<<23|e>>>9)+r<<0,o=e^r,t+=(o^i)+s[13]+681279174,t=(t<<4|t>>>28)+e<<0,i+=(o^t)+s[0]-358537222,i=(i<<11|i>>>21)+t<<0,n=i^t,r+=(n^e)+s[3]-722521979,r=(r<<16|r>>>16)+i<<0,e+=(n^r)+s[6]+76029189,e=(e<<23|e>>>9)+r<<0,o=e^r,t+=(o^i)+s[9]-640364487,t=(t<<4|t>>>28)+e<<0,i+=(o^t)+s[12]-421815835,i=(i<<11|i>>>21)+t<<0,n=i^t,r+=(n^e)+s[15]+530742520,r=(r<<16|r>>>16)+i<<0,e+=(n^r)+s[2]-995338651,e=(e<<23|e>>>9)+r<<0,t+=(r^(e|~i))+s[0]-198630844,t=(t<<6|t>>>26)+e<<0,i+=(e^(t|~r))+s[7]+1126891415,i=(i<<10|i>>>22)+t<<0,r+=(t^(i|~e))+s[14]-1416354905,r=(r<<15|r>>>17)+i<<0,e+=(i^(r|~t))+s[5]-57434055,e=(e<<21|e>>>11)+r<<0,t+=(r^(e|~i))+s[12]+1700485571,t=(t<<6|t>>>26)+e<<0,i+=(e^(t|~r))+s[3]-1894986606,i=(i<<10|i>>>22)+t<<0,r+=(t^(i|~e))+s[10]-1051523,r=(r<<15|r>>>17)+i<<0,e+=(i^(r|~t))+s[1]-2054922799,e=(e<<21|e>>>11)+r<<0,t+=(r^(e|~i))+s[8]+1873313359,t=(t<<6|t>>>26)+e<<0,i+=(e^(t|~r))+s[15]-30611744,i=(i<<10|i>>>22)+t<<0,r+=(t^(i|~e))+s[6]-1560198380,r=(r<<15|r>>>17)+i<<0,e+=(i^(r|~t))+s[13]+1309151649,e=(e<<21|e>>>11)+r<<0,t+=(r^(e|~i))+s[4]-145523070,t=(t<<6|t>>>26)+e<<0,i+=(e^(t|~r))+s[11]-1120210379,i=(i<<10|i>>>22)+t<<0,r+=(t^(i|~e))+s[2]+718787259,r=(r<<15|r>>>17)+i<<0,e+=(i^(r|~t))+s[9]-343485551,e=(e<<21|e>>>11)+r<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=r-1732584194<<0,this.h3=i+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+r<<0,this.h3=this.h3+i<<0)},Md5.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,i=this.h3;return HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,i=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255,255&i,i>>8&255,i>>16&255,i>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var t,e,r,i="",o=this.array(),n=0;n<15;)t=o[n++],e=o[n++],r=o[n++],i+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[63&(t<<4|e>>>4)]+BASE64_ENCODE_CHAR[63&(e<<2|r>>>6)]+BASE64_ENCODE_CHAR[63&r];return t=o[n],i+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[t<<4&63]+"==",i};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},"1a25":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={userInfo:"v2/getInfo",cities:"api/cities",userLogin:"api/userLogin",userLogout:"api/userSignout",captcha:"api/captcha"};e.default=i},"3c35":function(t,e){(function(e){t.exports=e}).call(this,{})},4362:function(t,e,r){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,i="/";e.cwd=function(){return i},e.chdir=function(e){t||(t=r("df7c")),i=t.resolve(e,i)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"4eb9":function(t,e,r){"use strict";r.r(e);var i=r("709c"),o=r.n(i);for(var n in i)"default"!==n&&function(t){r.d(e,t,function(){return i[t]})}(n);e["default"]=o.a},"51e3":function(t,e,r){"use strict";var i=r("cfa4"),o=r.n(i);o.a},"709c":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o(r("17be"));var i=o(r("1a25"));function o(t){return t&&t.__esModule?t:{default:t}}var n={data:function(){return{loginObj:{captchaCode:"",username:"test",password:"123456",uuid:""},captchaCodeImg:"",uuid:""}},onReady:function(){this.getCaptchaCode()},methods:{getCaptchaCode:function(){var t=this;this.$flyio.post(i.default.captcha).then(function(e){t.captchaCodeImg=e.data.baseImg,t.loginObj.uuid=e.data.uuid})},goLogin:function(){var t=this;this.$flyio.post(i.default.userLogin,this.loginObj).then(function(e){uni.setStorageSync("token",e.data),t.getUserInfo()})},getUserInfo:function(){var t=this;this.$flyio.get(i.default.userInfo).then(function(e){console.log(e.data),t.$store.commit("updateUserInfo",e.data),uni.redirectTo({url:"/pages/index/index"})})}}};e.default=n},"7aa0":function(t,e,r){e=t.exports=r("2350")(!1),e.push([t.i,".img[data-v-6ded61cc]{width:%?200?%;height:%?80?%}",""])},cfa4:function(t,e,r){var i=r("7aa0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=r("4f06").default;o("6306f762",i,!0,{sourceMap:!1,shadowMode:!1})},df7c:function(t,e,r){(function(t){function r(t,e){for(var r=0,i=t.length-1;i>=0;i--){var o=t[i];"."===o?t.splice(i,1):".."===o?(t.splice(i,1),r++):r&&(t.splice(i,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return i.exec(t).slice(1)};function n(t,e){if(t.filter)return t.filter(e);for(var r=[],i=0;i<t.length;i++)e(t[i],i,t)&&r.push(t[i]);return r}e.resolve=function(){for(var e="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,i="/"===s.charAt(0))}return e=r(n(e.split("/"),function(t){return!!t}),!i).join("/"),(i?"/":"")+e||"."},e.normalize=function(t){var i=e.isAbsolute(t),o="/"===s(t,-1);return t=r(n(t.split("/"),function(t){return!!t}),!i).join("/"),t||i||(t="."),t&&o&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(n(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,r){function i(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var r=t.length-1;r>=0;r--)if(""!==t[r])break;return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var o=i(t.split("/")),n=i(r.split("/")),s=Math.min(o.length,n.length),a=s,u=0;u<s;u++)if(o[u]!==n[u]){a=u;break}var c=[];for(u=a;u<o.length;u++)c.push("..");return c=c.concat(n.slice(a)),c.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=o(t),r=e[0],i=e[1];return r||i?(i&&(i=i.substr(0,i.length-1)),r+i):"."},e.basename=function(t,e){var r=o(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){return o(t)[3]};var s="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r("4362"))}}]);