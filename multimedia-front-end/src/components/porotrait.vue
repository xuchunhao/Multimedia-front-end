<template>
  <div class="footerBtn">
    <img
      v-if="attach.laterUrl"
      :src="attach.laterUrl"
      class="preview"
      style="width:200px;height:200px"
    />
    <el-button class="btn-edit" icon="el-icon-edit" @click="dialogVisible=true"></el-button>

    <!-- 弹出层-裁剪 -->
    <el-dialog title="编辑头像" :visible.sync="dialogVisible" :before-close="handleClose">
      <span>
        <el-row>
          <input
            type="file"
            id="uploads"
            accept="image/png, image/jpeg, image/gif, image/jpg"
            @change="uploadImg($event,1)"
            class="el-button"
            style="margin-bottom:15px"
          />
        </el-row>
        <el-row>
          <el-col :span="16">
            <!-- 裁剪 -->
            <vueCropper
              style="width:100%;height:300px"
              ref="cropper"
              :img="attach.customaryUrl"
              :autoCrop="options.autoCrop"
              :fixedBox="options.fixedBox"
              :canMoveBox="options.canMoveBox"
              :autoCropWidth="options.autoCropWidth"
              :autoCropHeight="options.autoCropHeight"
              :centerBox="options.centerBox"
              :fixed="options.fixed"
              @realTime="realTime"
            ></vueCropper>
          </el-col>
          <el-col :span="8">
            <h2 align="center">头像预览</h2>
            <div class="show-preview">
              <div :style="previews.div" class="preview">
                <img :src="previews.url" :style="previews.img" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="footerBtn" align="center">
          <el-button class="btn-content" type="primary" size="small" round @click="cut('blob')">确认</el-button>
          <el-button class="btn-content" type="primary" size="small" round @click="handleClose">取消</el-button>
        </el-row>
      </span>
    </el-dialog>
  </div>
</template>

<script>
//数据库里需要存两份图片地址，一张为原图地址，一张为裁剪后的头像地址
import { VueCropper }  from 'vue-cropper' 
import api from "@/api/index.js";

export default {
  components: {
      VueCropper,
    },
  data() {
    return {
      dialogVisible: false,
      options: {
        autoCrop: true, //默认生成截图框
        fixedBox: false, //固定截图框大小
        canMoveBox: true, //截图框不能拖动
        autoCropWidth: 200, //截图框宽度
        autoCropHeight: 200, //截图框高度
        centerBox: false, //截图框被限制在图片里面
        fixed:true
      },
      previews: {}, //实时预览图数据
      attach: {
        //后端附件表
        id: "",
        userId: "",
        customaryUrl: "", //原图片路径
        laterUrl: "", //裁剪后图片路径  /static/logo.png
        attachType: "photo" //附件类型
      },
      fileName: "", //本机文件地址
      uploadImgRelaPath: "" //上传后图片地址
    };
  },
  methods: {
    //控制弹出层关闭
    handleClose() {
      this.dialogVisible = false;
    },
    //实时预览
    realTime(data) {
      this.previews = data;
    },
    //加载头像信息
    find() {
      this.userId = sessionStorage.getItem("userId");
      this.$axios.post("/api/attach/find", this.attach).then(res => {
        // console.log(res);
      });
    },
    //选择本地图片
    uploadImg(e, num) {
      var file = e.target.files[0];
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        this.$message.error("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      // console.log(e.target.result);
      //fileReader 接口，用于异步读取文件数据
      var reader = new FileReader();
      reader.readAsDataURL(file); //重要 以dataURL形式读取文件
      reader.onload = e => {
        // data = window.URL.createObjectURL(new Blob([e.target.result])) 转化为blob格式

        let data = e.target.result;

        this.attach.customaryUrl = data;
        // 转化为base64
        // reader.readAsDataURL(file)
        // 转化为blob
      };
    },
    //确认截图,上传
    cut(type) {
      this.$refs.cropper.getCropData(res => {
        //res是裁剪后图片的bolb对象
        api.changePortrait({
            "id":1234,
            "type":"portrait",
            "subtype":"upload",
            "data":{
              "base64":res
              }
            }).then(res => {
              // console.log(res)
              this.$router.go(0)
            })
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/* 弹性布局 水平居中 */
.show-preview {
  display: flex;
  justify-content: center;
}

.preview {
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #cccccc;
  background: #cccccc;
}
.footerBtn {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  .btn-edit{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: absolute;
    left: 270px;
    top: 220px;
    font-size: 20px;
    border: none;
    background: #fff;
  }
  .btn-content{
    background-color: rgb(165, 42, 26);
    border: none;
  }
}
</style>
