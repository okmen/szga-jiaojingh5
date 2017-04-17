<template>
  <div class="myBusiness-outer">
    <div class="business-box first-review">
      <div class="box-header">
        业务名称
        <span class="service-status first">待初审</span>
      </div>
      <div class="box-line">
        车辆号码
      </div>
      <div class="box-line">
        受理时间
      </div>
    </div>
    <div class="business-box second-review">
      <div class="box-header">
        业务名称
        <span class="service-status second">待初审</span>
      </div>
      <div class="box-line">
        车辆号码
      </div>
      <div class="box-line">
        受理时间
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .myBusiness-outer {
    .business-box {
      margin-bottom: 40px;
      background-color: #fff;
      &.first-review {
        border-left: 6px solid #ff7e00;
       }
      &.second-review {
        border-left: 6px solid #ffbe00;
       }
      &.reviewed {
        border-left: 6px solid #09bb07;
       }
       .box-header {
         padding:20px 30px 20px 40px;
         .service-status {
           float:right;
           font-size: 0.9rem;
           &.first {
              color:#ff7e00;
            }
           &.second {
              color:#ffbe00;
            }
           &.over{
              color:#09bb07;
            }
         }
       }
       .box-line {
         padding-left: 60px;
         font-size: 0.9rem;
         color:#666;
         height: 80px;
         line-height: 80px;
       }
    }
  }
</style>
