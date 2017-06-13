<template>
  <div class="dirver-info">
    <div class="dirver-info-img">
      <img src="../../../images/upload.png" height="92" width="134"/></div>
    <div class="dirver-info-text">
      <div class="dirver-info-text-item" v-for="(item, key) in list">
        {{key + ':' +item}}
      </div>
    </div>
    <div class="dirver-info-change">
      修改密码
    </div>
  </div>
</template>
<style lang="less" scoped>
  .dirver-info{
    width: 650px;
    padding: 38px 60px 60px 64px;
    margin:0 auto ;
    border: 2px solid #40aadb;
    border-top:none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    .dirver-info-img{
      width: 296px;
      height: 296px;
      margin: 0 auto 40px;
      border: 1px solid #b2b2b2;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      img{

      }
    }
    .dirver-info-text-item{
      color:#333;
      font-size: 26px;
      line-height: 54px;
    }
    .dirver-info-change{
      width: 170px;
      height: 60px;
      background:#40aadb;
      line-height: 60px;
      margin: 56px auto 0;
      border-radius: 6px;
      text-align: center;
      color: white;
      font-size: 30px;
    }
  }
</style>
<script>
//  import {resultPost} from '../../../service/getData'
  export default {
    data () {
      return {
        list: {
          '状态': '已备案',
          '驾驶人姓名': '已备案',
          '性别': '已备案',
          '年龄': '已备案',
          '身份证号码': '已备案',
          '联系电话': '已备案',
          '所属单位名称': '已备案'
        }
      }
    }
  }
</script>
