<template>
  <div class="register">
    <div class="form-template-item">
      <span class="form-template-item-left">车主姓名</span>
      <input type="text" placeholder="请输入车主姓名" class="form-template-item-right" v-model="ownerName">
    </div>
    <div-select :childInfo="credentialsName" @getSelected="getCredentialsNameOne"></div-select>
    <div class="form-template-item">
      <span class="form-template-item-left">证件号码</span>
      <input type="text" placeholder="请输入证件号码" class="form-template-item-right" v-model="IDcard">
    </div>
    <div class="form-template-item">
      <span class="form-template-item-left">手机号码</span>
      <input type="text" placeholder="请输入手机号码" class="form-template-item-right" v-model="mobilePhone">
    </div>
    <div class="form-template-item">
      <span class="form-template-item-left">验证码</span>
      <div class="form-template-item-right send-code">
        <input type="text" placeholder="请输入验证码" maxlength="6" class="send-code-input" v-model="verificationCode">
        <span class="send-code-btn" @click="getVerificationCode" v-if="showTime">获取验证码</span>
        <span class="send-code-btn" style="background: gray" v-if="!showTime">{{countDown}} s</span>
      </div>
    </div>
    <div class="form-template-item">
      <span class="form-template-item-title">居住地址</span>
      <div class="form-template-item-right">
        <div-select :childInfo="cityDistrict" @getSelected="getCityDistrict"></div-select>
      </div>
    </div>
    <div class="form-template-item">
      <span class="form-template-item-title"></span>
      <input type="text" placeholder="请输入详细地址" class="form-template-item-right" v-model="detailedAddress">
    </div>
    <div class="form-template-item">
      <span class="form-template-item-left">中文品牌</span>
      <input type="text" placeholder="请输入中文品牌" class="form-template-item-right" v-model="chinaBrand">
    </div>
    <div class="form-template-item">
      <span class="form-template-item-left">载客人数</span>
      <input type="text" placeholder="请输入载客人数" class="form-template-item-right" v-model="customerNum" maxlength="3">
    </div>
    <div class="form-template-item">
      <span class="form-template-item-left">发动机号</span>
      <input type="text" placeholder="请输入发动机号后四位" class="form-template-item-right" v-model="engineNum" maxlength="4">
    </div>
    <div-select :childInfo="carSelectData" @getSelected="getCarSelectDataOne"></div-select>
    <div-select :childInfo="modelOfCar" @getSelected="getModelOfCarOne"></div-select>
    <div-select :childInfo="useNature" @getSelected="getUseNatureOne"></div-select>
    <div class="form-template-item">
      <span class="form-template-item-left">车身架号</span>
      <input type="text" placeholder="请输入车架号" class="form-template-item-right" v-model="vehicleNum">
    </div>
    <div-select :childInfo="appointmentLocation" @getSelected="getAppointmentLocationOne"></div-select>
    <div class="form-template-item">
      <span class="form-template-item-left">选择预约日期</span>
    </div>
    <div class="choose-date">
      <div class="choose-date-item">
        <div class="date-item-input">
          <div-select :childInfo="allYear" @getSelected="getAllYearOne"></div-select>
        </div>
        <span class="date-item-time">年</span>
      </div>
      <div class="choose-date-item">
        <div class="date-item-input">
          <div-select :childInfo="allmonth" @getSelected="getAllmonthOne"></div-select>
        </div>
        <span class="date-item-time">月</span>
      </div>
      <div class="choose-date-item">
        <div class="date-item-input">
          <div-select :childInfo="allDay" @getSelected="getAllDayOne"></div-select>
        </div>
        <span class="date-item-time">日</span>
      </div>
    </div>
    <div class="surplus-info">
      <div class="surplus-info-item" :class="{'no-surplus': item.num == 0,'toggle-active':index==activeIndex&&item.num != 0 }" v-for="(item, index) in surplusData" :key="index" @click="toggleActive(index)">
        <div class="surplus-item-time">{{item.time}}</div>
        <div class="surplus-item-num" v-if="item.num!=0">剩余名额 <span class="surplus-item-number">{{item.num}}</span> 位</div>
        <div class="surplus-item-num" v-if="item.num == 0">已满</div>
      </div>
    </div>
    <div class="form-template-submit" @click="registerSubmit">预  约</div>
  </div>
</template>
<style lang="less" scoped>
  .province-code {
    width: 140px;
  }
  .province-code-input {
    width: 300px;
  }
  .choose-date {
    display: flex;
    .choose-date-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .date-item-input {
        width: 165px;
        input{
          width: 100%;
          text-align: center;
          padding-left: 0;
        }
      }
      .date-item-time{
        margin-left: 15px;
        margin-right: 15px;
      }
    }

  }
  .surplus-info{
    border: 2px solid #eaeaed;
    border-radius: 8px;
    max-height: 389px;
    overflow: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    .no-surplus{
      background: #eaeaed;
    }
    .surplus-info-item{
      display: flex;
      justify-content: space-between;
      height: 78px;
      padding:0 35px ;
      align-items: center;
      border: 2px solid;
      border-color: transparent;
      border-bottom-color:#eaeaed ;
      .surplus-item-number{
        color: #19d051;
        width: 80px;
        display: inline-block;
        text-align: center;
      }
    }
    .toggle-active{
      border-color: #2696dd;
    }
  }
</style>
<script>
  import {isPhone, specialCharacters} from 'service/regExp.js'
  import {resultPost} from 'service/getData'
  import {Toast, MessageBox} from 'mint-ui'
  import {
    getBusinessCarTypeId,
    getOrgsByBusinessTypeId,
    getAppointmentDate,
    getAppTimes,
    simpleSendMessage,
    getIdTypeId,
    createTemporaryLicenseVehicleInfo
  } from 'config/baseUrl.js'
  export default {
    data () {
      return {
        activeIndex: '',  // 点击出现蓝色边框序号
        provinceCode: {
          option: [
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
        },  // 省份 简称
        cityDistrict: {
          title: '深圳市',
          option: [
            {
              'str': '福田区'
            },
            {
              'str': '罗湖区'
            },
            {
              'str': '南山区'
            },
            {
              'str': '宝安区'
            },
            {
              'str': '龙岗区'
            },
            {
              'str': '盐田区'
            },
            {
              'str': '龙华新区'
            },
            {
              'str': '光明新区'
            },
            {
              'str': '坪山新区'
            },
            {
              'str': '大鹏新区'
            }
          ]
        },  // 市区选择
        credentialsName: {
          title: '证件名称',
          option: [
            {'str': '居民户口簿', 'id': 'H'},
            {'str': '单位注销证明', 'id': 'J'},
            {'str': '驻华机构证明', 'id': 'L'},
            {'str': '个体工商营业执照注册', 'id': 'P'},
            {'str': '居住暂时证明', 'id': 'K'},
            {'str': '居住身份证', 'id': 'A'},
            {'str': '临时居民身份', 'id': 'M'},
            {'str': '军官证', 'id': 'C'},
            {'str': '军官离退休证', 'id': 'E'},
            {'str': '外交人员身份证明', 'id': 'G'},
            {'str': '士兵证', 'id': 'D'},
            {'str': '境外人员身份证明', 'id': 'F'},
            {'str': '统一社会信用代码', 'id': 'N'},
            {'str': '组织机构代码证书', 'id': 'B'}
          ]
        },  // 证件名称
        carSelectData: {
          title: '车辆类型',
          option: [
            {
              'id': '01',
              'str': '大型汽车'
            },
            {
              'id': '02',
              'str': '小型汽车'
            },
            {
              'id': '03',
              'str': '使馆汽车'
            },
            {
              'id': '04',
              'str': '领馆汽车'
            },
            {
              'id': '05',
              'str': '境外汽车'
            },
            {
              'id': '06',
              'str': '外籍汽车'
            },
            {
              'id': '07',
              'str': '普通摩托车'
            },
            {
              'id': '08',
              'str': '轻便摩托车'
            },
            {
              'id': '09',
              'str': '使馆摩托车'
            },
            {
              'id': '10',
              'str': '领馆摩托车'
            },
            {
              'id': '15',
              'str': '挂车'
            },
            {
              'id': '16',
              'str': '教练汽车'
            },
            {
              'id': '17',
              'str': '教练摩托车'
            },
            {
              'id': '18',
              'str': '实验汽车'
            },
            {
              'id': '19',
              'str': '实验摩托车'
            },
            {
              'id': '22',
              'str': '临时行驶车'
            },
            {
              'id': '23',
              'str': '警用汽车'
            },
            {
              'id': '24',
              'str': '警用摩托'
            },
            {
              'id': '20',
              'str': '临时入境车'
            },
            {
              'id': '51',
              'str': '新能源大型车'
            },
            {
              'id': '52',
              'str': '新能源小型车'
            }
          ]
        },  // 车辆类型
        /* eslint-disable */
        modelOfCar: {
          title: '车辆型号',
          option: [{
            "id": "K31",
            "str": "小型普通客车"
          },
            {
              "id": "K32",
              "str": "小型越野客车"
            },
            {
              "id": "K33",
              "str": "小型轿车"
            },
            {
              "id": "K34",
              "str": "小型专用客车"
            },
            {
              "id": "K41",
              "str": "微型普通客车"
            },
            {
              "id": "K42",
              "str": "微型越野客车"
            },
            {
              "id": "K43",
              "str": "微型轿车"
            },
            {
              "id": "M11",
              "str": "普通正三轮摩托车"
            },
            {
              "id": "M12",
              "str": "轻便正三轮摩托车"
            },
            {
              "id": "M13",
              "str": "正三轮载客摩托车"
            },
            {
              "id": "M14",
              "str": "正三轮载货摩托车"
            },
            {
              "id": "M15",
              "str": "侧三轮摩托车"
            },
            {
              "id": "M21",
              "str": "普通二轮摩托车"
            },
            {
              "id": "M22",
              "str": "轻便二轮摩托车"
            },
            {
              "id": "N11",
              "str": "三轮汽车"
            },
            {
              "id": "K11",
              "str": "大型普通客车"
            },
            {
              "id": "K12",
              "str": "大型双层客车"
            },
            {
              "id": "K13",
              "str": "大型卧铺客车"
            },
            {
              "id": "K14",
              "str": "大型铰接客车"
            },
            {
              "id": "K15",
              "str": "大型越野客车"
            },
            {
              "id": "K16",
              "str": "大型轿车"
            },
            {
              "id": "K17",
              "str": "大型专用客车"
            },
            {
              "id": "K21",
              "str": "中型普通客车"
            },
            {
              "id": "K22",
              "str": "中型双层客车"
            },
            {
              "id": "K23",
              "str": "中型卧铺客车"
            },
            {
              "id": "K24",
              "str": "中型铰接客车"
            },
            {
              "id": "K25",
              "str": "中型越野客车"
            },
            {
              "id": "K26",
              "str": "中型轿车"
            },
            {
              "id": "K27",
              "str": "中型专用客车"
            },
            {
              "id": "B11",
              "str": "重型普通半挂车"
            },
            {
              "id": "B12",
              "str": "重型厢式半挂车"
            },
            {
              "id": "B13",
              "str": "重型罐式半挂车"
            },
            {
              "id": "B14",
              "str": "重型平板半挂车"
            },
            {
              "id": "B15",
              "str": "重型集装箱半挂车"
            },
            {
              "id": "B16",
              "str": "重型自卸半挂车"
            },
            {
              "id": "B17",
              "str": "重型特殊结构半挂车"
            },
            {
              "id": "B18",
              "str": "重型仓栅式半挂车"
            },
            {
              "id": "B19",
              "str": "重型旅居半挂车"
            },
            {
              "id": "B1A",
              "str": "重型专项作业半挂车"
            },
            {
              "id": "B1B",
              "str": "重型低平板半挂车"
            },
            {
              "id": "B21",
              "str": "中型普通半挂车"
            },
            {
              "id": "B22",
              "str": "中型厢式半挂车"
            },
            {
              "id": "B23",
              "str": "中型罐式半挂车"
            },
            {
              "id": "B24",
              "str": "中型平板半挂车"
            },
            {
              "id": "B25",
              "str": "中型集装箱半挂车"
            },
            {
              "id": "B26",
              "str": "中型自卸半挂车"
            },
            {
              "id": "B27",
              "str": "中型特殊结构半挂车"
            },
            {
              "id": "B28",
              "str": "中型仓栅式半挂车"
            },
            {
              "id": "B29",
              "str": "中型旅居半挂车"
            },
            {
              "id": "B2A",
              "str": "中型专项作业半挂车"
            },
            {
              "id": "B2B",
              "str": "中型低平板半挂车"
            },
            {
              "id": "B31",
              "str": "轻型普通半挂车"
            },
            {
              "id": "B32",
              "str": "轻型厢式半挂车"
            },
            {
              "id": "B33",
              "str": "轻型罐式半挂车"
            },
            {
              "id": "B34",
              "str": "轻型平板半挂车"
            },
            {
              "id": "B35",
              "str": "轻型自卸半挂车"
            },
            {
              "id": "B36",
              "str": "轻型仓栅式半挂车"
            },
            {
              "id": "B37",
              "str": "轻型旅居半挂车"
            },
            {
              "id": "B38",
              "str": "轻型专项作业半挂车"
            },
            {
              "id": "B39",
              "str": "轻型低平板半挂车"
            },
            {
              "id": "D11",
              "str": "无轨电车"
            },
            {
              "id": "D12",
              "str": "有轨电车"
            },
            {
              "id": "G11",
              "str": "重型普通全挂车"
            },
            {
              "id": "G12",
              "str": "重型厢式全挂车"
            },
            {
              "id": "G13",
              "str": "重型罐式全挂车"
            },
            {
              "id": "G14",
              "str": "重型平板全挂车"
            },
            {
              "id": "G15",
              "str": "重型集装箱全挂车"
            },
            {
              "id": "G16",
              "str": "重型自卸全挂车"
            },
            {
              "id": "G17",
              "str": "重型仓栅式全挂车"
            },
            {
              "id": "G18",
              "str": "重型旅居全挂车"
            },
            {
              "id": "G19",
              "str": "重型专项作业全挂车"
            },
            {
              "id": "G21",
              "str": "中型普通全挂车"
            },
            {
              "id": "G22",
              "str": "中型厢式全挂车"
            },
            {
              "id": "G23",
              "str": "中型罐式全挂车"
            },
            {
              "id": "G24",
              "str": "中型平板全挂车"
            },
            {
              "id": "G25",
              "str": "中型集装箱全挂车"
            },
            {
              "id": "G26",
              "str": "中型自卸全挂车"
            },
            {
              "id": "G27",
              "str": "中型仓栅式全挂车"
            },
            {
              "id": "G28",
              "str": "中型旅居全挂车"
            },
            {
              "id": "G29",
              "str": "中型专项作业全挂车"
            },
            {
              "id": "G31",
              "str": "轻型普通全挂车"
            },
            {
              "id": "G32",
              "str": "轻型厢式全挂车"
            },
            {
              "id": "G33",
              "str": "轻型罐式全挂车"
            },
            {
              "id": "G34",
              "str": "轻型平板全挂车"
            },
            {
              "id": "G35",
              "str": "轻型自卸全挂车"
            },
            {
              "id": "G36",
              "str": "轻型仓栅式全挂车"
            },
            {
              "id": "G37",
              "str": "轻型旅居全挂车"
            },
            {
              "id": "G38",
              "str": "轻型专项作业全挂车"
            },
            {
              "id": "H11",
              "str": "重型普通货车"
            },
            {
              "id": "H12",
              "str": "重型厢式货车"
            },
            {
              "id": "H13",
              "str": "重型封闭货车"
            },
            {
              "id": "H14",
              "str": "重型罐式货车"
            },
            {
              "id": "H15",
              "str": "重型平板货车"
            },
            {
              "id": "H16",
              "str": "重型集装厢车"
            },
            {
              "id": "H17",
              "str": "重型自卸货车"
            },
            {
              "id": "H18",
              "str": "重型特殊结构货车"
            },
            {
              "id": "H19",
              "str": "重型仓栅式货车"
            },
            {
              "id": "H21",
              "str": "中型普通货车"
            },
            {
              "id": "H22",
              "str": "中型厢式货车"
            },
            {
              "id": "H23",
              "str": "中型封闭货车"
            },
            {
              "id": "H24",
              "str": "中型罐式货车"
            },
            {
              "id": "H25",
              "str": "中型平板货车"
            },
            {
              "id": "H26",
              "str": "中型集装厢车"
            },
            {
              "id": "H27",
              "str": "中型自卸货车"
            },
            {
              "id": "H28",
              "str": "中型特殊结构货车"
            },
            {
              "id": "H29",
              "str": "中型仓栅式货车"
            },
            {
              "id": "H31",
              "str": "轻型普货车"
            },
            {
              "id": "H32",
              "str": "轻型厢式货车"
            },
            {
              "id": "H33",
              "str": "轻型封闭货车"
            },
            {
              "id": "H34",
              "str": "轻型罐式货车"
            },
            {
              "id": "H35",
              "str": "轻型平板货车"
            },
            {
              "id": "H37",
              "str": "轻型自卸货车"
            },
            {
              "id": "H38",
              "str": "轻型特殊结构货车"
            },
            {
              "id": "H39",
              "str": "轻仓栅式货车"
            },
            {
              "id": "H41",
              "str": "微型普通货车"
            },
            {
              "id": "H42",
              "str": "微型厢式货车"
            },
            {
              "id": "H43",
              "str": "微型封闭货车"
            },
            {
              "id": "H44",
              "str": "微型罐式货车"
            },
            {
              "id": "H45",
              "str": "微型自卸货车"
            },
            {
              "id": "H46",
              "str": "微型特殊结构货车"
            },
            {
              "id": "H47",
              "str": "微型仓栅式货车"
            },
            {
              "id": "H51",
              "str": "普通低速货车"
            },
            {
              "id": "H52",
              "str": "厢式低速货车"
            },
            {
              "id": "H53",
              "str": "罐式低速货车"
            },
            {
              "id": "H54",
              "str": "自卸低速货车"
            },
            {
              "id": "H55",
              "str": "仓栅式低速货车"
            },
            {
              "id": "J11",
              "str": "轮式装载机械"
            },
            {
              "id": "J12",
              "str": "轮式挖掘机械"
            },
            {
              "id": "J13",
              "str": "轮式平地机械"
            },
            {
              "id": "Q11",
              "str": "重型半挂牵引车"
            },
            {
              "id": "Q12",
              "str": "重型全挂牵引车"
            },
            {
              "id": "Q21",
              "str": "中型半挂牵引车"
            },
            {
              "id": "Q22",
              "str": "中型全挂牵引车"
            },
            {
              "id": "Q31",
              "str": "轻型半挂牵引车"
            },
            {
              "id": "Q32",
              "str": "轻型全挂牵引车"
            },
            {
              "id": "T11",
              "str": "大型轮式拖拉机"
            },
            {
              "id": "T21",
              "str": "小型轮式拖拉机"
            },
            {
              "id": "T22",
              "str": "手扶拖拉机"
            },
            {
              "id": "T23",
              "str": "手扶变形运输机"
            },
            {
              "id": "X99",
              "str": "其它"
            },
            {
              "id": "Z11",
              "str": "大型专项作业车"
            },
            {
              "id": "Z21",
              "str": "中型专项作业车"
            },
            {
              "id": "Z31",
              "str": "小型专项作业车"
            },
            {
              "id": "Z41",
              "str": "微型专项作业车"
            },
            {
              "id": "Z51",
              "str": "重型专项作业车"
            },
            {
              "id": "Z71",
              "str": "轻型专项作业车"
            }]
        }, // 车辆型号
        /* eslint-enable */
        useNature: {
          title: '使用性质',
          option: [
            {'str': '非运营'},
            {'str': '公路客运'},
            {'str': '公交客运'},
            {'str': '旅游客运'},
            {'str': '货运'},
            {'str': '租赁'}
          ]
        },   // 使用性质
        appointmentLocation: {
          title: '预约地点',
          option: []
        },  // 预约地点
        allYearMonthDay: {}, // 所有的年月日
        allYear: {
          option: []
        }, // 年
        allYearOne: '',
        allmonth: {
          option: []
        }, // 月份
        allmonthOne: '',
        allDay: {
          option: []
        }, // 日
        allDayOne: '',
        surplusData: [],   // 剩余数量
        ownerName: '',  // 车主姓名
        IDcard: '',
        mobilePhone: '',
        verificationCode: '',  // 验证码
        plateNum: '',
        vehicleNum: '',   // 车身架号
        provinceCodeOne: '',  // 车牌省份简称
        carSelectDataOne: '', // 车辆类型
        modelOfCarOne: '', // 车辆型号
        useNatureOne: '', // 使用性质
        appointmentLocationOne: '',     // 预约地点
        pointerTypeOne: '',
        credentialsNameOne: '', // 证件名称一项
        certificateTypeId: '', // 证件类型ID
        showTime: true,
        countDown: 5,
        timer: '',
        cityDistrictOne: '', // 区域
        detailedAddress: '',  // 详细地址
        chinaBrand: '', // 中文品牌
        customerNum: '', // 载客人数
        engineNum: '', // 发动机号
        appointmentTime: '', // 预约时间
        businessCarTypeId: '', // 车辆类型编码
        bookerType: 0 // 预约方式，0 本人， 1普通代办 2专业代办
      }
    },
    components: {
      divSelect: require('components/divSelect.vue')
    },
    props: ['businessTypeId', 'achieveCode'],
    computed: {
      // 时间 年月日
      yearMonthDay () {
        return `${this.allYearOne}-${this.allmonthOne}-${this.allDayOne}`
      },
      // 时间请求参数
      timeRequest () {
        return {
          businessTypeId: this.businessTypeId,
          orgId: this.appointmentLocationOne
        }
      },
      // 余量请求参数
      quotaRequest () {
        return {
          businessTypeId: this.businessTypeId,
          orgId: this.appointmentLocationOne,
          date: this.yearMonthDay,
          carTypeId: this.businessCarTypeId
        }
      },
      // 证件类型请求参数
      certificateRequest () {
        return {
          businessTypeId: this.businessTypeId,
          code: this.credentialsNameOne
        }
      }
    },
    watch: {
      allYearOne (val) {
        let option = []
        for (let key in this.allYearMonthDay[val]) {
          option.push({'str': key})
        }
        this.allmonth.option = option
      },
      allmonthOne (val) {
        let option = []
        this.allYearMonthDay[this.allYearOne][val].map(item => {
          option.push({'str': item})
        })
        this.allDay.option = option
      },
      carSelectDataOne () {
        this.getBusinessCarTypeId()
      },
      businessTypeId () {
        this.getBusinessAddressId()
      },
      timeRequest (val) {
        for (let key in val) {
          if (val[key] === '') {
            return
          }
        }
        this.getAllYearMonthDay()
      },
      quotaRequest (val) {
        if (this.allYearOne === '') {
          return
        }
        if (this.allmonthOne === '') {
          return
        }
        if (this.allDayOne === '') {
          return
        }
        for (let key in val) {
          if (val[key] === '') {
            return
          }
        }
        this.getQuotaInformation()
      },
      certificateRequest (val) {
        for (let key in val) {
          if (val[key] === '') {
            return
          }
        }
        this.getCertificateTypeId()
      }
    },
    methods: {
      // 获取证件类型ID
      getCertificateTypeId () {
        resultPost(getIdTypeId, this.certificateRequest).then(data => {
          console.log(this)
          console.log(data, '证件类型ID')
          this.certificateTypeId = data.data
        })
      },
      // 获取车辆类型编号
      getBusinessCarTypeId () {
        let requestData = {
          code: this.carSelectDataOne
        }
        resultPost(getBusinessCarTypeId, requestData).then(json => {
          console.log(json, '车辆类型编码获取成功')
          this.businessCarTypeId = json.data
        })
      },
      // 获取配额信息
      getQuotaInformation () {
        resultPost(getAppTimes, this.quotaRequest).then(json => {
          console.log(json, '配额信息')
          let arrData = []
          json.data.map(item => {
            arrData.push({'time': item.apptime, 'num': item.maxnumber - item.yetnumber})
          })
          this.surplusData = arrData
        })
      },
      // 获取时间
      getAllYearMonthDay () {
        resultPost(getAppointmentDate, this.timeRequest).then(json => {
          console.log(json, '时间获取成功')
          this.allYearMonthDay = {}
          if (json.code === '0000') {
            json.data.map((item, index) => {
              let yearMonthDay = item.split('-')
              if (!this.allYearMonthDay[yearMonthDay[0]]) {
                this.allYearMonthDay[yearMonthDay[0]] = {}
              }
              if (!this.allYearMonthDay[yearMonthDay[0]][yearMonthDay[1]]) {
                this.allYearMonthDay[yearMonthDay[0]][yearMonthDay[1]] = []
              }
              this.allYearMonthDay[yearMonthDay[0]][yearMonthDay[1]].push(yearMonthDay[2])
            })
            let option = []
            for (let key in this.allYearMonthDay) {
              option.push({'str': key})
            }
            this.allYear.option = option
          } else {
            this.allYear.option = ''
            this.allmonth.option = ''
            this.allDay.option = ''
            MessageBox('提示', json.data)
          }
        })
      },
      //  获取地点
      getBusinessAddressId () {
        resultPost(getOrgsByBusinessTypeId, {businessTypeId: this.businessTypeId}).then(json => {
          console.log(json, '地点获取成功11111')
          json.data.map(item => {
            this.appointmentLocation.option.push({'str': item.name, 'id': item.id})
          })
        })
      },
      //  获取年月日时间
      getAllYearOne (val) {
        this.allYearOne = val
      },
      getAllmonthOne (val) {
        this.allmonthOne = val
      },
      getAllDayOne (val) {
        this.allDayOne = val
      },
      // 点击获取验证码
      getVerificationCode () {
        if (specialCharacters(this.ownerName)) {
          Toast({
            message: '车主姓名不能含有特殊字符',
            duration: 2000
          })
          return false
        } else if (!this.ownerName) {
          Toast({
            message: '请输入车主姓名',
            duration: 2000
          })
          return false
        }
        if (!this.IDcard) {
          Toast({
            message: '证件号码不能为空',
            duration: 2000
          })
          return false
        }
        if (!isPhone(this.mobilePhone)) {
          Toast({
            message: '手机号码格式不正确',
            duration: 2000
          })
          return false
        }
        this.showTime = false
        if (window.localStorage.getItem('userName') !== this.ownerName || this.IDcard === window.localStorage.getItem('identityCard')) {
          this.bookerType = 1
        }
        let requestData = {
          mobile: this.mobilePhone,
          idType: this.certificateTypeId,
          lx: 2,
          bookerType: this.bookerType,
          bookerName: this.ownerName,
          bookerIdNumber: this.IDcard,
          idNumber: this.IDcard,
          codes: this.achieveCode
        }
        resultPost(simpleSendMessage, requestData).then(data => {
          console.log(requestData)
          console.log(data, '验证码')
        })
        this.timer = setInterval(() => {
          if (this.countDown === 0) {
            clearInterval(this.timer)
            this.showTime = true
            this.countDown = 5
            return
          }
          this.countDown--
        }, 1000)
      },
      getCredentialsNameOne (val) {
        this.credentialsNameOne = val
      },
      getProvinceCodeOne (val) {
        this.provinceCodeOne = val
      },
      getCarSelectDataOne (val) {
        this.carSelectDataOne = val
      },
      getModelOfCarOne (val) {
        this.modelOfCarOne = val
      },
      getCityDistrict (val) {
        this.cityDistrictOne = val
      },
      getUseNatureOne (val) {
        this.useNatureOne = val
      },
      getAppointmentLocationOne (val) {
        this.appointmentLocationOne = val
      },
      toggleActive (index) {
        if (this.surplusData[index].num === 0) {
          return
        }
        this.activeIndex = index
        this.appointmentTime = this.surplusData[index].time
      },
      beforeSubmit () {
        if (specialCharacters(this.ownerName)) {
          Toast({
            message: '车主姓名不能含有特殊字符',
            duration: 2000
          })
          return false
        } else if (!this.ownerName) {
          Toast({
            message: '请输入车主姓名',
            duration: 2000
          })
          return false
        }
        if (!this.IDcard) {
          Toast({
            message: '证件号码不能为空',
            duration: 2000
          })
          return false
        }
        if (!isPhone(this.mobilePhone)) {
          Toast({
            message: '手机号码格式不正确',
            duration: 2000
          })
          return false
        }
        if (!this.verificationCode) {
          Toast({
            message: '请输入验证码',
            duration: 2000
          })
          return false
        }
        if (!this.detailedAddress) {
          Toast({
            message: '请输入详细地址',
            duration: 2000
          })
          return false
        }
        if (!this.chinaBrand) {
          Toast({
            message: '请输入中文品牌',
            duration: 2000
          })
          return false
        }
        if (!this.customerNum) {
          Toast({
            message: '请输入载客人数',
            duration: 2000
          })
          return false
        }
        if (!this.engineNum) {
          Toast({
            message: '请输入发动机号',
            duration: 2000
          })
          return false
        }
        if (!this.vehicleNum) {
          Toast({
            message: '请输入车架号',
            duration: 2000
          })
          return false
        }
        return true
      },
      registerSubmit () {
        console.log(this.achieveCode)
        console.log(this.businessTypeId)
        if (!this.beforeSubmit()) return
        let requestObj = {
          orgId: this.appointmentLocationOne, // 预约地点ID
          name: this.ownerName, // 车主姓名
          businessTypeId: this.businessTypeId, // 业务类型ID
          idTypeId: this.certificateTypeId, // 证件名称
          idNumber: this.IDcard, // 证件号码
          mobile: window.localStorage.getItem('mobilePhone'), // 手机号码
          adress: '深圳市' + this.cityDistrictOne + this.detailedAddress, // 居住地址
          appointmentDate: this.yearMonthDay, // 预约日期
          appointmentTime: this.appointmentTime, // 预约时间
          carTypeId: this.businessCarTypeId, // 车辆类型
          carFrame: this.vehicleNum,  // 车身架号
          platNumber: this.vehicleNum, // 核发临牌传车架号
          chineseBrand: this.chinaBrand, // 中文品牌
          vehicleType: this.modelOfCarOne, // 车辆型号
          passengerNumber: this.customerNum, // 载客人数
          engineNumber: this.engineNum, // 发动机号
          bookerName: window.localStorage.getItem('userName'), // 预约人
          bookerIdNumber: window.localStorage.getItem('identityCard'), // 预约人身份证号码
          bookerType: this.bookerType, // 预约方式
          bookerMobile: this.mobilePhone, // 手机号
          msgNumber: this.verificationCode // 验证码
        }
        console.log(requestObj, '请求的数据')
        resultPost(createTemporaryLicenseVehicleInfo, requestObj).then(data => {
          console.log(data, '预约信息')
          if (data.code === '0000') {
            this.appointmentLocation.option.map(item => {
              if (item.id === this.appointmentLocationOne) {
                this.appointmentLocationStr = item.str
              }
            })
            let dataInfo = {
              type: 2,
              reserveNo: data.data,
              mobilephone: this.mobilePhone,
              reserveAddress: this.appointmentLocationStr,
              reserveTime: `${this.yearMonthDay} ${this.appointmentTime}`
            }
//          this.$store.commit('saveResponseData', data)
            this.$store.commit('saveSuccessInfo', dataInfo)
            this.$router.push('/submitSuccess')
          }
        })
      }
    }
  }
</script>
