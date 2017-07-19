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
        <label>联系方式</label>
        <div class="box">
          <el-input v-model="form.tel" placeholder="请输入手机号码" size="small" />
        </div>
      </div>
      <div class="item">
        <label>身份证号</label>
        <div class="box">
          <el-input v-model="form.IdCard" placeholder="请输入身份证号码" size="small" />
        </div>
      </div>
      <div class="item">
        <label>名下车辆</label>
        <div class="box">
          <el-select v-model="form.car" class="zly-select" size="small">
            <el-option
              v-for="item in carData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="item">
        <label>车牌类型</label>
        <div class="box">
          <el-select v-model="form.type" class="zly-select" size="small" placeholder="请选择车牌类型">
            <el-option
              v-for="item in typeData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="footer">
      <el-button type="primary" @click.native="submit">下一步</el-button>
    </div>
  </div>
</template>

<script>
import { Input, Select, Option, Button } from 'element-ui'
import { Toast } from 'mint-ui'
export default {
  components: {
    'el-input': Input,
    'el-select': Select,
    'el-option': Option,
    'el-button': Button
  },
  data () {
    return {
      carData: [
        {
          label: '标签',
          value: '值'
        }
      ],
      typeData: [
        {
          label: '蓝牌',
          value: '02'
        },
        {
          label: '黑牌',
          value: '06'
        },
        {
          label: '黄牌',
          value: '01'
        }
      ],
      form: {
        name: '',
        tel: '',
        IdCard: '',
        car: '',
        type: ''
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
    // 提交表单
    submit () {
      for (let key in this.form) {
        if (!this.form[key]) {
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
  }
}
</script>

<style lang="less">
@import '~src/style/form.less';
@import 'style/greenTravel.less';
</style>
