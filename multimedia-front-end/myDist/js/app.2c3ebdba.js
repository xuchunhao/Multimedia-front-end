(function(e){function t(t){for(var o,r,a=t[0],i=t[1],f=t[2],s=0,d=[];s<a.length;s++)r=a[s],u[r]&&d.push(u[r][0]),u[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,f||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var a=n[r];0!==u[a]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},u={app:0},c=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-11f63ffc":"620ffc0c","chunk-2c28616e":"96954fd2","chunk-2d0a4fd7":"2556c784","chunk-2d0b66df":"7f658e2f","chunk-2d0ddbd5":"ae8d78d9","chunk-2d0e2366":"013d4daf","chunk-12ac2d1c":"fd4423fb","chunk-96f52da8":"6429985a","chunk-2d229481":"b44f1ab9","chunk-5395999e":"23c073e0","chunk-724d4c61":"9cc37c1c","chunk-9b373450":"13cff7f6","chunk-e280a5c6":"a89f129c","chunk-f5cc95a8":"13f8dac6"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-2c28616e":1,"chunk-12ac2d1c":1,"chunk-96f52da8":1,"chunk-5395999e":1,"chunk-724d4c61":1,"chunk-9b373450":1,"chunk-e280a5c6":1,"chunk-f5cc95a8":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-11f63ffc":"31d6cfe0","chunk-2c28616e":"483f389d","chunk-2d0a4fd7":"31d6cfe0","chunk-2d0b66df":"31d6cfe0","chunk-2d0ddbd5":"31d6cfe0","chunk-2d0e2366":"31d6cfe0","chunk-12ac2d1c":"f15b3453","chunk-96f52da8":"8d08e40c","chunk-2d229481":"31d6cfe0","chunk-5395999e":"649391a2","chunk-724d4c61":"a8f61a31","chunk-9b373450":"03879fc4","chunk-e280a5c6":"6cf08afd","chunk-f5cc95a8":"2a36daea"}[e]+".css",u=i.p+o,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var f=c[a],s=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(s===o||s===u))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){f=d[a],s=f.getAttribute("data-href");if(s===o||s===u)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var o=t&&t.target&&t.target.src||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],l.parentNode.removeChild(l),n(c)},l.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(l)}).then(function(){r[e]=0}));var o=u[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise(function(t,n){o=u[e]=[t,n]});t.push(o[2]=c);var f,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=a(e),f=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=u[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");c.type=o,c.request=r,n[1](c)}u[e]=void 0}};var d=setTimeout(function(){f({type:"timeout",target:s})},12e4);s.onerror=s.onload=f,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],s=f.push.bind(f);f.push=t,f=f.slice();for(var d=0;d<f.length;d++)t(f[d]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"365c":function(e,t,n){"use strict";var o=n("bc3a"),r=n.n(o),u={test:function(e){return r.a.post("/api/captcha",e)},getPhoneCaptcha:function(e){return r.a.post("/api/captcha",e)},register:function(e){return r.a.post("/api/user/register",e)},login:function(e){return r.a.post("/api/user/login",e)},getArticleList:function(e){return r.a.get("api/get/article/list?token=99c9150238fa21051f558ceccad55b8a",e)}};t["a"]=u},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=n("bc3a"),u=n.n(r);u.a.defaults.headers.post["Content-Type"]="application/json";var c={},a=u.a.create(c);a.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),a.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)}),Plugin.install=function(e,t){e.axios=a,window.axios=a,Object.defineProperties(e.prototype,{axios:{get:function(){return a}},$axios:{get:function(){return a}}})},o["default"].use(Plugin);Plugin;var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("router-view")],1)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spig",attrs:{id:"spig"}},[n("div",{attrs:{id:"message"}},[e._v("……")]),n("div",{staticClass:"mumu",attrs:{id:"mumu"}})])}],s=n("1157"),d=n.n(s);window.$=d.a,window.jQuery=d.a;d.a,n("c5dc");var l={name:"app",data:function(){return{visitor:"帅哥",title:"",isindex:!0}},beforeCreate:function(){},mounted:function(){},created:function(){}},h=l,p=(n("abb8"),n("2877")),m=Object(p["a"])(h,i,f,!1,null,null,null),g=m.exports,b=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index"},[n("router-link",{attrs:{to:"/navbar"}},[e._v("\n    导航栏\n  ")]),n("router-link",{attrs:{to:"/home"}},[e._v("\n    首页\n  ")]),n("router-link",{attrs:{to:"/register"}},[e._v("\n    注册\n  ")]),n("router-link",{attrs:{to:"/login"}},[e._v("\n    登录\n  ")]),n("router-link",{attrs:{to:"/test"}},[e._v("\n    头像\n  ")])],1)},k=[],y=(n("365c"),{name:"index",mounted:function(){}}),w=y,j=Object(p["a"])(w,v,k,!1,null,null,null),x=j.exports;o["default"].use(b["a"]);var _=new b["a"]({routes:[{path:"/",name:"index",component:x,redirect:"/index"},{path:"/index",name:"index",component:x},{path:"/navbar",name:"navbar",component:function(){return n.e("chunk-2c28616e").then(n.bind(null,"f454"))}},{path:"/home",name:"home",component:function(){return n.e("chunk-724d4c61").then(n.bind(null,"bb51"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-2d229481").then(n.bind(null,"dd7b"))}},{path:"/register",name:"register",component:function(){return n.e("chunk-11f63ffc").then(n.bind(null,"7803"))}},{path:"/default",name:"default",component:function(){return n.e("chunk-e280a5c6").then(n.bind(null,"21ae"))},children:[{path:"/introduce",name:"introduce",component:function(){return n.e("chunk-5395999e").then(n.bind(null,"da75"))}},{path:"/technology",name:"technology",component:function(){return n.e("chunk-9b373450").then(n.bind(null,"52a4"))}},{path:"/source",name:"source",component:function(){return n.e("chunk-2d0ddbd5").then(n.bind(null,"8359"))}},{path:"/inherit",name:"inherit",component:function(){return n.e("chunk-2d0b66df").then(n.bind(null,"1cb9"))}},{path:"/bbs",name:"bbs",component:function(){return n.e("chunk-f5cc95a8").then(n.bind(null,"1d31"))}},{path:"/s/:name",name:"article",component:function(){return n.e("chunk-2d0a4fd7").then(n.bind(null,"0991"))}}]},{path:"/protrait",name:"protrait",component:function(){return Promise.all([n.e("chunk-2d0e2366"),n.e("chunk-12ac2d1c")]).then(n.bind(null,"ff64"))}},{path:"/test",name:"test",component:function(){return Promise.all([n.e("chunk-2d0e2366"),n.e("chunk-96f52da8")]).then(n.bind(null,"c22d"))}}]}),P=n("2f62");o["default"].use(P["a"]);var M=new P["a"].Store({state:{},mutations:{},actions:{}}),O=n("5c96"),Q=n.n(O);n("c69f");o["default"].use(Q.a),o["default"].config.productionTip=!1,new o["default"]({router:_,store:M,render:function(e){return e(g)}}).$mount("#app")},7718:function(e,t,n){},abb8:function(e,t,n){"use strict";var o=n("7718"),r=n.n(o);r.a},c5dc:function(e,t){var n="阁下";jQuery(document).ready(function(e){e("#spig").mousedown(function(e){3==e.which&&o('秘密通道:<br />    <img src="http://pic.sc.chinaz.com/Files/pic/Listfaces/3646/02.gif"/><br/>            <a href="#/home" title="主页">主页</a>            <a href="#/introduce" title="简介">简介</a>            <a href="#/technology" title="工艺流程">工艺流程</a>            <a href="#/source" title="溯源">溯源</a>            <a href="#/inherit" title="文化传承">文化传承</a>            <a href="#/introduce" title="简介">简介</a>            <a href="#/introduce" title="简介">简介</a>            <a href="#/introduce" title="简介">简介</a>  ',1e4)}),e("#spig").bind("contextmenu",function(e){return!1})}),jQuery(document).ready(function(e){e("#message").hover(function(){e("#message").fadeTo("100",1)})}),jQuery(document).ready(function(e){e(".mumu").mouseover(function(){e(".mumu").fadeTo("300",.3),msgs=["我隐身了，你看不到我","我会隐身哦！嘿嘿！","别动手动脚的，把手拿开！","把手拿开我才出来！"];var t=Math.floor(Math.random()*msgs.length);o(msgs[t])}),e(".mumu").mouseout(function(){e(".mumu").fadeTo("300",1)})}),jQuery(document).ready(function(e){var t=window.location.href,r=document.title;if(t.indexOf("/p/")<0){var u=(new Date).getHours();o(u>0&&u<=6?n+" 你是夜猫子呀？还不睡觉，明天起的来么你？":u>6&&u<=11?n+" 早上好，早起的鸟儿有虫吃噢！早起的虫儿被鸟吃，你是鸟儿还是虫儿？嘻嘻！":u>11&&u<=14?n+" 中午了，吃饭了么？不要饿着了，饿死了谁来挺我呀！":u>14&&u<=18?n+" 中午的时光真难熬！还好有你在！":n+" 快来逗我玩吧！",6e3)}else o("欢迎"+n+"来到《"+r+"》",6e3);e(".spig").animate({top:e(".spig").offset().top+300,left:document.body.offsetWidth-185},{queue:!1,duration:1e3})}),jQuery(document).ready(function(e){e("h2 a").click(function(){o('萌萌地加载《<span style="color:#0099cc;">'+e(this).text()+"</span>》中，请稍候")}),e("h2 a").mouseover(function(){o('要看看《<span style="color:#0099cc;">'+e(this).text()+"</span>》这篇随笔么？")}),e("li a").mouseover(function(){o('去 <span style="color:#0099cc;">'+e(this).text()+"</span> 逛逛")}),e(".tbCommentBody").mouseover(function(){o('<span style="color:#0099cc;">'+n+"</span> 向评论栏出发吧！")}),e("#btn_comment_submit").mouseover(function(){o("确认提交了么？")}),e("#q").focus(function(){o("输入你想搜索的关键词再按Enter(回车)键就可以搜索啦!")})}),jQuery(document).ready(function(e){window.setInterval(function(){msgs=[e("#hitokoto").text()];var t=Math.floor(Math.random()*msgs.length);o(msgs[t],8e3)},15e3)}),jQuery(document).ready(function(e){e("#author").click(function(){o("留下你的尊姓大名！"),e(".spig").animate({top:e("#author").offset().top-70,left:e("#author").offset().left-170},{queue:!1,duration:1e3})}),e("#email").click(function(){o("留下你的邮箱，不然就是无头像人士了！"),e(".spig").animate({top:e("#email").offset().top-70,left:e("#email").offset().left-170},{queue:!1,duration:1e3})}),e("#url").click(function(){o("快快告诉我你的家在哪里，好让我去参观参观！"),e(".spig").animate({top:e("#url").offset().top-70,left:e("#url").offset().left-170},{queue:!1,duration:1e3})}),e("#comment").click(function(){o("认真填写哦！不然会被认作垃圾评论的！我的乖乖~"),e(".spig").animate({top:e("#comment").offset().top-70,left:e("#comment").offset().left-170},{queue:!1,duration:1e3})})});function o(e,t){null==t&&(t=1e4),jQuery("#message").hide().stop(),jQuery("#message").html(e),jQuery("#message").fadeIn(),jQuery("#message").fadeTo("1",1),jQuery("#message").fadeOut(t)}jQuery(document).ready(function(e){var t=e(".spig").offset().top;e(window).scroll(function(){e(".spig").animate({top:e(window).scrollTop()+t+300},{queue:!1,duration:1e3})})}),jQuery(document).ready(function(e){var t=0;e(".mumu").click(function(){if(a)a=!1;else{if(t++,t>4){msgs=["你有完没完呀？","你已经摸我"+t+"次了","非礼呀！救命！OH，My ladygaga"];var n=Math.floor(Math.random()*msgs.length)}else{msgs=["筋斗云！~我飞！","我跑呀跑呀跑！~~","别摸我，大男人，有什么好摸的！","惹不起你，我还躲不起你么？","不要摸我了，我会告诉老婆来打你的！","干嘛动我呀！小心我咬你！"];n=Math.floor(Math.random()*msgs.length)}s=[.1,.2,.3,.4,.5,.6,.7,.75,-.1,-.2,-.3,-.4,-.5,-.6,-.7,-.75];var r=Math.floor(Math.random()*s.length);Math.floor(Math.random()*s.length);e(".spig").animate({left:document.body.offsetWidth/2*(1+s[r]),top:document.body.offsetheight/2*(1+s[r])},{duration:500,complete:o(msgs[n])})}})});var r,u,c=!1,a=!1;jQuery(document).ready(function(e){e("#spig").mousedown(function(t){c=!0,r=t.pageX-parseInt(e("#spig").css("left")),u=t.pageY-parseInt(e("#spig").css("top"))}),e(document).mousemove(function(t){if(c){var n=t.pageX-r,o=t.pageY-u,i=e(window).width()-e("#spig").width(),f=e(document).height()-e("#spig").height();n>=0&&n<=i&&o>0&&o<=f&&(e("#spig").css({top:o,left:n}),a=!0)}}).mouseup(function(){c=!1})})},c69f:function(e,t,n){}});
//# sourceMappingURL=app.2c3ebdba.js.map