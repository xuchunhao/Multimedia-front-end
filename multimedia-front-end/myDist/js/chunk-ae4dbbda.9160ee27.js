(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae4dbbda"],{"02f4":function(t,e,n){var r=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var o,a,c=String(i(e)),s=r(n),u=c.length;return s<0||s>=u?t?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):o:t?c.slice(s,s+2):a-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1954:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login",class:{img1:!t.phoneClick&&!t.passwordClick,img2:t.phoneClick||t.passwordClick}},[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{staticClass:"top",attrs:{span:6}},[n("el-input",{attrs:{placeholder:"手机号"},on:{focus:function(e){return t.handleClick("phone")},blur:t.blur},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:6}},[n("el-input",{attrs:{type:"password",placeholder:"密码"},on:{focus:function(e){return t.handleClick("password")},blur:t.blur},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:4}},[n("el-button",{on:{click:t.login}},[t._v("登 录")])],1)],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{staticClass:"to-register",attrs:{span:4}},[n("router-link",{attrs:{to:"/register"}},[t._v("还没账号？点击注册")])],1)],1)],1)},i=[],o=n("365c"),a={data:function(){return{phone:"",password:"",phoneClick:!1,passwordClick:!1}},methods:{handleClick:function(t){"phone"==t?this.phoneClick=!0:"password"==t&&(this.passwordClick=!0)},blur:function(){this.phoneClick=!1,this.passwordClick=!1},login:function(){var t=this;o["a"].login({id:1234,type:"login",subtype:"pass",data:{phone:this.phone,pass:this.password,enduring:!1}}).then(function(e){if(0==e.data.status){var n=6e5,r=new Date(+new Date+n);document.cookie="token=".concat(e.data.data.token,";expires=").concat(r.toUTCString()),alert("欢迎您"),t.$router.push({path:"/bbs"})}},function(t){alert("输入错误")})}}},c=a,s=(n("5571"),n("2877")),u=Object(s["a"])(c,r,i,!1,null,null,null);e["default"]=u.exports},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),o=n("79e5"),a=n("be13"),c=n("2b4c"),s=n("520a"),u=c("species"),l=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=c(t),h=!o(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),d=h?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[f](""),!e}):void 0;if(!h||!d||"replace"===t&&!l||"split"===t&&!p){var g=/./[f],v=n(a,f,""[t],function(t,e,n,r,i){return e.exec===s?h&&!i?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),x=v[0],b=v[1];r(String.prototype,t,x),i(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var r=n("aae3"),i=n("cb7c"),o=n("ebd6"),a=n("0390"),c=n("9def"),s=n("5f1b"),u=n("520a"),l=n("79e5"),p=Math.min,f=[].push,h="split",d="length",g="lastIndex",v=4294967295,x=!l(function(){RegExp(v,"y")});n("214f")("split",2,function(t,e,n,l){var b;return b="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[d]||2!="ab"[h](/(?:ab)*/)[d]||4!="."[h](/(.?)(.?)/)[d]||"."[h](/()()/)[d]>1||""[h](/.?/)[d]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);var o,a,c,s=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,h=void 0===e?v:e>>>0,x=new RegExp(t.source,l+"g");while(o=u.call(x,i)){if(a=x[g],a>p&&(s.push(i.slice(p,o.index)),o[d]>1&&o.index<i[d]&&f.apply(s,o.slice(1)),c=o[0][d],p=a,s[d]>=h))break;x[g]===o.index&&x[g]++}return p===i[d]?!c&&x.test("")||s.push(""):s.push(i.slice(p)),s[d]>h?s.slice(0,h):s}:"0"[h](void 0,0)[d]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,i,r):b.call(String(i),n,r)},function(t,e){var r=l(b,t,this,e,b!==n);if(r.done)return r.value;var u=i(t),f=String(this),h=o(u,RegExp),d=u.unicode,g=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(x?"y":"g"),k=new h(x?u:"^(?:"+u.source+")",g),w=void 0===e?v:e>>>0;if(0===w)return[];if(0===f.length)return null===s(k,f)?[f]:[];var y=0,C=0,m=[];while(C<f.length){k.lastIndex=x?C:0;var E,R=s(k,x?f:f.slice(C));if(null===R||(E=p(c(k.lastIndex+(x?0:C)),f.length))===y)C=a(f,C,d);else{if(m.push(f.slice(y,C)),m.length===w)return m;for(var j=1;j<=R.length-1;j++)if(m.push(R[j]),m.length===w)return m;C=y=E}}return m.push(f.slice(y)),m}]})},"365c":function(t,e,n){"use strict";n("28a5");var r=n("bc3a"),i=n.n(r),o=(n("c0d6"),{test:function(t){return i.a.post("/api/captcha",t)},getPhoneCaptcha:function(t){return i.a.post("/api/captcha",t)},register:function(t){return i.a.post("/api/user/register",t)},login:function(t){return i.a.post("/api/user/login",t)},getArticleList:function(t){var e=this.getCookie("token");return i.a.get("api/get/article/list?token="+e,t)},getUserInfo:function(t){var e=this.getCookie("token");return i.a.get("api/user/info?token="+e,t)},changePortrait:function(t){var e=this.getCookie("token");return i.a.post("/api/portrait?token="+e,t)},changeInfo:function(t){var e=this.getCookie("token");return console.log(e),i.a.post("/api/user/info?token="+e,t)},getCookie:function(t){for(var e=t+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){var i=n[r].trim();if(0==i.indexOf(e))return i.substring(e.length,i.length)}return""}});e["a"]=o},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,o=String.prototype.replace,a=i,c="lastIndex",s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[c]||0!==e[c]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(a=function(t){var e,n,a,l,p=this;return u&&(n=new RegExp("^"+p.source+"$(?!\\s)",r.call(p))),s&&(e=p[c]),a=i.call(p,t),s&&a&&(p[c]=p.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a}),t.exports=a},5571:function(t,e,n){"use strict";var r=n("adca"),i=n.n(r);i.a},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),o=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},adca:function(t,e,n){},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})}}]);
//# sourceMappingURL=chunk-ae4dbbda.9160ee27.js.map