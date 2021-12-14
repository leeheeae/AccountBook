<template>
	<div class="loginForm">
		<h1 class="title"><span>가계부</span> 로그인</h1>
		<AuthForm />
	</div>
</template>

<script>
	import AuthForm from '../../components/auth/authForm.vue';
	export default {
		components: {
			AuthForm,
		},
	};
</script>

<style scoped>
	.loginForm {
		padding: 40px;
	}
	.title {
		font-size: 30px;
		font-weight: 700;
		margin-bottom: 20px;
	}
	.title span {
		color: mediumpurple;
	}
	.loginForm h4 {
		font-size: 16px;
		margin-bottom: 2px;
	}
	.loginForm input {
		border: 1px solid #ccc;
		width: 100%;
		padding: 12px 0 12px 10px;
	}
	.loginForm > div {
		margin-bottom: 20px;
	}
	.loginBtn {
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
	.loginBtn:disabled {
		background-color: #6e6975;
	}
	.loginBtn:enabled:hover {
		background-color: #7654b9;
	}
</style>
