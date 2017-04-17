<template>
  <div class="myCard-outer">
    <div class="card-box">
      <ul>
        <li>
          档案编号:
          <span>{{ fileNumber }}</span>
        </li>
        <li>
          当前状态:
          <span>{{ status }}</span>
        </li>
        <li>
          可用计分:
          <span>{{ availableScore }}</span>
        </li>
        <li>
          体检日期:
          <span>{{ physicalExaminationDate }}</span>
        </li>
        <li>
          有效日期:
          <span>{{ effectiveDate }}</span>
        </li>
      </ul>
      <!--<div class="own-card">{{ isReceive }}</div>-->
    </div>
  </div>
</template>
<style lang="less">
  .myCard-outer {
    padding:0 50px;
    .card-box {
      font-size: 0.9rem;
      padding: 20px 40px;
      border:1px solid #a7d9f9;
      background-color: #fff;
      border-radius: 4px;
      ul {
        margin-left:15%;
        li {
          height: 70px;
          line-height: 70px;
          span {
            margin-left: 20px;
            text-align: left;
          }
        }
      }
      .own-card {
        text-align: right;
        margin-top: 60px;
        font-size: 0.9rem;
        color:#aaa;
      }
    }
  }
</style>
<script>
  import { bindCard } from '../../../config/baseUrl'
  import { resultPost } from '../../../service/getData'
  export default {
    name: 'myCard',
    data () {
      return {
        identityCard: '622822198502074110',
        fileNumber: '',
        status: '',
        availableScore: '',
        physicalExaminationDate: '',
        effectiveDate: '',
        isReceive: ''
      }
    },
    mounted () {
      let reqData = {
        identityCard: this.identityCard
      }
      resultPost(bindCard, reqData).then(json => {
        console.log(json)
        this.fileNumber = json.data.fileNumber
        this.status = json.data.status
        this.availableScore = json.data.availableScore
        this.physicalExaminationDate = json.data.physicalExaminationDate
        this.effectiveDate = json.data.effectiveDate
        this.isReceive = json.data.isReceive
      })
    }
  }
</script>
