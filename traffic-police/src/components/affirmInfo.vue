<template>
<div id="affirmInfo-body">
  <div class="affirmInfo-text">
    <ul class="affirmInfo-text-content">
      <li class="affirmInfo-text-item" v-for="(value, key) in dataList.textObj">
        <span class="affirmInfo-text-item-key">{{ key }}</span>
        <span class="affirmInfo-text-item-val">{{ value }}</span>
      </li>
    </ul>
  </div>
  <div class="affirmInfo-img">
    <p>请按示例图上传以下证件照片</p>
    <div class="affirmInfo-img-content">
      <dl class="affirmInfo-img-item" v-for="(value, key) in dataList.imgObj">
        <dt class="affirmInfo-img-item-val">{{ val }}</dt>
        <dd class="affirmInfo-img-item-key">{{ key }}</dd>
      </dl>
    </div>
  </div>
  <div class="affirmInfo-btn">
    <button id="affirmInfo-btn">提 交</button>
  </div>
</div>
</template>
<script>
// import { resultPost } from '../service/getData'
// import { userAgreement } from '../config/baseUrl'
// import { Toast } from 'mint-ui'
export default {
  name: 'affirmInfo',
  data () {
    return {
      dataList: {
        type: '补领行驶证',
        textObj:
        {
          '车主姓名': '张大山',
          '证件号码': '445222199209020034',
          '车牌号码': '粤B6A42E',
          '车牌类型': '02',
          '户籍所在地': '深户',
          '收件人姓名': '张宇帆',
          '收件人地址': '深圳市,罗湖区,文锦北路XXXXX号'
        },
        imgObj:
        {
          '身份证(正面)': 'base64',
          '身份证(反面)': 'base64',
          '车辆45度照片': 'base64'
        }
      }
    }
  },
  mounted: function () {
  },
  methods: {
  }
}
</script>
<style lang="less">
  #affirmInfo-body{
    position: relative;
    font-size: 30px;
    color: #333;
    background-color: #fff;
    .affirmInfo-text{
      position: relative;
      padding: 30px;
      .affirmInfo-text-content{
        border: 1px solid #ccc;
        border-radius: 6Px;
        line-height: 92px;
        .affirmInfo-text-item{
          padding-left: 250px;
          position: relative;
          border-bottom: 1px solid #ccc;
          .affirmInfo-text-item-key{
            position: absolute;
            left: 0;
            display: inline-block;
            width: 250px;
            color: #666;
            text-indent: 15px;
            height: 100%;
          }
          .affirmInfo-text-item-val{
            display: inline-block;
          }
        }
        .affirmInfo-text-item:last-child{
          border-bottom: none;
        }
      }
    }
    .affirmInfo-img{
      position: relative;
      padding: 50px;
      padding-top: 0;
      p{
        line-height: 75px;
      }
      .affirmInfo-img-content{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        .affirmInfo-img-item{
          width: 305px;
          .affirmInfo-img-item-val{
            width: 100%;
            height: 305px;
            background-color: skyblue;
          }
          .affirmInfo-img-item-key{
            text-align: center;
            line-height: 75px;
            color: #666;
            font-size: 28px;
          }
        }
      }
    }
    .affirmInfo-btn{
      padding: 0 50px 60px;
      width: 100%;
      box-sizing: border-box;
      button{
        width: 100%;
        color: #fff;
        background-color: #09bb07;
        line-height: 80px;
        font-size: 32px;
        outline: none;
        border-radius: 4Px;
      }
    }
  }
</style>
