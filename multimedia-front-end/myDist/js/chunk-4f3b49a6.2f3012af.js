(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f3b49a6"],{c22d:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footerBtn"},[t.attach.laterUrl?o("img",{staticClass:"preview",staticStyle:{width:"200px",height:"200px"},attrs:{src:t.attach.laterUrl}}):t._e(),o("el-button",{on:{click:function(e){t.dialogVisible=!0}}},[t._v("上传头像")]),o("el-dialog",{attrs:{title:"编辑头像",visible:t.dialogVisible,"before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("span",[o("el-row",[o("input",{staticClass:"el-button",staticStyle:{"margin-bottom":"15px"},attrs:{type:"file",id:"uploads",accept:"image/png, image/jpeg, image/gif, image/jpg"},on:{change:function(e){return t.uploadImg(e,1)}}})]),o("el-row",[o("el-col",{attrs:{span:16}},[o("vueCropper",{ref:"cropper",staticStyle:{width:"100%",height:"300px"},attrs:{img:t.attach.customaryUrl,autoCrop:t.options.autoCrop,fixedBox:t.options.fixedBox,canMoveBox:t.options.canMoveBox,autoCropWidth:t.options.autoCropWidth,autoCropHeight:t.options.autoCropHeight,centerBox:t.options.centerBox,fixed:t.options.fixed},on:{realTime:t.realTime}})],1),o("el-col",{attrs:{span:8}},[o("h2",{attrs:{align:"center"}},[t._v("头像预览")]),o("div",{staticClass:"show-preview"},[o("div",{staticClass:"preview",style:t.previews.div},[o("img",{style:t.previews.img,attrs:{src:t.previews.url}})])])])],1),o("el-row",{staticClass:"footerBtn",attrs:{align:"center"}},[o("el-button",{attrs:{type:"primary",size:"small",round:""},on:{click:function(e){return t.cut("blob")}}},[t._v("确认")]),o("el-button",{attrs:{type:"primary",size:"small",round:""},on:{click:t.handleClose}},[t._v("取消")])],1)],1)]),o("img",{attrs:{src:t.src,alt:""}})],1)},i=[],r=o("7e79"),s=o("bc3a"),n=o.n(s),l={components:{VueCropper:r["VueCropper"]},data:function(){return{src:"https://dmt.lcworkroom.cn/api/get/portrait/13750687010",dialogVisible:!1,options:{autoCrop:!0,fixedBox:!1,canMoveBox:!0,autoCropWidth:200,autoCropHeight:200,centerBox:!1,fixed:!0},previews:{},attach:{id:"",userId:"",customaryUrl:"",laterUrl:"",attachType:"photo"},fileName:"",uploadImgRelaPath:""}},methods:{handleClose:function(){this.dialogVisible=!1},realTime:function(t){this.previews=t},find:function(){this.userId=sessionStorage.getItem("userId"),this.$axios.post("/api/attach/find",this.attach).then(function(t){console.log(t)})},uploadImg:function(t,e){var o=this,a=t.target.files[0];if(!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(t.target.value))return this.$message.error("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种"),!1;console.log(t.target.result);var i=new FileReader;i.readAsDataURL(a),i.onload=function(t){var e=t.target.result;o.attach.customaryUrl=e}},cut:function(t){var e=this;this.$refs.cropper.getCropData(function(t){n.a.post("/api/portrait?token=99c9150238fa21051f558ceccad55b8a",{id:1234,type:"portrait",subtype:"upload",data:{base64:t}}).then(function(t){console.log(t),e.$router.go(0)})})}}},c=l,p=(o("f985"),o("2877")),u=Object(p["a"])(c,a,i,!1,null,"024c6e5c",null);e["default"]=u.exports},e307:function(t,e,o){},f985:function(t,e,o){"use strict";var a=o("e307"),i=o.n(a);i.a}}]);
//# sourceMappingURL=chunk-4f3b49a6.2f3012af.js.map