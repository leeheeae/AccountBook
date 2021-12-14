<template>
	<div class="inputForm">
		<div>
			<h4>아이디</h4>
			<input type="text" placeholder="아이디를 입력해주세요" />
		</div>
		<template v-if="this.$route.path === '/join'">
			<div>
				<h4>이름</h4>
				<input type="text" placeholder="이름을 입력해주세요" />
			</div>
			<div>
				<h4>이메일</h4>
				<input type="email" placeholder="이메일을 입력해주세요" />
			</div>
		</template>
		<div>
			<h4>비밀번호</h4>
			<input type="text" placeholder="비밀번호를 입력해주세요" />
		</div>
		<auth-btn :pathName="routePath"></auth-btn>
		<div class="toJoin">
			아이디가 없으신가요?
			<router-link :to="'/' + routePath"> {{ routeName }} </router-link>
		</div>
	</div>
</template>

<script>
	import AuthBtn from './authBtn.vue';
	export default {
		data() {
			return {
				routePath: this.$route.path === '/login' ? 'join' : 'login',
				routeName:
					this.$route.path === '/login' ? '회원가입' : '로그인',
			};
		},
		components: {
			AuthBtn,
		},
		created() {
			// routePathCheck: {
			// 	if (this.$route.path === '/login') {
			// 		return (this.pathName = '로그인');
			// 	} else if (this.$route.path === '/join') {
			// 		return (this.pathName = '회원가입');
			// 	}
			// }
		},
	};
</script>

<style scoped>
	.inputForm h4 {
		font-size: 16px;
		margin-bottom: 2px;
	}
	.inputForm input {
		border: 1px solid #ccc;
		width: 100%;
		padding: 12px 0 12px 10px;
	}
	.inputForm > div {
		margin-bottom: 20px;
	}

	.toJoin {
		margin-top: 16px;
		font-size: 15px;
		font-weight: 400;
	}
	.toJoin a {
		font-weight: 600;
		text-decoration: underline;
		margin-left: 6px;
	}
</style>
