<template>
  <div class="renewingClass-outer">
    <div class="renewingClass-from pad-side-50">
      <div id="renewingClass-hbs">
        <ul class="renewingClass-hbs-list">
          <li class="renewingClass-hbs-item">
            <div class="renewingClass-hbs-name">
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
    <renewingCollarCredential v-if="cur_type_id == '01'"></renewingCollarCredential>
    <replacementNumber v-if="cur_type_id == '02'"></replacementNumber>
    <renewingDrivingLicense v-if="cur_type_id == '03'"></renewingDrivingLicense>
    <renewingQualification v-if="cur_type_id == '04'"></renewingQualification>
    <renewingCertificate v-if="cur_type_id == '05'"></renewingCertificate>
    <div v-wechat-title="$route.meta.title"></div>
  </div>
</template>
<script>
  export default {
    name: 'renewingClass',
    data () {
      return {
        cur_type_id: '',
        licenseSelectShow: false,
        licenseSelectMassage: '换领机动车登记证书',
        licenseSelectData: [
          {
            'id': '01',
            'str': '换领机动车登记证书'
          },
          {
            'id': '02',
            'str': '补领机动车号牌'
          },
          {
            'id': '03',
            'str': '补换机动车行驶证'
          },
          {
            'id': '04',
            'str': '补换检验合格标志'
          },
          {
            'id': '05',
            'str': '申领/补领机动车登记证书'
          }
        ]
      }
    },
    components: {
      'renewingCollarCredential': require('./renewingCollarCredential.vue'),
      'replacementNumber': require('./replacementNumber.vue'),
      'renewingDrivingLicense': require('./renewingDrivingLicense.vue'),
      'renewingQualification': require('./renewingQualification.vue'),
      'renewingCertificate': require('./renewingCertificate.vue')
    },
    mounted: function () {
      if (this.$route.params.id === '1') {    // 地址参数为1，载入换领机动车登记证书
        this.cur_type_id = '01'
        this.licenseSelectMassage = this.licenseSelectData[0].str
      } else if (this.$route.params.id === '2') {   // 地址参数为2，载入补领机动车号牌
        this.cur_type_id = '02'
        this.licenseSelectMassage = this.licenseSelectData[1].str
      } else if (this.$route.params.id === '3') {
        this.this.cur_type_id = '03'
        this.licenseSelectMassage = this.licenseSelectData[2].str
      } else if (this.$route.params.id === '4') {
        this.this.cur_type_id = '04'
        this.licenseSelectMassage = this.licenseSelectData[3].str
      } else if (this.$route.params.id === '5') {
        this.this.cur_type_id = '05'
        this.licenseSelectMassage = this.licenseSelectData[4].str
      }
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
  /*@import "./../../../../../style/base";*/
  .renewingClass-outer {
    padding: 120px 40px 0;
    font-size: 28px;
    color: #000;
    position: relative;
    .renewingClass-from {
      background-color: #fff;
      position: absolute;
      left: 0;
      right: 0;
      top:0;
      padding: 0 40px;
      #renewingClass-hbs {
        padding: 20px 0 0;
        .renewingClass-hbs-list {
          .renewingClass-hbs-item {
            padding-left: 180px;
            position: relative;
            line-height: 56px;
            .renewingClass-hbs-name {
              width: 180px;
              position: absolute;
              left: 0;
            }
            .renewingClass-hbs-text {
              width: 100%;
              display: inline-block;
            }
            .renewingClass-hbs-code {
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
