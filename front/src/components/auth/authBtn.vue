<template>
	<button class="authBtn" disabled>{{ pathName }}</button>
</template>

<script>
	export default {
		props: ['pathName'],
	};
</script>

<style scoped>
	.authBtn {
		width: 100%;
		height: 54px;
		text-align: left;
		padding: 12px;
		color: #fff;
		background-color: mediumpurple;
		border-radius: 3px;
		font-size: 16px;
		font-weight: 500;
		transition: 0.3s;
		cursor: pointer;
	}
	.authBtn:disabled {
		background-color: #6e6975;
	}
	.authBtn:enabled:hover {
		background-color: #7654b9;
	}
</style>
