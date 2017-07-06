/**
 * Created by Administrator on 2017/7/5.
 */
/* eslint-disable */
// 检测手机号码
const isPhone = function (str) {
  var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
}

//检测全部为中文汉字
const isChinese = function (str) {
  var reg = /^[\u4E00-\u9FA5]+$/
  if (reg.test(str)) {
    return true
  } else {
    return false
  }
}
export {isPhone, isChinese}