<template>
  <div class="changeCard-outer">
    <div class="changeCard-from pad-side-50">
      <div id="changeCard-hbs">
        <ul class="changeCard-hbs-list">
          <li class="changeCard-hbs-item">
            <div class="changeCard-hbs-name">
              <span>业务类型</span>
            </div>
            <div class="div-select">
              <span class="btn-select" @click.stop="serviceSelectClick()">{{ serviceSelectMassage }}</span>
              <div class="div-select-ul" v-if="serviceSelectShow">
                <ul>
                  <li v-for="item in serviceSelectData" @click.stop="serviceSelectClick(item.str, item.id)">{{item.str}}</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <changeNormal v-if="cur_type_id == '01'"></changeNormal>
    <changeDelay v-else></changeDelay>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
  export default {
    name: 'changeCard',
    data () {
      return {
        cur_type_id: '',
        serviceSelectShow: false,
        serviceSelectMassage: '驾驶证补换证',
        serviceSelectData: [
          {
            'id': '01',
            'str': '驾驶证补换证'
          },
          {
            'id': '02',
            'str': '驾驶证延期换证'
          }
        ]
      }
    },
    components: {
      'changeNormal': require('./changeNormal.vue'),
      'changeDelay': require('./changeDelay.vue')
    },
    mounted: function () {
      console.log(this.$route.params.id)
      if (this.$route.params.id === '1') {
        this.cur_type_id = '01'
        this.serviceSelectMassage = this.serviceSelectData[0].str
      } else {
        this.cur_type_id = '02'
        this.serviceSelectMassage = this.serviceSelectData[1].str
      }
    },
    methods: {
      serviceSelectClick: function (str, id) {
        if (str) {
          this.serviceSelectMassage = str
          this.cur_type_id = id

          console.log(this.cur_type_id)
        }
        if (this.serviceSelectShow === true) {
          this.serviceSelectShow = false
        } else {
          this.serviceSelectShow = true
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "./../../../../../style/base";
  .changeCard-outer {
    padding: 120px 40px 0;
    font-size: 28px;
    color: #000;
    position: relative;
    .changeCard-from {
      background-color: #fff;
      position: absolute;
      left: 0;
      right: 0;
      top:0;
      padding: 0 40px;
      #changeCard-hbs {
        padding: 20px 0 0;
        .changeCard-hbs-list {
          .changeCard-hbs-item {
            padding-left: 180px;
            position: relative;
            line-height: 56px;
            .changeCard-hbs-name {
              width: 180px;
              position: absolute;
              left: 0;
            }
            .changeCard-hbs-text {
              width: 100%;
              display: inline-block;
            }
            .changeCard-hbs-code {
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
