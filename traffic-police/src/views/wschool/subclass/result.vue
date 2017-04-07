<template>
	<div class="result">
		<div class="result-head">
			<span class="digit">8</span>
			<p class="result-head-bottom">驾驶证号： 4403011992002101119</p>
		</div>
		<div class="result-cen">
			<dl class="result-center">
				<dt class="result-center-colour tian">10</dt>
				<dd class="result-center-colo">答题数</dd>
			</dl>
			<img class="result-xian" src="../../../images/xian.png">
			<dl class="result-center">
				<dt class="result-center-colour">0</dt>
				<dd class="result-center-colo">答错次数</dd>
			</dl>
		</div>
		<router-link class="result-bottom" to="wschool">返回</router-link>
	</div>
</template>
<script>
	export default{
}
</script>
<style lang="less">
	.result{
		overflow:hidden;
	}
	.result-head{
		width: 100%;
		height: 468px;
		background: url("../../../images/score.png");
		background-size: 100%;
		overflow: hidden;
		position: relative;
	}
	.digit{
		font:700 74px/74px "";
		position: absolute;
		left: 348px;
		top: 206px;
	}
	.result .result-head-bottom{
		font-size: 26px;	
		color: #fff;
		text-align: center;
		margin-top: 400px;
		background: url("../../../images/idte.png") no-repeat;
		background-size: 40px;
		background-position:100px 0px;
	}
	.result-center{
		float: left;
		width: 49%;
		text-align: center;
	}
	.result-xian{
		float: left;
	}
	.result-cen{
		overflow: hidden;
		margin-top: 40px;
	}
	.result-bottom{
		display: block;
		width: 644px;
		margin:60px auto;
		text-align: center;
		line-height: 80px;
		font-size: 30px;
		color: #fff;
		background: #2696dd;
		border-radius: 10px;
	}
	.result-center-colo{
		font-size: 30px;
		line-height: 60px;
	}
	.result-center-colour{
		color: #ff3939;
		font-size: 70px;
		line-height: 140px;	
	}
	.tian{
		color: #4ebfe9;
	}
</style>