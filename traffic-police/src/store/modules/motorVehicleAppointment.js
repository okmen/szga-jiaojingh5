/**
 * Created by Administrator on 2017/7/18.
 */
/* 机动车预约类 */
const motorVehicleAppointment = {
  state: {
    responseData: ''
  },
  mutations: {
    saveResponseData (state, data) {
      state.responseData = data
    }
  },
  getters: {
    getResponseData (state) {
      return state.responseData
    }
  }
}

export default motorVehicleAppointment
