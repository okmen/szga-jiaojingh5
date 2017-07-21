/**
 * Created by Administrator on 2017/7/18.
 */
/* 机动车预约类 */
const motorVehicleAppointment = {
  state: {
    modelOfCar: '', // 车辆型号
    credentialsName: '', // 证件类型
    businessTypeId: '', // 业务类型
    carSelectData: '',  // 车辆类型
    pointerType: '' // 指标类型
  },
  mutations: {
    saveModelOfCar (state, data) {
      state.modelOfCar = data
    },
    saveCarSelectData (state, data) {
      state.carSelectData = data
    },
    saveCredentialsName (state, data) {
      state.carSelectData = data
    },
    savePointerType (state, data) {
      state.pointerType = data
    }
  },
  getters: {
    getModelOfCar (state) {
      return {
        'title': '车辆型号',
        'option': state.modelOfCar
      }
    },
    getCarSelectData (state) {
      let option = []
      state.carSelectData.map(item => {
        option.push({'str': item.name, 'id': item.id})
      })
      return {
        'title': '车辆类型',
        'option': option
      }
    },
    getCredentialsName (state) {
      let option = []
      state.credentialsName.map(item => {
        option.push({'str': item.name, 'id': item.id})
      })
      return {
        'title': '证件名称',
        'option': option
      }
    },
    getPointerType (state) {
      let option = []
      state.pointerType.map(item => {
        option.push({'str': item.name, 'id': item.id})
      })
      return {
        'title': '指标类型',
        'option': option
      }
    }
  }
}

export default motorVehicleAppointment
