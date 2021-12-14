<template>
	<div class="joinForm">
		<h1 class="title"><span>가계부</span> 회원가입</h1>
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
	.joinForm {
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
</style>
