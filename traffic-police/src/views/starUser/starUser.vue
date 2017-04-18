<template>
  <div class="starUser-outer">
    <div class="starUser-select pad-side-50">
      <p>请根据您的出行方式来选择服务认证类型</p>
      <div class="div-select">
        <span id="btnSelect" class="btn-select" @click.stop="typeSelectClick()">{{ typeSelectMassage.str }}</span>
        <div class="div-select-ul" v-if='typeSelectShow'>
          <ul>
            <li v-for="(item, index) in typeSelectData" @click.stop = "typeSelectClick(index+1)">
              <router-link class="link" :to="item.path">{{ item.str }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="starUser-from pad-side-50">
      <router-view></router-view>
    </div>
    <div class="starUser-upload pad-side-50">
      <p>请上传以下照片</p>
      <div class="starUser-upload-inner">
        <div class="starUser-upload-left starUser-upload-box">
          <em></em>
          <span>身份证(正面)</span>
        </div>
        <div class="starUser-upload-center starUser-upload-box">
          <em></em>
          <span>身份证(反面)</span>
        </div>
        <div class="starUser-upload-right starUser-upload-box">
          <em></em>
          <span>手持身份证</span>
        </div>
      </div>
      <button class="btn" type="button" name="button">确认提交</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'starUser',
  data () {
    return {
      curTab: 'carOwner',
      typeSelectShow: false,
      typeSelectData: [
        {
          'name': 'carOwner',
          'str': '我是车主',
          'path': '/starUser/carOwner'
        },
        {
          'name': 'carUser',
          'str': '我不是车主，我是车辆长期使用人',
          'path': '/starUser/carUser'
        },
        {
          'name': 'drivingLicense',
          'str': '我有驾驶证，但没固定车辆',
          'path': '/starUser/drivingLicense'
        },
        {
          'name': 'passerBy',
          'str': '我是行人，非机动车驾驶人',
          'path': '/starUser/passerBy'
        }
      ]
    }
  },
  methods: {
    typeSelectClick: function (index) {
      if (index) {
        index--
        this.typeSelectMassage = this.typeSelectData[index]
        this.curTab = this.typeSelectMassage.name
      }
      this.typeSelectShow = !this.typeSelectShow
    },
    select: function () {
      this.typeSelectShow = false
    }
  },
  created () {
    document.addEventListener('click', (e) => {
      this.typeSelectShow = false
    })
    switch (window.location.hash) {
      case '#/starUser/carOwner':
        this.typeSelectMassage = this.typeSelectData[0]
        break
      case '#/starUser/carUser':
        this.typeSelectMassage = this.typeSelectData[1]
        break
      case '#/starUser/drivingLicense':
        this.typeSelectMassage = this.typeSelectData[2]
        break
      case '#/starUser/passerBy':
        this.typeSelectMassage = this.typeSelectData[3]
        break
    }
  }
}
</script>
<style lang="less" >
.starUser-outer {
  font-size: 26px;
  color: #000;
  position: relative;

  .width-120 {
    width: 120px !important;
  }
  .width-70 {
    width: 70% !important;
  }
  .width-40{
    width: 40% !important;
  }
  .starUser-select {
    background-color: #fff;
    padding-bottom: 24px;
    position: relative;
    p {
      color: #666;
      line-height: 68px;
    }
    .link{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .starUser-from{
    background:#FFF;
    margin-top:10px;
  }
  .starUser-upload {
    background-color:#FFF;
    padding-bottom:50px;
    position: relative;
    .starUser-upload-inner {
      display: flex;
      justify-content: space-between;
      .starUser-upload-box {
        width: 190px;
        height: 190px;
        background-color: #efeff4;
        border: 2px solid #dddde1;
        border-radius: 15px;
        color: #666;
        font-size: 22px;
        text-align: center;
        em {
          display: inline-block;
          width: 162px;
          height: 111px;
          margin-top: 20px;
          margin-bottom: 10px;
        }
        span {
          display: block;
        }
      }
      .starUser-upload-left {
        em {
          background-image: url('../../images/ID-front.png');
          background-size: cover;
        }
      }
      .starUser-upload-center {
        em {
          background-image: url('../../images/ID-rear.png');
          background-size: cover;
        }
      }
      .starUser-upload-right {
        em {
          background-image: url('../../images/ID-hand.png');
          background-size: cover;
        }
      }
    }
    p {
      padding-bottom: 18px;
    }
  }
}
</style>
