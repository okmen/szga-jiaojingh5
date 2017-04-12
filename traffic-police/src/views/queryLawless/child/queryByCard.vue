<template>
  <div class="queryByCard-outer">
    <div class="queryByCard-from pad-side-50">
      <div id="queryByCard-hbs">
        <ul class="queryByCard-hbs-list">
          <li class="queryByCard-hbs-item">
            <div class="queryByCard-hbs-name">
              <span>驾驶证号</span>
            </div>
            <div class="queryByCard-hbs-text">
              <input class="text-input" type="text" name="" value="" placeholder="请输入驾驶证号">
            </div>
          </li>
          <li class="queryByCard-hbs-item">
            <div class="queryByCard-hbs-name">
              <span>档案编号</span>
            </div>
            <div class="queryByCard-hbs-text">
              <input class="text-input" type="text" name="" value="" placeholder="请输入档案编号">
            </div>
          </li>
          <li class="queryByCard-hbs-item clear">
            <div class="queryByCard-hbs-name">
              <span>验证码</span>
            </div>
            <div class="queryByCard-hbs-text width-40 left">
              <input class="text-input" type="tel" name="" value="" placeholder="请输入验证码">
            </div>
            <div class="left queryByCard-hbs-code">获取验证码</div>
          </li>
        </ul>
      </div>
      <button class="btn btn-blue" type="button" name="button">查询</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'queryByCard',
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style lang="less">
  @import "./../../../style/base";
  .queryByCard-outer {
    font-size: 28px;
    color: #000;
    position: relative;
    background-color: white;
    .width-40{
      width: 40% !important;
    }
    .queryByCard-from {
      background-color: #fff;
      #queryByCard-hbs {
        padding-bottom: 20px;
        .queryByCard-hbs-list {
          overflow: hidden;
         .queryByCard-hbs-item {
           margin-top: 24px;
           padding-left: 180px;
           position: relative;
           line-height: 56px;
            .queryByCard-hbs-name {
               width: 180px;
               position: absolute;
               left: 0;
            }
           .queryByCard-hbs-text {
               width: 100%;
               display: inline-block;
            }
          .queryByCard-hbs-code {
               text-indent: 28px;
               text-decoration: underline;
            }
         }
        }
      }
    }
  }
</style>
