// 添加URL需注释 哪个模块哪个接口
const commonUrl = 'http://192.168.1.120:8100/'
// const uploadUrl = 'http://192.168.1.159:8080/web/'

export const xstudy = `${commonUrl}Classroom/StudyHomepages.html` // 学习页面接口

export const wschool = `${commonUrl}Classroom/homepages.html` // 列表接口

export const answer = `${commonUrl}Classroom/Studys.html` // 取题接口

export const grade = `${commonUrl}Classroom/anserEnds.html` // 成绩接口

export const answers = `${commonUrl}Classroom/ Answers.html` // 答题接口

export const facility = `${commonUrl}convenience/equipmentDamageReport.html` // 设备损坏通报接口

export const secure = `${commonUrl}convenience/safeHiddenDanger.html` // 安全隐患通报接口

export const jam = `${commonUrl}convenience/trafficCongestion.html` // 交通拥堵通报接口

export const order = `${commonUrl}convenience/sequenceChaos.html` // 秩序混乱通报接口

export const moveCar = `${commonUrl}convenience/oneKeyDodgen.html` // 一键挪车接口

export const queryLawlessByCar = `${commonUrl}illegalHanding/queryInfoByLicensePlateNo.html` // 违法查询（车牌号）

export const queryLawlessByCard = `${commonUrl}illegalHanding/queryInfoByDrivingLicenceNo.html` // 违法查询（驾驶证）

export const queryPay = `${commonUrl}illegalHanding/toQueryPunishmentPage.html` // 违法缴款

export const queryEarlyLawless = `${commonUrl}illegalHanding/toQuerySubscribe.html` // 违法预约查询

export const LawlessBusiness = `${commonUrl}illegalHanding/illegalBusinessListQuery.html` // 违法业务列表

export const updatePwd = `${commonUrl}user/updatePwd.html` // 修改密码接口

export const updateMobile = `${commonUrl}user/updateMobile.html` // 修改手机号码接口

export const addVehicle = `${commonUrl}user/addVehicle.html` // 添加车辆接口

export const updateUser = `${commonUrl}user/updateUser.html` // 修改个人资料接口

export const login = `${commonUrl}/user/login.html` // 登录接口

export const bindCar = `${commonUrl}user/search/getBndTheVehicles.html` // 个人中心-绑定车辆接口(暂使用后端本地地址)

export const bindCard = `${commonUrl}user/search/getMyDriverLicense.html` // 个人中心-驾驶证接口(暂使用后端本地地址)

export const bindBusiness = `${commonUrl}user/search/getMyBusiness.html` // 个人中心-业务查询(暂使用后端本地地址)

export const sendSMS = `${commonUrl}user/sendSMSVerificatioCode.html` // 发送验证码接口

export const deleteVehicle = `${commonUrl}user/deleteVehicle.htm.html` // 用戶中心解綁微信接口

export const uploadImg = `${commonUrl}common/getUpToken.html` // 上传图片获取uptoken接口

export const drivingCard = `${commonUrl}user/search/getDrivingLicense.html` // 获取电子行驶证

export const licenseCard = `${commonUrl}user/search/getElectronicDriverLicense.html` // 获取电子驾驶证

export const getLocation = 'http://navi1.careland.com.cn/cgi/pub_getpositioninfo_j.ums' // 通过经纬度获取附近的路接口

export const takePictures = `${commonUrl}user/readilyShoot.html` // 随手拍举报接口

export const carOwner = `${commonUrl}register/iAmTheOwner.html` // 星级用户认证 我是车主接口

export const drivingLicense = `${commonUrl}register/haveDriverLicenseNotCar.html` // 星级用户认证 我有驾驶证接口

export const passerBy = `${commonUrl}register/isPedestrianNotDriver.html` // 星级用户认证 我是行人接口

export const carUser = `${commonUrl}register/iamALongtimeUser.html` // 星级用户认证 我是长期使用人接口

export const getRoad = `${commonUrl}user/getPositioningAddress.html` // 获取路段地址 随手拍举报接口
