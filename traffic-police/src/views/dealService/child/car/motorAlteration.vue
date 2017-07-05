<template>
  <div class="motorAlteration">
    <div class="motorAlteration-form">
      <ul>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>车主姓名</span>
          </div>
          <div class="form-line-item">
            <input class="text-input" type="text" value="张鱼饭" readonly/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>证件种类</span>
          </div>
          <div class="div-select">
            <span class="btn-select" @click.stop="varietyID()">{{ variety }}</span>
            <div class="div-select-ul" v-if="varietyShow">
              <ul>
                <li v-for="item in varietyData" @click.stop="varietyID(item.str, item.id)">{{item.str}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>证件号码</span>
          </div>
          <div class="form-line-item">
            <input class="text-input" v-model="IDcard" type="text" value="" placeholder="请输入证件号码"/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>车牌号码</span>
          </div>
          <div class="div-select">
            <span class="btn-select" @click.stop="vehiclePlate()">{{ vehicle }}</span>
            <div class="div-select-ul" v-if="vehicleShow">
              <ul>
                <li v-for="item in vehicleData" @click.stop="vehiclePlate(item.longName)">{{item.longName}}</li>
              </ul>
            </div>
          </div>
        </li>
         <li class="form-line">
          <div class="form-line-item item-name">
            <span>车辆类型</span>
          </div>
          <div class="div-select">
            <span class="btn-select" @click.stop="vehicleType()">{{ vehicleItem }}</span>
            <div class="div-select-ul" v-if="vehicleTypeShow">
              <ul>
                <li v-for="item in vehicleTypeData" @click.stop="vehicleType(item.longName)">{{item.longName}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>户籍所在地</span>
          </div>
          <div class="form-line-item width-40 sex">
            <input type="radio"  name="permanent" value="1" v-model:checked="permanent">
            <label>深户</label>
          </div>
          <div class="form-line-item width-40 sex">
            <input type="radio"  name="permanent" value="2" v-model:checked="permanent">
            <label>外籍户口</label>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>车架号</span>
          </div>
          <div class="form-line-item">
            <input class="text-input" type="text" value="5563" readonly/>
          </div>
        </li>
        <li class="form-line">
          <div class="form-line-item item-name">
            <span>手机号码</span>
          </div>
          <div class="form-line-item">
            <input class="text-input" type="text" value="15920050177" readonly/>
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
      <div class="upload-photo">
        <div class="">请按示例图上传以下证件照片</div>
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
            <div class="upload-item-text-one">机动车登记证书</div>
          </div>
        </div>
      </div>
      <button class="btn btns" @click.stop="submitClick()">确认提交</button>
    </div>
  </div>
</template>
<script>
  import UploadFile from '../../../../service/uploadFile'
  export default {
    name: 'motorAlteration',
    data () {
      return {
        imgOne1: require('../../../../images/IDcard-front.png'),
        imgOne2: require('../../../../images/IDcard-back.png'),
        imgOne3: require('../../../../images/register-credential.png'),
        IDcard: '445222199209020034',
        permanent: '',
        mailingAddress: '',
        varietyShow: false,
        variety: '居民身份证',
        cur_card_id: 'A',                             // 默认证件类型id A为身份证
        varietyData: [
          {
            'id': 'A',
            'str': '居民身份证'
          },
          {
            'id': 'B',
            'str': '组织机构代码书'
          },
          {
            'id': 'C',
            'str': '军官证'
          },
          {
            'id': 'E',
            'str': '军官离退休证'
          },
          {
            'id': 'D',
            'str': '士兵证'
          },
          {
            'id': 'F',
            'str': '境外人员身份证明'
          },
          {
            'id': 'G',
            'str': '外交人员身份证明'
          },
          {
            'id': 'H',
            'str': '居民户口簿'
          },
          {
            'id': 'J',
            'str': '单位注销证明'
          },
          {
            'id': 'K',
            'str': '居住暂住证明'
          },
          {
            'id': 'L',
            'str': '驻华机构证明'
          },
          {
            'id': 'M',
            'str': '临时居民身份证'
          }
        ],
        vehicleShow: false,
        vehicle: '粤B6A42E',                         // 车牌下拉
        vehicleData: [
          {
            'longName': '粤B6A428'
          },
          {
            'longName': '粤B6A427'
          }
        ],
        vehicleTypeShow: false,
        vehicleItem: '小型汽车',                      // 车辆类型下拉框
        vehicleTypeData: [
          {
            'longName': '大型车辆'
          }
        ],
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
        ]
      }
    },
    methods: {
      // 车牌下拉框
      vehiclePlate: function (str) {
        if (str) {
          this.vehicle = str
        }
        if (this.vehicleShow === true) {
          this.vehicleShow = false
        } else {
          this.vehicleShow = true
        }
      },
      // 证件种类下拉框
      varietyID: function (str, id) {
        if (str) {
          this.variety = str
          this.cur_card_id = id
          if (this.cur_card_id === 'A') {
            this.IDcard = window.localStorage.getItem('identityCard')
          } else {
            this.IDcard = ''
          }
        }
        if (this.varietyShow === true) {
          this.varietyShow = false
        } else {
          this.varietyShow = true
        }
      },
      // 车辆类型下拉框
      vehicleType: function (str) {
        if (str) {
          this.vehicleItem = str
        }
        if (this.vehicleTypeShow === true) {
          this.vehicleTypeShow = false
        } else {
          this.vehicleTypeShow = true
        }
      },
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
      uploadImg () {
        UploadFile.upload({
          id: 'file1',
          callback: (res) => {
            console.log(res)
            this.imgOne1 = res.imgUrl
          }
        })
        UploadFile.upload({
          id: 'file2',
          callback: (res) => {
            console.log(res)
            this.imgOne2 = res.imgUrl
          }
        })
        UploadFile.upload({
          id: 'file3',
          callback: (res) => {
            console.log(res)
            this.imgOne3 = res.imgUrl
          }
        })
      }
    },
    mounted () {
      this.uploadImg()
    }
  }
</script>
<style lang="less" scoped>
@import "./../../../../style/base";
.motorAlteration {
background-color: #fff;
position: absolute;
left: 0;
right: 0;
padding: 20px 40px;
  .motorAlteration-form {
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
        &.sex {
          text-align: center;
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
  .upload-all-img{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    .upload-item-img{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .upload-photo{
    margin-top: 30px;
    display: block;
    .upload-item-text-one{
      margin-top: 10px;
      margin-bottom: 30px;
      color: #7e7e7e;
      text-align: center;
    }
    .upload-item-img-one{
      width: 194px;
      height: 194px;
      border: 2px solid #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      input{
        display: none;
      }
      img{
        max-height: 90%;
        max-width: 90%;
      }
    }
  }
}
</style>
