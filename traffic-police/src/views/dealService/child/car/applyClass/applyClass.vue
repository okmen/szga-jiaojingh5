<template>
  <div class="applyClass-outer">
    <div class="applyClass-from pad-side-50">
      <div id="applyClass-hbs">
        <ul class="applyClass-hbs-list">
          <li class="applyClass-hbs-item">
            <div class="applyClass-hbs-name">
              <span>业务类型</span>
            </div>
            <div class="div-select">
              <span class="btn-select" @click.stop="licenseSelectClick()">{{ licenseSelectMassage }}</span>
              <div class="div-select-ul" v-if="licenseSelectShow">
                <ul>
                  <li v-for="item in licenseSelectData" @click.stop="licenseSelectClick(item.str, item.id)">{{item.str}}</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <applyEveryMonth v-if="cur_type_id == '01'"></applyEveryMonth>
    <applyInterimCard v-else></applyInterimCard>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
  export default {
    name: 'applyClass',
    data () {
      return {
        cur_type_id: '01',
        licenseSelectShow: false,
        licenseSelectMassage: '每月1天通行证业务申请',
        licenseSelectData: [
          {
            'id': '01',
            'str': '每月1天通行证业务申请'
          },
          {
            'id': '02',
            'str': '申请机动车临牌'
          }
        ]
      }
    },
    components: {
      'applyEveryMonth': require('./applyEveryMonth.vue'),
      'applyInterimCard': require('./applyInterimCard.vue')
    },
    methods: {
      licenseSelectClick: function (str, id) {
        if (str) {
          this.licenseSelectMassage = str
          this.cur_type_id = id

          console.log(this.cur_type_id)
        }
        if (this.licenseSelectShow === true) {
          this.licenseSelectShow = false
        } else {
          this.licenseSelectShow = true
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "./../../../../../style/base";
  .applyClass-outer {
    padding: 120px 40px 0;
    font-size: 28px;
    color: #000;
    position: relative;
    .applyClass-from {
      background-color: #fff;
      position: absolute;
      left: 0;
      right: 0;
      top:0;
      padding: 0 40px;
      #applyClass-hbs {
        padding: 20px 0 0;
        .applyClass-hbs-list {
          .applyClass-hbs-item {
            padding-left: 180px;
            position: relative;
            line-height: 56px;
            .applyClass-hbs-name {
              width: 180px;
              position: absolute;
              left: 0;
            }
            .applyClass-hbs-text {
              width: 100%;
              display: inline-block;
            }
            .applyClass-hbs-code {
              margin-left: 40px;
              text-indent: 28px;
              width: 240px;
              height: 56px;
              text-decoration: underline;
            }
            .div-select {
              .div-select-ul {
                top:60px;
              }
            }
          }
        }
      }
    }
  }
</style>
