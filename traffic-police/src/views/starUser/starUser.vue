<template>
  <div class="starUser-outer">
    <div class="starUser-select pad-side-50">
      <p>请根据您的出行方式来选择服务认证类型</p>
      <div class="div-select">
        <span id="btnSelect" class="btn-select" @click.stop="typeSelectClick()">{{ typeSelectMassage }}</span>
        <div class="div-select-ul" v-if='typeSelectShow'>
          <ul>
            <li v-for="item in typeSelectData" @click.stop = "typeSelectClick(item.str)">{{item.str}}</li>
          </ul>
        </div>
      </div>
    </div>
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
        <button class="btn" type="button" name="button">确认提交</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      typeSelectShow: false,
      typeSelectMassage: '我是车主',
      typeSelectData: [
        {
          'str': '我是车主'
        },
        {
          'str': '我不是车主，我是车辆长期使用人'
        },
        {
          'str': '我有驾驶证，但没固定车辆'
        },
        {
          'str': '我是行人，非机动车驾驶人'
        }
      ],
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
    typeSelectClick: function (str) {
      if (str) {
        this.typeSelectMassage = str
      }
      if (this.typeSelectShow === true) {
        this.typeSelectShow = false
      } else {
        this.typeSelectShow = true
        this.licenseSelectShow = false
        this.abbreviationSelectShow = false
      }
    },
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
<style lang="less" >

.starUser-outer {
  font-size: 26px;
  color: #000;
  position: relative;

  .width-120 {
    width: 120px !important;
  }
  .width-70 {
    width: 70% !important;
  }
  .width-40{
    width: 40% !important;
  }
  .starUser-select {
    background-color: #fff;
    padding-bottom: 24px;
    position: relative;
    p {
      color: #666;
      line-height: 68px;
    }
  }
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
            background-image: url('../../images/ID-front.png');
            background-size: cover;
          }
        }
        .starUser-upload-center {
          em {
            background-image: url('../../images/ID-rear.png');
            background-size: cover;
          }
        }
        .starUser-upload-right {
          em {
            background-image: url('../../images/ID-hand.png');
            background-size: cover;
          }
        }
      }
      p {
        padding-bottom: 18px;
      }
    }
  }
}
</style>
