<template>
    <div class="placeExamine">
      <div class="placeExamine-form">
        <ul>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>车牌名称</span>
            </div>
            <div class="div-select">
              <span class="btn-select" @click.stop="vehiclePlate()">{{ vehicle }}</span>
              <div class="div-select-ul" v-if="vehicleShow">
                <ul>
                  <li v-for="item in vehicleData" @click.stop="vehiclePlate(item.myNumberPlate)">{{item.myNumberPlate}}</li>
                </ul>
              </div>
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>车辆类型</span>
            </div>
            <div class="div-select">
              <span class="btn-select" @click.stop="vehicleType()">{{ vehType }}</span>
              <div class="div-select-ul" v-if="vehicleTypeShow">
                <ul>
                  <li v-for="item in vehicleTypeData" @click.stop="vehicleType(item.longName)">{{item.longName}}</li>
                </ul>
              </div>
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>所有人</span>
            </div>
            <div class="div-select">
              <span class="btn-select" @click.stop="ownerClick()">{{ ownerTimeMsg }}</span>
              <div class="div-select-ul" v-if="ownerShow">
                <ul>
                  <li v-for="item in ownerData" @click.stop="ownerClick(item.longName)">{{item.longName}}</li>
                </ul>
              </div>
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>车架号</span>
            </div>
            <div class="form-line-item">
              <input class="text-input" v-model="carriageNumber" type="text" value="" readonly/>
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>车主身份证</span>
            </div>
            <div class="form-line-item">
              <input class="text-input" v-model="identityCard" type="text" value="" />
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>车主名字</span>
            </div>
            <div class="form-line-item">
              <input class="text-input"  v-model="name" type="text" value="" />
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>受托机构</span>
            </div>
            <div class="div-select">
              <span class="btn-select" @click.stop="trusteeOrganisation()">{{ trusteeTimeMsg }}</span>
              <div class="div-select-ul" v-if="trusteeShow">
                <ul>
                  <li v-for="item in trusteeData" @click.stop="trusteeOrganisation(item.longName, item.shortName)">{{item.longName}}</li>
                </ul>
              </div>
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>收件人名字</span>
            </div>
            <div class="form-line-item">
              <input class="text-input" v-model="addresseeName" type="text" value="" readonly/>
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>联系电话</span>
            </div>
            <div class="form-line-item">
              <input class="text-input" type="text" v-model="mobile" value="" readonly/>
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>验证码</span>
            </div>
            <div class="form-line-item width-60">
              <input class="text-input" type="text" v-model="identifying" name="" value="" placeholder="请输入验证码">
            </div>
            <div class="form-line-item right width-35">
              <button class="btn browse-code" v-bind:class="{ 'show' : isShow}" :disabled="forbidden" @click="scanQRCode()">{{chronoScope}}</button>
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>邮政编码</span>
            </div>
            <div class="form-line-item">
              <input class="text-input" v-model="postalcode" type="text" value="" placeholder="请输入邮政编码"/>
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>收件人地址</span>
            </div>
            <div class="form-line-item width-40 city">
              <span>深圳市</span>
            </div>
            <div class="div-select form-line-item width-50">
              <span class="btn-select" @click.stop="areaSelectClick()">{{ areaSelectMassage }}</span>
              <div class="div-select-ul" v-if="areaSelectShow">
                <ul>
                  <li v-for="item in areaSelectData" @click.stop="areaSelectClick(item.str, item.id)">{{item.str}}</li>
                </ul>
              </div>
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span></span>
            </div>
            <div class="form-line-item">
              <input class="text-input" v-model="mailingAddress" type="text" name="" value="" maxlength="4" placeholder="请输入详细地址">
            </div>
          </li>
        </ul>
        <button class="btn btns" @click.stop="submitClick()">确认提交</button>
      </div>
    </div>
</template>
<script>
import { resultGet } from '../../../../service/getData'
import { getIssuing } from '../../../../config/baseUrl'
import { Toast } from 'mint-ui'
export default {
  name: 'placeExamine',
  data () {
    return {
      isShow: false,                           //  验证码
      vehicleShow: false,                      // 车牌下拉框
      vehicle: window.localStorage.getItem('myNumberPlate'),
      vehicleData: [],
      vehicleTypeShow: false,
      vehType: '小型汽车',                      // 车辆类型下拉框
      vehicleTypeData: [
        {
          'longName': '大型车辆'
        }
      ],
      ownerShow: false,
      ownerTimeMsg: '个人',
      ownerData: [
        {
          'longName': '个人'
        },
        {
          'longName': '所有人'
        }
      ],
      trusteeShow: false,                    // 受托机构下拉框
      trusteeTimeMsg: '藏A:拉萨市公安局交通警察支队车辆管理所',
      cur_place_id: '藏A',                   // 默认受托机关字段
      trusteeData: '',
      areaSelectShow: false,
      areaSelectMassage: '福田区',
      areaSelectData: [
        {
          'id': '01',
          'str': '福田区'
        },
        {
          'id': '02',
          'str': '罗湖区'
        },
        {
          'id': '03',
          'str': '南山区'
        },
        {
          'id': '04',
          'str': '宝安区'
        },
        {
          'id': '05',
          'str': '龙岗区'
        },
        {
          'id': '06',
          'str': '盐田区'
        },
        {
          'id': '07',
          'str': '龙华新区'
        },
        {
          'id': '08',
          'str': '光明新区'
        },
        {
          'id': '09',
          'str': '坪山新区'
        },
        {
          'id': '10',
          'str': '大鹏新区'
        }
      ],
      carriageNumber: '5563',                  // 车架号
      addresseeName: window.localStorage.getItem('userName'),                //  收件人名字
      mailingAddress: '',                     // 详细地址
      mobile: window.localStorage.getItem('mobilePhone'),                  // 手机号码
      chronoScope: '获取验证码',
      forbidden: false,                       // 验证码按钮禁用设置
      identityCard: window.localStorage.getItem('identityCard'),     // 身份证
      name: window.localStorage.getItem('userName'),   // 车主名字
      identifying: '',                        // 验证码
      postalcode: '',                         // 邮政编码
      behind: {}
    }
  },
  methods: {
    // 车牌下拉框
    vehiclePlate: function (str) {
      if (str) {
        this.vehicle = str
        this.carriageNumber = this.behind[str]
      }
      if (this.vehicleShow === true) {
        this.vehicleShow = false
      } else {
        this.vehicleShow = true
      }
    },
    // 车辆类型下拉框
    vehicleType: function (str) {
      if (str) {
        this.vehType = str
      }
      if (this.vehicleTypeShow === true) {
        this.vehicleTypeShow = false
      } else {
        this.vehicleTypeShow = true
      }
    },
    // 所有人下拉框
    ownerClick: function (str) {
      if (str) {
        this.ownerTimeMsg = str
      }
      if (this.ownerShow === true) {
        this.ownerShow = false
      } else {
        this.ownerShow = true
      }
    },
    // 受托机构下拉框
    trusteeOrganisation: function (str, id) {
      if (str) {
        this.trusteeTimeMsg = str
        this.cur_place_id = id
      }
      if (this.trusteeShow === true) {
        this.trusteeShow = false
      } else {
        this.trusteeShow = true
      }
    },
    // 收件人地址
    areaSelectClick: function (str, id) {
      if (str) {
        this.areaSelectMassage = str
        this.cur_area_id = id
      }
      if (this.areaSelectShow === true) {
        this.areaSelectShow = false
      } else {
        this.areaSelectShow = true
      }
    },
    // 获取验证码
    scanQRCode: function () {
      let mobile = this.mobile
      if (!(mobile)) {
        Toast({message: '请输入手机号', position: 'bottom', className: 'white'})
      } else {
        this.timePiece()
      }
    },
    // 验证码倒计时
    timePiece: function () {         //  验证码倒计时
      clearInterval(this.Timepiece)
      this.forbidden = true
      this.isShow = true
      var str = 60
      this.Timepiece = setInterval(() => {
        str = --str
        this.chronoScope = str + 's'
        if (this.chronoScope === 0 + 's') {
          clearInterval(this.Timepiece)
          this.chronoScope = '获取验证码'
          this.forbidden = false
          this.isShow = false
        }
      }, 1000)
    },
    // 确认提交
    submitClick: function () {
      if (!this.identityCard) {
        Toast({message: '请输入身份证', position: 'bottom', className: 'white'})
      } else if (!this.name) {
        Toast({message: '请输入车主名', position: 'bottom', className: 'white'})
      } else if (!this.identifying) {
        Toast({message: '请输入验证码', position: 'bottom', className: 'white'})
      } else if (this.identifying.length !== 6) {
        Toast({message: '请输入正确的验证码', position: 'bottom', className: 'white'})
      } else if (!this.postalcode) {
        Toast({message: '请输入邮政编码', position: 'bottom', className: 'white'})
      } else if (!this.mailingAddress) {
        Toast({message: '请输入详细地址', position: 'bottom', className: 'white'})
      } else {
        let dataLIst = {
          type: '机动车委托异地定期检验申报',
          textObj: {
            '车牌名称': this.vehicle,
            '车辆类型': this.vehType,
            '所有人': this.ownerTimeMsg,
            '车架号': this.carriageNumber,
            '车主身份证': this.identityCard,
            '车主名字': this.name,
            '受托机构': this.trusteeTimeMsg,
            '收件人名字': this.addresseeName,
            '联系电话': this.mobile,
            '邮政编码': this.postalcode,
            '收件人地址': `深圳市,${this.areaSelectMassage},${this.mailingAddress}`
          }
        }
        console.log(dataLIst)
      }
    }
  },
  mounted: function () {
    resultGet(getIssuing).then(json => {        // 查询发证机关列表
      this.trusteeData = json.data
    })
  },
  created () {
    JSON.parse(window.localStorage.getItem('cars')).map(item => {
      this.vehicleData.push({'myNumberPlate': item.myNumberPlate})
      this.behind[item.myNumberPlate] = item.behindTheFrame4Digits
    })
    document.addEventListener('click', (e) => {
      this.ownerShow = false
      this.vehicleShow = false
      this.vehicleTypeShow = false
      this.areaSelectShow = false
      this.trusteeShow = false
    })
  }
}
</script>
<style lang="less" scoped>
.placeExamine {
background-color: #fff;
position: absolute;
left: 0;
right: 0;
padding: 20px 40px;
  .placeExamine-form {
    background-color: #fff;
    padding-top:20px;
    .form-line {
      padding: 20px 0 0 180px;
      position: relative;
      line-height: 56px;
      .form-line-item {
        width: 100%;
        display: inline-block;
        height: 60px;
        line-height:60px;
        .photo-ex {
          color: #2696dd;
        }
        span {
          vertical-align: middle;
        }
        .browse-code {
          margin: 0;
          display: inline-block;
          height: 56px;
          width: 100%;
          line-height: 56px;
          border-radius: 10px;
          text-align: center;
          color:#fff;
          vertical-align:middle;
        }
        &.city {
          margin: 0 18px;
        }
      }
      .item-name {
        width: 180px;
        position: absolute;
        left: 0;
      }
      .div-select {
        font-size: 24px;
      }
    }
    .form-li{
      width: 100%;
      display: inline-block;
      height: 60px;
      line-height:60px;
      span{
        font-size: 16px;
      }
    }
    .form-annotation{
      color: red;
      font-size: 16px;
    }
  }
  .width-40 {
    width: 40% !important;
  }
  .width-35 {
    width: 35% !important;
  }
  .width-50 {
    width: 50% !important;
  }
  .width-60 {
    width: 60% !important;
  }
  .btn {
    width: 280px;
    margin-top:30px;
    display: inline-block;
  }
  .btns{
    margin: 60px 0 30px 0;
    width: 100%;
  }
  .div-select-ul{
    font-size: 16px;
  }
  .show{
    background: #999999;
  }
}
</style>

