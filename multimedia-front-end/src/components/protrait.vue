<template>
  <!-- <el-upload action='' :on-change="getFile" :limit="1" list-type="picture" :auto-upload="false">
    <img :src="base64" alt="">
    <el-button size="small" type="primary">选择图片上传,最多上传一张图片</el-button>
  </el-upload> -->
  <div>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar"> -->
      <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
      <vueCropper
        ref="cropper"
        :img="base64"
        :outputSize="1"
        :outputType="jpeg"
      ></vueCropper>
    </el-upload>
    <img :src="src" alt="">
    <div>
      <vue-cropper>
        
      </vue-cropper>
    </div>
  </div>
</template>

<script>
  import { VueCropper }  from 'vue-cropper' 
  import axios from 'axios'
  export default {
    components: {
      VueCropper,
    },
    // data() {
    //   return {
    //     base64:''
    //   }
    // },
    // methods: {
    //   getBase64(file) {
    //   return new Promise(function(resolve, reject) {
    //     let reader = new FileReader();
    //     let imgResult = "";
    //     reader.readAsDataURL(file);
    //     reader.onload = function() {
    //       imgResult = reader.result;
    //     };
    //     reader.onerror = function(error) {
    //       reject(error);
    //     };
    //     reader.onloadend = function() {
    //       resolve(imgResult);
    //     };
    //   });
    // },
    // getFile(file, fileList) {
    
    //   this.getBase64(file.raw).then(res => {
    //     this.base64 = res
    //     console.log(res)
    //   });
    // }

    // }
    data() {
      return {
        imageUrl: '',
        base64:'',
        src:'https://dmt.lcworkroom.cn/api/get/portrait/13750687010'
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/JPG';
        const isLt1M = file.size / 1024 / 1024 < 1;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG/PNG/JPEG 格式!');
        }
        if (!isLt1M) {
          this.$message.error('上传头像图片大小不能超过 1MB!');
        }
        if(isJPG && isLt1M){
          this.getBase64(file).then(res => {
          this.base64 = res
        //   console.log(res)
          // axios.post('/api/portrait?token=' + '99c9150238fa21051f558ceccad55b8a',{
          //   "id":1234,
          //   "type":"portrait",
          //   "subtype":"upload",
          //   "data":{
          //     "base64":this.base64
          //     }
          //   }).then(res => {
          //     console.log(res)
          //     this.$router.go(0)
          //   })
          })
        }

        // let reader = new FileReader();
        // let img = new Image();
        // let imgResult = "xxx";
        // console.log(222)
        // if(isJPG && isLt1M){
        //   console.log(333)
        //   reader.onload = e => {
        //     console.log(111,imgResult);
        //   }
        // }
        
        return isJPG && isLt1M;
      },
      getBase64(file) {
      return new Promise(function(resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function() {
          imgResult = reader.result;
        };
        reader.onerror = function(error) {
          reject(error);
        };
        reader.onloadend = function() {
          resolve(imgResult);
        };
      });
    },
    // getFile(file, fileList) {
    
    //   this.getBase64(file.raw).then(res => {
    //     console.log(file)
    //     this.base64 = res
    //     console.log(res)
    //   });
    // }
      
    }
  }
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .prptrait{
    position: absolute;
    left: 200px;
  }
</style>