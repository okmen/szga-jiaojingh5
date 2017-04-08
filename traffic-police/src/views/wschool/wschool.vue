<template>
	<div class="navv">
		<ul class="nav-outer">
			<li class="nav-outer-center"><router-link to="xstudy"><p>消分积分</p></router-link></li>
			<li class="nav-outer-center"><router-link to="mstudy"><p>满分学习</p></router-link></li>
			<li class="nav-outer-center"><router-link to="xstudy"><p>AB类驾驶人学习</p></router-link></li>
			<li class="nav-outer-center"><router-link to="motorstudy"><p>电动车学习</p></router-link></li>
			<li class="nav-outer-center"><router-link to="xstudy"><p>行人、非机动车安全学习</p><em class="nav-outer-right"></em></router-link></li>
		</ul>
	</div>
</template>
<script>
export default {
  name: 'wschool'
}
</script>
<style lang="less">
@import "./../../style/base";
	.nav-outer{
		width: 100%;
	}
	.nav-outer-center{
		width: 100%;
		line-height: 90px;
		font-size: 26px;
		border-bottom: 1px solid #dbdbdb;
		background:url('../../images/space.png') no-repeat;
		background-position:96% center;
	}
	.nav-outer-center p{
		margin-left: 46px;
	}
</style>
