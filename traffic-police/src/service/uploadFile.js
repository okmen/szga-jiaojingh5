/**
 * author: niepeng
 * data: 2017-4-25
 * description: H5实现图片压缩上传
 */

/* eslint-disable */
import { Indicator } from 'mint-ui';
const imgObj = {};

/**
 * [UploadFile 上传图片并压缩]
 * @type {Object}
 */
const UploadFile = {
	/**
	 * [upload description]
	 * @param  {[string]} options.id        [监听元素id]
	 * @param  {Number} options.maxHeight [最大压缩高度]
	 * @param  {Number} options.quality   [清晰度]
	 * @param  {[function]} options.callback  [回调]
	 * @return {[type]}                   [null]
	 */
	upload: function({id,maxHeight=768,quality=0.92,callback}){
		if(!id) return;
		let el = document.getElementById(id);
		let self = this;
		el.onchange = function(e){
			var file = this;
			var f = file.files[0];
			if(f){
				Indicator.open('上传中...');
				EXIF.getData(f, function() {
			        imgObj.dateTime = EXIF.getTag(this,'DateTime') || '';
			        imgObj.GPSLongitude = EXIF.getTag(this,'GPSLongitude') ? transLongAndLat(EXIF.getTag(this,'GPSLongitude')) : '';
			        imgObj.GPSLatitude = EXIF.getTag(this,'GPSLatitude') ? transLongAndLat(EXIF.getTag(this,'GPSLatitude')) : '' ;
			    });
				if (window.FileReader) {
					var fr = new FileReader();  
		            fr.onload = function(e) {  
		                var src = e.target.result;
		                self.compressImg(src,maxHeight,quality,callback);
		            }  
		            fr.readAsDataURL(f); 
			    } 
			}
		}
	},
	/**
	 * [compressImg description]
	 * @param  {[base64]}   src       [图片base64]
	 * @param  {[number]}   maxHeight [最大压缩高度]
	 * @param  {[number]}   quality   [清晰度]
	 * @param  {Function} callback  [回调]
	 * @return {[type]}             [description]
	 */
	compressImg: function(src,maxHeight,quality,callback){
		let img = document.createElement('img');
		img.src = src;
		img.onload = function(){
		    var canvas = document.createElement('canvas');
		    var context = canvas.getContext('2d');
		    if(img.height > maxHeight) {//按最大高度等比缩放
				img.width *= maxHeight / img.height; 
				img.height = maxHeight; 
			}
		    // canvas drawImage 参数
		    var sx = 0;
		    var sy = 0;
		    var sWidth = img.width;
		    var sHeight = img.height;
		    canvas.width = img.width;
		    canvas.height = img.height;

		    // canvas清屏
		    context.clearRect(0, 0, canvas.width, canvas.height);
		    context.drawImage(img, sx, sy, sWidth, sHeight);

		    var dataUrl = canvas.toDataURL('image/jpeg',quality);
		    imgObj.imgUrl = dataUrl;
		    callback && callback(imgObj);
		    Indicator.close();
		}
	}
};
/**
 * [转化经纬度信息 arr to string]
 * @param  {[Array]} arr [经纬度]
 * @return {[type]}     [description]
 */
function transLongAndLat(arr){
	if(Object.prototype.toString.call(arr) !== '[object Array]') return;
	let tempArr = [];
	arr.map((item,index) => {
		tempArr.push(item.numerator / item.denominator);
	})
	return tempArr.join(',');
}

export default UploadFile;
/* eslint-disable */
