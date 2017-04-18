<template>
<div class="starUser-upload">
  <p>请上传以下照片</p>
  <div class="starUser-upload-inner">
    <div class="starUser-upload-left starUser-upload-box">
      <em></em>
      <span>身份证(正面)</span>
    </div>
    <div class="starUser-upload-center starUser-upload-box">
      <em></em>
      <span>身份证(反面)</span>
    </div>
    <div class="starUser-upload-right starUser-upload-box">
      <em></em>
      <span>手持身份证</span>
    </div>
  </div>
</div>
</template>
<style lang="less">
.starUser-upload {
  position: relative;
  .starUser-upload-inner {
    display: flex;
    justify-content: space-between;
    .starUser-upload-box {
      width: 190px;
      height: 190px;
      background-color: #efeff4;
      border: 2px solid #dddde1;
      border-radius: 15px;
      color: #666;
      font-size: 22px;
      text-align: center;
      em {
        display: inline-block;
        width: 162px;
        height: 111px;
        margin-top: 20px;
        margin-bottom: 10px;
      }
      span {
        display: block;
      }
    }
    .starUser-upload-left {
      em {
        background-image: url('../../../images/ID-front.png');
        background-size: cover;
      }
    }
    .starUser-upload-center {
      em {
        background-image: url('../../../images/ID-rear.png');
        background-size: cover;
      }
    }
    .starUser-upload-right {
      em {
        background-image: url('../../../images/ID-hand.png');
        background-size: cover;
      }
    }
  }
  p {
    padding-bottom: 18px;
  }
}

</style>
