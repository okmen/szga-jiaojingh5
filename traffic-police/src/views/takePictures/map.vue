<template>
  <div id="container">
    <span id="btn">点击上传</span>
  </div>
</template>
<script>
/* eslint-disable */
import { resultGet } from '../../service/getData';
import { uploadImg } from '../../config/baseUrl';
import uploadImgFun from '../../service/uploadImg';
export default {
  name: 'map',
  data () {
    return {}
  },
  methods: {
  	getToken:function(){
      resultGet(uploadImg).then(res => {
        res.code == '0000' && this.uploadImg(res.upToken);
      })
    },
    uploadImg:function(uptoken){
      uploadImgFun({
        selfId:'btn',
        parentId:'container',
        upToken:uptoken,
        fileUploaded:function(res){
          console.log(res);
        },
        error:function(err){
          console.log(err);
        }
      });
    }
  },
  mounted: function(){
    this.getToken();
  }
}
/* eslint-enable */
</script>
<style>
  
</style>