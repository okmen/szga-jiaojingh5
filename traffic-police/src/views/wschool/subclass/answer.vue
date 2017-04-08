<template>
	<div class="answer">
		<div class="answer-head">
			<div class="answer-head-regit">
				<dl class="answer-head-rgt">
					<dt><img src="../../../images/mistake.png"></dt>
					<dd>已做0题</dd>
				</dl>
				<dl class="answer-head-rgt">
					<dt><img src="../../../images/time.png"></dt>
					<dd>剩余0题</dd>
				</dl>
				<dl class="answer-head-rgt">
					<dt><img src="../../../images/sand.png"></dt>
					<dd>00:30</dd>
				</dl>
				<dl class="answer-head-rgt">
					<dt><img src="../../../images/exit.png"></dt>
					<dd>退出</dd>
				</dl>
			</div>
		</div>
		<div class="answer-center">
				<span class="answer-center-left">选</span>
				<span class="answer-center-right">这个标志是何含义？</span>
		</div>
		<img class="answer-button" src="../../../images/answertu.png">
		<ul class="answer-foot">
			<li class="answer-foot-button"><img class="answer-foot-img" src="../../../images/A.png">直行和向右转弯</li>
			<li><img class="answer-foot-img" src="../../../images/B.png">禁止直行和向左转弯</li>
			<li><img class="answer-foot-img" src="../../../images/C.png">只准向右和向左转弯</li>
			<li><img class="answer-foot-img" src="../../../images/D.png">直行和向右转弯</li>
		</ul>
		<router-link class="answer-option" to="grade">结束答题</router-link>
	</div>
</template>
<script>
export default {
}
</script>
<style lang="less">
@import "./../../../style/base";
	.answer-head{
		width: 100%;
		height: 116px;
		background-color: #cfd2d4;
		overflow: hidden;
	}
	.answer-head-regit{
		float: right;
		font-size: 16px;
	}
	.answer-head-regit .answer-head-rgt{
		width: 96px;
		height: 116px;
		float: left;
		text-align: center;
	}
	.answer-head-regit .answer-head-rgt dt img{
		margin-top: 16px;
	/*	width: 50%;*/
		height: 50px;
	}
	.answer-center-left{
		display:inline-block;
		width: 56px;
		height: 52px;
		background-color: #4c9ff4;
		text-align: center;
		border-radius: 8px;
		color: #fff;
		margin:22px 22px 0 32px;
	}
	.answer-center-right{
		font-size:24px;
	}
	.answer-button{
		display:block;
		width: 400px;
		height: 400px;
		margin:0 auto;
		vertical-align:middle;
		margin-top: 58px;

	}
	.answer-foot{
		width: 600px;
		margin:0 auto;
	}
	.answer-foot li{
		line-height: 60px;
		font-size:28px;
		margin-top: 20px;
	}
	.answer-foot-button{
		margin-top: 60px;
	}
	.answer-foot-img{
		display:inline-block;
		vertical-align:middle;
		width: 50px;
		height: 50px;
		margin-right:30px;
	}
	.answer-option{
		display: block;
		width: 430px;
		line-height: 80px;
		margin:54px auto;
		background: #4c9ff4;
		border-radius: 8px;
		color: #fff;
		font-size: 28px;
		text-align: center;

	}
</style>


