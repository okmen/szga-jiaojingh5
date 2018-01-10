<template>
<div class="yet-binding-car">
  <navbar v-model="selected" class="navbar">
    <tab-item id="1">本人车辆</tab-item>
    <tab-item id="2">他人车辆</tab-item>
  </navbar>
  <tab-container v-model="selected">
    <tab-container-item id="1">
      <cell v-for="car in myCars" :title="car.numberPlateNumber" is-link @click.native="skipPage(car)" />
      <cell title="未绑定本人车辆" v-if="myCars.length <= 0 && showNo" />
    </tab-container-item>
    <tab-container-item id="2">
      <cell v-for="car in heCars" :title="car.numberPlateNumber" is-link @click.native="skipPage(car)"  />
      <cell title="未绑定他人车辆" v-if="heCars.length <= 0 && showNo" />
    </tab-container-item>
  </tab-container>
</div>
</template>

<script>
  import { Navbar, TabItem, TabContainer, TabContainerItem, Cell, Toast } from 'mint-ui'
  import { resultPost } from '../../../service/getData'
  import { bindCar } from '../../../config/baseUrl'
  export default {
    name: 'yet-binding-car',
    data () {
      return {
        selected: '1',
        myCars: [],
        heCars: [],
        showNo: false
      }
    },
    components: {
      Navbar, TabItem, TabContainer, TabContainerItem, Cell
    },
    created () {
      resultPost(bindCar, {identityCard: window.localStorage.getItem('identityCard'), mobilephone: window.localStorage.getItem('mobilePhone')}).then(data => {
        if (data.code === '0000') {
          this.showNo = true
          data.data.map(car => {
            if (car.isMyself === '本人') {
              this.myCars.push(car)
            } else {
              this.heCars.push(car)
            }
          })
        } else {
          Toast({
            message: data.msg,
            position: 'bottom',
            duration: 2000
          })
        }
      })
    },
    methods: {
      skipPage (car) {
        this.$router.push({path: '/carDetail', query: car})
      }
    }
  }
</script>

<style lang="less">
  .yet-binding-car{
    .mint-tab-item-label{
      font-size: 30px;
    }
  }
</style>
<style scoped lang="less">
.yet-binding-car{
  .navbar{
    margin-bottom: 20px;
  }
}
</style>
