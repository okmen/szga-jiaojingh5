<template>
  <div class="jam-outer">
    <div class="jam-form">
      <ul class="jam-form-list padding-right-43">
        <li class="jam-form-item clear">
          <div class="jam-list-name">
            <span>地点</span>
          </div>
          <div class="jam-list-text left width-90">
            <input class="text-input" type="text" name="" value="" placeholder="点击右侧按钮选择地址">
          </div>
          <div class="jam-list-location right" @click.stop='getLocation()'></div>
        </li>
        <li class="jam-form-item">
          <div class="jam-list-name">
            <span>开始时间</span>
          </div>
          <div class="jam-list-text">
            <input class="text-input" type="text" name="" value="" placeholder="00:00">
          </div>
        </li>
        <li class="jam-form-item">
          <div class="jam-list-name">
            <span>结束时间</span>
          </div>
          <div class="jam-list-text">
            <input class="text-input" type="text" name="" value="" placeholder="00:00">
          </div>
        </li>
        <li class="jam-form-item">
          <div class="jam-list-name">
            <span>方向</span>
          </div>
          <div class="jam-list-text">
            <input class="text-input" type="text" name="" value="东">
          </div>
        </li>
        <li class="jam-form-item">
          <div class="jam-list-name">
            <span>拥堵类型</span>
          </div>
          <div class="div-select">
            <span id="btnJamTypeSelect" class="btn-select" @click.stop="btnJamTypeSelect()">{{jamTypeSelect}}</span>
            <div class="div-select-ul top-56" v-if="jamTypeSelectShow">
              <ul>
                <li v-for="item in jamType" @click.stop="btnJamTypeSelect(item)">{{item}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="jam-form-item">
          <div class="jam-list-name">
            <span>拥堵等级</span>
          </div>
          <div class="div-select">
            <span id="btnJamRangeSelect" class="btn-select" @click.stop="btnJamRangeSelect()">{{jamRangeSelect}}</span>
            <div class="div-select-ul top-56" v-if="jamRangeSelectShow">
              <ul>
                <li v-for="item in jamRange" @click.stop="btnJamRangeSelect(item)">{{item}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="jam-form-item">
          <div class="jam-list-name">
            <span>道路服务水平</span>
          </div>
          <div class="jam-list-text">
            <input class="text-input" type="text" name="" value="排队起终点">
          </div>
        </li>
        <li class="jam-form-item">
          <div class="jam-list-name">
            <span>拥堵成因</span>
          </div>
          <div class="jam-list-text">
            <input class="text-input" type="text" name="" value="车流过饱和">
          </div>
        </li>
        <li class="jam-form-item">
          <div class="jam-list-name">
            <span>改善建议</span>
          </div>
          <div class="common-list-text">
            <textarea class="text-input textarea" name="localeDescript" id="localeDescript" placeholder="请填写改善建议"></textarea>
          </div>
        </li>
      </ul>
      <button class="btn" type="button" name="button">提交</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'jam',
  data () {
    return {
      jamType: ['偶发性拥堵', '常态化拥堵'],
      jamTypeSelect: '偶发性拥堵',
      jamTypeSelectShow: false,
      jamRange: ['缓行', '较拥堵', '拥堵'],
      jamRangeSelect: '缓行',
      jamRangeSelectShow: false
    }
  },
  methods: {
    getLocation: function () {
      console.log('获取地理位置')
    },
    btnJamTypeSelect: function (str) {
      if (str) {
        this.jamTypeSelect = str
      }
      this.jamRangeSelectShow = false
      if (this.jamTypeSelectShow === true) {
        this.jamTypeSelectShow = false
      } else {
        this.jamTypeSelectShow = true
      }
    },
    btnJamRangeSelect: function (str) {
      if (str) {
        this.jamRangeSelect = str
      }
      this.jamTypeSelectShow = false
      if (this.jamRangeSelectShow === true) {
        this.jamRangeSelectShow = false
      } else {
        this.jamRangeSelectShow = true
      }
    }
  },
  created () {
    document.addEventListener('click', (e) => {
      this.jamTypeSelectShow = false
      this.jamRangeSelectShow = false
    })
  }
}
</script>

<style lang='less'>
  .jam-outer{
    .width-90{
      width: 90%;
    }
    .padding-right-43{
      padding-right: 43px;
    }
    .jam-form-list{
      overflow: hidden;
      .jam-form-item{
        margin-top: 24px;
        padding-left: 162px;
        position: relative;
        line-height: 56px;
        .jam-list-name{
          position: absolute;
          left: 0;
        }
        .jam-list-location{
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
  }
</style>