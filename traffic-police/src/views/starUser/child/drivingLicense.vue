<template>
  <div id="starUser-hbs">
    <ul class="starUser-hbs-list">
      <li class="starUser-hbs-item">
        <div class="starUser-hbs-name">
          <span>身份证号</span>
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
</template>
<script>
  export default{
    name: 'drivingLicense',
    data () {
      return {
        licenseSelectShow: false,
        licenseSelectMassage: '蓝牌',
        licenseSelectData: [
          {
            'str': '蓝牌y'
          },
          {
            'str': '黄牌'
          },
          {
            'str': '黑牌'
          },
          {
            'str': '个性牌'
          },
          {
            'str': '小型新能源车号牌'
          },
          {
            'str': '大型新能源车号牌'
          }
        ],
        abbreviationSelectShow: false,
        abbreviationSelectMassage: '粤',
        abbreviationSelectData: [
          {
            'str': '粤'
          },
          {
            'str': '鄂'
          },
          {
            'str': '豫'
          },
          {
            'str': '皖'
          },
          {
            'str': '赣'
          },
          {
            'str': '冀'
          },
          {
            'str': '鲁'
          },
          {
            'str': '浙'
          },
          {
            'str': '苏'
          },
          {
            'str': '湘'
          },
          {
            'str': '闽'
          },
          {
            'str': '蒙'
          },
          {
            'str': '京'
          },
          {
            'str': '辽'
          },
          {
            'str': '渝'
          },
          {
            'str': '沪'
          },
          {
            'str': '陕'
          },
          {
            'str': '川'
          },
          {
            'str': '黑'
          },
          {
            'str': '晋'
          },
          {
            'str': '桂'
          },
          {
            'str': '吉'
          },
          {
            'str': '宁'
          },
          {
            'str': '贵'
          },
          {
            'str': '琼'
          },
          {
            'str': '甘'
          },
          {
            'str': '青'
          },
          {
            'str': '津'
          },
          {
            'str': '云'
          },
          {
            'str': '藏'
          },
          {
            'str': '新'
          }
        ]
      }
    },
    methods: {
      licenseSelectClick: function (str) {
        if (str) {
          this.licenseSelectMassage = str
        }
        if (this.licenseSelectShow === true) {
          this.licenseSelectShow = false
        } else {
          this.licenseSelectShow = true
          this.typeSelectShow = false
          this.abbreviationSelectShow = false
        }
      },
      abbreviationSelectClick: function (str) {
        if (str) {
          this.abbreviationSelectMassage = str
        }
        if (this.abbreviationSelectShow === true) {
          this.abbreviationSelectShow = false
        } else {
          this.abbreviationSelectShow = true
          this.licenseSelectShow = false
          this.typeSelectShow = false
        }
      },
      getVerification: function () {}
    },
    created () {
      document.addEventListener('click', (e) => {
        this.typeSelectShow = false
        this.licenseSelectShow = false
        this.abbreviationSelectShow = false
      })
    }
  }
</script>
<style lang="less">
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

</style>

