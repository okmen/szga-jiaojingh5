<!--
  描述：绿色出行-非星级用户申报
  时间：2017-07-20
  作者：猪不乐意
  联系：914230482
-->
<template>
  <div class="m-greenApply">
    <header class="header"></header>
    <div class="m-form">
      <div class="item">
        <label>姓名</label>
        <div class="box">
          <el-input v-model="form.name" placeholder="请输入真是姓名" size="small" />
        </div>
      </div>
      <div class="item">
        <label>身份证号</label>
        <div class="box">
          <el-input v-model="form.IdCard" placeholder="请输入身份证号码" size="small" />
        </div>
      </div>
      <div class="item flex">
        <label>车牌号码</label>
        <div class="box">
          <el-select v-model="form.typeProvince" class="zly-select" size="small" placeholder="请选择车牌种类" style="width: 5rem; margin-right: .5rem;">
            <el-option
              v-for="item in typeData"
              :key="item.str"
              :label="item.str"
              :value="item.str"
            ></el-option>
          </el-select>
          <el-input v-model="form.typeNumber" placeholder="请输入车牌号码" size="small" />
        </div>
      </div>
      <div class="item">
        <label>车辆类型</label>
        <div class="box">
          <el-select v-model="form.carType" class="zly-select" size="small" placeholder="请选择车辆类型">
            <el-option
              v-for="item in carType"
              :key="item.id"
              :label="item.str"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="item">
        <label>联系方式</label>
        <div class="box">
          <el-input v-model="form.tel" placeholder="请输入手机号码" size="small" />
        </div>
      </div>
      <div class="item">
        <label>验证码</label>
        <div class="box">
          <el-input v-model="form.code" placeholder="请输入验证码" id="inp" size="small"/>
        </div>
        <div class="right"><div id="code" class="button"></div></div>
      </div>
    </div>
    <div class="footer">
      <el-button type="primary" @click.native="submit2">下一步</el-button>
    </div>
  </div>
</template>

<script>
import { Input, Select, Option, Button } from 'element-ui'
import { verifyCode } from '../../config/verifyCode.js'
import { Toast, MessageBox } from 'mint-ui'
export default {
  components: {
    'el-input': Input,
    'el-select': Select,
    'el-option': Option,
    'el-button': Button
  },
  data () {
    return {
      typeData: [
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
      carType: [
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
      ],
      form: {
        name: '',
        tel: '',
        IdCard: '',
        typeProvince: '粤',
        typeNumber: '',
        carType: '',
        code: ''
      }
    }
  },
  methods: {
    // 动态注册 VUEX 状态模块
    registerModule () {
      this.$store.registerModule('greenApply', {
        state: this.form
      })
    },
    // 临时处理
    submit2 () {
      MessageBox('警告', '暂时不提供该接口')
    },
    // 提交表单
    submit () {
      for (let key in this.form) {
        if (this.form[key] === '') {
          Toast({
            message: '信息填写不完整',
            position: 'bottom'
          })
          return false
        }
      }
      if (!/^[A-Za-z\u4e00-\u9fa5]+$/.test(this.form.name)) {
        Toast({
          message: '真实姓名格式错误',
          position: 'bottom'
        })
        return false
      }
      if (!/^1\d{10}$/.test(this.form.tel)) {
        Toast({
          message: '手机号码格式错误',
          position: 'bottom'
        })
        return false
      }
      if (!/^\d{17}[\d|x]|\d{15}$/.test(this.form.IdCard)) {
        Toast({
          message: '身份证格式错误',
          position: 'bottom'
        })
        return false
      }
      // 验证完成，提交状态并跳转路由
      this.registerModule()
      this.$router.push({ name: 'greenApplyDate' })
    }
  },
  mounted () {
    // 挂载验证码，并注册验证回调函数
    verifyCode(document.querySelector('#inp input'), document.getElementById('code'), (result, code) => {
      if (!result) {
        Toast({
          message: '验证码错误',
          position: 'bottom'
        })
        return false
      }
      this.verifyCode = result
    })
  }
}
</script>

<style lang="less">
@import '~src/style/form.less';
@import 'style/greenTravel.less';
</style>
