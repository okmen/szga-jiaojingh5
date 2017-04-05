<template>
	<div class="navv">
		<ul class="nav-outer">
			<li class="nav-outer-center"><router-link to="/xstudy"><span>消分积分</span></router-link></li>
			<li class="nav-outer-center"><router-link to="/mstudy"><span>满分学习</span></router-link></li>
			<li class="nav-outer-center"><router-link to="/xstudy"><span>AB类驾驶人学习</span></router-link></li>
			<li class="nav-outer-center"><router-link to="/motorstudy"><span>电动车学习</span></router-link></li>
			<li class="nav-outer-center"><router-link to="/xstudy"><span>行人、非机动车安全学习</span><em class="nav-outer-right"></em></router-link></li>
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
	.nav-outer-center span{
		margin-left: 46px;
	}
</style>
