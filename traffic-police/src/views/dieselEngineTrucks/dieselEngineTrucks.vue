<template>
  <div class="dieselEngineTrucks">
    <div class="dieselEngineTrucks-form">
      <ul>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>车辆类型</span>
          </div>
          <div class="form-line-item">
            <input class="text-input" type="text" value="" v-model="name" readonly/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>申请类型</span>
          </div>
          <div class="div-select">
            <span class="btn-select stylebackground" @click.stop="ownerClick()">{{ ownerTimeMsg }}</span>
            <div class="div-select-ul" v-if="ownerShow">
              <ul>
                <li v-for="item in ownerData" @click.stop="ownerClick(item.longName, item.id)">{{item.longName}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-line" v-if ="this.ownerid === '2'">
          <div class="form-line-item item-name">
            <span>单位名称</span>
          </div>
          <div class="form-line-item">
            <input class="text-input bg-colour" type="text" value="" v-model="monadName" placeholder="请输入单位名称"/>
          </div>
        </li>
        <li class="form-line clear">
          <div class="form-line-item item-name">
            <span>车牌号码</span>
          </div>
           <div class="div-select left" >
            <span class="btn-select width-45" @click.stop="abbreviationSelectClick()">{{ abbreviationSelectMassage }}</span>
            <div class="div-select-ul" v-if="abbreviationSelectShow">
              <ul>
                <li v-for="item in abbreviationSelectData" @click.stop="abbreviationSelectClick(item.str, item.id)">{{item.str}}</li>
              </ul>
            </div>
          </div>
          <div class="div-select left abbreviationLeft" >
            <span class="btn-select width-45" @click.stop="moldClick()">{{ mold }}</span>
            <div class="div-select-ul" v-if="moldShow">
              <ul>
                 <li v-for="item in moldData" @click.stop="moldClick(item.str, item.id)">{{item.str}}</li>
              </ul>
            </div>
          </div>
          <div class="width-53 right">
            <input class="text-input bg-colour" type="text" v-model="numberPlate" name="" value="" placeholder="请输入车牌号码" >
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>发动机号</span>
          </div>
          <div class="form-line-item">
            <input class="text-input bg-colour" type="text" value="" v-model="behindTheFrame4Digits" placeholder="请输入发动机号"/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>车架号</span>
          </div>
          <div class="form-line-item">
            <input class="text-input bg-colour" type="text" value="" v-model="vehicleIdentificationNumber" placeholder="请输入车架号"/>
          </div>
        </li>
        <li class="form-li">
          <span>年审有效期</span>
        </li>
        <li class="form-li">
          <div class="form-line-item text-input stylebackground subscript" @click="datetimePick('picker')">
            <span>{{mtDateTimeMsg}}</span>
          </div>
        </li>
        <template v-if ="this.ownerid === '2'">
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>单位法人名字</span>
            </div>
            <div class="form-line-item">
              <input class="text-input bg-colour" type="text" value="" v-model="monadPersonName" placeholder="请输入单位法人名字"/>
            </div>
          </li>
          <li class="form-li">
            <span>单位法人身份证号</span>
          </li>
          <li class="form-li">
             <div class="form-line-item">
              <input class="text-input bg-colour" type="text" value="" v-model="monadPersonIdentityCard" placeholder="请输入单位法人身份证号"/>
            </div>
          </li>
          <li class="form-li">
            <span>单位申请人姓名</span>
          </li>
          <li class="form-li">
             <div class="form-line-item">
              <input class="text-input bg-colour" type="text" value="" v-model="monadPersonProposerName" placeholder="请输入单位申请人姓名"/>
            </div>
          </li>
          <li class="form-li">
            <span>单位申请人身份证</span>
          </li>
          <li class="form-li">
            <div class="form-line-item">
              <input class="text-input bg-colour" type="text" value="" v-model="monadIdentityCard" placeholder="请输入单位申请人身份证"/>
            </div>
          </li>
          <li class="form-li">
            <span>单位申请人联系电话</span>
          </li>
          <li class="form-li">
            <div class="form-line-item">
              <input class="text-input bg-colour" type="text" value="" v-model="monadmobile" placeholder="请输入单位申请人联系电话"/>
            </div>
          </li>
        </template>
        <template v-if ="this.ownerid === '1'">
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>车主姓名</span>
            </div>
            <div class="form-line-item">
              <input class="text-input bg-colour" type="text" value="" v-model="ownerName" placeholder="请输入车主姓名"/>
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>车主身份证号</span>
            </div>
            <div class="form-line-item">
              <input class="text-input bg-colour" type="text" value="" v-model="ownerItyCard" placeholder="请输入车主身份证号"/>
            </div>
          </li>
          <li class="form-line">
            <div class="form-line-item item-name">
              <span>车主联系电话</span>
            </div>
            <div class="form-line-item">
              <input class="text-input bg-colour" type="text" value="" v-model="ownerMobile" placeholder="请输入车主联系电话"/>
            </div>
          </li>
          </li>
          <li class="form-li">
            <span>是否是挂靠车辆</span>
          </li>
          <li class="form-li width-100">
            <div class="div-select">
              <span class="btn-select stylebackground" @click.stop="handCar()">{{ handCarName }}</span>
              <div class="div-select-ul" v-if="handShow">
                <ul>
                  <li v-for="item in handData" @click.stop="handCar(item.longName, item.id)">{{item.longName}}</li>
                </ul>
              </div>
            </div>
          </li>
        </template>
        <li class="form-li">
          <span v-if ="this.ownerid === '2'">单位申请人联系地址</span>
          <span v-if ="this.ownerid === '1'">车主联系地址</span>
        </li>
        <v-distpicker class="distp" @selected="onSelected"></v-distpicker>
        <div class="form-line-item">
          <input class="text-input bg-colour" type="text" value="" v-model="distpSite" placeholder="请输入单位申请人联系地址"/>
        </div>
      </ul>
      <div class="upload-photo">
        <div v-show="ownerid == '2'">
          <div>上传单位营业执照证件照片</div>
          <div class="upload-all-img">
            <div class="upload-item-img">
              <label class="upload-item-img-one" for="file1">
                <input id="file1" type="file" accept="image/*" >
                <img :src="imgOne1" />
              </label>
              <div class="upload-item-text-one">单位法人身份证(正面)</div>
            </div>
            <div class="upload-item-img">
              <label class="upload-item-img-one" for="file2">
                <input id="file2" type="file" accept="image/*" >
                <img :src="imgOne2" />
              </label>
              <div class="upload-item-text-one">申请人身份证(正面)</div>
            </div>
            <div class="upload-item-img">
              <label class="upload-item-img-one" for="file3">
                <input id="file3" type="file" accept="image/*" >
                <img :src="imgOne3" />
              </label>
              <div class="upload-item-text-one">车辆行驶证</div>
            </div>
            <div class="upload-item-img">
              <label class="upload-item-img-one" for="file4">
                <input id="file4" type="file" accept="image/*" >
                <img :src="imgOne4" />
              </label>
              <div class="upload-item-text-one">组织机构代码证</div>
            </div>
            <div class="upload-item-img">
              <label class="upload-item-img-one" for="file5">
                <input id="file5" type="file" accept="image/*" >
                <img :src="imgOne5" />
              </label>
              <div class="upload-item-text-one">     申请人手持身份证组织机构代码证照片</div>
            </div>
          </div>
        </div>
        <div v-show="ownerid == '1'">
          <div>上传证件照片</div>
          <div class="upload-all-img">
            <div class="upload-item-img">
              <label class="upload-item-img-one" for="file6">
                <input id="file6" type="file" accept="image/*" >
                <img :src="imgOne6" />
              </label>
              <div class="upload-item-text-one">车主身份证(正面)</div>
            </div>
            <div class="upload-all-img">
              <div class="upload-item-img">
                <label class="upload-item-img-one" for="file7">
                  <input id="file7" type="file" accept="image/*" >
                  <img :src="imgOne7" />
                </label>
                <div class="upload-item-text-one">车主驾驶证</div>
              </div>
            </div>
            <div class="upload-all-img">
              <div class="upload-item-img">
                <label class="upload-item-img-one" for="file8">
                  <input id="file8" type="file" accept="image/*" >
                  <img :src="imgOne8" />
                </label>
                <div class="upload-item-text-one">车主行驶证</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btns" @click.stop="subFn()">确认信息</button>
    <mt-datetime-picker ref="picker" type="date" v-model="informTime" @confirm="handleTime"></mt-datetime-picker>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>

<script>
import { resultPost } from '../../service/getData'
import { informationCollection } from '../../config/baseUrl'
import UploadFile from '../../service/uploadFile'
import VDistpicker from 'v-distpicker'
import { mapActions } from 'vuex'
import { Toast, MessageBox } from 'mint-ui'
export default {

  name: 'dieselEngineTrucks',

  data () {
    return {
      imgOne1: require('../../images/IDcard-front.png'),
      imgOne2: require('../../images/IDcard-front.png'),
      imgOne3: require('../../images/drivinglicense.png'),
      imgOne4: require('../../images/drivinglicense.png'),
      imgOne5: require('../../images/drivinglicense.png'),
      imgOne6: require('../../images/IDcard-front.png'),
      imgOne7: require('../../images/license-card.png'),
      imgOne8: require('../../images/drivinglicense.png'),
      ownerShow: false,
      ownerTimeMsg: '单位车辆',
      ownerid: '2',   // 申请id
      ownerData: [
        {
          'id': '2',
          'longName': '单位车辆'
        },
        {
          'id': '1',
          'longName': '个人车辆(含挂车)'
        }
      ],
      handShow: false,
      handCarName: '是',
      handid: '2',   // 申请id
      handData: [
        {
          'id': '2',
          'longName': '否'
        },
        {
          'id': '1',
          'longName': '是'
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
      ],
      mold: 'B',
      moldShow: false,
      moldData: [
        {
          'str': 'A'
        },
        {
          'str': 'B'
        },
        {
          'str': 'C'
        },
        {
          'str': 'D'
        },
        {
          'str': 'E'
        },
        {
          'str': 'F'
        },
        {
          'str': 'G'
        },
        {
          'str': 'H'
        },
        {
          'str': 'I'
        },
        {
          'str': 'J'
        },
        {
          'str': 'K'
        },
        {
          'str': 'L'
        },
        {
          'str': 'N'
        },
        {
          'str': 'M'
        },
        {
          'str': 'O'
        },
        {
          'str': 'P'
        },
        {
          'str': 'Q'
        },
        {
          'str': 'R'
        },
        {
          'str': 'S'
        },
        {
          'str': 'T'
        },
        {
          'str': 'U'
        },
        {
          'str': 'V'
        },
        {
          'str': 'W'
        },
        {
          'str': 'X'
        },
        {
          'str': 'Y'
        },
        {
          'str': 'Z'
        }
      ],
      name: '柴油轻型自卸货车',
      distpSite: '',                   // 申请人单位联系地址
      informTime: this.currentTime(),  // 保险生效时间当前时间
      mtDateTimeMsg: '',           // 年审时间
      monadName: '',               // 单位名称
      numberPlate: '',             // 车牌号码
      behindTheFrame4Digits: '',   // 发动机号
      vehicleIdentificationNumber: '',  // 车架号
      monadPersonIdentityCard: '',  // 单位法人身份证号
      monadPersonProposerName: '',  // 单位法人申请人姓名
      monadIdentityCard: '',        // 单位申请人身份证
      monadmobile: '',             // 单位申请人联系电话
      monadPersonName: '',         // 单位法人名字
      ownerName: '',               // 车主姓名
      ownerItyCard: '',            // 车主身份证号
      ownerMobile: '',             // 车主联系电话
      ownerSite: ''                // 车主联系地址
    }
  },
  components: { VDistpicker },
  mounted: function () {
    document.addEventListener('click', (e) => {
      this.ownerShow = false
      this.verifyCode = false
      this.licenseSelectShow = false
      this.abbreviationSelectShow = false
      this.moldShow = false
    })
    let getTime = this.currentTime()
    this.mtDateTimeMsg = getTime
    this.uploadImg()
  },
  methods: {
    // 申请类型
    ownerClick: function (str, id) {
      if (str) {
        this.ownerTimeMsg = str
        this.ownerid = id
      }
      if (this.ownerShow === true) {
        this.ownerShow = false
      } else {
        this.ownerShow = true
      }
    },
    // 是否是挂靠车辆
    handCar: function (str, id) {
      if (str) {
        this.handCarName = str
        this.handid = id
      }
      if (this.handShow === true) {
        this.handShow = false
      } else {
        this.handShow = true
      }
    },
    // 保险生效日期
    handleTime: function (informTime) {
      this.formatTime = this.format(this.informTime.toString(), 'yyyy-MM-dd')
      this.mtDateTimeMsg = this.formatTime
    },
     // 年审时间
    datetimePick: function (picker) {
      this.$refs.picker.open()
    },
    ...mapActions({
      postAppoin: 'postAppoin'
    }),
    currentTime: function (str) {  // 获取时间
      let now = new Date()
      let year = now.getFullYear()       // 年
      let month = now.getMonth() + 1     // 月
      let day = now.getDate()            // 日
      if (str === 'take') {
        let clock = year + 1 + '-'
        if (month < 10) {
          clock += '0'
        }
        clock += month + '-'
        if (day < 10) {
          clock += '0'
        }
        clock += day
        return (clock)
      } else {
        let clock = year + '-'
        if (month < 10) {
          clock += '0'
        }
        clock += month + '-'
        if (day < 10) {
          clock += '0'
        }
        clock += day
        return (clock)
      }
    },
    format: function (time, format) {   // 中国标准时间转换为datetime格式
      var t = new Date(time)
      var tf = function (i) { return (i < 10 ? '0' : '') + i }
      return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
        switch (a) {
          case 'yyyy':
            return tf(t.getFullYear())
          case 'MM':
            return tf(t.getMonth() + 1)
          case 'mm':
            return tf(t.getMinutes())
          case 'dd':
            return tf(t.getDate())
          case 'HH':
            return tf(t.getHours())
          case 'ss':
            return tf(t.getSeconds())
        }
      })
    },
    // 车牌省份简称
    abbreviationSelectClick: function (str, id) {
      this.moldShow = false
      if (str) {
        this.abbreviationSelectMassage = str
      }
      if (this.abbreviationSelectShow === true) {
        this.abbreviationSelectShow = false
      } else {
        this.abbreviationSelectShow = true
      }
    },
    // 车牌A-Z
    moldClick: function (str, id) {
      this.abbreviationSelectShow = false
      if (str) {
        this.mold = str
      }
      if (this.moldShow === true) {
        this.moldShow = false
      } else {
        this.moldShow = true
      }
    },
    uploadImg () {
      // 单位法人身份证(正面)
      UploadFile.upload({
        id: 'file1',
        callback: (res) => {
          this.imgOne1 = res.imgUrl
          this.IDcardFront = res.imgUrl
        }
      })
      // 申请人身份证(正面)
      UploadFile.upload({
        id: 'file2',
        callback: (res) => {
          this.imgOne2 = res.imgUrl
          this.IDcarfBack = res.imgUrl
        }
      })
      // 车辆行驶证
      UploadFile.upload({
        id: 'file3',
        callback: (res) => {
          this.imgOne3 = res.imgUrl
          this.registerCredential = res.imgUrl
        }
      })
      // 组织机构代码证
      UploadFile.upload({
        id: 'file4',
        callback: (res) => {
          this.imgOne4 = res.imgUrl
          this.organizationCodeCertificate = res.imgUrl
        }
      })
      // 申请人手持身份证组织机构代码证照片
      UploadFile.upload({
        id: 'file5',
        callback: (res) => {
          this.imgOne5 = res.imgUrl
          this.handOrganization = res.imgUrl
        }
      })
      // 车主身份证(正面)
      UploadFile.upload({
        id: 'file6',
        callback: (res) => {
          this.imgOne6 = res.imgUrl
          this.ownerIDcardFront = res.imgUrl
        }
      })
      // 车主驾驶证
      UploadFile.upload({
        id: 'file7',
        callback: (res) => {
          this.imgOne7 = res.imgUrl
          this.ownerRegisterCredential = res.imgUrl
        }
      })
      // 车主行驶证
      UploadFile.upload({
        id: 'file8',
        callback: (res) => {
          this.imgOne8 = res.imgUrl
          this.handOwnerIDcardFront = res.imgUrl
        }
      })
    },
    onSelected (data) {
      this.selectedData = data.province.value + data.city.value + data.area.value
      console.log(this.selectedData)
    },
    subFn: function () {
      if (!this.numberPlate) {
        Toast({message: '请输入车牌号码', position: 'bottom', className: 'white'})
        return
      } else if (!this.behindTheFrame4Digits) {
        Toast({message: '请输入发动机号', position: 'bottom', className: 'white'})
        return
      }
      if (this.ownerid === '2') {
        console.log('2')
        if (!this.monadName) {
          Toast({message: '请输入单位名称', position: 'bottom', className: 'white'})
          return
        } else if (!this.monadPersonName) {
          Toast({message: '请输入单位法人名字', position: 'bottom', className: 'white'})
          return
        } else if (!this.monadPersonIdentityCard) {
          Toast({message: '请输入单位法人身份证号', position: 'bottom', className: 'white'})
          return
        } else if (!this.monadPersonProposerName) {
          Toast({message: '请输入单位申请人姓名', position: 'bottom', className: 'white'})
          return
        } else if (!this.monadIdentityCard) {
          Toast({message: '请输入单位申请人身份证', position: 'bottom', className: 'white'})
          return
        } else if (!this.monadmobile) {
          Toast({message: '请输入单位申请人联系电话', position: 'bottom', className: 'white'})
          return
        } else if (!this.distpSite) {
          Toast({message: '请输入单位申请人联系地址', position: 'bottom', className: 'white'})
          return
        } else if (!this.IDcardFront) {
          Toast({message: '请上传单位法人身份证(正面)', position: 'bottom', className: 'white'})
          return
        } else if (!this.IDcarfBack) {
          Toast({message: '请上传申请人身份证(正面)', position: 'bottom', className: 'white'})
          return
        } else if (!this.registerCredential) {
          Toast({message: '请上传车辆行驶证', position: 'bottom', className: 'white'})
          return
        } else if (!this.organizationCodeCertificate) {
          Toast({message: '请上传组织机构代码证', position: 'bottom', className: 'white'})
          return
        } else if (!this.handOrganization) {
          Toast({message: '请上传申请人手持身份证组织机构代码证照片', position: 'bottom', className: 'white'})
          return
        } else {
          this.subFnData()
        }
      } else if (this.ownerid === '1') {
        if (!this.ownerName) {
          Toast({message: '请输入车主姓名', position: 'bottom', className: 'white'})
          return
        } else if (!this.ownerItyCard) {
          Toast({message: '请输入车主身份证号', position: 'bottom', className: 'white'})
          return
        } else if (!this.ownerMobile) {
          Toast({message: '请输入车主联系电话', position: 'bottom', className: 'white'})
          return
        } else if (!this.distpSite) {
          Toast({message: '请输入车主联系地址', position: 'bottom', className: 'white'})
          return
        } else if (!this.ownerIDcardFront) {
          Toast({message: '请上传车主身份证', position: 'bottom', className: 'white'})
          return
        } else if (!this.ownerRegisterCredential) {
          Toast({message: '请上传车主驾驶证', position: 'bottom', className: 'white'})
          return
        } else if (!this.handOwnerIDcardFront) {
          Toast({message: '请上传车主行驶证', position: 'bottom', className: 'white'})
          return
        }
      }
    },
    subFnData: function () {
      let dieselData
      if (this.ownerid === '2') {
        dieselData = {
          certificationType: this.ownerid,   // 申请类型
          licenseNumber: `${this.abbreviationSelectMassage}${this.mold}${this.numberPlate}`, // 车牌号码
          numberPlate: '02', // 车牌种类
          carType: 'H37', // 车辆类型
          engineNumber: this.behindTheFrame4Digits, // 发动机号
          vehicleIdentificationNumber: this.vehicleIdentificationNumber, // 车架号
          validityOfAnnualAudit: this.mtDateTimeMsg, // 年审有效期
          ownerIdentityCard: this.monadPersonIdentityCard, // 单位法人身份证号或车主身份证号码
          ownerMobilephone: this.monadmobile, // 单位申请人联系电话或者车主联系电话
          ownerAddress: `${this.selectedData}${this.distpSite}`, // 车主地址
          identityCard: this.monadPersonIdentityCard || window.localStorage.getItem('identityCard'), // 身份证
          mobilephone: this.applicantPhone || window.localStorage.getItem('mobilePhone'), // 联系电话
          address: `${this.selectedData}${this.distpSite}`, // 地址
          copyOfOwnerIdentityCard: this.IDcarfBack.split(',')[1], // 车辆所有人身份证复印件
          copyOfDriverLicense: this.registerCredential.split(',')[1], // 车辆驾驶人驾驶证复印件
          copyOfVehicleTravelLicense: this.registerCredential.split(',')[1], // 车辆行驶证复印件
          copyOfLegalEntity: this.IDcardFront.split(',')[1] || '', // 单位法人复印件
          copyOfApplicant: this.handOrganization.split(',')[1] || '', // 申请人手持身份证+组织代码证复印件
          loginUser: window.localStorage.getItem('identityCard'), // 申请星级用户身份证明号码
          userMobilepbone: window.localStorage.getItem('mobilePhone') // 申请星级用户手机号码
        }
      } else if (this.ownerid === '1') {
        dieselData = {
          certificationType: this.ownerid,
          licenseNumber: `${this.abbreviationSelectMassage}${this.mold}${this.numberPlate}`, // 车牌号码
          numberPlate: '02', // 车牌种类
          carType: 'H37', // 车辆类型
          engineNumber: this.behindTheFrame4Digits, // 发动机号
          vehicleIdentificationNumber: this.vehicleIdentificationNumber, // 车架号
          validityOfAnnualAudit: this.mtDateTimeMsg, // 年审有效期
          ownerIdentityCard: this.ownerItyCard, // 车主身份证号码
          ownerMobilephone: this.ownerMobile, // 车主联系电话
          ownerAddress: `${this.selectedData}${this.distpSite}`, // 车主地址
          identityCard: this.ownerItyCard || window.localStorage.getItem('identityCard'), // 身份证
          mobilephone: this.ownerMobile || window.localStorage.getItem('mobilePhone'), // 联系电话
          address: `${this.selectedData}${this.distpSite}`, // 地址
          copyOfOwnerIdentityCard: this.ownerIDcardFront.split(',')[1], // 车辆所有人身份证复印件
          copyOfDriverLicense: this.ownerRegisterCredential.split(',')[1], // 车辆驾驶人驾驶证复印件
          copyOfVehicleTravelLicense: this.handOwnerIDcardFront.split(',')[1], // 车辆行驶证复印件
          // copyOfLegalEntity: this.imgUrl1.split(',')[1] || '', // 单位法人复印件
          // copyOfApplicant: this.imgUrl5.split(',')[1] || '', // 申请人手持身份证+组织代码证复印件
          loginUser: window.localStorage.getItem('identityCard'), // 申请星级用户身份证明号码
          userMobilepbone: window.localStorage.getItem('mobilePhone') // 申请星级用户手机号码
        }
      }
      resultPost(informationCollection, dieselData).then(json => {
        if (json.code === '0000') {
          console.log(json)
        } else {
          MessageBox({
            title: '提示',
            message: json.msg
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.dieselEngineTrucks {
width: 100%;
background-color: #fff;
position: absolute;
left: 0;
right: 0;
padding: 20px 40px;
  .dieselEngineTrucks-form {
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
          /*vertical-align: middle;*/
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
        font-size: 26px;
      }
    }
    .form-li{
      width: 100%;
      display: inline-block;
      height: 60px;
      line-height:60px;
      span{
        font-size: 26px !important;
      }
    }
    .form-annotation{
      padding-top: 16px;
      color: red;
      font-size: 26px !important;
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
  .width-100 {
    width: 100% !important;
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
  .btn-select{
    height: 56px;
  }
  .div-select-ul{
    font-size: 26px;
  }
  .width-25 {
    width: 25% !important;
  }
  .width-53 {
    width: 53% !important;
  }
  .abbreviationLeft{
    margin-left: 2%;
  }
  .bg-colour{
    background-color: #fff;
  }
  .subscript{
    background: url(../../images/select1.png) no-repeat;
    background-size: 18px;
    background-position: 96% center;
  }
  .upload-all-img {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10px;
  }
  .upload-photo {
    margin-top: 30px;
    display: block;
    .upload-item-text-one {
      margin-top: 10px;
      margin-bottom: 30px;
      color: #7e7e7e;
      text-align: center;
    }
    .upload-item-img {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .upload-item-img-one {
      width: 300px;
      height: 300px;
      border: 2px solid #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      input {
        display: none;
      }
      img {
        max-height: 90%;
        max-width: 90%;
      }
    }
  }
}
</style>

<style lang="less">
  .distp{
    margin: 20px 0;
    select{
      width: 32%;
      padding: .3rem .75rem !important;
      height: 1.8rem !important;
      font-size: 0.3rem !important;
    }
  }
</style>
