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
        <li class="form-line">
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
        <li class="form-li">
          <span>保险生效日期</span>
        </li>
        <li class="form-li">
          <div class="form-line-item text-input stylebackground subscript" @click="datetimePick('picker')">
            <span>{{mtDateTimeMsg}}</span>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>单位法人名字</span>
          </div>
          <div class="form-line-item">
            <input class="text-input bg-colour" type="text" value="" v-model="monadPersonName" placeholder="请输入单位法人名字"/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>单位法人身份证号</span>
          </div>
          <div class="form-line-item">
            <input class="text-input bg-colour" type="text" value="" v-model="monadPersonIdentityCard" placeholder="请输入单位法人名字"/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>单位申请人姓名</span>
          </div>
          <div class="form-line-item">
            <input class="text-input bg-colour" type="text" value="" v-model="monadPersonProposerName" placeholder="请输入单位申请人姓名"/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>单位申请人身份证</span>
          </div>
          <div class="form-line-item">
            <input class="text-input bg-colour" type="text" value="" v-model="monadIdentityCard" placeholder="请输入单位申请人身份证"/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>单位申请人联系电话</span>
          </div>
          <div class="form-line-item">
            <input class="text-input bg-colour" type="text" value="" v-model="monadmobile" placeholder="请输入单位申请人联系电话"/>
          </div>
        </li>
      </ul>
      <div class="upload-photo">
        <div class="">上传单位营业执照证件照片</div>
        <div class="upload-all-img">
          <div class="upload-item-img">
            <label class="upload-item-img-one" for="file1">
              <input id="file1" type="file" accept="image/*" >
              <img :src="imgOne1" />
            </label>
            <div class="upload-item-text-one">身份证(正面)</div>
          </div>
          <div class="upload-item-img">
            <label class="upload-item-img-one" for="file2">
              <input id="file2" type="file" accept="image/*" >
              <img :src="imgOne2" />
            </label>
            <div class="upload-item-text-one">身份证(反面)</div>
          </div>
          <div class="upload-item-img">
            <label class="upload-item-img-one" for="file3">
              <input id="file3" type="file" accept="image/*" >
              <img :src="imgOne3" />
            </label>
            <div class="upload-item-text-one">机动车行驶证</div>
          </div>
          <div class="upload-item-img">
            <label class="upload-item-img-one" for="file3">
              <input id="file3" type="file" accept="image/*" >
              <img :src="imgOne3" />
            </label>
            <div class="upload-item-text-one">机动车行驶证</div>
          </div>
          <div class="upload-item-img">
            <label class="upload-item-img-one" for="file3">
              <input id="file3" type="file" accept="image/*" >
              <img :src="imgOne3" />
            </label>
            <div class="upload-item-text-one">机动车行驶证</div>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btns">确认信息</button>
    <mt-datetime-picker ref="picker" type="date" v-model="informTime" @confirm="handleTime"></mt-datetime-picker>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>

<script>
import UploadFile from '../../service/uploadFile'
import { mapActions } from 'vuex'
export default {

  name: 'dieselEngineTrucks',

  data () {
    return {
      imgOne1: require('../../images/IDcard-front.png'),
      imgOne2: require('../../images/IDcard-back.png'),
      imgOne3: require('../../images/drivinglicense.png'),
      ownerShow: false,
      ownerTimeMsg: '单位车辆',
      ownerData: [
        {
          'id': '0',
          'longName': '单位车辆'
        },
        {
          'id': '1',
          'longName': '个人车辆(含挂车)'
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
      informTime: this.currentTime(),  // 保险生效时间当前时间
      mtDateTimeMsg: '',           // 年审时间
      monadName: '',               // 单位名称
      numberPlate: '',             // 车牌号码
      behindTheFrame4Digits: '',   // 发动机号
      monadPersonIdentityCard: '',  // 单位法人身份证号
      monadPersonProposerName: '',  // 单位法人申请人姓名
      monadIdentityCard: '',        // 单位申请人身份证
      monadmobile: '',             // 单位申请人联系电话
      monadPersonName: ''          // 单位法人名字
    }
  },
  mounted: function () {
    this.uploadImg()
    let getTime = this.currentTime()
    this.mtDateTimeMsg = getTime
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
      UploadFile.upload({
        id: 'file1',
        callback: (res) => {
          this.imgOne1 = res.imgUrl
          this.IDcardFront = res.imgUrl
        }
      })
      UploadFile.upload({
        id: 'file2',
        callback: (res) => {
          this.imgOne2 = res.imgUrl
          this.IDcarfBack = res.imgUrl
        }
      })
      UploadFile.upload({
        id: 'file3',
        callback: (res) => {
          this.imgOne3 = res.imgUrl
          this.registerCredential = res.imgUrl
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
