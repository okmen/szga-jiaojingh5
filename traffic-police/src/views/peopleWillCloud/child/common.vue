<template>
<div class="common-outer">
  <div class="common-form">
    <ul class="common-form-list padding-right-43">
      <li class="common-form-item clear">
        <div class="common-list-name">
          <span>详细地址</span>
        </div>
        <div class="common-list-text left width-90">
          <input class="text-input" type="text" name="" value="" placeholder="点击右侧按钮选择地址">
        </div>
        <div class="common-list-location right" @click.stop='getLocation()'></div>
      </li>
      <li class="common-form-item">
        <div class="common-list-name">
          <span>发现人姓名</span>
        </div>
        <div class="common-list-text">
          <input class="text-input" type="text" name="" value="杨明畅" readonly>
        </div>
      </li>
      <li class="common-form-item">
        <div class="common-list-name">
          <span>发现人手机</span>
        </div>
        <div class="common-list-text">
          <input class="text-input" type="text" name="" value="13600000000" readonly>
        </div>
      </li>
      <li class="common-form-item">
        <div class="common-list-name">
          <span>紧急程度</span>
        </div>
        <div class="common-list-radio">
          <div class="common-list-radio-box">
            <input type="radio" id="common-radio1" name="urgencyLevel" class='checked' value="紧急">
            <label for="common-radio1">紧急</label>
          </div>
          <div class="common-list-radio-box">
            <input type="radio" id="common-radio2" name="urgencyLevel" class='checked' value="普通">
            <label for="common-radio2">普通</label>
          </div>
        </div>
      </li>
      <li class="common-form-item">
        <div class="common-list-name">
          <span>类型选择</span>
        </div>
        <div class="div-select">
          <span id="btnTypeSelect" class="btn-select hidden" @click.stop="btnTypeSelect()">{{typeSelectData.str}}</span>
          <div class="div-select-ul top-56" v-if="typeSelectShow">
            <ul>
              <li class="ellipsis" v-for="(item, index) in typeData" @click.stop="btnTypeSelect(index+1)">{{item.str}}</li>
            </ul>
          </div>
        </div>
      </li>
      <li class="common-form-item margin-top-13">
        <div class="common-list-name">
          <span>子类型选择</span>
        </div>
        <div class="div-select">
          <span id="btnTypeSelect" class="btn-select hidden" @click.stop="btnSubTypeSelect()">{{subTypeSelectData}}</span>
          <div class="div-select-ul top-56" v-if="subTypeSelectShow">
            <ul>
              <li class="ellipsis" v-for="(item, index) in subTypeData" @click.stop="btnSubTypeSelect(index+1)">{{item}}</li>
            </ul>
          </div>
        </div>
      </li>
      <li class="common-form-item margin-top-13">
        <div class="common-list-name">
          <span>现场描述</span>
        </div>
        <div class="common-list-text">
          <textarea class="text-input textarea" name="localeDescript" id="localeDescript" placeholder="简要对现场进行描述"></textarea>
        </div>
      </li>
      <div class="common-upload">
        <p>请上传现场照片</p>
        <div class="common-upload-inner">
          <em></em>
        </div>
      </div>
    </ul>
    <button class="btn" type="button" name="button">提交</button>
  </div>
</div>
</template>
<script>
export default{
  name: 'common',
  props: ['typeData'],
  data () {
    return {
      typeSelectShow: false,
      subTypeSelectShow: false,
      typeSelectData: this.typeData[this.typeIndex],
      typeIndex: 0,
      subTypeIndex: 0
    }
  },
  methods: {
    getLocation: function () {
      console.log('获取位置')
    },
    btnTypeSelect: function (index) {
      if (index && index !== this.typeIndex + 1) {
        index--
        this.typeIndex = index
        this.subTypeIndex = 0
        this.typeSelectData = this.typeData[this.typeIndex]
        this.subTypeData = this.typeSelectData.subTypeData
        this.subTypeSelectData = this.subTypeData[this.subTypeIndex]
      }
      this.subTypeSelectShow = false
      if (this.typeSelectShow === true) {
        this.typeSelectShow = false
      } else {
        this.typeSelectShow = true
      }
    },
    btnSubTypeSelect: function (index) {
      if (index && index !== this.subTypeIndex + 1) {
        index--
        this.subTypeIndex = index
        this.subTypeSelectData = this.subTypeData[this.subTypeIndex]
      }
      this.typeSelectShow = false
      if (this.subTypeSelectShow === true) {
        this.subTypeSelectShow = false
      } else {
        this.subTypeSelectShow = true
      }
    }
  },
  created () {
    document.addEventListener('click', (e) => {
      this.typeSelectShow = false
      this.subTypeSelectShow = false
    })
    this.typeSelectData = this.typeData[this.typeIndex]
    this.subTypeSelectData = this.typeData[this.typeIndex].subTypeData[this.subTypeIndex]
    this.subTypeData = this.typeSelectData.subTypeData
  }
}
</script>
<style lang='less'>
.common-outer{
  .width-90{
    width: 90%;
  }
  .top-56{
    top: 56px !important;
  }
  .padding-right-43{
    padding-right: 43px;
  }
  .margin-top-13{
    margin-top: 13px !important;
  }
  .common-form-list{
    overflow: hidden;
    .hidden{
      height: 58px;
      padding-right: 45px;
      box-sizing: border-box;
      overflow: hidden;
    }
    .common-form-item{
      margin-top: 24px;
      padding-left: 140px;
      position: relative;
      line-height: 56px;
      .common-list-name{
        width: 140px;
        position: absolute;
        left: 0;
      }
      .common-list-radio{
        width: 100%;
        display: flex;
        align-items: center;
        .common-list-radio-box{
          margin-right: 50px;
        }
      }
      .common-list-location{
        width: 32px;
        height: 56px;
        padding: 5px 0;
        box-sizing: border-box;
        background: url('../../../images/location.png') right no-repeat;
        background-size: contain;
      }
      .textarea{
        height: 183px;
        resize: none;
      }
    }
  }
  .common-upload{
    line-height: 56px;
    .common-upload-inner{
      width: 190px;
      height: 190px;
      background-color: #efeff4;
      border: 2px solid #dddde1;
      border-radius: 15px;
      text-align: center;
      em{
        display: inline-block;
        width: 162px;
        height: 111px;
        margin-top: 40px;
        background-image: url('../../../images/upload.png');
        background-size: cover;
      }
    }
  }
}
</style>