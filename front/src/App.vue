<template>
	<div class="wrap">
		<TopHeader />
		<router-view />
	</div>
</template>
<script>
	import TopHeader from './components/TopHeader.vue';

	export default {
		components: {
			TopHeader,
		},
	};
</script>

<style>
	@import url(./assets/css/reset.css);
	#app {
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #ccc;
		background-color: #eee;
	}
	.wrap {
		width: 100%;
		height: 100%;
		max-width: 425px;
		max-height: 736px;
		margin: auto;
		background-color: #fff;
		box-shadow: 5px 10px 30px rgba(117, 117, 117, 0.1);
		overflow-y: auto;
	}
</style>
