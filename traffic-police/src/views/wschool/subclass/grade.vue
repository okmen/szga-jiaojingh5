<template>
	<div class="grade">
		<div class="grade-top">
			<img  src="../../../images/disqualification.png">
		</div>
		
		<p class="grade-head">本次学习通过，欢迎下次学习！</p>
		<ul class="grade-footer">
			<li class="grade-footer-center"><span>答题日期</span><em class="grade-footer-right">2017-6-4</em></li>
			<li class="grade-footer-center"><span>答题用时</span><em class="grade-footer-right">10:20</em></li>
			<li class="grade-footer-center"><span>答对题数</span><em class="grade-footer-right">1</em></li>
			<li class="grade-footer-center"><span>答错题数</span><em class="grade-footer-right">2</em></li>
		</ul>
		<router-link class="grade-footer-bottom" to="result">好的</router-link>
	</div>
</template>
<script>
export default {
}
</script>
<style lang="less">
@import "./../../../style/base";
	.grade-top{
		width: 440px;
		height:420px;
		margin: 40px auto;
	}
	.grade-top img{
		display: block;
		width: 440px;
		height:420px;
		background-size: 100%;
	}
	.grade-head{
		width: 500px;
		margin:0 auto;
		text-align: center;
		font-size: 28px;
		color: #000000;
		font:700 28px/48px "";
		margin-bottom: 60px;
	}
	.grade-footer{
		width: 80%;
		margin:0 auto;
	}
	.grade-footer-center{
		line-height: 80px;
	}
	.grade-footer-right{
		float: right;
		font-style:normal;
	}
	.grade-footer-bottom{
		display: block;
		width: 350px;
		margin:170px auto;
		line-height: 68px;
		background: #e6e6e6;
		border-radius: 8px;
		box-shadow: 4px 4px 4px 4px #7a7a7a;
		text-align: center;
	}
</style>