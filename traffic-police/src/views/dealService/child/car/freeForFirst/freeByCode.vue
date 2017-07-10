<template>
  <div class="freeByCode-outer">
    <div class="freeByCode-from pad-side-50">
      <div id="freeByCode-hbs">
        <ul class="freeByCode-hbs-list">
          <li class="freeByCode-hbs-item">
            <div class="freeByCode-hbs-name">
              <span>交通违法序号</span>
            </div>
            <div class="freeByCode-hbs-text">
              <input class="text-input" type="text" maxlength="4" name="" value="" v-model="lawlessCode" placeholder="请输入违法序号">
            </div>
          </li>

          <li class="freeByCode-hbs-item clear">
            <div class="freeByCode-hbs-name">
              <span>验证码</span>
            </div>
            <div class="freeByCode-hbs-text width-40 left">
              <input class="text-input" type="text" name="" maxlength="4" value="" placeholder="请输入验证码" id="inp">
            </div>
            <div class="left freeByCode-hbs-code" id="code"></div>
          </li>
        </ul>
      </div>
      <button class="btn btn-blue" type="button" name="button">查询</button>
    </div>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
  import { verifyCode } from '../../../../../config/verifyCode'
  export default {
    name: 'freeByCode',
    data () {
      return {
        lawlessCode: '',
        verifyCode: false
      }
    },
    mounted () {
      verifyCode(document.getElementById('inp'), document.getElementById('code'), (result, code) => {
        this.verifyCode = result
      })
    }
  }
</script>
<style lang="less">
  @import "./../../../../../style/base";
  .freeByCode-outer {
    font-size: 28px;
    color: #000;
    position: relative;
    background-color: white;
    .width-40 {
      width: 40% !important;
    }
    .freeByCode-from {
      background-color: #fff;
      #freeByCode-hbs {
        padding-bottom: 20px;
        .freeByCode-hbs-list {
          .freeByCode-hbs-item {
            margin-top: 24px;
            padding-left: 180px;
            position: relative;
            line-height: 56px;
            .freeByCode-hbs-name {
              width: 180px;
              position: absolute;
              left: 0;
            }
            .freeByCode-hbs-text {
              width: 100%;
              display: inline-block;
            }
            .freeByCode-hbs-code {
              margin-left: 40px;
              text-indent: 28px;
              width: 240px;
              height: 56px;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
</style>
