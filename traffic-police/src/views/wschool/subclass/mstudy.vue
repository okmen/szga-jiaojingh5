<template>
	<div class="navv">
		<div class="nav-mstudy">
			<div class="nav-top">
			</div>
			<span class="nav-top-bottom">刘小明</span>
		</div>
			<ul class="nav-mstudy-cengter">
				<li class="nav-mstudy-left"><span>驾驶证号</span><em class="nav-mstudy-right">441571189210212120</em></li>
				<li class="nav-mstudy-left"><span>记分周期(始)</span><em class="nav-mstudy-right">201-5-4</em></li>
				<li class="nav-mstudy-left"><span>记分周期(末)</span><em class="nav-mstudy-right">2</em></li>
				<li class="nav-mstudy-left"><span>学习积分数</span></li>
			</ul>
				<button class="nav-mstudy-button">开始学习</button>
			<a class="nav-xstudy-xst" href="#">学习须知</a>
	</div> 
</template>
<script>
export default {
}
</script>
<style lang="less">
@import "./../../../style/base";
	.navv{width: 100%;overflow: hidden;}
	.nav-mstudy{
		background: url('../../../images/xstudyBackground.png');
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
	.nav-mstudy .nav-top-bottom{
		position: absolute;
		left: 45%;
		top: 70%;
		color: #fff;
		font-size: 30px;
	}
	.nav-mstudy-cengter{
		overflow: hidden;
	}
	.nav-mstudy-left{
		width: 100%;
		line-height: 108px;
		font-size: 26px;
		border-bottom: 1px solid #ddd;
	}
	.nav-mstudy-left span{
		margin-left: 46px;
	}
	.nav-mstudy-button{
		width:650px;
		line-height: 80px;
		color: #fff;
		font-size: 30px;
		background-color: #09bb07;
		border-radius: 8px;
		margin:48px 50px 12px;
	}
	.nav-mstudy-xst{
		margin-left: 26px;
		color: #3da8e8;
		font-size: 26px;
		text-decoration:underline;
	}
	.nav-mstudy-right{
		float: right;
		margin-right: 48px;
		font-style:normal;
	}
</style>