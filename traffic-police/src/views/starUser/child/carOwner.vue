<template>
  <div class="starUser-from pad-side-50">
    <div id="starUser-hbs">
      <ul class="starUser-hbs-list">
        <li class="starUser-hbs-item">
          <div class="starUser-hbs-name">
            <span>车辆类型</span>
          </div>
          <div class="div-select">
            <span class="btn-select" @click.stop="licenseSelectClick()">{{ licenseSelectMassage }}</span>
            <div class="div-select-ul" v-if="licenseSelectShow">
              <ul>
                <li v-for="item in licenseSelectData" @click.stop = "licenseSelectClick(item.str)">{{item.str}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="starUser-hbs-item clear">
          <div class="starUser-hbs-name">
            <span>车牌号码</span>
          </div>
          <div class="div-select width-120 left">
            <span class="btn-select min-btn-select" @click.stop="abbreviationSelectClick()">{{ abbreviationSelectMassage }}</span>
            <div class="div-select-ul" v-if="abbreviationSelectShow">
              <ul>
                <li v-for="item in abbreviationSelectData" @click.stop = "abbreviationSelectClick(item.str)">{{item.str}}</li>
              </ul>
            </div>
          </div>
          <div class="starUser-hbs-text width-70 right">
            <input class="text-input" type="text" name="" value="B">
          </div>
        </li>
        <li class="starUser-hbs-item">
          <div class="starUser-hbs-name">
            <span>车主姓名</span>
          </div>
          <div class="starUser-hbs-text">
            <input class="text-input" type="text" name="" value="" placeholder="车主姓名">
          </div>
        </li>
        <li class="starUser-hbs-item">
          <div class="starUser-hbs-name">
            <span>车主身份证</span>
          </div>
          <div class="starUser-hbs-text">
            <input class="text-input" type="text" name="" value="" placeholder="车主是外籍人士,请在证件号前加F">
          </div>
        </li>
        <li class="starUser-hbs-item">
          <div class="starUser-hbs-name">
            <span>使用人身份证</span>
          </div>
          <div class="starUser-hbs-text">
            <input class="text-input" type="text" name="" value="" placeholder="如果您是外籍人士,请在证件号前加F">
          </div>
        </li>
        <li class="starUser-hbs-item">
          <div class="starUser-hbs-name">
            <span>驾驶证核发地</span>
          </div>
          <div class="starUser-hbs-radio">
            <div class="starUser-hbs-radio-box">
              <input type="radio" id="starUserRadio1" checked="checked" name="drivingLicence" value="深圳本地">
              <label name="starUserRadio1" class="checked" for="starUserRadio1">深圳本地</label>
            </div>
            <div class="starUser-hbs-radio-box">
              <input type="radio" id="starUserRadio2" name="drivingLicence" value="本省外市">
              <label name="starUserRadio2" class="checked" for="starUserRadio2">本省外市</label>
            </div>
            <div class="starUser-hbs-radio-box">
              <input type="radio" id="starUserRadio3" name="drivingLicence" value="外省">
              <label name="starUserRadio3" class="checked" for="starUserRadio3">外省</label>
            </div>
          </div>
        </li>
        <li class="starUser-hbs-item">
          <div class="starUser-hbs-name">
            <span>手机号码</span>
          </div>
          <div class="starUser-hbs-text">
            <input class="text-input" type="tel" name="" value="" placeholder="请输入您的手机号码">
          </div>
        </li>
        <li class="starUser-hbs-item clear">
          <div class="starUser-hbs-name">
            <span>验证码</span>
          </div>
          <div class="starUser-hbs-text width-40 left">
            <input class="text-input" type="tel" name="" value="" placeholder="请输入验证码">
          </div>
          <div class="left starUser-hbs-code" @click="getVerification()">获取验证码</div>
        </li>
        <li class="starUser-hbs-item">
          <div class="starUser-hbs-name">
            <span>联系地址</span>
          </div>
          <div class="starUser-hbs-text">
            <input class="text-input" type="text" name="" value="" placeholder="您的联系地址(非必填)">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
  name: 'carOwner',
  data () {
    return {

    }
  }
}
</script>
<style lang="less">
.starUser-from {
  background-color: #fff;
  margin-top: 12px;
  #starUser-hbs {
    padding-bottom: 20px;
    .starUser-hbs-list {
      overflow: hidden;
      .starUser-hbs-item {
        margin-top: 24px;
        padding-left: 180px;
        position: relative;
        line-height: 56px;
        .starUser-hbs-name {
          width: 180px;
          position: absolute;
          left: 0;
        }
        .starUser-hbs-text {
          width: 100%;
          display: inline-block;
        }
        .starUser-hbs-radio {
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .starUser-hbs-code {
          text-indent: 28px;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
