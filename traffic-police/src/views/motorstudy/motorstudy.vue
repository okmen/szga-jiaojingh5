<template>
	<div class="navv">
		<div class="nav-motorstudy">
			<div class="nav-top">
			</div>
			<span class="nav-top-bottom">刘小明</span>
		</div>
			<ul class="nav-motorstudy-cengter">
				<li class="nav-motorstudy-left"><span>驾驶证号</span><em class="nav-motorstudy-right">441571189210212120</em></li>
				<li class="nav-motorstudy-left"><span>学习记录</span></li>
			</ul>
			<button class="nav-motorstudy-button">开始学习</button>
			<a class="nav-motorstudy-xst" href="#">学习须知</a>
	</div> 
</template>
<script>
export default {
}
</script>
<style lang="less">
@import "./../../style/base";
	.nav-motorstudy{
		background: url('../../images/xstudyBackground.png');
		height: 350px;
		position: relative;
		background-size:100% 100%;
	}
	.nav-top{
		width: 194px;
		height: 194px;
		background-color: #fff;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -87px;
		margin-top: -140px;
		
	}
	.nav-motorstudy .nav-top-bottom{
		position: absolute;
		left: 45%;
		top: 70%;
		color: #fff;
		font-size: 30px;
	}
	.nav-motorstudy-left{
		width: 100%;
		line-height: 108px;
		font-size: 26px;
		border-bottom: 1px solid #ddd;
	}
	.nav-motorstudy-left span{
		margin-left: 46px;
	}
	.nav-motorstudy-button{
		width:650px;
		margin:48px 50px 12px;
		line-height: 80px;
		color: #fff;
		font-size: 30px;
		background-color: #09bb07;
		border-radius: 8px;
	}
	.nav-motorstudy-xst{
		margin-left: 26px;
		color: #3da8e8;
		font-size: 26px;
		text-decoration:underline;
	}
	.nav-motorstudy-right{
		float: right;
		margin-right: 48px;
		font-style:normal;
	}
</style>

