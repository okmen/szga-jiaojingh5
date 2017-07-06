// 添加URL需注释 哪个模块哪个接口
const commonUrl = 'http://testjava.chudaokeji.com/' // 测试环境
// const commonUrl = 'https://szjjapi.stc.gov.cn/' // 正式环境d
// const commonUrl = 'http://szjj.u-road.com/api/' // 正式环境d

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

export const getClaimConfirm = `${commonUrl}illegalHanding/illegalOnlineConfirm.html` // 在线确认-获取违章列表

export const claimConfirm = `${commonUrl}illegalHanding/trafficIllegalClaim.html` // 打单确认

// export const LawlessBusiness = `${commonUrl}illegalHanding/illegalBusinessListQuery.html` // 违法业务列表

export const updatePwd = `${commonUrl}user/updatePwd.html` // 修改密码接口

export const updateMobile = `${commonUrl}user/updateMobile.html` // 修改手机号码接口

export const addVehicle = `${commonUrl}user/addVehicle.html` // 添加车辆接口

export const updateUser = `${commonUrl}user/updateUser.html` // 修改个人资料接口

export const login = `${commonUrl}user/login.html` // 登录接口

export const bindCar = `${commonUrl}user/search/getBndTheVehicles.html` // 个人中心-绑定车辆接口

export const bindCard = `${commonUrl}user/search/getMyDriverLicense.html` // 个人中心-驾驶证接口

export const bindBusiness = `${commonUrl}user/search/getMyBusiness.html` // 个人中心-业务查询

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

export const illegalAppeal = `${commonUrl}illegalHanding/trafficIllegalAppeal.html` // 违法申诉接口

export const userAgreement = `${commonUrl}user/getDocumentationORMByNoticeKey.html` // 用户须知接口

export const earlyQuery = `${commonUrl}illegalHanding/toQuerySubscribe.html` // 违法预约查询接口

export const earlyCancel = `${commonUrl}illegalHanding/toCancelSubscribe.html ` // 违法预约取消接口

export const resetPwd = `${commonUrl}user/resetPwd.html` // 忘记密码接口

export const processingPoint = `${commonUrl}illegalHanding/getIllegalProcessingPoint.html` // 违法预约时间选择处理点接口

export const subscribeSorts = `${commonUrl}illegalHanding/toGetSubscribeSorts.html` // 违法预约时间选择列表接口

export const changeSubscribe = `${commonUrl}illegalHanding/toChangeSubscribe.html` // 违法预约时间选择接口

export const getElectronicPolicy = `${commonUrl}user/getElectronicPolicy.html` // 获取电子保单接口

export const getTheChoiceOfIllegalActivities = `${commonUrl}user/getTheChoiceOfIllegalActivities.html?keyword=机动车` // 获取机动车违法行为

export const getDOC = `${commonUrl}convenience/getAllResourcesAbsoluteUrl.html` // 获取民意云doc文档信息

export const takePicturesQuery = `${commonUrl}user/search/queryResultOfReadilyShoot.html` // 随手拍举报查询接口

export const DriverCardVerify = `${commonUrl}user/bindDriverLicense.html` // 驾驶证认证（无绑定驾驶证）

export const illegalParkingAvoidFine = `${commonUrl}illegalHanding/illegalParkingAvoidFine.html` // 违停免罚接口

export const addSafeAccidentCredit = `${commonUrl}user/addSafeAccidentCredit.html` // 驾驶人安全事故信用表

export const submitApplicationForDriverInformation = `${commonUrl}user/proofOfInformationDocuments/submitApplicationForDriverInformation.html` // 驾驶人信用单

export const addNoneCarCertification = `${commonUrl}user/addNoneCarCertification.html` // 驾驶人安全事故信用表

export const submitApplicationForMotorVehicleInformation = `${commonUrl}user/proofOfInformationDocuments/submitApplicationForMotorVehicleInformation.html` // 机动车信息单

export const noPwdLogin = `${commonUrl}user/getLoginInfoByLoginName.html` // 免密登录

export const sendSMSVerificatioCode = `${commonUrl}activity/sendSMSVerificatioCode.html`  // 东部预约验证码

export const getNormalApptDistrictAndTime = `${commonUrl}activity/getNormalApptDistrictAndTime.html`  // 东部预约获取预约场次及配额信息

export const addNormalApptInfo = `${commonUrl}activity/addNormalApptInfo.html`  // 东部预约个人预约信息写入

export const getApptHistoryRecord = `${commonUrl}activity/getApptHistoryRecord.html`  // 东部预约查询个人预约信息

export const cancelNormalApptInfo = `${commonUrl}activity/cancelNormalApptInfo.html`  // 东部预约取消预约

export const getTempApptDistrictAndTime = `${commonUrl}activity/getTempApptDistrictAndTime.html`  // 临时预约场次及配额信息

export const addTempApptInfo = `${commonUrl}activity/addTempApptInfo.html`  // 临时预约个人预约信息写入

export const degradeCard = `${commonUrl}user/driverLicenseVoluntaryDemotion.html` // 驾驶证自愿降级

export const changeConnect = `${commonUrl}user/driverChangeContact.html` // 驾驶人联系方式变更

export const intoCard = `${commonUrl}user/driverLicenseInto.html` // 驾驶证转入

export const annualExaminations = `${commonUrl}user/driverLicenseAnnualVerification.html` // 驾驶证年审

export const changeDelay = `${commonUrl}user/renewalDriverLicense.html` // 驾驶证延期换证

export const cardRepair = `${commonUrl}user/repairDriverLicense.html` // 驾驶证补证

export const cardReplace = `${commonUrl}user/replaceDriverLicense.html` // 驾驶证换证

export const getIssuing = `${commonUrl}user/getIssuingLicenceAuthorityArray.html` // 发证地列表

export const getFileNumber = `${commonUrl}user/search/getMyDriverLicense.html` // 查询档案号

export const trafficQuery = `${commonUrl}user/trafficQuery.html` // 查询实时路况list

export const detailsTrafficQuery = `${commonUrl}user/detailsTrafficQuery.html` // 查询单条实时路况

export const unbindVehicle = `${commonUrl}user/unbindVehicle.html` // 车主解绑车辆

export const unbindTheOtherDriverUseMyCar = `${commonUrl}user/unbindTheOtherDriverUseMyCar.html` // 车主解绑其他车辆使用人

export const verificatioCode = `${commonUrl}user/verificatioCode.html.html` // 验证码校验接口

