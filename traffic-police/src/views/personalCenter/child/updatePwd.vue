<template>
<div class="updatePwd-outer pad-side-50">
  <ul class="updatePwd-list">
    <li class="updatePwd-item">
      <div class="updatePwd-name">旧密码</div>
      <div class="updatePwd-text">
        <input class="text-input" type="password" placeholder="请输入旧密码" v-model:value="oldPwd">
      </div>
    </li>
    <li class="updatePwd-item">
      <div class="updatePwd-name">新密码</div>
      <div class="updatePwd-text">
        <input class="text-input" type="password" placeholder="请输入新密码" v-model:value="newPwd">
      </div>
    </li>
    <li class="updatePwd-item">
      <div class="updatePwd-name">确认密码</div>
      <div class="updatePwd-text">
        <input class="text-input" type="password" placeholder="请输入确认密码" v-model:value="comfirmPwd">
      </div>
    </li>
  </ul>
  <button class="btn btn-blue"  type="button" name="button" @click.stop="submit()">修改密码</button>
</div>
</template>

<script>
import { updatePwd } from '../../../config/baseUrl'
import { resultPost } from '../../../service/getData'
export default{
  name: 'updatePwd',
  data () {
    return {
      oldPwd: '',
      newPwd: '',
      comfirmPwd: ''
    }
  },
  methods: {
    submit: function () {
      if (this.newPwd !== this.comfirmPwd) {
        console.log('新密码不一致')
      } else if (this.oldPwd === this.newPwd) {
        console.log('新密码与旧密码一致')
      } else if (this.newPwd === this.comfirmPwd) {
        console.log('提交数据并返回我的资料页面')
        let reqData = {
          oldPwd: this.oldPwd,
          newPwd: this.newPwd
        }
        resultPost(updatePwd, reqData).then(json => {
          console.log(json)
        })
      }
    }
  }
}
</script>

<style lang="less">
.updatePwd-outer{
  background: #fff;
  .updatePwd-list{
    overflow: hidden;
    .updatePwd-item{
      margin-top: 34px;
      padding-left: 130px;
      line-height: 56px;
      font-size: 28px;
      position: relative;
      .updatePwd-name{
        position: absolute;
        left: 0;
      }
    }
  }
}
</style>